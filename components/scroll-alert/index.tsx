import styles from "./styles.module.scss";
import { Ref } from "react";

export default function ScrollAlert({
    containerRef,
    containerStyles
}: {
    containerRef?: Ref<HTMLDivElement>;
    containerStyles?: Record<string, string | number>;
}) {
    return (
        <div className={styles.scrollAlert} ref={containerRef} style={{ ...containerStyles }}>
            <span>&#8595;</span>
            <span>Scroll</span>
        </div>
    );
}
