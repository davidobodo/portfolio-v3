import styles from "./styles.module.scss";
import { Modal, SingleProject, Noise } from "#/components";
import { Ref } from "react";

type Props = {
	selectedProjectId: string;
	modalRef: Ref<HTMLDivElement>;
	onDeselectProject: () => void;
	modalImgRef?: Ref<HTMLDivElement>;
	onGoToProject: (id: string) => void;
	isOpen: boolean;
};
export default function ProjectModal({
	selectedProjectId,
	modalRef,
	onDeselectProject,
	modalImgRef,
	onGoToProject,
	isOpen,
}: Props) {
	return (
		<Modal show={isOpen} modalRef={modalRef}>
			<div className={styles.modalContent}>
				<div className={styles.content}>
					<SingleProject
						currProjectId={selectedProjectId}
						onClose={onDeselectProject}
						modalImgRef={modalImgRef}
						onGoToProject={onGoToProject}
					/>
				</div>
				<div className={styles.gradient}></div>
				<Noise />
			</div>
		</Modal>
	);
}
