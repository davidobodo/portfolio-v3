import styles from "./styles.module.scss";
import { Ref } from "react";
import { Logo } from "#/components";

export default function RouteTransitionOverlay({ layersWrapperRef }: { layersWrapperRef?: Ref<HTMLDivElement> }) {
	return (
		<div className={styles.container}>
			<Logo variant="initials" propStyles={styles.logo} />
			<div className={styles.layers} ref={layersWrapperRef} data-key="layers">
				<div className={styles.layer} data-key="layer"></div>
				<div className={styles.layer} data-key="layer"></div>
			</div>
		</div>
	);
}
