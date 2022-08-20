import gsap from "gsap";

class ProjectsAnimations {
	animateFilterSection({
		listItems,
		filterOptions,
		closeFilterBtn,
	}: {
		listItems: HTMLElement[];
		filterOptions: HTMLDivElement;
		closeFilterBtn: HTMLButtonElement;
	}) {
		const ease = "Back.easeInOut";
		const tl = gsap.timeline();

		tl.to(closeFilterBtn, { rotate: 0, opacity: 1, ease: ease });
		tl.to(filterOptions, { opacity: 1, ease: ease, duration: 0.1 });
		tl.to(listItems, { x: 0, opacity: 1, stagger: 0.01, ease: ease });

		return tl;
	}
}

const projectAnimations = new ProjectsAnimations();

export default projectAnimations;
