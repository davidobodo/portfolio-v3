import { Modal, Nav, SingleProject, Noise } from "#/components";
import styles from "./styles.module.scss";

export default function ProjectModal({ selectedProjectId, modalRef, onDeselectProject, modalImgRef }) {
    return (
        <Modal show={!!selectedProjectId} modalRef={modalRef}>
            <div className={styles.modalContent}>
                <div className={styles.content}>
                    <Nav isLight={true} />
                    <SingleProject
                        currProjectId={selectedProjectId}
                        onClose={onDeselectProject}
                        modalImgRef={modalImgRef}
                    />
                </div>

                <div className={styles.gradient}></div>
                <Noise />
            </div>
        </Modal>
    );
}
