import { Ref } from "react";
import styles from "./styles.module.scss";
import { ABOUT_NOTE } from "#/constants";
export default function About({
    aboutListRef,
    textsList = ABOUT_NOTE
}: {
    aboutListRef: Ref<HTMLUListElement>;
    textsList?: string[];
}) {
    return (
        <div className={styles.container}>
            <ul ref={aboutListRef}>
                {textsList.map((text, i) => {
                    return <li key={i}>{text}</li>;
                })}
            </ul>
        </div>
    );
}
