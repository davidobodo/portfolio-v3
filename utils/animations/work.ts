import gsap from "gsap";
import { TTimelineAction } from "#/interfaces";
import { animateFaintSvg } from "#/utils";
import { sharedAnimations } from "./index";
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
		let timelineActions: TTimelineAction[] = [];

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
					action: "decrease opac",
				});
			}

			//Increase title opacity
			timelineActions.push({ target: titles[i + 1], vars: { opacity: 1 } });

			// Increase details opacity
			timelineActions.push({
				target,
				vars: { opacity: 1, visibility: "visible" },
				options: "<",
				action: "increase opac",
			});

			// Add a label at this point to the timeline (Might be useful for click events)
			timelineActions.push({ isLabel: true, label: `active-${i}` });

			// Translate details to their normal position
			timelineActions.push({ target, vars: { y: 0 }, options: "<", action: "move up" });

			// Dont decrease opacity for the last item
			if (i !== details.length - 1) {
				// Decrease title opacity
				timelineActions.push({ target: titles[i + 1], vars: { opacity: 0.1 } });

				// Decrease details opacity
				timelineActions.push({
					target,
					vars: { opacity: 0, visibility: "hidden" },
					options: ">-25%", // start at 25% towards the end of the previous animation
					action: "decrease opac",
				});
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
			timelineActions.push({ target: topTarget, vars: { opacity: 1 } });

			if (i !== 0) {
				timelineActions.push({
					target: titlesContainer,
					vars: { left: -posDic[i] + 20 },
				});
				// Dont need to increase the first items opacity since its already visible
			}
			timelineActions.push({ target, vars: { opacity: 1 } });

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
	}: {
		faintBgTitle: HTMLDivElement;
		radialGradient: HTMLDivElement;
		container: HTMLDivElement;
		tabsWrapper: HTMLDivElement;
		titleBg: HTMLLIElement;
		titles: HTMLCollection;
		details: HTMLCollection;
		windowInnerWidth: number;
	}) {
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
				onUpdate: (self) => {
					// Displace the faintbg text
					const yDisplacement = animateFaintSvg({
						progress: self.progress,
						parentElement: tabsWrapper,
						svgViewportHeightRatio: 0.13, //Did some calculation to arrive at this value
						windowWidth: windowInnerWidth,
					});
					faintBgTitle.style.bottom = yDisplacement + "px";

					// Reduce the radial gradient opacity
					const gradientOpacity = 1 - self.progress;
					if (radialGradient) {
						radialGradient.style.opacity = gradientOpacity.toString();
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
		sharedAnimations.executeTimelineActions({
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
	}: {
		radialGradient: HTMLDivElement;
		faintBgTitle: HTMLDivElement;
		container: HTMLDivElement;
		tabsWrapper: HTMLDivElement;
		titles: HTMLLIElement[];
		details: HTMLCollection;
		titlesContainer: HTMLUListElement;
		windowInnerWidth: number;
	}) {
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
				onUpdate: (self) => {
					// Displace the faintbg text
					const yDisplacement = animateFaintSvg({
						progress: self.progress,
						parentElement: tabsWrapper,
						svgViewportHeightRatio: 0.3, //Did some calculation to arrive at this value
						windowWidth: windowInnerWidth,
					});
					faintBgTitle.style.bottom = yDisplacement + "px";

					// Reduce the radial gradient opacity
					const gradientOpacity = 1 - self.progress;
					if (radialGradient) {
						radialGradient.style.opacity = gradientOpacity.toString();
					}
				},
			},
		});

		// CREATE TIMELINE ACTIONS
		const timelineActions = this.createMobileAnimationTimeline({ titles, details, titlesContainer });

		// EXECUTE TIMELINE ACTIONS
		sharedAnimations.executeTimelineActions({
			tl,
			tlActions: timelineActions,
		});

		return tl;
	}
}

const workSectionAnimations = new WorkSectionAnimations();
export default workSectionAnimations;
