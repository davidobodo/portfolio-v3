import styles from "./styles.module.scss";
import { usePageScrollProgress } from "#/hooks";

export default function ProgressBar() {
	const { scrollProgress, isVisible } = usePageScrollProgress();
	return (
		<div className={isVisible ? styles.barWrapper + " " + styles.show : styles.barWrapper}>
			<div className={styles.bar} style={{ height: scrollProgress + "%" }}></div>
		</div>
	);
}
