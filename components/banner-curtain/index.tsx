import styles from "./styles.module.scss";

export default function BannerCurtain({ containerRef }) {
    return <div className={styles.container} ref={containerRef}></div>;
}
