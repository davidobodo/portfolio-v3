import Head from "next/head";
import type { NextPage, NextPageContext } from "next";
import Link from "next/link";
import styles from "#/styles/_pages/home.module.scss";
import { useRef } from "react";
import { METADATA, PROJECTS } from "#/constants";
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
	Footer,
	ProjectsViewSelector,
} from "#/components";
import { ExternalLink } from "#/components/icons";
import { events, registerEvent } from "#/utils/analytics/events";

export default function Home({ initSectionId }: { initSectionId: string }) {
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
		initSectionId,
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
	const { currentView, handleSetCurrentView } = useProjectsCurrentView({});
	const { containerRef, containerWidth } = useExcellenceAnimation();

	const { title, description, url, image } = METADATA["home"];
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta property="type" content="website" />
				<meta property="url" content={url} />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#e1dfdd" />

				<meta property="title" content={title} />
				<meta name="description" content={description} />
				<meta property="image" content={image} />
				<meta content="image/*" property="og:image:type" />

				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={url} />
				<meta property="og:image" content={image} />
				<meta property="og:site_name" content={title} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@phitGeek" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />

				<meta
					name="keywords"
					content="David, Obodo, Software Developer, Frontend, Fullstack, Frontend Developer, Fullstack Developer"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav showInBanner={false} />
			<BannerCurtain containerRef={blackCoverRef} />
			<Banners.HomePage bannerRef={bannerRef} bannerHeight={bannerHeight} />
			<Layout.DarkSection darkSectionRef={darkSectionRef} bannerHeight={bannerHeight}>
				<div className={styles.content}>
					<div className={styles.aboutWrapper} id="about">
						<AlternatingOpacity textsListRef={textsListRef} />
					</div>
					<div id="work">
						<Work
							workContainerRef={workContainerRef}
							mobileWorkContainerRef={mobileWorkContainerRef}
							onWorkDetailsKeyDown={onWorkDetailsKeyDown}
						/>
					</div>

					<Thoughts.One textWrapperRef={thoughtOneText} />

					<div className={styles.excellenceWrapper} id="excellence">
						<Excellence containerRef={containerRef} containerWidth={containerWidth} />
					</div>
					<div id="skills">
						<Skills
							skillsContainerRef={skillsContainerRef}
							skillsSectionTitlteRef={skillsSectionTitlteRef}
							mobileSkillsContainerRef={mobileSkillsContainerRef}
							mobileSkillsSectionTitlteRef={mobileSkillsSectionTitlteRef}
						/>
					</div>

					<Thoughts.Two textWrapperRef={thoughtTwoText} />

					<div id="projects-list">
						<ProjectsHeading projectTitleRef={projectTitleRef} />

						<div className={styles.viewSelectorWrapper}>
							<div></div>
							<ProjectsViewSelector currentView={currentView} handleSetCurrentView={handleSetCurrentView} />
						</div>
						<Projects onViewProject={onSelectProject} displayedProjects={PROJECTS.slice(0, 8)} currentView={currentView} />
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
			<div id="footer">
				<Footer />
			</div>
		</>
	);
}

Home.withAnim = true;

export async function getServerSideProps(ctx: NextPageContext) {
	const { sectionId } = ctx.query;
	return {
		props: {
			initSectionId: sectionId || "",
		},
	};
}
