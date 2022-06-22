import { Ref } from "react";
import styles from "./styles.module.scss";
import { ABOUT_NOTE } from "#/constants";
export default function About({ aboutListRef }: { aboutListRef: Ref<HTMLUListElement> }) {
    return (
        <div className={styles.container} id="about-section">
            <ul ref={aboutListRef}>
                {ABOUT_NOTE.map((text, i) => {
                    return <li key={i}>{text}</li>;
                })}
            </ul>
        </div>
    );
}
