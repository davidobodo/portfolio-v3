import styles from "./styles.module.scss";
export default function CodeTitle({ children }) {
	return <div className={styles.container}>{children}</div>;
}
