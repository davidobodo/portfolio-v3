import { usePageScrollProgress } from "#/hooks";
import styles from "./styles.module.scss";
export default function TopProgress() {
	const { scrollProgress } = usePageScrollProgress();
	return <div className={styles.topprogress} style={{ width: scrollProgress + "%" }}></div>;
}
