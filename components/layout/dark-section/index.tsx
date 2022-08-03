import styles from "./styles.module.scss";
import { DarkRadialGradient, Noise } from "../../index";
import { useIsomorphicLayoutEffect, usePinRadialGradient } from "#/hooks";
import { Ref } from "react";
export default function Layout({
	children,
	darkSectionRef,
}: {
	children: JSX.Element;
	darkSectionRef: Ref<HTMLDivElement>;
}) {
	const { darkSectionRadialGradientRef, recalculateGradient } = usePinRadialGradient({
		darkSectionRef,
	});

	// useIsomorphicLayoutEffect(() => {
	// 	darkSectionRef.current.height
	// }, []);
	return (
		<div className={styles.container} ref={darkSectionRef} data-key="dark-section-ref">
			<div className={styles.content}>
				{children}
				<Noise />
			</div>

			<DarkRadialGradient containerRef={darkSectionRadialGradientRef} />
		</div>
	);
}
