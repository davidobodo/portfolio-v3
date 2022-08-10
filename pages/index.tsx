import Head from "next/head";
import type { NextPage } from "next";
import styles from "#/styles/_pages/home.module.scss";
import { useRef, useState } from "react";
import { PROJECTS } from "#/constants/projects";
import {
	useRevealParagraph,
	useWindowSize,
	useRevealHeading,
	useSelectProjectAnimation,
	useHomePageInit,
	useAlternateTextOpacity,
	useWorkAnimation,
	useSkillsAnimation,
	useIsomorphicLayoutEffect,
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
} from "#/components";
import { ExternalLink } from "#/components/icons";
import Link from "next/link";

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

	const [projectView, setProjectView] = useState<"list" | "grid">("list");
	useIsomorphicLayoutEffect(() => {
		if (windowInnerWidth < 768) {
			setProjectView("grid");
		} else {
			setProjectView("list");
		}
	}, []);
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

					<div className={styles.excellenceWrapper}>
						<Excellence />
					</div>
					<Skills
						skillsContainerRef={skillsContainerRef}
						skillsSectionTitlteRef={skillsSectionTitlteRef}
						mobileSkillsContainerRef={mobileSkillsContainerRef}
						mobileSkillsSectionTitlteRef={mobileSkillsSectionTitlteRef}
					/>

					<Thoughts.Two textWrapperRef={thoughtTwoText} />

					<ProjectsHeading projectTitleRef={projectTitleRef} />
					<Projects
						onViewProject={onSelectProject}
						displayedProjects={PROJECTS.slice(0, 5)}
						currentView={projectView}
					/>

					<div className={styles.projectsBtnWrapper}>
						<Link href="/projects">
							<a>
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
		</>
	);
};

export default Home;
