import styles from "./styles.module.scss";
import { Ref } from "react";

export default function DarkRadialGradient({
    containerRef,
    containerStyles
}: {
    containerRef?: Ref<HTMLDivElement>;
    containerStyles?: Record<string, string | number>;
}) {
    return (
        <div
            className={styles.container}
            ref={containerRef}
            style={{ ...containerStyles }}
            data-key="radial-gradient"
        ></div>
    );
}
