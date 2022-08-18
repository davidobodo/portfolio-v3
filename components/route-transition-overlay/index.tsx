import styles from "./styles.module.scss";
import { Ref, useRef } from "react";
import { Logo } from "#/components";

export default function Routetransition({
	layersWrapperRef,
	loadingTextsRef,
}: {
	layersWrapperRef?: Ref<HTMLDivElement>;
	loadingTextsRef?: Ref<HTMLDivElement>;
}) {
	const texts = useRef(["Loading...", `It's coming...`, "Easy there tiger...", "Just some slow network..."]).current;

	return (
		<div className={styles.container}>
			<Logo variant="initials" propStyles={styles.logo} />
			<div className={styles.textWrapper} ref={loadingTextsRef}>
				{texts.map((item, i) => {
					return (
						<div key={i}>
							<span>{item}</span>
						</div>
					);
				})}
			</div>
			<div className={styles.layers} ref={layersWrapperRef} data-key="layers">
				<div className={styles.layer} data-key="layer"></div>
				<div className={styles.layer} data-key="layer"></div>
			</div>
		</div>
	);
}
