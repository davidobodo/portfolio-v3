// import Image from "next/image";
import styles from "./styles.module.scss";
import { PROJECTS } from "#/constants/projects";
import { Button } from "../index";
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
                                    <p>{details}</p>
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
                            <a>
                                <span>View all projects</span>
                                <img
                                    src="https://assets-global.website-files.com/5c51b8093dcfd38165099093/5f959b1cd3283e540294ea95_icon-enclosed-arrow.svg"
                                    alt=""
                                />
                                {/* <Image
                                    // src="https://assets-global.website-files.com/5c51b8093dcfd38165099093/5f959b1cd3283e540294ea95_icon-enclosed-arrow.svg"
                                    src=""
                                    alt=""
                                    width={30}
                                    height={30}
                                /> */}
                            </a>
                        </div>
                        <div></div>
                        <div className={styles.liquid}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
