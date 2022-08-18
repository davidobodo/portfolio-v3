import gsap from "gsap";
import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from ".";

export default function useFloatingBoxAnimation() {
	const imgRef = useRef<HTMLDivElement>(null);
	const btnRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	/**
	 * Animation works just like request animation frame. It fires for eternity.
	 * However because the "mousex" and "mouseY" variables are gloabl to its scope, it keeps getting updated values of the mouse position
	 * NOTE: Credits given to "https://dennissnellenberg.com/", for thinking about this
	 */
	useIsomorphicLayoutEffect(() => {
		let posXImage = 0;
		let posYImage = 0;
		let posXBtn = 0;
		let posYBtn = 0;
		let posXSpan = 0;
		let posYSpan = 0;
		let mouseX = 0;
		let mouseY = 0;

		if (imgRef.current && btnRef.current && textRef.current) {
			gsap.to(
				{},
				{
					repeat: -1,
					onRepeat: function () {
						if (imgRef.current) {
							posXImage += (mouseX - posXImage) / 12;
							posYImage += (mouseY - posYImage) / 12;
							gsap.set(imgRef.current, {
								css: {
									left: posXImage,
									top: posYImage,
								},
							});
						}
						if (btnRef.current) {
							posXBtn += (mouseX - posXBtn) / 7;
							posYBtn += (mouseY - posYBtn) / 7;
							gsap.set(btnRef.current, {
								css: {
									left: posXBtn,
									top: posYBtn,
								},
							});
						}
						if (textRef.current) {
							posXSpan += (mouseX - posXSpan) / 6;
							posYSpan += (mouseY - posYSpan) / 6;
							gsap.set(textRef.current, {
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

			document.addEventListener("mousemove", function (e) {
				mouseX = e.clientX;
				mouseY = e.clientY;
			});
		}
	}, []);

	const [isActive, setIsActive] = useState(false);
	const onMouseEnter = () => {
		setIsActive(true);
	};

	const onMouseLeave = () => {
		setIsActive(false);
	};

	const onEnterElement = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		if (listRef.current) {
			const count = listRef.current.children.length;

			const index = [...listRef.current.children].findIndex((item) => {
				return item === e.currentTarget;
			});

			if (imgRef.current) {
				gsap.to(imgRef.current.querySelector("[data-key='projects-list']"), {
					y: (index * 100) / (count * -1) + "%",
					duration: 0.6,
					ease: "Back.easeInOut",
				});
			}
		}
	};

	return {
		imgRef,
		btnRef,
		textRef,
		isActive,
		onMouseEnter,
		onMouseLeave,
		onEnterElement,
		listRef,
	};
}
