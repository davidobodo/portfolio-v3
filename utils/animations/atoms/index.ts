import gsap from "gsap";
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
	revealHeading({
		container,
		texts,
		windowInnerWidth,
	}: {
		container: HTMLHeadingElement;
		texts: NodeListOf<Element>;
		windowInnerWidth: number;
	}) {
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
		listItems,
		filterOptions,
		container,
		openFilterBtn,
		closeFilterBtn,
	}: {
		listItems: HTMLElement[];
		filterOptions: HTMLDivElement;
		container: HTMLDivElement;
		openFilterBtn: HTMLButtonElement;
		closeFilterBtn: HTMLButtonElement;
	}) {
		const tl = gsap.timeline();

		tl.to(container, { opacity: 1 });
		tl.to(openFilterBtn, { rotate: 180, x: 200 });

		tl.to(closeFilterBtn, { rotate: 0, right: "3rem", opacity: 1 });
		tl.to(filterOptions, { opacity: 1 });
		tl.to(listItems, { x: 0, opacity: 1, stagger: 0.01 });

		return tl;
	}
}

class SharedAnimations {
	transitionToDarkSection({
		darkSection,
		banner,
		blackCurtain,
	}: {
		darkSection: HTMLDivElement;
		banner: HTMLDivElement;
		blackCurtain: HTMLDivElement;
	}) {
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

	fadeIn({ node }: { node: Element }) {
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

	genericPageBannerAnimation(children: HTMLHeadingElement[], scrollIndicatorNode: HTMLDivElement) {
		// const { children } = node;
		const tl = gsap.timeline({});

		//CREATE TIMELINE ACTIONS

		tl.add(() => {
			document.querySelector("body")?.classList.add("hide");
		});

		// 1. Slide in first element
		tl.to(children[0].querySelectorAll("[data-key='letter']"), { x: 0 });

		// 2. draw second elements backgorund
		tl.to(children[1].querySelectorAll("[data-key='bg']"), { width: "100%" });

		// 3. slide in second element
		tl.to(children[1].querySelectorAll("[data-key='letter']"), { x: 0 });

		// 4. slide in third element
		tl.to(children[2].querySelectorAll("[data-key='letter']"), { x: 0 });

		// 5. draw fourth elements background
		tl.to(children[3].querySelectorAll("[data-key='bg']"), { width: "100%" });

		// 6. slide in fourth element;
		tl.to(children[3].querySelectorAll("[data-key='letter']"), { x: 0 });

		tl.to(scrollIndicatorNode, { opacity: 1 });

		tl.add(() => {
			document.querySelector("body")?.classList.remove("hide");
		});

		return tl;
	}
}

class WorkSectionAnimations {
	constructor() {
		this.desktopAnimation = this.desktopAnimation.bind(this);
		this.mobileAnimation = this.mobileAnimation.bind(this);
	}

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

class SkillsSectionAnimations {
	constructor() {
		this.desktopAnimation = this.desktopAnimation.bind(this);
		this.mobileAnimation = this.mobileAnimation.bind(this);
	}

	private createDesktopAnimationTimeline({ lists, image }: { image: HTMLDivElement; lists: HTMLDivElement[] }) {
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

	private createMobileAnimationTimeline({
		listsWrapper,
		lists,
	}: {
		listsWrapper: HTMLDivElement;
		lists: HTMLDivElement[];
	}) {
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

	mobileAnimation({
		faintBgTitle,
		radialGradient,
		contentWrapper,
		listsWrapper,
		lists,
		container,
		windowInnerWidth,
	}: {
		faintBgTitle: HTMLDivElement;
		radialGradient: HTMLDivElement;
		contentWrapper: HTMLDivElement;
		listsWrapper: HTMLDivElement;
		lists: HTMLDivElement[];
		container: HTMLDivElement;
		windowInnerWidth: number;
	}) {
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

	desktopAnimation({
		faintBgTitle,
		radialGradient,
		image,
		lists,
		contentWrapper,
		container,
		windowInnerWidth,
	}: {
		faintBgTitle: HTMLDivElement;
		radialGradient: HTMLDivElement;
		image: HTMLDivElement;
		lists: HTMLDivElement[];
		contentWrapper: HTMLDivElement;
		container: HTMLDivElement;
		windowInnerWidth: number;
	}) {
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

class SingleProjectAnimations {
	flipProjectIn({
		modal,
		source,
		destination,
	}: {
		modal: HTMLDivElement;
		source: HTMLDivElement;
		destination: HTMLDivElement;
	}) {
		const sourceRect = source.getBoundingClientRect();
		const destinationRect = destination.getBoundingClientRect();

		const tl = gsap.timeline();

		tl.from(modal, {
			opacity: 0,
		})
			.fromTo(
				destination,
				{
					// x: sourceRect.left - destinationRect.left - 200,
					x: sourceRect.left - destinationRect.left,
					y: sourceRect.top - destinationRect.top,
					scale: sourceRect.width / destinationRect.width,
					duration: 0.2,
					ease: "cubic-bezier(0.2, 0, 0.2, 1)",
				},
				{
					x: 0,
					y: 0,
					scale: 1,
					duration: 0.2,
					ease: "cubic-bezier(0.2, 0, 0.2, 1)",
				}
			)
			.from(modal.querySelector("[data-key=title]"), {
				opacity: 0,
				y: 20,
				duration: 0.2,
			})
			.from(modal.querySelector("[data-key=about]"), {
				opacity: 0,
				y: 20,
				duration: 0.2,
			})
			.from(modal.querySelector("[data-key=tech]"), {
				opacity: 0,
				y: 20,
				duration: 0.2,
			})
			.from(modal.querySelector("[data-key=buttons]"), {
				opacity: 0,
				y: 20,
				duration: 0.2,
			})
			.from(modal.querySelector("[data-key=close-button]"), {
				opacity: 0,
				y: 20,
				duration: 0.2,
			});

		return tl;
	}

	removeCurrentProject({ modalContainer, modalImage }: { modalContainer: HTMLDivElement; modalImage: HTMLDivElement }) {
		const removeCurrentProjectTl = gsap.timeline();
		removeCurrentProjectTl
			.to(modalContainer.querySelector("[data-key=title]"), {
				opacity: 0,
				y: 20,
				duration: 0.2,
			})
			.to(modalContainer.querySelector("[data-key=about]"), {
				opacity: 0,
				y: 20,
				duration: 0.2,
			})
			.to(modalContainer.querySelector("[data-key=tech]"), {
				opacity: 0,
				y: 20,
				duration: 0.2,
			})
			.to(modalContainer.querySelector("[data-key=buttons]"), {
				opacity: 0,
				y: 20,
				duration: 0.2,
			})
			.to(modalImage, {
				width: "0px",
			});

		return removeCurrentProjectTl;
	}

	displayNextProject({ modalContainer, modalImage }: { modalContainer: HTMLDivElement; modalImage: HTMLDivElement }) {
		const displayNextProjectTl = gsap.timeline();
		displayNextProjectTl
			.to(modalImage, {
				width: "100%",
			})
			.to(modalContainer.querySelector("[data-key=title]"), {
				opacity: 1,
				y: 0,
				duration: 0.2,
			})
			.to(modalContainer.querySelector("[data-key=about]"), {
				opacity: 1,
				y: 0,
				duration: 0.2,
			})
			.to(modalContainer.querySelector("[data-key=tech]"), {
				opacity: 1,
				y: 0,
				duration: 0.2,
			})
			.to(modalContainer.querySelector("[data-key=buttons]"), {
				opacity: 1,
				y: 0,
				duration: 0.2,
			});

		return displayNextProjectTl;
	}
}

class NotFoundPageAnimations {
	bannerAnimation({ sections }: { sections: HTMLDivElement[] }) {
		const tl = gsap.timeline();
		tl.to(sections, { opacity: 1, y: 0, stagger: 0.2 });
		return tl;
	}

	stopRedirectAnimation({
		textsToRemove,
		container,
		gradient,
		scroll,
	}: {
		textsToRemove: HTMLDivElement[];
		container: HTMLDivElement;
		gradient: HTMLDivElement;
		scroll: HTMLDivElement;
	}) {
		const tl = gsap.timeline();

		tl.to(textsToRemove, { opacity: 0, y: 100 });
		tl.to(container, { backgroundColor: "#000", color: "#86868b" });
		tl.to(gradient, { opacity: 1 }, "<");
		tl.add(() => {
			document.querySelector("body")?.classList.remove("hide");
		});
		tl.to(scroll, { opacity: 1 });

		return tl;
	}
}

const animPageLoaders = new AnimPageLoaders();
const homePageAnimations = new HomePageAnimations();
const projectsPageAnima = new AnimsProjectsPage();
const sharedAnimations = new SharedAnimations();
const workPageAnimations = new WorkSectionAnimations();
const skillsSectionAnimations = new SkillsSectionAnimations();
const singleProjectAnimations = new SingleProjectAnimations();
const notFoundPageAnimations = new NotFoundPageAnimations();

export {
	animPageLoaders,
	homePageAnimations,
	AnimPageLoaders,
	projectsPageAnima,
	sharedAnimations,
	workPageAnimations,
	skillsSectionAnimations,
	singleProjectAnimations,
	notFoundPageAnimations,
};
