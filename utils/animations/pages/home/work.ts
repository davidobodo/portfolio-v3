import gsap from "gsap";
import { TTimelineAction } from "#/types";
import { animateFaintSvg, executeTimelineActions } from "#/utils";

class WorkSectionAnimations {
	constructor() {
		this.desktopAnimation = this.desktopAnimation.bind(this);
		this.mobileAnimation = this.mobileAnimation.bind(this);
	}
	//-----------------------------------------------------------
	// GROUP DESKTOP TIMELINE ANIMATIONS
	//-----------------------------------------------------------
	private createDesktopAnimationTimeline({
		titles,
		details,
		titleBg,
	}: {
		titleBg: HTMLLIElement;
		titles: HTMLCollection;
		details: HTMLCollection;
	}) {
		const DESKTOP_TITLE_HEIGHT = 72;
		let timelineActions: Array<TTimelineAction> = [];

		// CREATE TIMELINE ACTIONS
		for (let i = 0; i < details.length; i++) {
			const target = details[i];

			// Move the background gradient
			timelineActions.push({
				target: titleBg as Element,
				vars: { y: i * DESKTOP_TITLE_HEIGHT },
				options: i === 0 ? " " : "<",
			});

			if (i !== 0) {
				// Decrease details opacity
				timelineActions.push({
					target,
					vars: { opacity: 0 },
					options: ">-25%", // start at 25% towards the end of the previous animation
				});
			}

			timelineActions.push({ target: titles[i + 1], vars: { opacity: 1 } }); //Increase title opacity
			timelineActions.push({
				target,
				vars: { opacity: 1, zIndex: 1 },
				options: "<",
			}); // Increase details opacity
			timelineActions.push({ target, vars: { y: 0 }, options: "<" }); // Translate details to their normal position
			timelineActions.push({ isLabel: true, label: `section-${i + 1}-visible` });

			// Dont decrease opacity for the last item
			if (i !== details.length - 1) {
				timelineActions.push({ target: titles[i + 1], vars: { opacity: 0.1 } }); // Decrease title opacity
				timelineActions.push({
					target,
					// vars: { opacity: 0, visibility: "hidden" },
					vars: { opacity: 0, zIndex: -1 },
					options: ">-25%", // start at 25% towards the end of the previous animation
				}); // Decrease details opacity
			}
		}

		return timelineActions;
	}

	//-----------------------------------------------------------
	// GROUP MOBILE TIMELINE ANIMATIONS
	//-----------------------------------------------------------
	private createMobileAnimationTimeline({
		titles,
		details,
		titlesContainer,
	}: {
		titles: HTMLLIElement[];
		details: HTMLCollection;
		titlesContainer: HTMLUListElement;
	}) {
		const posDic: Record<string, string | number> = {};

		for (let k = 0; k < titles.length; k++) {
			posDic[k] = titles[k].offsetLeft;
		}

		let timelineActions: TTimelineAction[] = [];

		//Create the animation for the timeline
		for (let i = 0; i < details.length; i++) {
			const target = details[i];
			const topTarget = titles[i];

			//Increase bottom opacity
			timelineActions.push({ target: topTarget, vars: { opacity: 1 }, label: "increase opacity" });

			if (i !== 0) {
				timelineActions.push({
					target: titlesContainer,
					vars: { left: -posDic[i] + 20 },
				});
				// Dont need to increase the first items opacity since its already visible
			}
			timelineActions.push({ target, vars: { opacity: 1, zIndex: 1 } });
			timelineActions.push({ isLabel: true, label: `section-${i + 1}-visible` });

			//Decrease bottom opacity
			if (i !== details.length - 1) {
				timelineActions.push({ target: topTarget, vars: { opacity: 0.2 } });
				//Dont need to decrease the last items opacity so its still visible in the DOM when we scroll out
				timelineActions.push({ target, vars: { opacity: 0 } });
			}
		}

		return timelineActions;
	}

	//-----------------------------------------------------------
	// MAIN DESKTOP TIMELINE
	//-----------------------------------------------------------
	desktopAnimation({
		faintBgTitle,
		radialGradient,
		container,
		tabsWrapper,
		titleBg,
		titles,
		details,
		windowInnerWidth,
		noise,
	}: {
		faintBgTitle: HTMLDivElement;
		radialGradient: HTMLDivElement;
		noise: HTMLDivElement;
		container: HTMLDivElement;
		tabsWrapper: HTMLDivElement;
		titleBg: HTMLLIElement;
		titles: HTMLCollection;
		details: HTMLCollection;
		windowInnerWidth: number;
	}) {
		// Value 0.13 is gotten from the fact that the height of the svg is 13vw (YES THE HEIGHT IS RELATIVE TO THE WIDTH OF THE VIEWPORT AND NOT THE HEIGHT OF THE VIEWPORT)
		const SVG_HEIGHT_VIEWPORT_RATIO = 0.13;

		// CREATE TIMELINE
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: "bottom bottom",
				toggleActions: "restart pause reverse pause",
				scrub: true,
				pin: tabsWrapper,
				pinSpacing: false,
				refreshPriority: 1,
				snap: {
					snapTo: "labels",
					duration: { min: 0.2, max: 2 },
					delay: 0.1,
					ease: "power1.inOut",
				},
				onUpdate: (self) => {
					// Displace the faintbg text
					const yDisplacement = animateFaintSvg({
						progress: self.progress,
						parentElement: tabsWrapper,
						svgViewportHeightRatio: SVG_HEIGHT_VIEWPORT_RATIO, //Did some calculation to arrive at this value
						windowWidth: windowInnerWidth,
					});
					faintBgTitle.style.bottom = yDisplacement + "px";

					// Reduce the radial gradient opacity
					const gradientOpacity = 1 - self.progress;
					if (radialGradient) {
						radialGradient.style.opacity = gradientOpacity.toString();
						noise.style.opacity = gradientOpacity.toString();
					}
				},
			},
		});

		// CREATE TIMELINE ACTIONS
		const timelineActions = this.createDesktopAnimationTimeline({
			titles,
			details,
			titleBg,
		});

		// EXECUTE TIMELINE ACTIONS
		executeTimelineActions({
			tl,
			tlActions: timelineActions,
		});

		return tl;
	}

	//-----------------------------------------------------------
	// MAIN MOBILE TIMELINE
	//-----------------------------------------------------------
	mobileAnimation({
		radialGradient,
		faintBgTitle,
		container,
		tabsWrapper,
		titles,
		details,
		titlesContainer,
		windowInnerWidth,
		noise,
	}: {
		radialGradient: HTMLDivElement;
		noise: HTMLDivElement;
		faintBgTitle: HTMLDivElement;
		container: HTMLDivElement;
		tabsWrapper: HTMLDivElement;
		titles: HTMLLIElement[];
		details: HTMLCollection;
		titlesContainer: HTMLUListElement;
		windowInnerWidth: number;
	}) {
		// Value 0.3 is gotten from the fact that the height of the svg is 30vw (YES THE HEIGHT IS RELATIVE TO THE WIDTH OF THE VIEWPORT AND NOT THE HEIGHT OF THE VIEWPORT)
		const SVG_HEIGHT_VIEWPORT_RATIO = 0.3;
		// CREATE TIMLINE
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: "bottom bottom",
				toggleActions: "restart pause reverse pause",
				scrub: true,
				pin: tabsWrapper,
				pinSpacing: false,
				snap: {
					snapTo: "labels",
					duration: { min: 0.2, max: 2 },
					delay: 0.1,
					ease: "power1.inOut",
				},
				onUpdate: (self) => {
					// Displace the faintbg text
					const yDisplacement = animateFaintSvg({
						progress: self.progress,
						parentElement: tabsWrapper,
						svgViewportHeightRatio: SVG_HEIGHT_VIEWPORT_RATIO, //Did some calculation to arrive at this value
						windowWidth: windowInnerWidth,
					});
					faintBgTitle.style.bottom = yDisplacement + "px";

					// Reduce the radial gradient opacity
					const gradientOpacity = 1 - self.progress;
					if (radialGradient) {
						radialGradient.style.opacity = gradientOpacity.toString();
						noise.style.opacity = gradientOpacity.toString();
					}
				},
			},
		});

		// CREATE TIMELINE ACTIONS
		const timelineActions = this.createMobileAnimationTimeline({ titles, details, titlesContainer });

		// EXECUTE TIMELINE ACTIONS
		executeTimelineActions({
			tl,
			tlActions: timelineActions,
		});

		return tl;
	}
}

const workSectionAnimations = new WorkSectionAnimations();
export default workSectionAnimations;
