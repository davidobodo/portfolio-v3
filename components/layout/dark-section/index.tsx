import styles from "./styles.module.scss";
import { DarkRadialGradient, Noise } from "../../index";
import { usePinRadialGradient } from "#/hooks";
import { RefObject } from "react";
export default function Layout({
	children,
	darkSectionRef,
}: {
	children: JSX.Element;
	darkSectionRef: RefObject<HTMLDivElement>;
}) {
	const { darkSectionRadialGradientRef } = usePinRadialGradient({
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
