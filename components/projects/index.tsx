import Heading from "./heading";
import { Ref } from "react";
import { ProjectListView } from "./list-view";
import { ProjectsGridView } from "./grid-view";
export default function Project({
    projectTitleRef,
    onViewProject,
    location
}: {
    projectTitleRef: Ref<HTMLHeadingElement>;
    onViewProject: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    location: "home" | "projects";
}) {
    return (
        <>
            <Heading projectTitleRef={projectTitleRef} />
            <ProjectsGridView location={location} />
            <ProjectListView onViewProject={onViewProject} location={location} />
        </>
    );
}
