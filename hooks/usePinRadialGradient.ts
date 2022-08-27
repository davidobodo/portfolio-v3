import { useRef, RefObject } from "react";
import { usePageTransitionsContext } from "#/context";
import { useIsomorphicLayoutEffect } from ".";
import { otherSharedAnimations } from "#/utils/animations";

const { pinRadialGradient } = otherSharedAnimations;

export default function usePinRadialGradient({
	darkSectionRef,
	bannerHeight,
}: {
	darkSectionRef: RefObject<HTMLDivElement>;
	bannerHeight?: number;
}) {
	const darkSectionRadialGradientRef = useRef(null);
	const { setRadialGradientAnimation } = usePageTransitionsContext();

	useIsomorphicLayoutEffect(() => {
		if (darkSectionRef.current && bannerHeight && darkSectionRadialGradientRef.current) {
			const anim = pinRadialGradient({
				section: darkSectionRef.current,
				gradient: darkSectionRadialGradientRef.current,
			});

			setRadialGradientAnimation(anim);
			return () => {
				anim.scrollTrigger?.kill();
			};
		}
	}, [bannerHeight]);

	return {
		darkSectionRef,
		darkSectionRadialGradientRef,
	};
}
