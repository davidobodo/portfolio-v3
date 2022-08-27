import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { otherHomeSectionsAnimations } from "#/utils/animations";

const { revealHeading } = otherHomeSectionsAnimations;

export default function useRevealHeading({ windowInnerWidth }: { windowInnerWidth: number }) {
	const headingRef = useRef<HTMLHeadingElement>(null);

	useIsomorphicLayoutEffect(() => {
		if (headingRef.current) {
			const titleTexts = headingRef.current.querySelectorAll("span>span");

			const tl = revealHeading({
				container: headingRef.current,
				texts: titleTexts,
				windowInnerWidth,
			});

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, [windowInnerWidth]);

	return {
		headingRef,
	};
}
