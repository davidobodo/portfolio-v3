import styles from "./styles.module.scss";
import { Ref } from "react";
import { ProjectListView } from "./list-view";
import { ProjectsGridView } from "./grid-view";
import { TProject } from "#/interfaces";

export default function Project({
	projectTitleRef,
	onViewProject,
	location,
	displayedProjects,
	filterBy,
	filterKey,
}: {
	projectTitleRef: Ref<HTMLHeadingElement>;
	onViewProject: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
	location: "home" | "projects";
	displayedProjects: TProject[];
}) {
	return (
		<>
			<div className={styles.gridWrapper}>
				<ProjectsGridView
					location={location}
					onViewProject={onViewProject}
					displayedProjects={displayedProjects}
					filterBy={filterBy}
					filterKey={filterKey}
				/>
			</div>
			<div className={styles.listWrapper}>
				<ProjectListView
					onViewProject={onViewProject}
					location={location}
					displayedProjects={displayedProjects}
					filterBy={filterBy}
					filterKey={filterKey}
				/>
			</div>
		</>
	);
}
