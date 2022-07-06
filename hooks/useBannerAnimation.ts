import gsap from "gsap";
import { useEffect, useRef } from "react";
export default function useBannerAnimation() {
    const textWrapperRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (textWrapperRef.current && scrollIndicatorRef.current) {
            initBannerAnimation(textWrapperRef.current, scrollIndicatorRef.current);
        }
    }, []);
    return {
        textWrapperRef,
        scrollIndicatorRef
    };
}

function initBannerAnimation(node: HTMLDivElement, scrollIndicatorNode: HTMLDivElement) {
    const { children } = node;
    const tl = gsap.timeline({});

    //CREATE TIMELINE ACTIONS

    // 1. Slide in first element
    tl.to(children[0].querySelectorAll("[data-key='letter']"), { x: 0 });

    // 2. draw second elements backgorund
    tl.to(children[1].querySelectorAll("[data-key='bg']"), { width: "100%" });

    // 3. slide in second element
    tl.to(children[1].querySelectorAll("[data-key='letter']"), { x: 0 });

    // 4. slide in third element
    tl.to(children[2].querySelectorAll("[data-key='letter']"), { x: 0 });

    // 5. draw fourth elements background
    tl.to(children[3].querySelectorAll("[data-key='bg']"), { width: "100%" });

    // 6. slide in fourth element;
    tl.to(children[3].querySelectorAll("[data-key='letter']"), { x: 0 });

    tl.to(scrollIndicatorNode, { opacity: 1 });
}
