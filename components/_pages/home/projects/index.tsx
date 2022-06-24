import styles from "./styles.module.scss";
import { PROJECTS } from "#/constants/projects";
import { Ref, useState, useRef, useEffect } from "react";
import Router from "next/router";
import { TProject } from "#/interfaces";

function ProjectsListView() {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectsListRef = useRef<HTMLUListElement>(null);
    const pictureBoxRef = useRef(null);
    const posDic = useRef<Record<number | string, { top: number; bottom: number; id: string }>>({});

    const [mousePos, setMousePos] = useState({
        x: 0,
        y: 0
    });

    const [inBoundary, setInBoundary] = useState(false);

    const squaresize = 150;

    const onSelectActiveProjectId = (y: number): string | undefined => {
        for (let key in posDic.current) {
            const { top, bottom } = posDic.current[key];
            if (y > top && y < bottom) {
                return key;
            }
        }
    };

    const [activeProjectPos, setActiveProjectPos] = useState<string>("0");
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { clientX, clientY } = e;
        const rect = containerRef.current!.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const hasExceededBoundary = checkExceededBoundaries(x, y, rect);
        setInBoundary(!hasExceededBoundary);
        setMousePos({
            x: x,
            y: y
        });

        const activeProjectPos = onSelectActiveProjectId(y);

        if (activeProjectPos) {
            setActiveProjectPos(activeProjectPos);
        }
    };

    useEffect(() => {
        if (projectsListRef.current) {
            const projects = projectsListRef.current.querySelectorAll("li");

            projects.forEach((element: HTMLElement, i: number) => {
                const { offsetTop, clientHeight } = element;
                const BORDER_SPACING = 2;

                posDic.current[i] = {
                    top: offsetTop,
                    bottom: offsetTop + clientHeight + BORDER_SPACING,
                    id: element.dataset.id as string
                };
            });
        }
    }, []);

    const displayedProjects = PROJECTS.slice(0, 5);

    const onViewProject = () => {
        if (activeProjectPos) {
            Router.push(`/projects/${displayedProjects[parseInt(activeProjectPos)].id}`);
        }
    };

    return (
        <div className={styles.container} onMouseMove={handleMouseMove} ref={containerRef}>
            <ProjectBox
                posX={mousePos.x - squaresize + "px"}
                posY={mousePos.y - squaresize + "px"}
                isVisible={inBoundary}
                reference={pictureBoxRef}
                displayedProjects={displayedProjects}
                activeProjectPos={activeProjectPos}
                onViewProject={onViewProject}
            />
            <ul ref={projectsListRef}>
                {displayedProjects.map((item, i) => {
                    const { title, id } = item;
                    return (
                        <li className={styles.project} key={i} value={id} data-id={id}>
                            <a href="">
                                <span
                                    className={styles.projectTitle}
                                    style={{
                                        transform:
                                            activeProjectPos === i.toString() ? "translateX(-20px)" : "translateX(0px)",
                                        opacity: activeProjectPos === i.toString() ? "0.5" : "1"
                                    }}
                                >
                                    {title}
                                </span>

                                <span
                                    style={{
                                        transform:
                                            activeProjectPos === i.toString() ? "translateX(20px)" : "translateX(0px)",
                                        opacity: activeProjectPos === i.toString() ? "0.5" : "1"
                                    }}
                                    className={styles.projectNature}
                                >
                                    Web application
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectsListView;

function ProjectBox({
    displayedProjects,
    activeProjectPos,
    posX,
    posY,
    isVisible,
    reference,
    onViewProject
}: {
    displayedProjects: TProject[];
    activeProjectPos: string;
    posX: string;
    posY: string;
    isVisible: boolean;
    reference: Ref<HTMLDivElement>;
    onViewProject: () => void;
}) {
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
                <ul style={{ transform: `translateY(-${parseInt(activeProjectPos) * 300}px)` }}>
                    {displayedProjects.map((item, i) => {
                        const { title } = item;
                        return (
                            <li key={i}>
                                <span
                                    style={{
                                        fontSize: "60px"
                                    }}
                                >
                                    {title}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <button className={styles.projectsBoxCircle} type="button" onClick={onViewProject}>
                VIEW PROJECT
            </button>
        </div>
    );
}

function checkExceededBoundaries(x: number, y: number, elemRect: DOMRect) {
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
