import { useRef, RefObject } from "react";
import { useAnimationsContext } from "#/context";
import { useIsomorphicLayoutEffect } from ".";
import { otherSharedAnimations } from "#/utils/animations";
import { useRouter } from "next/router";

const { pinRadialGradient } = otherSharedAnimations;

export default function usePinRadialGradient({
	darkSectionRef,
	bannerHeight,
}: {
	darkSectionRef: RefObject<HTMLDivElement>;
	bannerHeight?: number;
}) {
	const { pathname } = useRouter();
	const darkSectionRadialGradientRef = useRef(null);
	const { setRadialGradientAnimation } = useAnimationsContext();

	useIsomorphicLayoutEffect(() => {
		//Single projects page doesnt have a banner
		if (
			(pathname === "/projects/[id]" || bannerHeight) &&
			darkSectionRef.current &&
			darkSectionRadialGradientRef.current
		) {
			const anim = pinRadialGradient({
				section: darkSectionRef.current,
				gradient: darkSectionRadialGradientRef.current,
			});

			setRadialGradientAnimation(anim);
			return () => {
				anim.scrollTrigger?.kill();
			};
		}
	}, [bannerHeight, pathname]);

	return {
		darkSectionRef,
		darkSectionRadialGradientRef,
	};
}
