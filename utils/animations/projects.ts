import gsap from "gsap";

class ProjectsAnimations {
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
		const ease = "Back.easeInOut";
		const tl = gsap.timeline();

		tl.to(container, { opacity: 1, ease: ease });
		tl.to(openFilterBtn, { rotate: 180, x: 200, ease: ease });

		tl.to(closeFilterBtn, { rotate: 0, right: "3rem", opacity: 1, ease: ease });
		tl.to(filterOptions, { opacity: 1, ease: ease });
		tl.to(listItems, { x: 0, opacity: 1, stagger: 0.01, ease: ease });

		return tl;
	}

	animateFilterButton({ button, trigger }: { button: HTMLButtonElement; trigger: HTMLDivElement }) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: trigger,
				start: "top top",
				end: "bottom bottom",
				toggleActions: "restart reverse restart reverse",
			},
		});

		tl.to(button, {
			opacity: 1,
			visibility: "visible",
			x: 0,
			rotate: 0,
			ease: "Back.easeInOut",
		});

		return tl;
	}
}

const projectAnimations = new ProjectsAnimations();

export default projectAnimations;
