import gsap from "gsap";
import { useRef, useEffect } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
export default function useRevealHeading({ windowInnerWidth }: { windowInnerWidth: number }) {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useIsomorphicLayoutEffect(() => {
        if (headingRef.current) {
            const titleTexts = headingRef.current.querySelectorAll("span>span");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                    end: "top center",
                    toggleActions: "restart complete pause reverse",
                    scrub: true
                }
            });
            tl.to(titleTexts, {
                y: 0
            })
                .to(titleTexts[0], { x: windowInnerWidth > 768 ? 160 : 0 })
                .to(titleTexts[1], { x: 0 }, "<")
                .to(titleTexts[2], { x: windowInnerWidth > 768 ? 160 : 0 }, "<");
        }
    }, [headingRef, windowInnerWidth]);

    return {
        headingRef
    };
}
