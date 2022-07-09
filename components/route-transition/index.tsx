import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { Noise } from "#/components";
import { usePageTransitionContext } from "#/state";

export default function Routetransition({ noiseRef, layersWrapperRef }) {
    // const router = useRouter();
    // const containerRef = useRef(null);

    // const layersWrapperRef = useRef<HTMLDivElement>(null);
    // const noiseRef = useRef<HTMLDivElement>(null);

    // const { setTransitionTimeline } = usePageTransitionContext();
    // function displayLoader() {
    //     const tl = gsap.timeline();

    //     if (layersWrapperRef.current) {
    //         tl.to(layersWrapperRef.current?.children[0], { scaleY: 1 })
    //             .to(layersWrapperRef.current?.children[1], { scaleY: 1 }, "<")
    //             .to(noiseRef.current, { opacity: 1, visibility: "visible" });

    //         //reverse it
    //         tl.to(noiseRef.current, { opacity: 0, visibility: "hidden" })
    //             .to(layersWrapperRef.current?.children[0], { scaleY: 0 })
    //             .to(layersWrapperRef.current?.children[1], { scaleY: 0 }, "<");
    //         setTransitionTimeline(tl);
    //     }
    // }

    // useEffect(() => {
    //     router.events.on("routeChangeStart", displayLoader);
    //     return () => {
    //         router.events.off("routeChangeStart", displayLoader);
    //     };
    // }, [router]);

    return (
        <div className={styles.container}>
            <Noise noiseRef={noiseRef} containerStyles={{ zIndex: 1001, opacity: 0, visibility: "hidden" }} />
            <div className={styles.layers} ref={layersWrapperRef}>
                <div className={styles.layer}></div>
                <div className={styles.layer}></div>
            </div>
        </div>
    );
}
