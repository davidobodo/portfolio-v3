import styles from "./styles.module.scss";

export default function Highlight({ children }: { children: JSX.Element }) {
	return <div className={styles.container}>{children}</div>;
}
