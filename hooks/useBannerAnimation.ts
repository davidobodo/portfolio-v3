import gsap from "gsap";
import { useEffect, useRef } from "react";
import { usePageTransitionContext } from "#/state";
export default function useBannerAnimation() {
    const textWrapperRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    const { timeline } = usePageTransitionContext();

    const onPageLoad = ({
        timeline,
        textWrapper,
        scrollIndicator
    }: {
        timeline: gsap.core.Timeline;
        textWrapper: HTMLDivElement;
        scrollIndicator: HTMLDivElement;
    }) => {
        timeline.reverse();
        timeline.then(() => {
            initBannerAnimation(textWrapper, scrollIndicator);
        });
    };
    useEffect(() => {
        if (textWrapperRef.current && scrollIndicatorRef.current) {
            if (timeline) {
                // Navigating from another page to this page
                onPageLoad({
                    timeline,
                    textWrapper: textWrapperRef.current,
                    scrollIndicator: scrollIndicatorRef.current
                });
            } else {
                // Navigating to this page from the url input
                removeLoader().then(() => {
                    initBannerAnimation(textWrapperRef.current, scrollIndicatorRef.current);
                });
            }
        }
    }, []);
    return {
        textWrapperRef,
        scrollIndicatorRef
    };
}

function removeLoader() {
    const tl = gsap.timeline({});

    tl.to(document.querySelectorAll("[data-key='layer']"), {
        scaleY: 0,
        delay: 1
    });
    return tl;
}

function initBannerAnimation(node: HTMLDivElement, scrollIndicatorNode: HTMLDivElement) {
    const { children } = node;
    const tl = gsap.timeline({});

    //CREATE TIMELINE ACTIONS

    tl.add(() => {
        document.querySelector("body")?.classList.add("hide");
    });

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

    tl.add(() => {
        document.querySelector("body")?.classList.remove("hide");
    });
}
