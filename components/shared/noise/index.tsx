import styles from "./styles.module.scss";
import { Ref } from "react";
export default function Noise({ noiseRef }: { noiseRef?: Ref<HTMLDivElement> }) {
	return <div className={styles.noise} ref={noiseRef}></div>;
}
