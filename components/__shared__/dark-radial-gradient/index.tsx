import styles from "./styles.module.scss";
import { Ref } from "react";

export default function DarkRadialGradient({
	containerRef,
	propStyles,
}: {
	containerRef?: Ref<HTMLDivElement>;
	propStyles?: string;
}) {
	return <div className={styles.container + " " + propStyles} ref={containerRef} data-key="radial-gradient"></div>;
}
