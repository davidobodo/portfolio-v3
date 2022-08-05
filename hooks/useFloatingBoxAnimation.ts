import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function useFloatingBoxAnimation() {
	const imgRef = useRef<HTMLDivElement>(null);
	const btnRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	// useEffect(() => {
	// 	let posXImage = 0;
	// 	let posYImage = 0;
	// 	let posXBtn = 0;
	// 	let posYBtn = 0;
	// 	let posXSpan = 0;
	// 	let posYSpan = 0;
	// 	let mouseX = 0;
	// 	let mouseY = 0;

	// 	if (imgRef.current && btnRef.current && textRef.current) {
	// 		console.log("IN HERE MY GUY");
	// 		gsap.to(
	// 			{},
	// 			{
	// 				repeat: -1,
	// 				onRepeat: function () {
	// 					console.log("IS REPEATING");
	// 					if (imgRef.current) {
	// 						posXImage += (mouseX - posXImage) / 12;
	// 						posYImage += (mouseY - posYImage) / 12;
	// 						gsap.set(imgRef.current, {
	// 							css: {
	// 								left: posXImage,
	// 								top: posYImage,
	// 							},
	// 						});
	// 					}
	// 					if (btnRef.current) {
	// 						posXBtn += (mouseX - posXBtn) / 7;
	// 						posYBtn += (mouseY - posYBtn) / 7;
	// 						gsap.set(btnRef.current, {
	// 							css: {
	// 								left: posXBtn,
	// 								top: posYBtn,
	// 							},
	// 						});
	// 					}
	// 					if (textRef.current) {
	// 						posXSpan += (mouseX - posXSpan) / 6;
	// 						posYSpan += (mouseY - posYSpan) / 6;
	// 						gsap.set(textRef.current, {
	// 							css: {
	// 								left: posXSpan,
	// 								top: posYSpan,
	// 							},
	// 						});
	// 					}
	// 				},
	// 				duration: 0.0083333333,
	// 			}
	// 		);

	// 		document.addEventListener("mousemove", function (e) {
	// 			mouseX = e.clientX;
	// 			mouseY = e.clientY;

	// 			console.log("IN HERE MY MOUSE MOVED");
	// 		});
	// 	}
	// }, []);
	useEffect(() => {
		let posXImage = 0;
		let posYImage = 0;
		let posXBtn = 0;
		let posYBtn = 0;
		let posXSpan = 0;
		let posYSpan = 0;
		let mouseX = 0;
		let mouseY = 0;

		if (imgRef.current && btnRef.current && textRef.current) {
			document.addEventListener("mousemove", function (e) {
				mouseX = e.clientX;
				mouseY = e.clientY;

				posXImage += (mouseX - posXImage) / 12;
				posYImage += (mouseY - posYImage) / 12;
				// gsap.set(imgRef.current, {
				// 	css: {
				// 		left: posXImage,
				// 		top: posYImage,
				// 	},
				// });
				gsap.to(imgRef.current, {
					// css: {
					left: posXImage,
					top: posYImage,
					duration: 0.0083333333,
					// },
				});

				posXBtn += (mouseX - posXBtn) / 7;
				posYBtn += (mouseY - posYBtn) / 7;
				gsap.to(btnRef.current, {
					// css: {
					left: posXBtn,
					top: posYBtn,
					duration: 0.0083333333,
					// },
				});
				// gsap.set(btnRef.current, {
				// 	css: {
				// 		left: posXBtn,
				// 		top: posYBtn,
				// 	},
				// });

				posXSpan += (mouseX - posXSpan) / 6;
				posYSpan += (mouseY - posYSpan) / 6;
				gsap.to(textRef.current, {
					// css: {
					left: posXSpan,
					top: posYSpan,
					duration: 0.0083333333,
					// },
				});
				// gsap.set(textRef.current, {
				// 	css: {
				// 		left: posXSpan,
				// 		top: posYSpan,
				// 	},
				// });

				// gsap.to(
				// 	{},
				// 	{
				// 		// repeat: -1,
				// 		onRepeat: function () {
				// 			console.log("IS REPEATING");
				// 			if (imgRef.current) {
				// 				posXImage += (mouseX - posXImage) / 12;
				// 				posYImage += (mouseY - posYImage) / 12;
				// 				gsap.set(imgRef.current, {
				// 					css: {
				// 						left: posXImage,
				// 						top: posYImage,
				// 					},
				// 				});
				// 			}
				// 			if (btnRef.current) {
				// 				posXBtn += (mouseX - posXBtn) / 7;
				// 				posYBtn += (mouseY - posYBtn) / 7;
				// 				gsap.set(btnRef.current, {
				// 					css: {
				// 						left: posXBtn,
				// 						top: posYBtn,
				// 					},
				// 				});
				// 			}
				// 			if (textRef.current) {
				// 				posXSpan += (mouseX - posXSpan) / 6;
				// 				posYSpan += (mouseY - posYSpan) / 6;
				// 				gsap.set(textRef.current, {
				// 					css: {
				// 						left: posXSpan,
				// 						top: posYSpan,
				// 					},
				// 				});
				// 			}
				// 		},
				// 		duration: 0.0083333333,
				// 	}
				// );

				console.log("IN HERE MY MOUSE MOVED");
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
				// gsap.to(imgRef.current.querySelector("[data-key='projects-list']"), {
				// 	y: (index * 100) / (count * -1) + "%",
				// 	duration: 0.6,
				// 	ease: "Back.easeInOut",
				// });
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
