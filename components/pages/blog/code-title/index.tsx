import styles from "./styles.module.scss";
export default function CodeTitle({ children }: { children: JSX.Element }) {
	return <div className={styles.container}>{children}</div>;
}
