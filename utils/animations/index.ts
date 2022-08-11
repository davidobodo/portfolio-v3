import gsap from "gsap";
import { TTimelineAction } from "#/interfaces";
import { animateFaintSvg } from "#/utils";
import workSectionAnimations from "./work";
import sharedAnimations from "./shared";
import projectAnimations from "./projects";
import skillsAnimations from "./skills";

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
		tl.fromTo(node, { scaleY: 1, delay: 0.3 }, { scaleY: 0, delay: 0.3 });
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

		//Mobile image
		tl.to(picMobile, { width: "100%" });
		//Desktop image
		tl.to(picDesktopBlind, { width: 0 }, "<");

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
const singleProjectAnimations = new SingleProjectAnimations();
const notFoundPageAnimations = new NotFoundPageAnimations();

export {
	animPageLoaders,
	homePageAnimations,
	AnimPageLoaders,
	sharedAnimations,
	projectAnimations,
	singleProjectAnimations,
	notFoundPageAnimations,
	workSectionAnimations,
	skillsAnimations,
};
