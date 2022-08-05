import styles from "./styles.module.scss";
import { TProject } from "#/interfaces";
export function ProjectsGridView({
	onViewProject,
	displayedProjects,
}: {
	onViewProject: (event: React.MouseEvent<HTMLLIElement | HTMLDivElement, MouseEvent>) => void;
	displayedProjects: TProject[];
}) {
	return (
		<div className={styles.container}>
			{displayedProjects.map((item, i) => {
				const { bgImage, id } = item;

				let isLocked = false;

				return (
					<div
						key={i}
						className={isLocked ? styles.box + " " + styles.locked : styles.box + " " + styles.free}
						data-key="project"
						data-key={id}
						data-type="box-item"
						onClick={onViewProject}
					>
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
					</div>
				);
			})}
		</div>
	);
}
