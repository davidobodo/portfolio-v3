import styles from "./styles.module.scss";
import { Ref } from "react";

export default function ThoughtTwo({ textWrapperRef }: { textWrapperRef: Ref<HTMLDivElement> }) {
    return (
        <div className={styles.container}>
            <div></div>
            <div className={styles.textWrapper} ref={textWrapperRef}>
                <div className={styles.paragraph}>
                    <div className={styles.textLine}>
                        <span>
                            {" "}
                            Truth is the life of a programmer requires one to <strong>learn new things </strong>
                            everyday, cause technology keeps changing at a <strong>very fast pace.</strong>
                        </span>
                    </div>
                </div>

                <div className={styles.paragraph}>
                    <div className={styles.textLine}>
                        <span>
                            {" "}
                            I have therefore embraced the concept of being a <strong>life long learner. </strong>
                            Learn to solve what ever problem is encountered, ain&quot;t that why
                            <strong> &quot;Googling&quot; is almost our best friend 😅</strong>
                            <strong>?</strong>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
