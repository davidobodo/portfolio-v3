import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { Logo, Noise } from "#/components";

export default function Routetransition() {
    const router = useRouter();
    const containerRef = useRef(null);

    const layersWrapperRef = useRef<HTMLDivElement>(null);
    const noiseRef = useRef<HTMLDivElement>(null);

    function aniStart() {
        // const tl = gsap.timeline();

        // tl.to(containerRef.current, {
        //     scaleY: 1
        // });

        // tl.then(() => {
        //     tl.reverse();
        // });

        displayLoader();
    }

    function aniEnd() {}

    function displayLoader() {
        const tl = gsap.timeline();

        tl.to(layersWrapperRef.current?.children[0], { scaleY: 1 })
            .to(layersWrapperRef.current?.children[1], { scaleY: 1 }, "<")
            .to(noiseRef.current, {
                opacity: 1,
                visibility: "visible"
            });

        tl.then(() => {
            tl.reverse();
        });
    }

    function removeLoader() {}

    useEffect(() => {
        router.events.on("routeChangeStart", aniStart);
        router.events.on("routeChangeComplete", aniEnd);
        router.events.on("routeChangeError", aniEnd);
        return () => {
            router.events.off("routeChangeStart", aniStart);
            router.events.off("routeChangeComplete", aniEnd);
            router.events.off("routeChangeError", aniEnd);
        };
    }, [router]);

    return (
        <div className={styles.container} ref={containerRef} djak="route-wrapper">
            {/* <button onClick={displayLoader}>PLAY WHAT I WANT</button> */}
            <Noise noiseRef={noiseRef} containerStyles={{ zIndex: 1001, opacity: 0, visibility: "hidden" }} />
            <div className={styles.layers} ref={layersWrapperRef}>
                <div className={styles.layer}></div>
                <div className={styles.layer}></div>
            </div>
        </div>
    );
}
