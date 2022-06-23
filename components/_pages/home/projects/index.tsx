// import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { PROJECTS } from "#/constants/projects";
import { Button } from "../../../index";
import { Ref, useState, useRef, useEffect } from "react";

function ProjectsListView() {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectsListRef = useRef(null);
    const pictureBoxRef = useRef(null);
    const posDic = useRef<Record<number | string, { top: number; bottom: number }>>({});

    const [mousePos, setMousePos] = useState({
        x: 0,
        y: 0
    });

    const [inBoundary, setInBoundary] = useState(false);

    const squaresize = 150;

    const onSelectActiveProject = (y: number): string | undefined => {
        for (let key in posDic.current) {
            const { top, bottom } = posDic.current[key];
            if (y > top && y < bottom) {
                return key;
            }
        }
    };

    const [activeProject, setActiveProject] = useState<string>();
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { clientX, clientY } = e;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const hasExceededBoundary = checkExceededBoundaries(x, y, rect);
        setInBoundary(!hasExceededBoundary);
        setMousePos({
            x: x,
            y: y
        });

        const activeProject = onSelectActiveProject(y);

        if (activeProject) {
            setActiveProject(activeProject);
        }
    };

    //1. create a dictionary of positions from project list

    // 2. when y changes, check the project the current position maps to

    useEffect(() => {
        if (projectsListRef.current) {
            const projects = projectsListRef.current.querySelectorAll("li");

            projects.forEach((element: HTMLElement, i) => {
                const { top, bottom } = element.getBoundingClientRect();
                posDic.current[i] = {
                    top,
                    bottom
                };
            });
        }
    }, [projectsListRef]);

    const displayedProjects = PROJECTS.slice(0, 5);

    return (
        <div className={styles.container} onMouseMove={handleMouseMove} ref={containerRef}>
            <ProjectBox
                posX={mousePos.x - squaresize + "px"}
                posY={mousePos.y - squaresize + "px"}
                isVisible={inBoundary}
                reference={pictureBoxRef}
                displayedProjects={displayedProjects}
                activeProject={activeProject}
            />
            <ul ref={projectsListRef}>
                {displayedProjects.map((item, i) => {
                    const { title, details } = item;
                    return (
                        <li className={styles.project} key={i}>
                            <a href="">
                                <span className={styles.projectTitle}>{title}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectsListView;

function ProjectBox({ displayedProjects, activeProject, posX, posY, isVisible, reference }) {
    return (
        <div
            className={styles.projectBox}
            ref={reference}
            style={{
                left: posX,
                top: posY,
                transform: isVisible ? "scale(1)" : "scale(0)"
            }}
        >
            <div className={styles.projectsWrapper}>
                <ul style={{ transform: `translateY(-${parseInt(activeProject) * 300}px)` }}>
                    {displayedProjects.map((item) => {
                        const { title } = item;
                        return (
                            <li>
                                <span style={{ fontSize: "60px" }}>{title}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className={styles.projectsBoxCircle}>VIEW PROJECT</div>
        </div>
    );
}

function checkExceededBoundaries(x, y, elemRect) {
    // passed up
    if (y <= 0) {
        return true;
    }
    // passed down
    if (y >= elemRect.height) {
        return true;
    }

    // passed left
    if (x <= 0) {
        return true;
    }

    // passed right

    if (x >= elemRect.width) {
        return true;
    }

    return false;
}
