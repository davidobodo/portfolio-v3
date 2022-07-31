import styles from "./styles.module.scss";
import { PROJECTS } from "#/constants/projects";
import { TProject } from "#/interfaces";
export function ProjectsGridView({
    activeKey,
    onSelectProject,
    location
}: {
    activeKey: string;
    onSelectProject: (item: TProject) => void;
    location: "home" | "projects";
}) {
    const displayedProjects = location === "home" ? PROJECTS.slice(0, 5) : PROJECTS;
    return (
        <div className={styles.container}>
            {displayedProjects.map((item, i) => {
                const { tech, bgImage } = item;

                let isLocked = false;

                // if (activeKey !== "all") {
                //     if (!tech.includes(activeKey)) {
                //         isLocked = true;
                //     }
                // }

                // if (isLocked) return null;
                return (
                    <div
                        key={i}
                        className={isLocked ? styles.box + " " + styles.locked : styles.box + " " + styles.free}
                        data-key="project"
                        onClick={() => onSelectProject(item)}
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
