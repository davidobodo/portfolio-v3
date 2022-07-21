import styles from "./styles.module.scss";
// import { IMAGES } from "#/constants";
import { Ref, useEffect, useRef } from "react";
import { expandImage } from "#/utils/animations/atoms";

export default function FirstThought({ textWrapperRef }: { textWrapperRef: Ref<HTMLDivElement> }) {
    // const imageRef = useRef<HTMLImageElement>(null);

    // useEffect(() => {
    //     if (imageRef.current) {
    //         expandImage(imageRef.current);
    //     }
    // }, []);

    const firstParagraph = [
        {
            sentence: "The things we make and the ",
            color: "ash"
        },
        {
            sentence: "quality of the work",
            color: "white"
        },
        {
            sentence: "we do reveal someting about",
            color: "ash"
        },
        {
            sentence: "who we are,",
            color: "white"
        },
        {
            sentence: "so I always strive to",
            color: "ash"
        },
        {
            sentence: "put excellence into it.",
            color: "white"
        }
    ];

    const secondParagraph = [
        {
            sentence: "From writing",
            color: "ash"
        },
        {
            sentence: "clean and scalable code",
            color: "white"
        },
        {
            sentence: "for posterity sake,",
            color: "ash"
        },
        {
            sentence: "to using the most",
            color: "white"
        },
        {
            sentence: "efficient algorithms",
            color: "ash"
        },
        {
            sentence: "to ensure",
            color: "white"
        },
        {
            sentence: "to ensure",
            color: "ash"
        },
        {
            sentence: `optimal performance because "Speed is king"`,
            color: "white"
        }
    ];

    return (
        <>
            <div className={styles.container}>
                <div className={styles.paragraphWrapper} ref={textWrapperRef}>
                    <p className={styles.paragraph}>
                        {firstParagraph.map((item, i) => {
                            const { color, sentence } = item;
                            if (color === "white") {
                                return (
                                    <>
                                        <strong>
                                            {sentence.split(" ").map((item, i) => {
                                                return (
                                                    <span className={styles.wordWrapper}>
                                                        <span className={styles.word} data-key="word">
                                                            {item}&nbsp;
                                                        </span>
                                                    </span>
                                                );
                                            })}
                                        </strong>
                                    </>
                                );
                            } else {
                                return (
                                    <>
                                        {sentence.split(" ").map((item, i) => {
                                            return (
                                                <span className={styles.wordWrapper}>
                                                    <span className={styles.word} data-key="word">
                                                        {item}&nbsp;
                                                    </span>
                                                </span>
                                            );
                                        })}
                                    </>
                                );
                            }
                        })}
                    </p>
                    <p className={styles.paragraph}>
                        {secondParagraph.map((item, i) => {
                            const { color, sentence } = item;
                            if (color === "white") {
                                return (
                                    <>
                                        <strong>
                                            {sentence.split(" ").map((item, i) => {
                                                return (
                                                    <span className={styles.wordWrapper}>
                                                        <span className={styles.word} data-key="word">
                                                            {item}&nbsp;
                                                        </span>
                                                    </span>
                                                );
                                            })}
                                        </strong>
                                    </>
                                );
                            } else {
                                return (
                                    <>
                                        {sentence.split(" ").map((item, i) => {
                                            return (
                                                <span className={styles.wordWrapper}>
                                                    <span className={styles.word} data-key="word">
                                                        {item}&nbsp;
                                                    </span>
                                                </span>
                                            );
                                        })}
                                    </>
                                );
                            }
                        })}
                    </p>
                </div>
            </div>

            {/* <div className={styles.imageWrapper}>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(https://dennissnellenberg.com/assets/img/DSC07312-2.jpg)` }}
                    // style={{ backgroundImage: `url(${IMAGES.one})` }}
                    ref={imageRef}
                ></div>
            </div> */}
        </>
    );
}
