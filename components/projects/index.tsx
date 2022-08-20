import styles from "./styles.module.scss";
import { ProjectListView } from "./list-view";
import { ProjectsGridView } from "./grid-view";
import { TProject } from "#/interfaces";

export default function Project({
	onViewProject,
	displayedProjects,
	currentView,
}: {
	onViewProject: (event: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>) => void;
	displayedProjects: TProject[];
	currentView?: "list" | "grid";
}) {
	return (
		<>
			{currentView === "grid" && (
				<div className={styles.gridWrapper}>
					<ProjectsGridView onViewProject={onViewProject} displayedProjects={displayedProjects} />
				</div>
			)}

			{currentView === "list" && (
				<div className={styles.listWrapper}>
					<ProjectListView onViewProject={onViewProject} displayedProjects={displayedProjects} />
				</div>
			)}
		</>
	);
}
