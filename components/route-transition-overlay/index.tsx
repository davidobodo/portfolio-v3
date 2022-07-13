import styles from "./styles.module.scss";
import { Ref } from "react";
import { useRouter } from "next/router";
import { Logo } from "#/components";

export default function Routetransition({ layersWrapperRef }: { layersWrapperRef: Ref<HTMLDivElement> }) {
    const router = useRouter();
    return (
        <div className={styles.container}>
            {router.pathname === "/" && (
                <Logo
                    variant="initials"
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: "1001"
                    }}
                />
            )}
            <div className={styles.layers} ref={layersWrapperRef}>
                <div className={styles.layer} data-key="layer"></div>
                <div className={styles.layer} data-key="layer"></div>
            </div>
        </div>
    );
}
