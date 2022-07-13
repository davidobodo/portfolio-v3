import styles from "./styles.module.scss";
import { Ref } from "react";

export default function Routetransition({ layersWrapperRef }: { layersWrapperRef: Ref<HTMLDivElement> }) {
    return (
        <div className={styles.container}>
            <div className={styles.layers} ref={layersWrapperRef}>
                <div className={styles.layer} data-key="layer"></div>
                <div className={styles.layer} data-key="layer"></div>
            </div>
        </div>
    );
}
