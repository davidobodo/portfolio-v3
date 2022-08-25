import gsap from "gsap";
import { useRef, RefObject } from "react";
import { usePageTransitionsContext } from "#/context";
import { useIsomorphicLayoutEffect } from ".";

export default function usePinRadialGradient({
	darkSectionRef,
	bannerHeight,
}: {
	darkSectionRef: RefObject<HTMLDivElement>;
	bannerHeight?: number;
}) {
	const darkSectionRadialGradientRef = useRef(null);

	const { setRadialGradientAnimation } = usePageTransitionsContext();

	//-------------------------------------------------
	// PIN RADIAL GRADIENT TO BLACK SECTION CENTER
	//-------------------------------------------------

	useIsomorphicLayoutEffect(() => {
		if (darkSectionRef.current && bannerHeight) {
			const anim = gsap.to(
				{},
				{
					scrollTrigger: {
						trigger: darkSectionRef.current,
						start: "top top",
						end: "bottom bottom",
						toggleActions: "restart complete reverse none",
						// endTrigger: darkSectionRef.current,
						pin: darkSectionRadialGradientRef.current,
						// refreshPriority: 2,
					},
				}
			);

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
