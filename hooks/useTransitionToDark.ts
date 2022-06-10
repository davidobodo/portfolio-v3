import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function useTransitionToDark({ bannerRef }: { bannerRef: React.RefObject<HTMLDivElement> }) {
    const blackCoverRef = useRef(null);

    useEffect(() => {
        if (bannerRef.current) {
            //TODO: Sometimes this gets janky due to the fact that it doesnt go back to its initial position
            // const tl = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: bannerRef.current,
            //         toggleActions: "restart pause reverse pause",
            //         start: "top top",
            //         end: "bottom top",
            //         scrub: true,
            //         pin: true,
            //         pinSpacing: false
            //     }
            // });
            // tl.to(blackCoverRef.current, {
            //     scaleY: window.innerHeight / 2,
            //     transformOrigin: "top"
            // });
        }
    }, [bannerRef]);
    return {
        bannerRef,
        blackCoverRef
    };
}
