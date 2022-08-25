import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { useRef, useState } from "react";
import { auxilliaryAnimations } from "#/utils/animations";

const { animateExcellence } = auxilliaryAnimations;
export default function useExcellenceAnimation() {
	const { innerWidth, innerHeight } = useWindowSize();
	const containerRef = useRef<HTMLDivElement>(null);
	const containerRefSelector = gsap.utils.selector(containerRef);
	const [containerWidth, setContainerWidth] = useState<number>();

	useIsomorphicLayoutEffect(() => {
		setContainerWidth(innerWidth * 2);
	}, [innerWidth]);

	useIsomorphicLayoutEffect(() => {
		if (containerRef.current && containerWidth) {
			const svg = containerRef.current.querySelector("svg");
			const svgHeight = svg?.clientHeight as number;

			if (svgHeight < innerHeight) {
				setContainerWidth(3590);
			}
		}
	}, [innerHeight, containerWidth]);

	useIsomorphicLayoutEffect(() => {
		if (containerWidth && containerRef.current) {
			const text = containerRefSelector<HTMLDivElement>('[data-key="text"]');
			const image = containerRefSelector<HTMLDivElement>('[data-key="image"]');
			const scroll = containerRefSelector<HTMLDivElement>('[data-key="container-inner"]');
			const tl = animateExcellence({
				sectionWrapper: containerRef.current,
				textWrapper: text[0],
				sectionWrapperInner: scroll[0],
				image: image[0],
				innerWidth,
			});

			ScrollTrigger.refresh();

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, [containerWidth, innerWidth]);

	return {
		containerRef,
		containerWidth,
	};
}
