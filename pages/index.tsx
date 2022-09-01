import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "#/styles/_pages/home.module.scss";
import { useRef } from "react";
import { PROJECTS } from "#/constants";
import {
	useRevealParagraph,
	useWindowSize,
	useRevealHeading,
	useSelectProjectAnimation,
	useHomePageInit,
	useAlternateTextOpacity,
	useWorkAnimation,
	useSkillsAnimation,
	useExcellenceAnimation,
	useProjectsCurrentView,
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
	Excellence,
	Contact,
	ProjectsViewSelector,
	PercentLoader,
} from "#/components";
import { ExternalLink } from "#/components/icons";
import { events, registerEvent } from "#/utils/analytics/events";

const Home: NextPage = () => {
	//-----------------------------------------
	// HELPERS
	//-----------------------------------------
	const darkSectionRef = useRef<HTMLDivElement>(null);
	const handleMoreProjectsGA = () => {
		registerEvent(events.pages.home.viewMoreProjects());
	};

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
	const { workContainerRef, mobileWorkContainerRef, onWorkDetailsKeyDown } = useWorkAnimation({
		windowInnerWidth,
	});
	const { textWrapperRef: thoughtOneText } = useRevealParagraph();
	const { textWrapperRef: thoughtTwoText } = useRevealParagraph();
	const { headingRef: skillsSectionTitlteRef } = useRevealHeading({ windowInnerWidth });
	const { headingRef: mobileSkillsSectionTitlteRef } = useRevealHeading({ windowInnerWidth });
	const { skillsContainerRef, mobileSkillsContainerRef } = useSkillsAnimation({
		windowInnerWidth,
	});
	const { headingRef: projectTitleRef } = useRevealHeading({ windowInnerWidth });
	const { selectedProjectId, onSelectProject, onDeselectProject, modalImgRef, modalRef, isOpen, onGoToProject } =
		useSelectProjectAnimation({});
	const { currentView, handleSetCurrentView } = useProjectsCurrentView();
	const { containerRef, containerWidth } = useExcellenceAnimation();

	return (
		<>
			<Head>
				<title>David Obodo | Software Developer</title>
				<meta
					name="description"
					content="David Obodo is a Software Developer that majors on Frontend Development, yet from time to time is no stranger to the entire full stack development."
				/>
				<link rel="icon" href="/icon-192x192.png" />
			</Head>
			<Nav showInBanner={false} />
			<BannerCurtain containerRef={blackCoverRef} />
			<Banners.HomePage bannerRef={bannerRef} bannerHeight={bannerHeight} />
			<Layout.DarkSection darkSectionRef={darkSectionRef} bannerHeight={bannerHeight}>
				<div className={styles.content}>
					<div className={styles.aboutWrapper}>
						<AlternatingOpacity textsListRef={textsListRef} />
					</div>
					<Work
						workContainerRef={workContainerRef}
						mobileWorkContainerRef={mobileWorkContainerRef}
						onWorkDetailsKeyDown={onWorkDetailsKeyDown}
					/>
					<Thoughts.One textWrapperRef={thoughtOneText} />

					<div className={styles.excellenceWrapper}>
						<Excellence containerRef={containerRef} containerWidth={containerWidth} />
					</div>
					<Skills
						skillsContainerRef={skillsContainerRef}
						skillsSectionTitlteRef={skillsSectionTitlteRef}
						mobileSkillsContainerRef={mobileSkillsContainerRef}
						mobileSkillsSectionTitlteRef={mobileSkillsSectionTitlteRef}
					/>
					<Thoughts.Two textWrapperRef={thoughtTwoText} />

					<div id="projects-list">
						<ProjectsHeading projectTitleRef={projectTitleRef} />

						<div className={styles.viewSelectorWrapper}>
							<div></div>
							<ProjectsViewSelector currentView={currentView} handleSetCurrentView={handleSetCurrentView} />
						</div>
						<Projects
							onViewProject={onSelectProject}
							displayedProjects={PROJECTS.slice(0, 8)}
							currentView={currentView}
						/>
					</div>

					<div className={styles.projectsBtnWrapper}>
						<Link href="/projects" scroll={false}>
							<a onClick={handleMoreProjectsGA}>
								More Projects
								<ExternalLink />
							</a>
						</Link>
					</div>
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
			<Contact />
		</>
	);
};

export default Home;
