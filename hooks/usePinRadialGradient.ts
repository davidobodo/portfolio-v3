import { useRef, useEffect, RefObject, useState } from "react";
import gsap from "gsap";
import { useRadialGradientAnimContent } from "#/state";

export default function usePinRadialGradient({ darkSectionRef }: { darkSectionRef: RefObject<HTMLDivElement> }) {
	const darkSectionRadialGradientRef = useRef(null);
	const [tl, setTl] = useState<gsap.core.Timeline>();

	const { timeline, setTimeline } = useRadialGradientAnimContent();

	//-------------------------------------------------
	// PIN RADIAL GRADIENT TO BLACK SECTION CENTER
	//-------------------------------------------------
	useEffect(() => {
		if (darkSectionRef.current) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: darkSectionRef.current,
					start: "top top",
					end: "bottom bottom",
					toggleActions: "restart pause reverse pause",
					endTrigger: darkSectionRef.current,
					pin: darkSectionRadialGradientRef.current,
					markers: true,
				},
			});
			// setTl(tl);
			setTimeline(tl);
		}
	}, [darkSectionRef]);

	const recalculateGradient = () => {
		timeline.scrollTrigger.refresh();
	};

	return {
		darkSectionRef,
		darkSectionRadialGradientRef,
		recalculateGradient,
	};
}
