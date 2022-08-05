import Head from "next/head";
import type { NextPage } from "next";
import styles from "#/styles/_pages/home.module.scss";
import { useRef } from "react";
import { PROJECTS } from "#/constants/projects";
import {
	useRevealParagraph,
	useWindowSize,
	useRevealHeading,
	HomePageHooks,
	useSelectProjectAnimation,
	useHomePageInit,
	useAlternateTextOpacity,
} from "#/hooks";
import {
	Banners,
	AlternatingOpacity,
	Work,
	Thoughts,
	Skills,
	Projects,
	Layout,
	ProjectModal,
	Nav,
	BannerCurtain,
	ProjectsHeading,
	Noise,
} from "#/components";

const { useWorkAnimation, useSkillsAnimation } = HomePageHooks;

const Home: NextPage = () => {
	//-----------------------------------------
	// HELPERS
	//-----------------------------------------
	const darkSectionRef = useRef<HTMLDivElement>(null);

	//-----------------------------------------
	// HOOKS
	//-----------------------------------------
	const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();
	const { bannerRef, blackCoverRef, bannerHeight } = useHomePageInit({
		windowInnerHeight,
		windowInnerWidth,
		darkSectionRef,
	});
	const { textsListRef } = useAlternateTextOpacity();
	const {
		workContainerRef,

		mobileWorkContainerRef,
	} = useWorkAnimation({ windowInnerHeight, windowInnerWidth });
	const { textWrapperRef: thoughtOneText } = useRevealParagraph();
	const { textWrapperRef: thoughtTwoText } = useRevealParagraph();
	const { headingRef: skillsSectionTitlteRef } = useRevealHeading({ windowInnerWidth });
	const { headingRef: mobileSkillsSectionTitlteRef } = useRevealHeading({ windowInnerWidth });
	const { skillsContainerRef, mobileSkillsContainerRef } = useSkillsAnimation({
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
					<div className={styles.aboutWrapper}>
						<AlternatingOpacity textsListRef={textsListRef} />
					</div>
					<Work workContainerRef={workContainerRef} mobileWorkContainerRef={mobileWorkContainerRef} />
					<Thoughts.One textWrapperRef={thoughtOneText} />
					<Skills
						skillsContainerRef={skillsContainerRef}
						skillsSectionTitlteRef={skillsSectionTitlteRef}
						mobileSkillsContainerRef={mobileSkillsContainerRef}
						mobileSkillsSectionTitlteRef={mobileSkillsSectionTitlteRef}
					/>
					<Thoughts.Two textWrapperRef={thoughtTwoText} />

					<ProjectsHeading projectTitleRef={projectTitleRef} />
					<Projects onViewProject={onSelectProject} displayedProjects={PROJECTS.slice(0, 5)} />
				</div>
			</Layout.DarkSection>
			<Noise />
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
