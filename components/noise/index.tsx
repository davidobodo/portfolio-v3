import styles from "./styles.module.scss";
import { Ref } from "react";
export default function Noise({
    containerStyles,
    noiseRef
}: {
    containerStyles?: Record<string, string | number>;
    noiseRef?: Ref<HTMLDivElement>;
}) {
    return <div className={styles.noise} style={{ ...containerStyles }} ref={noiseRef}></div>;
}
