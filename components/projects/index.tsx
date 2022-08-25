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
				<ProjectsGridView onViewProject={onViewProject} displayedProjects={displayedProjects} />
			)}

			{currentView === "list" && (
				<ProjectListView onViewProject={onViewProject} displayedProjects={displayedProjects} />
			)}
		</>
	);
}
