import styles from "./styles.module.scss";
import { PROJECTS } from "#/constants/projects";
import { TProject } from "#/interfaces";
import { useState } from "react";
export default function Grid({
    activeKey,
    onSelectProject
}: {
    activeKey: string;
    onSelectProject: (item: TProject) => void;
}) {
    const COLORS = ["#dcd0c2", "#e2d1d9", "#b1a994", "#373737"];

    const fourGrid = [1, 4, 6, 7, 10, 11, 13, 16];
    const threeGrid = [1, 5, 9, 11, 13];
    const twoGrid = [];

    const [hovered, setHovered] = useState(0);
    const onMouseEnter = (i: number) => {
        setHovered(i);
    };

    return (
        <div className={styles.container}>
            {PROJECTS.map((item, i) => {
                const { tech, bgImage, bgColor } = item;

                let isLocked = false;

                if (activeKey !== "all") {
                    if (!tech.includes(activeKey)) {
                        isLocked = true;
                    }
                }

                if (isLocked) return null;
                return (
                    <div
                        key={i}
                        className={isLocked ? styles.box + " " + styles.locked : styles.box + " " + styles.free}
                        data-key="project"
                        onClick={() => onSelectProject(item)}
                        onMouseEnter={() => onMouseEnter(i)}
                    >
                        <div
                            className={styles.boxImage}
                            // style={{ backgroundColor: `${bgColor}` }}
                        >
                            <div className={styles.boxImageInner} style={{ backgroundImage: `url(${bgImage})` }}></div>
                        </div>
                        <div className={styles.boxOverlay}></div>
                        <div className={styles.boxCircle}>
                            <span>View</span>
                        </div>
                        <div className={styles.boxLock}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-lock"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="rgba(255, 255, 255, 1)"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="5" y="11" width="14" height="10" rx="2" />
                                <circle cx="12" cy="16" r="1" />
                                <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                            </svg>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
