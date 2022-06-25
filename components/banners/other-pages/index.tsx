import styles from "./styles.module.scss";
import { ScrollAlert } from "../../index";
import { Ref } from "react";
export default function Banner({ texts, textWrapperRef }: { texts: string[]; textWrapperRef: Ref<HTMLDivElement> }) {
    return (
        <>
            <div className={styles.container}>
                <div ref={textWrapperRef}>
                    {texts.map((item, i) => {
                        return (
                            <h1 key={i}>
                                <span className={styles.lineWrapper}>
                                    {item.split("").map((letter) => {
                                        return (
                                            <span className={styles.letterWrapper}>
                                                <span className={styles.letter}>{letter}</span>
                                            </span>
                                        );
                                    })}
                                    {i % 2 !== 0 && <span className={styles.bg}></span>}
                                </span>
                            </h1>
                        );
                    })}
                </div>
                <div className={styles.bottom}>
                    <div></div>
                    <ScrollAlert />
                </div>
            </div>
            <div className={styles.placeholder}></div>
        </>
    );
}
