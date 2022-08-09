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

	moveFloatingBox({
		bgImage,
		btnText,
		btn,
	}: {
		bgImage: HTMLDivElement;
		btnText: HTMLElement;
		btn: HTMLButtonElement;
	}) {
		let posXImage = 0;
		let posYImage = 0;
		let posXBtn = 0;
		let posYBtn = 0;
		let posXSpan = 0;
		let posYSpan = 0;
		let mouseX = 0;
		let mouseY = 0;
		const animation = gsap.to(
			{},
			{
				repeat: -1,
				onRepeat: function () {
					if (bgImage) {
						posXImage += (mouseX - posXImage) / 12;
						posYImage += (mouseY - posYImage) / 12;
						gsap.set(bgImage, {
							css: {
								left: posXImage,
								top: posYImage,
							},
						});
					}
					if (btn) {
						posXBtn += (mouseX - posXBtn) / 7;
						posYBtn += (mouseY - posYBtn) / 7;
						gsap.set(btn, {
							css: {
								left: posXBtn,
								top: posYBtn,
							},
						});
					}
					if (btnText) {
						posXSpan += (mouseX - posXSpan) / 6;
						posYSpan += (mouseY - posYSpan) / 6;
						gsap.set(btnText, {
							css: {
								left: posXSpan,
								top: posYSpan,
							},
						});
					}
				},
				duration: 0.0083333333,
			}
		);

		return animation;
	}
}

const projectAnimations = new ProjectsAnimations();

export default projectAnimations;
