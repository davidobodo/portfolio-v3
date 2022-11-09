import gsap from "gsap";

class ProjectsAnimations {
	animateFilterSectionOut({
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

		tl.to(listItems, { opacity: 0, stagger: 0.01, ease: ease, reversed: true });
		tl.to(filterOptions, { opacity: 0, ease: ease, duration: 0.1 });
		tl.to(closeFilterBtn, { opacity: 0, ease: ease });

		return tl;
	}

	animateFilterSectionIn({
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
		tl.to(listItems, { opacity: 1, stagger: 0.01, ease: ease });

		return tl;
	}

	slideInListItems({ listItems }: { listItems: HTMLElement[] }) {
		const ease = "Back.easeInOut";
		return gsap.to(listItems, { x: 0, opacity: 1, stagger: 0.01, ease: ease });
	}

	flipProjectIn({
		modal,
		source,
		destination,
	}: {
		modal: HTMLDivElement;
		source: HTMLDivElement | HTMLButtonElement;
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

	removeCurrentProject({ modalContainer, modalMedia }: { modalContainer: HTMLDivElement; modalMedia: HTMLDivElement }) {
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
			.to(modalMedia.children[0], {
				// width: "0px",
				opacity: 0,
			});

		return removeCurrentProjectTl;
	}

	displayNextProject({ modalContainer, modalMedia }: { modalContainer: HTMLDivElement; modalMedia: HTMLDivElement }) {
		const displayNextProjectTl = gsap.timeline();
		displayNextProjectTl
			.to(modalMedia.children[0], {
				// width: "100%",
				opacity: 1,
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

	scrollToProjectsSection() {
		return gsap.to(window, { scrollTo: "#projects-list" });
	}
}

const projectAnimations = new ProjectsAnimations();

export default projectAnimations;
