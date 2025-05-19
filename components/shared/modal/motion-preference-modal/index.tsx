import styles from "./styles.module.scss";
import { ModalWrapper } from "#/components";
import { Ref } from "react";

interface Props {
	isOpen: boolean;
	onSelect: (preference: "enabled" | "disabled") => void;
	modalRef?: Ref<HTMLDivElement>;
}

export default function MotionPreferenceModal({ isOpen, onSelect, modalRef }: Props) {
	return (
		<ModalWrapper show={isOpen} modalRef={modalRef}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h2 className={styles.heading}>Enable Animations?</h2>
					<p className={styles.description}>
						Would you like to experience this portfolio with animations and motion effects? You can always change this
						preference later.
					</p>
					<div className={styles.actions}>
						<button className={styles.yes} onClick={() => onSelect("enabled")}>
							Yes, enable
						</button>
						<button className={styles.no} onClick={() => onSelect("disabled")}>
							No, show static
						</button>
					</div>
				</div>
			</div>
		</ModalWrapper>
	);
}
