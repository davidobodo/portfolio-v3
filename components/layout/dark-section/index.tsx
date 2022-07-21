import styles from "./styles.module.scss";
import { DarkRadialGradient, Noise } from "../../index";
import { usePinRadialGradient } from "#/hooks";
export default function Layout({ children }: { children: JSX.Element }) {
    const { darkSectionRef, darkSectionRadialGradientRef } = usePinRadialGradient();
    return (
        <div className={styles.container} ref={darkSectionRef}>
            <div className={styles.content}>
                {children}
                <Noise />
            </div>

            <DarkRadialGradient containerRef={darkSectionRadialGradientRef} />
        </div>
    );
}
