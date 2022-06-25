import Head from "next/head";
import styles from "#/styles/_pages/single-project.module.scss";
import Router from "next/router";
import { PROJECTS } from "#/constants/projects";
import { Nav, Layout, Noise } from "#/components";
import { ChevronRight, ChevronLeft, Github, ExternalLink } from "#/components/icons";
import { TProject } from "#/interfaces";

type Props = {
    currProject: TProject;
    nextProject: TProject;
    prevProject: TProject;
};

export default function SingleProject(props: Props) {
    const { currProject, nextProject, prevProject } = props;

    const onGoToProject = (id: string) => {
        Router.push(`/projects/${id}`);
    };

    const onGoToProjects = () => {
        Router.push("/projects");
    };

    if (!currProject) {
        return null;
    }

    const { title, bgImage } = currProject;

    return (
        <div>
            <Head>
                <title>David Obodo</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout.DarkSection>
                <>
                    <Nav isLight={true} />

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
                            <button onClick={onGoToProjects}>CLOSE</button>

                            <section className={styles.title}>
                                <h1>{title}</h1>
                            </section>

                            <div className={styles.image} style={{ backgroundImage: `url(${bgImage})` }}></div>

                            <section className={styles.about}>
                                <h2>About this project</h2>

                                <p>
                                    On this Open Source project I was responsible for the initial UI/UX architecture,
                                    structure, design and animations. The idea was to follow the 3 column UX trend of
                                    webchats like skype, hipchat, gitter and slack. Building upon that an Open Source
                                    alternative with similar functionalities.
                                </p>

                                <p>
                                    The UI/UX was conceived with a mobile first approach. So it would be possible to
                                    effortlessly launch it into any platform without making any changes to the main
                                    application.
                                </p>
                            </section>

                            <section className={styles.tech}>
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

                            <div className={styles.links}>
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
                </>
            </Layout.DarkSection>
            <Noise />
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: PROJECTS.map((item) => {
            return {
                params: {
                    id: item.id
                }
            };
        }),
        fallback: false // Any route not pre-rendered in paths should result a 404 page
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const { id } = params;

    const projectsLength = PROJECTS.length;

    for (let i = 0; i < projectsLength; i++) {
        if (id === PROJECTS[i].id) {
            return {
                props: {
                    currProject: PROJECTS[i],
                    nextProject: i + 1 < projectsLength ? PROJECTS[i + 1] : null,
                    prevProject: i - 1 >= 0 ? PROJECTS[i - 1] : null
                }
            };
        }
    }
}

function StyledLink({ label }: { label: string }) {
    return (
        <a href="" className={styles.link}>
            {label}
        </a>
    );
}
