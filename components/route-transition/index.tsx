import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { Noise } from "#/components";

export default function Routetransition() {
    const router = useRouter();
    const containerRef = useRef(null);

    const layersWrapperRef = useRef<HTMLDivElement>(null);
    const noiseRef = useRef<HTMLDivElement>(null);

    const [tl, setTl] = useState<gsap.core.Timeline>();

    function displayLoader() {
        const tl = gsap.timeline();

        if (layersWrapperRef.current) {
            tl.to(layersWrapperRef.current?.children[0], { scaleY: 1 })
                .to(layersWrapperRef.current?.children[1], { scaleY: 1 }, "<")
                .to(noiseRef.current, {
                    opacity: 1,
                    visibility: "visible"
                });
            setTl(tl);

            tl.then(() => {
                tl.reverse();
            });
        }
    }

    useEffect(() => {
        router.events.on("routeChangeStart", displayLoader);
        return () => {
            router.events.off("routeChangeStart", displayLoader);
        };
    }, [router]);

    return (
        <div className={styles.container} ref={containerRef}>
            <Noise noiseRef={noiseRef} containerStyles={{ zIndex: 1001, opacity: 0, visibility: "hidden" }} />
            <div className={styles.layers} ref={layersWrapperRef}>
                <div className={styles.layer}></div>
                <div className={styles.layer}></div>
            </div>
        </div>
    );
}
