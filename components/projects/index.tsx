import styles from "./styles.module.scss";
import { Ref } from "react";
import { ProjectListView } from "./list-view";
import { ProjectsGridView } from "./grid-view";
export default function Project({
	projectTitleRef,
	onViewProject,
	location,
}: {
	projectTitleRef: Ref<HTMLHeadingElement>;
	onViewProject: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
	location: "home" | "projects";
}) {
	return (
		<>
			<div className={styles.gridWrapper}>
				<ProjectsGridView location={location} onViewProject={onViewProject} />
			</div>
			<div className={styles.listWrapper}>
				<ProjectListView onViewProject={onViewProject} location={location} />
			</div>
		</>
	);
}
