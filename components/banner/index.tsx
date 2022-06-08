import styles from "./styles.module.scss";
import { useState, useEffect, Ref } from "react";

type Props = {
    bannerRef: Ref<HTMLDivElement>;
    windowInnerHeight: number;
    fieldRef: Ref<HTMLHeadingElement>;
    firstSubFieldRef: Ref<HTMLDivElement>;
    secondSubFieldRef: Ref<HTMLDivElement>;
    nameRef: Ref<HTMLHeadingElement>;
};

export default function Banner({
    bannerRef,
    windowInnerHeight,
    fieldRef,
    firstSubFieldRef,
    secondSubFieldRef,
    nameRef
}: Props) {
    const [bannerHeight, setBannerHeight] = useState<number>();
    useEffect(() => {
        if (windowInnerHeight) {
            setBannerHeight(windowInnerHeight);
        }
    }, [windowInnerHeight]);

    const fieldA = "SOFTWARE";
    const fieldB = "DEVELOPER";
    const nameA = "DAVID";
    const nameB = "OBODO";

    return (
        <div className={styles.banner} ref={bannerRef} style={{ height: bannerHeight + "px" }}>
            <div className={styles.topSection}>
                <div className={styles.topSectionTexts}>
                    <h1 ref={fieldRef} className={styles.bigText}>
                        <span className={styles.line}>
                            {fieldA.split("").map((item, i) => {
                                return (
                                    <span className={styles.letterwrapper} key={i}>
                                        <span>{item}</span>
                                    </span>
                                );
                            })}
                        </span>
                        <span className={styles.line}>
                            {fieldB.split("").map((item, i) => {
                                return (
                                    <span className={styles.letterwrapper} key={i}>
                                        <span>{item}</span>
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

                <div className={styles.image}></div>
                {/* 
                        <div className="banner-2__top-section__right-section">
                            <div
                                className="image"
                                style={{
                                    backgroundImage:
                                        "url(https://images.unsplash.com/photo-1595065733126-085c7ee07de6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwc2l0dGluZyUyMG9uJTIwY2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800)"
                                }}
                            ></div>
                        </div> */}
                {/* <ImageStripped scribbleImgRef={scribbleImgRef} /> */}
            </div>
            <div className={styles.bottomSection}>
                <div className={styles.scrollAlert}>
                    <img src="/images/arrow.webp" alt="" />
                    <span>Scroll</span>
                </div>

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
                                        <span className="letter">{item}</span>
                                    </span>
                                );
                            })}
                        </span>
                        <span className={styles.line}>
                            {nameB.split("").map((item, i) => {
                                return (
                                    <span className={styles.letterwrapper} key={i}>
                                        <span className="letter">{item}</span>
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
