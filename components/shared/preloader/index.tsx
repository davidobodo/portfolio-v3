import styles from "./styles.module.scss";

export default function PreLoader() {
	return (
		<div id="blocker" className={styles.percentLoader}>
			<Ellipsis />
		</div>
	);
}

function Ellipsis() {
	return (
		<div className={styles.ellipsis}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
