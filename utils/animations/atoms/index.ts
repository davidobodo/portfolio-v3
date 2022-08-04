import gsap from "gsap";
import { DATA_VALUES } from "#/constants";
import { TTimelineAction } from "#/interfaces";
import { animateFaintSvg } from "#/utils";

//--------------------------------------------
// SITE LOADER
//--------------------------------------------
class AnimPageLoaders {
	constructor() {}

	showLoadingTexts(nodesWrapper: Element, nodes: HTMLSpanElement[]) {
		const tl = gsap.timeline({ repeat: -1 });

		// CREATE TIMELINE ACTIONS
		let timelineActions = [];
		timelineActions.push({ target: nodesWrapper, vars: { visibility: "visible" } });
		for (let i = 0; i < nodes.length; i++) {
			timelineActions.push({
				target: nodes[i],
				vars: {
					opacity: 0,
				},
			});

			// Move node to the middle
			timelineActions.push({
				target: nodes[i],
				vars: {
					y: 0,
					opacity: 1,
					ease: "power4.out",
				},
			});
			// Move node to the top
			timelineActions.push({
				target: nodes[i],
				vars: {
					y: -300,
					opacity: 0,
					delay: 1,
					ease: "power4.out",
				},
			});
		}

		// EXECUTE TIMELINE
		for (let j = 0; j < timelineActions.length; j++) {
			const { target, vars } = timelineActions[j];
			tl.to(target, vars);
		}

		return tl;
	}

	hideLoadingTexts(node: HTMLDivElement) {
		const tl = gsap.timeline();
		tl.to(node, { visibility: "hidden", opacity: 0 });
		return tl;
	}

	openNoiseLayers(node: NodeListOf<Element>) {
		const tl = gsap.timeline();
		tl.to(node, { scaleY: 0 });
		return tl;
	}

	closeNoiseLayers({ node }: { node: NodeListOf<Element> | HTMLCollection }) {
		const tl = gsap.timeline();
		tl.to(node, { scaleY: 1 });
		return tl;
	}

	drawSvgLogo(logoSvg: Element, logoSvgPaths: NodeListOf<Element>) {
		const tl = gsap.timeline();
		tl.to(logoSvgPaths, {
			strokeDashoffset: 0,
			duration: 2,
			stagger: 0.8,
			delay: 1,
		})
			.to(logoSvg, {
				fill: "#fcfcfc",
			})
			.to(logoSvg, {
				opacity: 0,
			})
			.to(logoSvg, {
				visibility: "hidden",
			});

		return tl;
	}
}

//--------------------------------------------
// HOME PAGE
//--------------------------------------------
class HomePageAnimations {
	//----
	bannerAnimation({
		nameLetters,
		fieldLetters,
		subFieldOne,
		subFieldTwo,
		picMobile,
		picDesktopBlind,
		scrollIndicator,
	}: {
		nameLetters: HTMLSpanElement[];
		fieldLetters: HTMLSpanElement[];
		subFieldOne: HTMLDivElement;
		subFieldTwo: HTMLDivElement;
		picMobile: HTMLDivElement;
		picDesktopBlind: HTMLSpanElement;
		scrollIndicator: HTMLDivElement;
	}) {
		const tl = gsap.timeline();

		tl.to(nameLetters, { x: 0 }).to(fieldLetters, { x: 0 }).to(subFieldOne, { y: 0 }).to(subFieldTwo, { y: 0 });

		// Because the animation for mobile image is different from the animation for desktop image
		if (window.innerWidth < 768) {
			tl.to(picMobile, { width: "100%" });
		} else {
			tl.to(picDesktopBlind, { width: 0 });
		}

		tl.to(scrollIndicator, { opacity: 1 });
		tl.add(() => {
			document.querySelector("body")?.classList.remove("hide");
		});

		return tl;
	}

	//-----
	revealParagraph({
		trigger,
		words,
		start = "top 60%",
		end = "bottom 40%",
	}: {
		trigger: Element;
		words: NodeListOf<Element>;
		start?: string;
		end?: string;
	}) {
		return gsap.to(words, {
			scrollTrigger: {
				trigger,
				start,
				end,
				toggleActions: "restart pause pause reverse",
				scrub: true,
			},
			y: 0,
		});
	}

	//-----
	revealHeading({ container, texts, windowInnerWidth }) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top 80%",
				end: "top center",
				toggleActions: "restart complete pause reverse",
				scrub: true,
			},
		});
		tl.to(texts, {
			y: 0,
		})
			.to(texts[0], { x: windowInnerWidth > 768 ? 160 : 0 })
			.to(texts[1], { x: 0 }, "<")
			.to(texts[2], { x: windowInnerWidth > 768 ? 160 : 0 }, "<");

		return tl;
	}
}

//--------------------------------------------
// PROJECTS PAGE
//--------------------------------------------
class AnimsProjectsPage {
	animateFilterSection({
		backdrop,
		sidebar,
		listItems,
	}: {
		backdrop: HTMLDivElement;
		sidebar: HTMLElement;
		listItems: HTMLElement[];
	}) {
		const tl = gsap.timeline({ paused: true });

		//Fade in backdrop
		tl.to(backdrop, { opacity: 1, visibility: "visible" });

		//slide filter list in
		tl.to(sidebar, { x: 0 });

		//Stagger list items
		tl.to(listItems, { x: 0, opacity: 1, stagger: 0.01 });

		return tl;
	}
}

class SharedAnimations {
	transitionToDarkSection({ darkSection, banner, blackCurtain }) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: darkSection,
				toggleActions: "restart complete reverse reset",
				start: "top bottom",
				end: "top top",
				scrub: true,
				// markers: true,
				onEnterBack: () => {
					if (banner && blackCurtain) {
						banner.style.zIndex = "1";
						banner.style.opacity = "1";
						blackCurtain.style.zIndex = "2";
					}
				},
				onLeave: () => {
					if (banner && blackCurtain) {
						banner.style.zIndex = "-1";
						banner.style.opacity = "0";
						blackCurtain.style.zIndex = "-1";
					}
				},
			},
		});
		tl.to(blackCurtain, {
			scaleY: 1,
			transformOrigin: "top",
		});
		tl.to(banner?.children, { opacity: 0 }, "<");

		return tl;
	}

	//-----
	changeFocusedOpaqueText(texts: HTMLCollection) {
		const firstElement = texts[0];
		const lastElement = texts[texts.length - 1];

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: firstElement,
				start: "top center",
				end: "bottom center",
				endTrigger: lastElement,
				toggleActions: "restart pause reverse pause",
				scrub: true,
			},
		});

		// CREATE ACTIONS TO EXECUTE IN TIMELINE
		let timelineActions = [];
		for (let i = 0; i < texts.length; i++) {
			timelineActions.push({ target: texts[i], vars: { opacity: 1 }, options: i !== 0 ? "<" : "" });

			// Dont decrease the opacity of the last item
			if (i !== texts.length - 1) {
				timelineActions.push({ target: texts[i], vars: { opacity: 0.2 }, options: "" });
			}
		}

		// EXECUTE TIMELINE ACTIONS
		for (let j = 0; j < timelineActions.length; j++) {
			const { target, vars, options } = timelineActions[j];
			if (options) {
				tl.to(target, vars, options);
			} else {
				tl.to(target, vars);
			}
		}

		return tl;
	}

	executeTimelineActions({ tl, tlActions }: { tl: gsap.core.Timeline; tlActions: TTimelineAction[] }) {
		for (let j = 0; j < tlActions.length; j++) {
			const { target, vars, options, isLabel, label } = tlActions[j];

			if (isLabel && label) {
				tl.add(label);
			} else {
				if (target && vars) {
					if (options) {
						tl.to(target, vars, options);
					} else {
						tl.to(target, vars);
					}
				}
			}
		}
	}
}

class WorkSectionAnimations {
	constructor() {
		this.desktopAnimation = this.desktopAnimation.bind(this);
		this.mobileAnimation = this.mobileAnimation.bind(this);
	}

	private createDesktopAnimationTimeline({ titles, details, titleBg }) {
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

	private createMobileAnimationTimeline({ titles, details, titlesContainer }) {
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

	desktopAnimation({
		faintBgTitle,
		radialGradient,
		container,
		tabsWrapper,
		titleBg,
		titles,
		details,
		windowInnerWidth,
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

	mobileAnimation({
		radialGradient,
		faintBgTitle,
		container,
		tabsWrapper,
		titles,
		details,
		titlesContainer,
		windowInnerWidth,
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

class SkillsSectionAnimations {
	constructor() {
		this.desktopAnimation = this.desktopAnimation.bind(this);
		this.mobileAnimation = this.mobileAnimation.bind(this);
	}

	private createDesktopAnimationTimeline({ lists, image }) {
		let timelineActions: TTimelineAction[] = [];

		timelineActions.push({ target: image, vars: { width: "29vw", duration: 2 } });

		for (let i = 0; i < lists.length; i++) {
			const header = lists[i].firstElementChild as HTMLElement;
			const list = header?.nextElementSibling; // The "UL tag"
			const listItems = list?.querySelectorAll("li>span") as unknown as HTMLElement;
			const info = list?.nextElementSibling;

			//show heading
			timelineActions.push({ target: header, vars: { opacity: 1 } });
			//show list
			timelineActions.push({ target: listItems, vars: { stagger: 0.2, y: 0 } });

			if (info) {
				timelineActions.push({ target: info, vars: { opacity: 1 } });
			}
		}

		return timelineActions;
	}

	private createMobileAnimationTimeline({ listsWrapper, lists }) {
		let timelineActions: TTimelineAction[] = [];

		// CREATE TIMELINE ACTIONS
		timelineActions.push({ target: listsWrapper.children[0], vars: { opacity: 1 } });

		const { header, listItems } = this.getListHeaderAndItems(lists[0]);
		timelineActions.push({ target: header, vars: { opacity: 1 } });
		timelineActions.push({ target: listItems, vars: { stagger: 0.2, y: 0 } });

		const { header: headerTwo, listItems: listItemsTwo } = this.getListHeaderAndItems(lists[1]);
		timelineActions.push({ target: headerTwo, vars: { opacity: 1 } });
		timelineActions.push({ target: listItemsTwo, vars: { stagger: 0.2, y: 0 } });

		timelineActions.push({ target: listsWrapper.children[0], vars: { opacity: 0 } });
		timelineActions.push({ target: listsWrapper.children[1], vars: { opacity: 1 } });

		const { header: headerThree, listItems: listItemsThree } = this.getListHeaderAndItems(lists[2]);
		timelineActions.push({ target: headerThree, vars: { opacity: 1 } });
		timelineActions.push({ target: listItemsThree, vars: { stagger: 0.2, y: 0 } });

		return timelineActions;
	}

	private getListHeaderAndItems(element: HTMLElement | Element) {
		const header = element.firstElementChild as HTMLElement;
		const listItems = header?.nextElementSibling?.querySelectorAll("li>span") as unknown as HTMLElement;
		return {
			header,
			listItems,
		};
	}

	mobileAnimation({ faintBgTitle, radialGradient, contentWrapper, listsWrapper, lists, container, windowInnerWidth }) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: "bottom bottom",
				toggleActions: "restart pause reverse pause",
				scrub: true,
				pin: contentWrapper,
				pinSpacing: false,
				onUpdate: (self) => {
					// Displace the faintbg text
					const yDisplacement = animateFaintSvg({
						progress: self.progress,
						parentElement: contentWrapper,
						svgViewportHeightRatio: 0.15, //Did some calculation to arrive at this value
						windowWidth: windowInnerWidth,
					});

					faintBgTitle.style.bottom = yDisplacement + "px";

					if (radialGradient) {
						radialGradient.style.opacity = self.progress.toString();
					}
				},
			},
		});

		const timelineActions = this.createMobileAnimationTimeline({
			lists,
			listsWrapper,
		});

		// EXECUTE TIMELINE ACTIONS
		sharedAnimations.executeTimelineActions({
			tl,
			tlActions: timelineActions,
		});

		return tl;
	}

	desktopAnimation({ faintBgTitle, radialGradient, image, lists, contentWrapper, container, windowInnerWidth }) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: "bottom bottom",
				toggleActions: "restart pause reverse pause",
				scrub: true,
				pin: contentWrapper,
				pinSpacing: false,
				onUpdate: (self) => {
					// Displace the faintbg text
					const yDisplacement = animateFaintSvg({
						progress: self.progress,
						parentElement: contentWrapper,
						svgViewportHeightRatio: 0.15, //Did some calculation to arrive at this value
						windowWidth: windowInnerWidth,
					});

					faintBgTitle.style.bottom = yDisplacement + "px";

					if (radialGradient) {
						radialGradient.style.opacity = self.progress.toString();
					}
				},
			},
		});

		const timelineActions = this.createDesktopAnimationTimeline({
			lists,
			image,
		});

		// EXECUTE TIMELINE ACTIONS
		sharedAnimations.executeTimelineActions({
			tl,
			tlActions: timelineActions,
		});

		return tl;
	}
}

function expandImage(imageNode: HTMLImageElement) {
	gsap.to(imageNode, {
		scrollTrigger: {
			trigger: imageNode,
			start: "top 80%",
			end: "top 75%",
			toggleActions: "restart complete pause reverse",
		},
		width: "100%",
	});
}

function fadeIn({ node }: { node: Element }) {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: node,
			start: "top 80%",
			end: "bottom center",
			toggleActions: "restart pause reverse pause",
			scrub: true,
		},
	});

	tl.to(node, { opacity: 1, y: 0 });

	return tl;
}
const animPageLoaders = new AnimPageLoaders();
const homePageAnimations = new HomePageAnimations();
const projectsPageAnima = new AnimsProjectsPage();
const sharedAnimations = new SharedAnimations();
const workPageAnimations = new WorkSectionAnimations();
const skillsSectionAnimations = new SkillsSectionAnimations();

export {
	expandImage,
	animPageLoaders,
	homePageAnimations,
	AnimPageLoaders,
	fadeIn,
	projectsPageAnima,
	sharedAnimations,
	workPageAnimations,
	skillsSectionAnimations,
};
