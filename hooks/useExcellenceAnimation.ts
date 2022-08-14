import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRadialGradientAnimContext } from "#/context";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { useRef, useState } from "react";
import gsap from "gsap";

export default function useExcellenceAnimation() {
	const containerRef = useRef(null);
	const textWrapperRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef(null);

	const { innerWidth } = useWindowSize();

	const [containerWidth, setContainerWidth] = useState<number>();
	useIsomorphicLayoutEffect(() => {
		setContainerWidth(innerWidth * 2);
	}, [innerWidth]);

	const { animation } = useRadialGradientAnimContext();

	useIsomorphicLayoutEffect(() => {
		if (textWrapperRef.current && containerWidth) {
			console.log(document.documentElement.clientWidth, "the width");
			const textWidth = textWrapperRef.current?.scrollWidth;

			console.log(textWidth, "THE WIDTH");

			const tl = gsap.timeline({
				scrollTrigger: {
					start: "top top",
					trigger: containerRef.current,
					// invalidateOnRefresh: true,
					anticipatePin: 1,
					pin: true,
					scrub: 1,
					pinSpacing: true,
					markers: true,
					end: () => "+=" + textWrapperRef.current?.offsetWidth,
				},
			});

			tl.to(textWrapperRef.current, {
				x: () => -(textWidth - document.documentElement.clientWidth) + "px",
				ease: "none",
			});
			tl.to(textWrapperRef.current.querySelector("svg"), {
				scale: 60,
				// x: -6300,
			});
			tl.to(imageRef.current, {
				border: "10rem solid black",
			});

			ScrollTrigger.refresh();

			// console.log(ScrollTrigger.getAll());

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, [containerWidth]);
	return {
		containerRef,
		containerWidth,
		textWrapperRef,
		imageRef,
	};
}
