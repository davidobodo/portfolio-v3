import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { Logo } from "#/components";

export default function Routetransition() {
    const router = useRouter();
    const containerRef = useRef(null);

    function aniStart() {
        const tl = gsap.timeline();

        tl.to(containerRef.current, {
            scaleY: 1
        });

        tl.then(() => {
            tl.reverse();
        });
    }

    function aniEnd() {}

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
        <div className={styles.container} ref={containerRef}>
            <Logo />
        </div>
    );
}
