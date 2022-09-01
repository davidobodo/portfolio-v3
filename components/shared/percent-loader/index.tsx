import styles from "./styles.module.scss";

export default function PercentLoader() {
	return (
		<div id="blocker" className={styles.percentLoader}>
			<span>56%</span>
		</div>
	);
}
