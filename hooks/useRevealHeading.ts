import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function useRevealHeading() {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (headingRef.current) {
            const titleTexts = headingRef.current.querySelectorAll("span>span");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                    toggleActions: "restart pause pause reverse"
                }
            });
            tl.to(titleTexts, {
                y: 0
            })
                .to(titleTexts[0], { x: 160 })
                .to(titleTexts[1], { x: 0 }, "<")
                .to(titleTexts[2], { x: 160 }, "<");
        }
    }, [headingRef]);

    return {
        headingRef
    };
}
