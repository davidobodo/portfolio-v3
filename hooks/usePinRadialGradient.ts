import gsap from "gsap";
import { useRef, RefObject } from "react";
import { usePageTransitionsContext } from "#/context";
import { useIsomorphicLayoutEffect } from ".";

export default function usePinRadialGradient({ darkSectionRef }: { darkSectionRef: RefObject<HTMLDivElement> }) {
	const darkSectionRadialGradientRef = useRef(null);

	const { setRadialGradientAnimation } = usePageTransitionsContext();

	//-------------------------------------------------
	// PIN RADIAL GRADIENT TO BLACK SECTION CENTER
	//-------------------------------------------------

	useIsomorphicLayoutEffect(() => {
		if (darkSectionRef.current) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: darkSectionRef.current,
					start: "top top",
					end: "bottom bottom",
					toggleActions: "restart pause reverse pause",
					endTrigger: darkSectionRef.current,
					pin: darkSectionRadialGradientRef.current,
					// markers: true,
				},
			});

			setRadialGradientAnimation(tl);

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, [darkSectionRef]);

	const recalculateGradient = () => {
		// timeline.scrollTrigger.refresh();
	};

	return {
		darkSectionRef,
		darkSectionRadialGradientRef,
		recalculateGradient,
	};
}
