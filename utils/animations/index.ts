import gsap from "gsap";
import { TTimelineAction } from "#/interfaces";
import { animateFaintSvg } from "#/utils";
import workSectionAnimations from "./work";
import sharedAnimations from "./shared";
import projectAnimations from "./projects";
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
const skillsSectionAnimations = new SkillsSectionAnimations();
const singleProjectAnimations = new SingleProjectAnimations();
const notFoundPageAnimations = new NotFoundPageAnimations();

export {
	animPageLoaders,
	homePageAnimations,
	AnimPageLoaders,
	sharedAnimations,
	projectAnimations,
	skillsSectionAnimations,
	singleProjectAnimations,
	notFoundPageAnimations,
	workSectionAnimations,
};
