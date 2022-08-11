import gsap from "gsap";
import { useRef, RefObject } from "react";
import { useRadialGradientAnimContext } from "#/context";
import { useIsomorphicLayoutEffect } from ".";

export default function usePinRadialGradient({ darkSectionRef }: { darkSectionRef: RefObject<HTMLDivElement> }) {
	const darkSectionRadialGradientRef = useRef(null);

	const { setAnimation } = useRadialGradientAnimContext();

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
			// setTl(tl);
			setAnimation(tl);

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
