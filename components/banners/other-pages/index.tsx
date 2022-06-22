import gsap from "gsap";
import styles from "./styles.module.scss";
import { ScrollAlert } from "../../index";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Heading from "../heading";

export default function Banner({ title, bannerRef }: { title: string }) {
    // const bannerRef = useRef(null);
    const blackCoverRef = useRef(null);
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         gsap.registerPlugin(ScrollTrigger);
    //         // if (bannerRef.current) {
    //         //     const tl = gsap.timeline({
    //         //         scrollTrigger: {
    //         //             trigger: bannerRef.current,
    //         //             toggleActions: "restart pause reverse pause",
    //         //             start: "top top",
    //         //             end: "bottom top",
    //         //             scrub: true
    //         //             // pin: true,
    //         //             // pinSpacing: false
    //         //         }
    //         //     });
    //         //     tl.to(blackCoverRef.current, {
    //         //         scaleY: window.innerHeight / 2,
    //         //         transformOrigin: "top"
    //         //     });
    //         // }
    //     }
    // }, [bannerRef.current]);

    const hrLineRef = useRef(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (bannerRef.current && titleRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: bannerRef.current
                    // toggleActions: "restart pause reverse pause",
                    // start: "top top",
                    // end: "bottom top",
                    // scrub: true,
                    // pin: true,
                    // pinSpacing: false
                }
            });

            // tl.to(hrLineRef.current, { width: "calc(100% + 10rem)", duration: 1 })
            tl.to(titleRef.current.querySelectorAll('[data-key="letter"]'), {
                x: 0,
                stagger: 0.1,
                reversed: true
            }).to(scrollIndicatorRef.current, { opacity: 1 });
        }
    }, [bannerRef.current]);

    return (
        <div className={styles.container} ref={bannerRef}>
            {/* <div className={styles.blackCover} ref={blackCoverRef}></div> */}

            <div className={styles.topSection}>
                <div className={styles.image}></div>
            </div>

            <div className={styles.bottomSection}>
                <div className={styles.titleWrapper}>
                    <ScrollAlert
                        containerRef={scrollIndicatorRef}
                        containerStyles={{ marginBottom: "1rem", opacity: 0 }}
                    />

                    <Heading text={title} revealOrigin="right" textRef={titleRef} />
                </div>
                {/* <div className={styles.hrLine} ref={hrLineRef}></div> */}
            </div>
        </div>
    );
}
