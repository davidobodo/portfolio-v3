import styles from "./styles.module.scss";
import useBoxAnimation from "./useBoxAnimation";
// import { PROJECTS } from "./constants";
import { PROJECTS } from "#/constants/projects";
import Box from "./box";
import { Button } from "../../../index";
import Heading from "./heading";
import { Ref } from "react";
import { SendLink } from "#/components/icons";

export default function Project({
    projectTitleRef,
    onViewProject,
    onRedirectToProjects,
    location
}: {
    projectTitleRef: Ref<HTMLHeadingElement>;
    onViewProject: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    onRedirectToProjects?: () => void;
    location: "home" | "projects";
}) {
    return (
        <>
            <Heading projectTitleRef={projectTitleRef} />
            <ProjectListView
                onViewProject={onViewProject}
                location={location}
                onRedirectToProjects={onRedirectToProjects}
            />
        </>
    );
}

export function ProjectListView({
    onViewProject,
    location,
    onRedirectToProjects
}: {
    onViewProject: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    onRedirectToProjects?: () => void;
    location: "home" | "projects";
}) {
    const {
        imgRef,
        btnRef,
        textRef,
        onMouseEnter,
        onMouseLeave,
        isActive,
        onEnterElement,
        listRef
    } = useBoxAnimation();

    const displayedProjects = location === "home" ? PROJECTS.slice(0, 5) : PROJECTS;
    return (
        <div className={styles.container}>
            <Box
                imgRef={imgRef}
                btnRef={btnRef}
                textRef={textRef}
                isActive={isActive}
                displayedProjects={displayedProjects}
            />
            <ul className={styles.projectsList} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={listRef}>
                {displayedProjects.map((item, i) => {
                    const { title, type, id } = item;
                    return (
                        <li key={i} onMouseEnter={onEnterElement} onClick={onViewProject} data-id={id}>
                            <div className={styles.row}>
                                <h4>{title}</h4>
                                <p>{type}</p>
                            </div>

                            <span className={styles.number}>{`${i + 1 < 10 ? "0" : ""}${i + 1}`}</span>
                        </li>
                    );
                })}
            </ul>

            {location === "home" && (
                <div className={styles.btnWrapper}>
                    <Button
                        label="View more"
                        ariaLabel="View more"
                        onClick={onRedirectToProjects}
                        endAdornment={<SendLink />}
                    />
                </div>
            )}
        </div>
    );
}
