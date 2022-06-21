// import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { PROJECTS } from "#/constants/projects";
import { Button } from "../../../index";
import { Ref } from "react";
export default function Projects({
    projectsListWrapperRef,
    projectTitleRef
}: {
    projectsListWrapperRef: Ref<HTMLDivElement>;
    projectTitleRef: Ref<HTMLHeadingElement>;
}) {
    const handleClick = () => {};
    return (
        <div className={styles.container}>
            <div className={styles.sectionTitleWrapper}>
                <h2 className={styles.sectionTitle} ref={projectTitleRef}>
                    <span>
                        <span>A few</span>
                    </span>
                    <span>
                        <span>select</span>
                    </span>
                    <span>
                        <span>
                            <strong>Projects</strong>{" "}
                        </span>
                    </span>
                </h2>
            </div>

            <div className={styles.projectsListWrapper} ref={projectsListWrapperRef}>
                <div className={styles.projectsList}>
                    {PROJECTS.slice(0, 5).map((item, i) => {
                        const { title, details } = item;
                        return (
                            <div className={styles.project} key={i}>
                                <div
                                    style={{
                                        backgroundImage: `url(https://images.unsplash.com/photo-1655056853039-c0cb33a9c5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60)`
                                    }}
                                    className={styles.projectImage}
                                ></div>
                                <div className={styles.projectOverlay}></div>

                                <div className={styles.projectDetails}>
                                    <h1>{title}</h1>
                                    <div>
                                        <p>{details}</p>
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <Button label="View Project" ariaLabel="view project" onClick={handleClick} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <div className={styles.project + " " + styles.viewAll}>
                        <div></div>
                        <div className={styles.content}>
                            <Link href="/projects">
                                <a>
                                    <span>View all projects &#8594;</span>
                                </a>
                            </Link>
                        </div>
                        <div></div>
                        <div className={styles.liquid}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
