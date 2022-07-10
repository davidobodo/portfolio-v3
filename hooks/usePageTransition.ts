import { useRef, useEffect } from "react";
import gsap from "gsap";
import { usePageTransitionContext } from "../state";
import Router from "next/router";

export default function usePageTransition() {
    const layersWrapperRef = useRef<HTMLDivElement>(null);
    const noiseRef = useRef<HTMLDivElement>(null);

    const { setTransitionTimeline, timeline } = usePageTransitionContext();

    const onRouteChange = (path: string) => {
        if (timeline) {
            timeline.play();
            timeline.then(() => {
                Router.push(path);
            });
        } else {
            Router.push(path);
        }
    };

    const createPageTransition = () => {
        const tl = gsap.timeline({ paused: true });

        if (layersWrapperRef.current) {
            tl.to(layersWrapperRef.current?.children[0], { scaleY: 1 })
                .to(layersWrapperRef.current?.children[1], { scaleY: 1 }, "<")
                .to(noiseRef.current, { opacity: 1, visibility: "visible" });

            setTransitionTimeline(tl);
        }
    };

    useEffect(() => {
        if (!timeline) {
            createPageTransition();
        }
    }, [timeline]);

    return {
        layersWrapperRef,
        noiseRef,
        onRouteChange
    };
}
