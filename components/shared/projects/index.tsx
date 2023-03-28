import { ProjectListView } from "./list-view";
import { ProjectsGridView } from "./grid-view";
import { TProject } from "#/types";

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
			{displayedProjects.length === 0 ? (
				<div style={{ color: "#86868b", fontSize: "1.6rem", textAlign: "center", padding: "0px 2rem" }}>
					Oops, no <span style={{ color: "#fff" }}>&quot;PUBLIC&quot;</span> project with that tech
				</div>
			) : (
				<>
					{currentView === "grid" && (
						<ProjectsGridView onViewProject={onViewProject} displayedProjects={displayedProjects} />
					)}

					{currentView === "list" && <ProjectListView onViewProject={onViewProject} displayedProjects={displayedProjects} />}
				</>
			)}
		</>
	);
}
