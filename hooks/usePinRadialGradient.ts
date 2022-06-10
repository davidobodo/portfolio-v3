import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function usePinRadialGradient() {
    const darkSectionRef = useRef(null);
    const darkSectionRadialGradientRef = useRef(null);

    //-------------------------------------------------
    // PIN RADIAL GRADIENT TO BLACK SECTION CENTER
    //-------------------------------------------------
    useEffect(() => {
        if (darkSectionRef.current) {
            gsap.to(
                {},
                {
                    scrollTrigger: {
                        trigger: darkSectionRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        toggleActions: "restart pause reverse pause",
                        endTrigger: darkSectionRef.current,
                        pin: darkSectionRadialGradientRef.current
                    }
                }
            );
        }
    }, [darkSectionRef]);

    return {
        darkSectionRef,
        darkSectionRadialGradientRef
    };
}
