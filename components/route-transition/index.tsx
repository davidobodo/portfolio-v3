import styles from "./styles.module.scss";
import { Noise } from "#/components";
import { Ref } from "react";

export default function Routetransition({
    noiseRef,
    layersWrapperRef
}: {
    noiseRef: Ref<HTMLDivElement>;
    layersWrapperRef: Ref<HTMLDivElement>;
}) {
    return (
        <div className={styles.container}>
            <Noise noiseRef={noiseRef} containerStyles={{ zIndex: 1001, opacity: 0, visibility: "hidden" }} />
            <div className={styles.layers} ref={layersWrapperRef}>
                <div className={styles.layer}></div>
                <div className={styles.layer}></div>
            </div>
        </div>
    );
}
