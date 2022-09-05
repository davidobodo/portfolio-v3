import gsap from "gsap";

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

const notFoundPageAnimations = new NotFoundPageAnimations();

export default notFoundPageAnimations;
