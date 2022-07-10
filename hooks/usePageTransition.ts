import { useRef, useEffect } from "react";
import gsap from "gsap";
import { usePageTransitionContext } from "../state";
import { useRouter } from "next/router";

export default function usePageTransition() {
    const layersWrapperRef = useRef<HTMLDivElement>(null);
    const noiseRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const { setTransitionTimeline, timeline } = usePageTransitionContext();

    const onRouteChange = (path: string) => {
        if (router.pathname === path) {
            window.scrollTo({
                behavior: "smooth",
                top: 0,
                left: 0
            });
            return;
        }
        if (timeline) {
            timeline.play();
            timeline.then(() => {
                router.push(path);
            });
        } else {
            router.push(path);
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
        onRouteChange,
        timeline
    };
}
