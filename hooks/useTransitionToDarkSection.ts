import { otherSharedAnimations } from "#/utils/animations";
import { useRef, RefObject } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";

const { transitionToDarkSection } = otherSharedAnimations;

export default function useTransitionToDarkSection({
	windowInnerWidth,
	darkSectionRef,
	bannerRef,
}: {
	windowInnerWidth: number;
	darkSectionRef: RefObject<HTMLDivElement>;
	bannerRef: RefObject<HTMLDivElement>;
}) {
	const blackCoverRef = useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		if (darkSectionRef.current && bannerRef.current && blackCoverRef.current) {
			const tl = transitionToDarkSection({
				darkSection: darkSectionRef.current,
				banner: bannerRef.current,
				blackCurtain: blackCoverRef.current,
				windowInnerWidth,
			});

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, [windowInnerWidth]);
	return {
		blackCoverRef,
	};
}
