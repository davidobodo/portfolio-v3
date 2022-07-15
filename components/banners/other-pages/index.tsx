import styles from "./styles.module.scss";
import { ScrollAlert, Logo } from "../../index";
import { Ref, RefObject, useRef } from "react";
import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "#/hooks";
export default function Banner({
    texts,
    textWrapperRef,
    scrollIndicatorRef
}: {
    texts: string[];
    textWrapperRef: RefObject<HTMLDivElement>;
    scrollIndicatorRef: Ref<HTMLDivElement>;
}) {
    const blackCoverRef = useRef(null);
    const bannerRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        if (bannerRef.current && blackCoverRef.current && textWrapperRef.current) {
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
            }).to(textWrapperRef.current, { opacity: 0 }, "<");
        }
    }, [bannerRef.current, blackCoverRef.current]);
    return (
        <>
            <div className={styles.container} ref={bannerRef}>
                <div className={styles.blackCover} ref={blackCoverRef}></div>
                <Logo
                    color="#000"
                    style={{
                        position: "absolute",
                        top: "4rem"
                    }}
                />

                <div ref={textWrapperRef}>
                    {texts.map((item, i) => {
                        return (
                            <h1 key={i}>
                                <span className={styles.lineWrapper}>
                                    {item.split("").map((letter, i) => {
                                        return (
                                            <span className={styles.letterWrapper} key={i}>
                                                <span className={styles.letter} data-key="letter">
                                                    {letter}
                                                </span>
                                            </span>
                                        );
                                    })}
                                    {i % 2 !== 0 && <span className={styles.bg} data-key="bg"></span>}
                                </span>
                            </h1>
                        );
                    })}
                </div>
                <div className={styles.bottom}>
                    <div></div>
                    <ScrollAlert containerRef={scrollIndicatorRef} containerStyles={{ opacity: 0 }} />
                </div>
            </div>
        </>
    );
}
