import Head from "next/head";
import type { NextPage } from "next";
import styles from "#/styles/_pages/home.module.scss";
import {
	Banners,
	About,
	Work,
	Thoughts,
	Skills,
	Projects,
	Noise,
	Layout,
	ProjectModal,
	Nav,
	BannerCurtain,
	ProjectListView,
	ProjectsHeading,
} from "#/components";
import {
	useRevealParagraph,
	useWindowSize,
	useRegisterGsapScrollTrigger,
	useRevealHeading,
	HomePageHooks,
	useSelectProjectAnimation,
	useHomeInit,
} from "#/hooks";
import { PROJECTS } from "#/constants/projects";
import Router from "next/router";
import { useRef } from "react";

const { useHomeAboutAnim, useWorkAnimation, useSkillsAnimation } = HomePageHooks;

const Home: NextPage = () => {
	useRegisterGsapScrollTrigger();
	const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();
	const darkSectionRef = useRef(null);
	const { bannerRef, blackCoverRef, bannerHeight } = useHomeInit({
		windowInnerHeight,
		windowInnerWidth,
		darkSectionRef,
	});
	const { aboutListRef } = useHomeAboutAnim();
	const {
		workContainerRef,
		workTabsRef,
		activeWorkBgGradient,
		workTitlesContainerRef,
		workDetailsContainerRef,
		mobileWorkDetailsContainerRef,
		mobileWorkTitlesContainerRef,
		mobileWorkContainerRef,
		mobileWorkContentWrapperRef,
	} = useWorkAnimation({ windowInnerHeight, windowInnerWidth });
	const { textWrapperRef: thoughtOneText } = useRevealParagraph();
	const { textWrapperRef: thoughtTwoText } = useRevealParagraph();

	const { headingRef: skillsSectionTitlteRef } = useRevealHeading({ windowInnerWidth });
	const { headingRef: mobileSkillsSectionTitlteRef } = useRevealHeading({ windowInnerWidth });
	const { skillsListRef, skillsContainerRef, skillsContentWrapperRef, mobileSkillsContainerRef } = useSkillsAnimation({
		windowInnerWidth,
	});
	const { headingRef: projectTitleRef } = useRevealHeading({ windowInnerWidth });

	const { selectedProjectId, onSelectProject, onDeselectProject, modalImgRef, modalRef, isOpen, onGoToProject } =
		useSelectProjectAnimation();

	return (
		<>
			<Head>
				<title>David Obodo</title>
				<meta name="description" content="David Obodo's portfolio website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<BannerCurtain containerRef={blackCoverRef} />
			<Banners.HomePage bannerRef={bannerRef} bannerHeight={bannerHeight} />
			<Layout.DarkSection darkSectionRef={darkSectionRef}>
				<div className={styles.content}>
					<About aboutListRef={aboutListRef} />
					<Work
						workContainerRef={workContainerRef}
						workTabsRef={workTabsRef}
						activeWorkBgGradient={activeWorkBgGradient}
						workTitlesContainerRef={workTitlesContainerRef}
						workDetailsContainerRef={workDetailsContainerRef}
						mobileWorkDetailsContainerRef={mobileWorkDetailsContainerRef}
						mobileWorkTitlesContainerRef={mobileWorkTitlesContainerRef}
						mobileWorkContainerRef={mobileWorkContainerRef}
						mobileWorkContentWrapperRef={mobileWorkContentWrapperRef}
					/>
					<Thoughts.One textWrapperRef={thoughtOneText} />
					<Skills
						skillsListRef={skillsListRef}
						skillsContainerRef={skillsContainerRef}
						skillsContentWrapperRef={skillsContentWrapperRef}
						skillsSectionTitlteRef={skillsSectionTitlteRef}
						mobileSkillsContainerRef={mobileSkillsContainerRef}
						mobileSkillsSectionTitlteRef={mobileSkillsSectionTitlteRef}
					/>
					<Thoughts.Two textWrapperRef={thoughtTwoText} />

					<ProjectsHeading projectTitleRef={projectTitleRef} />
					<Projects onViewProject={onSelectProject} location="home" displayedProjects={PROJECTS.slice(0, 5)} />
				</div>
			</Layout.DarkSection>
			<ProjectModal
				selectedProjectId={selectedProjectId}
				modalRef={modalRef}
				onDeselectProject={onDeselectProject}
				modalImgRef={modalImgRef}
				isOpen={isOpen}
				onGoToProject={onGoToProject}
			/>
		</>
	);
};

export default Home;
