import { useState, useEffect, Ref, useRef, RefObject } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { ScrollAlert } from "../../index";

type Props = {
    bannerRef: RefObject<HTMLDivElement>;
    windowInnerHeight: number | null;
    windowInnerWidth: number | null;
    fieldRef: Ref<HTMLHeadingElement>;
    firstSubFieldRef: Ref<HTMLDivElement>;
    secondSubFieldRef: Ref<HTMLDivElement>;
    nameRef: Ref<HTMLHeadingElement>;
    profilePicRef: Ref<HTMLDivElement>;
    mobilePicRef: Ref<HTMLDivElement>;
    scrollIndicatorRef: Ref<HTMLDivElement>;
};

export default function Banner({
    bannerRef,
    windowInnerHeight,
    fieldRef,
    firstSubFieldRef,
    secondSubFieldRef,
    nameRef,
    profilePicRef,
    windowInnerWidth,
    scrollIndicatorRef,
    mobilePicRef
}: Props) {
    const [bannerHeight, setBannerHeight] = useState<number>();

    // Alter the viewbox so that our svg animation doesnt overflow outside the container
    const [svgViewbox, setSvgViewbox] = useState("0 0 350 355");
    useEffect(() => {
        if (windowInnerWidth) {
            if (windowInnerWidth > 1536) {
                setSvgViewbox("0 0 380 500");
            } else if (windowInnerWidth > 768) {
                setSvgViewbox("0 0 250 350");
            } else {
                setSvgViewbox("0 0 350 355");
            }
        }
    }, [windowInnerWidth]);

    useEffect(() => {
        // Mainly because of the 100vh issue on mobile devices
        if (windowInnerHeight) {
            setBannerHeight(windowInnerHeight);
        }
    }, []);

    const blackCoverRef = useRef(null);
    useEffect(() => {
        // Only create this timeline when the correct banner height has been set
        if (bannerHeight === window.innerHeight) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: bannerRef.current,
                    toggleActions: "restart pause reverse pause",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                    pinSpacing: false
                }
            });
            tl.to(blackCoverRef.current, {
                scaleY: window.innerHeight / 2,
                transformOrigin: "top"
            });
        }
    }, [bannerHeight]);

    const fieldA = "SOFTWARE";
    const fieldB = "DEVELOPER";
    const nameA = "DAVID";
    const nameB = "OBODO";

    return (
        <div className={styles.banner} ref={bannerRef} style={{ minHeight: bannerHeight + "px" }}>
            <div className={styles.blackCover} ref={blackCoverRef}></div>

            <div className={styles.topSection}>
                <div className={styles.topSectionTexts}>
                    <h1 ref={fieldRef} className={styles.bigText}>
                        <span className={styles.line}>
                            {fieldA.split("").map((item, i) => {
                                return (
                                    <span className={styles.letterwrapper} key={i}>
                                        <span data-key="letter">{item}</span>
                                    </span>
                                );
                            })}
                        </span>
                        <span className={styles.line}>
                            {fieldB.split("").map((item, i) => {
                                return (
                                    <span className={styles.letterwrapper} key={i}>
                                        <span data-key="letter">{item}</span>
                                    </span>
                                );
                            })}
                        </span>
                    </h1>
                    <div className={styles.subfieldwrapper}>
                        <div className={styles.subfieldtext} ref={firstSubFieldRef}>
                            <span></span> Front end addicted
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.desktopImage} ref={profilePicRef}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox={svgViewbox}>
                            <polyline
                                points="0,154 131,0 0,348 269,0 0,562 437,0 
	0,766 565,14 0,1062 719,0 289,1062 843,0 543,1062 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,162 1299,1062 1500,830"
                            />
                        </svg>
                    </div>
                    <div className={styles.mobileImage} ref={mobilePicRef}></div>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <ScrollAlert containerRef={scrollIndicatorRef} containerStyles={{ opacity: 0 }} />

                <div className={styles.bottomSectionText}>
                    <div className={styles.subfieldwrapper}>
                        <div className={styles.subfieldtext} ref={secondSubFieldRef}>
                            <span></span> Full stack capable
                        </div>
                    </div>
                    <h1 ref={nameRef} className={styles.bigText}>
                        <span className={styles.line}>
                            {nameA.split("").map((item, i) => {
                                return (
                                    <span className={styles.letterwrapper} key={i}>
                                        <span data-key="letter">{item}</span>
                                    </span>
                                );
                            })}
                        </span>
                        <span className={styles.line}>
                            {nameB.split("").map((item, i) => {
                                return (
                                    <span className={styles.letterwrapper} key={i}>
                                        <span data-key="letter">{item}</span>
                                    </span>
                                );
                            })}
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
}
