import Head from "next/head";
import { NextPage } from "next";
import { Noise, Banners, Nav, ProjectListView, ProjectModal, Layout } from "#/components";
import styles from "#/styles/_pages/projects.module.scss";
import { useBannerAnimation, useSelectProjectAnimation } from "#/hooks";
const Projects: NextPage = () => {
    const { textWrapperRef, scrollIndicatorRef } = useBannerAnimation();

    const {
        selectedProjectId,
        onSelectProject,
        onDeselectProject,
        modalImgRef,
        modalRef,
        onGoToProject,
        isOpen
    } = useSelectProjectAnimation();
    return (
        <div>
            {/* <Nav /> */}
            <div className={styles.main}>
                <Head>
                    <title>David Obodo - Projects</title>
                    <meta name="description" content="David Obodo's portfolio website" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Banners.OtherPages
                    texts={["Projects", "Playground", "xperiments", "Replicas"]}
                    textWrapperRef={textWrapperRef}
                    scrollIndicatorRef={scrollIndicatorRef}
                />
                <Layout.DarkSection>
                    <div className={styles.content}>
                        <section className={styles.gridWrapper}>
                            <ProjectListView location="projects" onViewProject={onSelectProject} />
                        </section>
                    </div>
                </Layout.DarkSection>
                <Noise />
                <ProjectModal
                    selectedProjectId={selectedProjectId}
                    modalRef={modalRef}
                    onDeselectProject={onDeselectProject}
                    modalImgRef={modalImgRef}
                    onGoToProject={onGoToProject}
                    isOpen={isOpen}
                />
            </div>
        </div>
    );
};

export default Projects;
