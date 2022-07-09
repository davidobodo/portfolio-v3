import { useRef } from "react";
import gsap from "gsap";
import { usePageTransitionContext } from "#/state";

export default function usePageTransition() {
    const layersWrapperRef = useRef<HTMLDivElement>(null);
    const noiseRef = useRef<HTMLDivElement>(null);

    const { setTransitionTimeline } = usePageTransitionContext();
    function displayLoader() {
        const tl = gsap.timeline();

        if (layersWrapperRef.current) {
            tl.to(layersWrapperRef.current?.children[0], { scaleY: 1 })
                .to(layersWrapperRef.current?.children[1], { scaleY: 1 }, "<")
                .to(noiseRef.current, { opacity: 1, visibility: "visible" });

            //reverse it
            tl.to(noiseRef.current, { opacity: 0, visibility: "hidden" })
                .to(layersWrapperRef.current?.children[0], { scaleY: 0 })
                .to(layersWrapperRef.current?.children[1], { scaleY: 0 }, "<");
            setTransitionTimeline(tl);
        }
    }

    return {
        layersWrapperRef,
        noiseRef,
        displayLoader
    };
}
