import { Modal, SingleProject, Noise } from "#/components";
import styles from "./styles.module.scss";

import { Ref, useEffect, useState } from "react";
import { fetchProjects } from "#/utils";
import { TProject } from "#/interfaces";
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
					{/* <Nav isLight={true} /> */}
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
