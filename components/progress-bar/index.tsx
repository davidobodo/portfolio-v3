import styles from "./styles.module.scss";

export default function ProgressBar() {
	return (
		<div className={styles.barWrapper}>
			<div className={styles.bar}></div>
		</div>
	);
}
