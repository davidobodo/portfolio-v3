import styles from "./styles.module.scss";
import { ChevronRight, ChevronLeft, Github, ExternalLink } from "#/components/icons";
import Router from "next/router";
import { fetchProjects } from "#/utils";
import { Ref } from "react";

type Props = {
    currProjectId: string;
    onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    modalImgRef?: Ref<HTMLDivElement>;
};

export default function SingleProject({ currProjectId, onClose, modalImgRef }: Props) {
    const { currProject, nextProject, prevProject } = fetchProjects(currProjectId);

    const onGoToProject = (id: string) => {
        Router.push(`/projects/${id}`);
    };

    if (!currProject) {
        return null;
    }

    const { title, bgImage } = currProject;

    return (
        <div className={styles.container}>
            {prevProject && (
                <button
                    value="previous"
                    className={styles.navBtn + " " + styles.btnPrevious}
                    aria-label="previous"
                    onClick={() => onGoToProject(prevProject.id)}
                >
                    <ChevronLeft />
                    <span>{prevProject.title}</span>
                </button>
            )}

            <div className={styles.content}>
                <button onClick={onClose} className={styles.btnClose} data-key="close-button">
                    <span>
                        <strong>↙</strong>
                    </span>
                    <span>Close</span>
                </button>
                <section className={styles.title} data-key="title">
                    <h1>{title}</h1>
                </section>

                <div className={styles.image} style={{ backgroundImage: `url(${bgImage})` }} ref={modalImgRef}></div>

                <section className={styles.about} data-key="about">
                    <h2>About this project</h2>

                    <p>
                        On this Open Source project I was responsible for the initial UI/UX architecture, structure,
                        design and animations. The idea was to follow the 3 column UX trend of webchats like skype,
                        hipchat, gitter and slack. Building upon that an Open Source alternative with similar
                        functionalities.
                    </p>

                    <p>
                        The UI/UX was conceived with a mobile first approach. So it would be possible to effortlessly
                        launch it into any platform without making any changes to the main application.
                    </p>
                </section>

                <section className={styles.tech} data-key="tech">
                    <h2>Technical Sheet</h2>
                    <p>Code technologies I got involved with while working on this project.</p>

                    <ul>
                        <li>
                            <span className={styles.circle}></span>UI/UX Design
                        </li>
                        <li>
                            <span className={styles.circle}></span>UI/UX Architecture
                        </li>
                        <li>
                            <span className={styles.circle}></span>UI/UX Animations
                        </li>
                        <li>
                            <span className={styles.circle}></span>HTML5 – semantic, audio, video, canvas
                        </li>
                        <li>
                            <span className={styles.circle}></span>CSS3 – preprocessed with LESS + LESSHAT
                        </li>
                        <li>
                            <span className={styles.circle}></span>Meteor.js
                        </li>
                        <li>
                            <span className={styles.circle}></span>Blaze
                        </li>
                        <li>
                            <span className={styles.circle}></span>MongoDB
                        </li>
                    </ul>
                </section>

                <div className={styles.links} data-key="buttons">
                    <a href="">
                        Visit site
                        <ExternalLink />{" "}
                    </a>
                    <a href="">
                        Github repo <Github />{" "}
                    </a>
                </div>
            </div>
            {nextProject && (
                <button
                    value="next"
                    className={styles.navBtn + " " + styles.btnNext}
                    aria-label="previous"
                    onClick={() => onGoToProject(nextProject.id)}
                >
                    <ChevronRight />
                    <span>{nextProject.title}</span>
                </button>
            )}
        </div>
    );
}
