import styles from "./styles.module.scss";
import { ScrollAlert } from "../../index";
import { Ref } from "react";
export default function Banner({
    texts,
    textWrapperRef,
    scrollIndicatorRef
}: {
    texts: string[];
    textWrapperRef: Ref<HTMLDivElement>;
    scrollIndicatorRef: Ref<HTMLDivElement>;
}) {
    return (
        <>
            <div className={styles.container}>
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
            <div className={styles.placeholder}></div>
        </>
    );
}
