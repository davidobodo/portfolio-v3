import gsap from "gsap";
import { useEffect, useRef } from "react";
import { TTimelineAction } from "#/interfaces";
export default function useBannerAnimation() {
    const textWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (textWrapperRef.current) {
            // initBannerAnimation(textWrapperRef.current);
        }
    }, []);
    return {
        textWrapperRef
    };
}

function initBannerAnimation(node: HTMLDivElement) {
    const { children } = node;
    console.log(children);
    const tl = gsap.timeline({});

    //CREATE TIMELINE ACTIONS

    // 1. Slide in first element
    tl.to(children[0].querySelectorAll("span span"), { x: 0, duration: 1 });

    // 2. draw second elements backgorund

    // 3. slide in second element
    tl.to(children[1].querySelectorAll("span span"), { x: 0, duration: 1 });

    // 4. slide in third element
    tl.to(children[2].querySelectorAll("span span"), { x: 0, duration: 1 });

    // 5. draw fourth elements background

    // 6. slide in fourth element;
    tl.to(children[3].querySelectorAll("span span"), { x: 0, duration: 1 });
}
