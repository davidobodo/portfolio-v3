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
        <div className={styles.scrollAlert} ref={containerRef} style={{ ...containerStyles }} data-key="scroll-alert">
            <span>&#8595;</span>
            <span>Scroll</span>
        </div>
    );
}
