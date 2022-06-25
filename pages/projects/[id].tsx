import Head from "next/head";
import styles from "#/styles/_pages/single-project.module.scss";
import { PROJECTS } from "#/constants/projects";
import { Nav, Layout, Noise, SingleProject } from "#/components";
import { TProject } from "#/interfaces";

type Props = {
    currProject: TProject;
    nextProject: TProject;
    prevProject: TProject;
};

export default function Project(props: Props) {
    const { currProject, nextProject, prevProject } = props;

    if (!currProject) {
        return null;
    }

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
                    <SingleProject currProject={currProject} nextProject={nextProject} prevProject={prevProject} />
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
