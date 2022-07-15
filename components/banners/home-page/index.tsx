import gsap from "gsap";
import { useState, useEffect, useRef, RefObject } from "react";
import styles from "./styles.module.scss";
import { ScrollAlert } from "../../index";
import Heading from "../heading";

type Props = {
    bannerRef: RefObject<HTMLDivElement>;
    windowInnerHeight: number | null;
};

export default function Banner({ bannerRef, windowInnerHeight }: Props) {
    const [bannerHeight, setBannerHeight] = useState<number>();

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
                    <div data-key="field">
                        <Heading text={fieldA} revealOrigin="left" />
                        <Heading text={fieldB} revealOrigin="left" />
                    </div>
                    <div className={styles.subfieldwrapper}>
                        <div className={styles.subfieldtext} data-key="sub-field">
                            <span></span> Front end addicted
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.desktopImage} data-key="desktop-image">
                        <span></span>
                    </div>
                    <div className={styles.mobileImage} data-key="mobile-image"></div>
                </div>
            </div>

            <div className={styles.bottomSection}>
                <ScrollAlert containerStyles={{ opacity: 0 }} />

                <div className={styles.bottomSectionText}>
                    <div className={styles.subfieldwrapper}>
                        <div className={styles.subfieldtext} data-key="sub-field">
                            <span></span> Full stack capable
                        </div>
                    </div>

                    <div data-key="name">
                        <Heading text={nameA} revealOrigin="right" />
                        <Heading text={nameB} revealOrigin="right" />
                    </div>
                </div>
            </div>
        </div>
    );
}
