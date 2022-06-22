import styles from "./styles.module.scss";
import { Ref } from "react";

export default function DarkRadialGradient({ containerRef }: { containerRef: Ref<HTMLDivElement> }) {
    return <div className={styles.container} ref={containerRef}></div>;
}
