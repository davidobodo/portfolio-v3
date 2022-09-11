import styles from "./styles.module.scss";

export default function PreLoader() {
	return (
		<div id="blocker" className={styles.wrapper}>
			<div className={styles.container}>
				<p>Loading Assets</p>
				<Ellipsis />
			</div>
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
