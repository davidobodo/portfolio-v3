import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { useRef, useState } from "react";
import { otherHomeSectionsAnimations } from "#/utils/animations";
const { animateExcellence } = otherHomeSectionsAnimations;

export default function useExcellenceAnimation() {
	const containerRef = useRef<HTMLDivElement>(null);
	const containerRefSelector = gsap.utils.selector(containerRef);
	const { innerWidth, innerHeight } = useWindowSize();
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
			const imageFrame = containerRefSelector<HTMLDivElement>('[data-key="image-frame"]');
			const scroll = containerRefSelector<HTMLDivElement>('[data-key="container-inner"]');
			const tl = animateExcellence({
				sectionWrapper: containerRef.current,
				textWrapper: text[0],
				sectionWrapperInner: scroll[0],
				imageFrame: imageFrame[0],
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
