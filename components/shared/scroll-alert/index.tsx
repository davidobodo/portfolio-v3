import styles from "./styles.module.scss";
import { Ref } from "react";

export default function ScrollAlert({
	containerRef,
	propStyles,
}: {
	containerRef?: Ref<HTMLDivElement>;
	propStyles?: string;
}) {
	return (
		<div ref={containerRef} className={styles.scrollAlert + " " + propStyles} data-key="scroll-alert">
			<span>&#8595;</span>
			<span>Scroll</span>
		</div>
	);
}
