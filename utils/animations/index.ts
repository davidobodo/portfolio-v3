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
			const navLogo = document.querySelector("[data-key='nav-logo']") as HTMLElement;

			if (navLogo) {
				navLogo.style.visibility = "visible";
			}
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
			.to(texts[0], { x: windowInnerWidth > 992 ? 160 : 0 })
			.to(texts[1], { x: 0 }, "<")
			.to(texts[2], { x: windowInnerWidth > 992 ? 160 : 0 }, "<");

		return tl;
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

class AuxilliaryAnimations {
	animateExcellence({
		sectionWrapper,
		textWrapper,
		image,
		innerWidth,
	}: {
		sectionWrapper: HTMLDivElement;
		textWrapper: HTMLDivElement;
		image: HTMLDivElement;
		innerWidth: number;
	}) {
		const tl = gsap.timeline({
			scrollTrigger: {
				start: "top top",
				trigger: sectionWrapper,
				invalidateOnRefresh: true,
				anticipatePin: 1,
				pin: true,
				scrub: 1,
				pinSpacing: true,
				refreshPriority: 1,
				end: () => "+=" + textWrapper?.offsetWidth,
			},
		});

		tl.to(textWrapper, {
			x: () => -(textWrapper.scrollWidth - document.documentElement.clientWidth) + "px",
			ease: "none",
		});
		tl.to(textWrapper.querySelector("svg"), {
			scale: 60,
		});
		tl.to(image, {
			borderLeftWidth: innerWidth < 1200 ? "2rem" : "5.8rem",
			borderRightWidth: innerWidth < 1200 ? "2rem" : "5.8rem",
			borderTopWidth: innerWidth < 1200 ? "5rem" : "10rem",
			borderBottomWidth: innerWidth < 1200 ? "5rem" : "10rem",
		});

		return tl;
	}
}

const homePageAnimations = new HomePageAnimations();
const notFoundPageAnimations = new NotFoundPageAnimations();
const auxilliaryAnimations = new AuxilliaryAnimations();

export {
	homePageAnimations,
	sharedAnimations,
	projectAnimations,
	notFoundPageAnimations,
	workSectionAnimations,
	skillsAnimations,
	auxilliaryAnimations,
};
