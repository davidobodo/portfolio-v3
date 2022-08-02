import Head from "next/head";
import { NextPage } from "next";
import { Noise, Banners, Nav, ProjectListView, ProjectModal, Layout, Projects, BannerCurtain } from "#/components";
import styles from "#/styles/_pages/projects.module.scss";
import { useSelectProjectAnimation, useProjectsLettersInit, useWindowSize } from "#/hooks";

const ProjectsPage: NextPage = () => {
	const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();
	const { textWrapperRef, scrollIndicatorRef, blackCoverRef, bannerRef, bannerHeight } = useProjectsLettersInit({
		windowInnerHeight,
		windowInnerWidth,
	});

	const { selectedProjectId, onSelectProject, onDeselectProject, modalImgRef, modalRef, onGoToProject, isOpen } =
		useSelectProjectAnimation();
	return (
		<>
			<Nav />
			<div className={styles.main}>
				<Head>
					<title>David Obodo - Projects</title>
					<meta name="description" content="David Obodo's portfolio website" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<BannerCurtain containerRef={blackCoverRef} />

				<Banners.OtherPages
					texts={["Projects", "Playground", "xperiments", "Replicas"]}
					textWrapperRef={textWrapperRef}
					scrollIndicatorRef={scrollIndicatorRef}
					bannerRef={bannerRef}
					bannerHeight={bannerHeight}
				/>
				<Layout.DarkSection>
					<div className={styles.content}>
						<Projects onViewProject={onSelectProject} location="profile" />
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
		</>
	);
};

export default ProjectsPage;
