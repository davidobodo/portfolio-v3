import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { homePageAnimations } from "#/utils/animations/atoms";

const { revealHeading } = homePageAnimations;
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
	}, [headingRef, windowInnerWidth]);

	return {
		headingRef,
	};
}
