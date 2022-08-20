import styles from "./styles.module.scss";
import { TProject } from "#/interfaces";
export function ProjectsGridView({
	onViewProject,
	displayedProjects,
}: {
	onViewProject: (event: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>) => void;
	displayedProjects: TProject[];
}) {
	return (
		<div className={styles.container}>
			{displayedProjects.map((item, i) => {
				const { bgImage, id } = item;

				return (
					<button key={i} className={styles.box} data-id={id} data-type="box-item" onClick={onViewProject}>
						<div
							className={styles.boxImage}
							// style={{ backgroundColor: `${bgColor}` }}
							style={{ backgroundImage: `url(${bgImage})` }}
						>
							<div className={styles.boxImageInner}></div>
						</div>
						<div className={styles.boxOverlay}></div>
						<div className={styles.boxCircle}>
							<span>View</span>
						</div>
					</button>
				);
			})}
		</div>
	);
}
