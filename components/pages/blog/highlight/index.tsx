import styles from "./styles.module.scss";

export default function Highlight({ children }) {
	return <div className={styles.container}>{children}</div>;
}
