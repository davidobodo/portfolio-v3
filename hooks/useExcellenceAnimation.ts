import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { useRef, useState } from "react";
import { auxilliaryAnimations } from "#/utils/animations";

const { animateExcellence } = auxilliaryAnimations;
export default function useExcellenceAnimation() {
	const containerRef = useRef<HTMLDivElement>(null);
	const textWrapperRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef(null);

	const { innerWidth, innerHeight } = useWindowSize();

	const [containerWidth, setContainerWidth] = useState<number>();
	useIsomorphicLayoutEffect(() => {
		setContainerWidth(innerWidth * 2);
	}, [innerWidth]);

	useIsomorphicLayoutEffect(() => {
		if (textWrapperRef.current && containerWidth && containerRef.current && imageRef.current) {
			const tl = animateExcellence({
				sectionWrapper: containerRef.current,
				textWrapper: textWrapperRef.current,
				image: imageRef.current,
			});

			ScrollTrigger.refresh();

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, [containerWidth, innerWidth]);

	useIsomorphicLayoutEffect(() => {
		if (textWrapperRef.current) {
			const svg = textWrapperRef.current.querySelector("svg");
			const svgHeight = svg?.clientHeight as number;

			if (innerHeight > innerWidth && svgHeight < innerHeight) {
				// All is well
				setContainerWidth(3290);
			}
		}
	}, [innerHeight, containerWidth, innerWidth]);
	return {
		containerRef,
		containerWidth,
		textWrapperRef,
		imageRef,
	};
}
