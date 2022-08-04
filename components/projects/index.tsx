import styles from "./styles.module.scss";
import { ProjectListView } from "./list-view";
import { ProjectsGridView } from "./grid-view";
import { TProject } from "#/interfaces";

export default function Project({
	onViewProject,
	displayedProjects,
}: {
	onViewProject: (event: React.MouseEvent<HTMLLIElement | HTMLDivElement, MouseEvent>) => void;
	displayedProjects: TProject[];
}) {
	return (
		<>
			<div className={styles.gridWrapper}>
				<ProjectsGridView onViewProject={onViewProject} displayedProjects={displayedProjects} />
			</div>
			<div className={styles.listWrapper}>
				<ProjectListView onViewProject={onViewProject} displayedProjects={displayedProjects} />
			</div>
		</>
	);
}
