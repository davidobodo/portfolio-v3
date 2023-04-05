import Head from "next/head";
import { NextPageContext } from "next";
import {
	Noise,
	Banners,
	Nav,
	ProjectModal,
	Layout,
	Projects,
	BannerCurtain,
	Footer,
	ProjectsViewSelector,
	ProjectsFilterModal,
} from "#/components";
import styles from "#/styles/_pages/projects.module.scss";
import {
	useSelectProjectAnimation,
	useWindowSize,
	useIsomorphicLayoutEffect,
	useProjectsPageInit,
	useProjectsCurrentView,
} from "#/hooks";

import { METADATA, PROJECTS, TECH_STACKS } from "#/constants";
import { useState, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PROJECT_NATURE } from "#/constants";
import { events, registerEvent } from "#/utils/analytics/events";
import { FilterIcon } from "#/components/icons";
import { projectAnimations } from "#/utils/animations";
import { TFilterBy, TProjectType } from "#/types";

const { scrollToProjectsSection } = projectAnimations;

function ProjectsPage({
	initFilterBy,
	initFilterKey,
}: {
	initFilterBy: TFilterBy;
	initFilterKey: keyof typeof TECH_STACKS | TProjectType | "all";
}) {
	const [initialPageLoad, setInitialPageLoad] = useState(true);
	//---------------------------------------------------------
	// TOGGLE FILTER DISPLAY
	//---------------------------------------------------------
	const [showFilter, setShowFilter] = useState(false);
	const onOpenFilter = () => {
		if (showFilter) return;
		setShowFilter(true);
		registerEvent(events.pages.projects.openProjectsFilter());
	};
	const onCloseFilter = () => {
		setShowFilter(false);
		registerEvent(events.pages.projects.closeProjectsFilter());
	};
	const darkSectionRef = useRef(null);
	const contentRef = useRef(null);
	const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();
	const { textWrapperRef, scrollIndicatorRef, blackCoverRef, bannerRef, bannerHeight } = useProjectsPageInit({
		windowInnerHeight,
		windowInnerWidth,
		darkSectionRef,
		onOpenFilter,
	});
	const { selectedProjectId, onSelectProject, onDeselectProject, modalImgRef, modalRef, onGoToProject, isOpen } =
		useSelectProjectAnimation({});

	//---------------------------------------------------------
	// TOGGLE BETWEEN GRID AND LIST VIEW
	//---------------------------------------------------------
	const { currentView, handleSetCurrentView } = useProjectsCurrentView({});
	useIsomorphicLayoutEffect(() => {
		if (windowInnerWidth < 768) {
			handleSetCurrentView("grid");
		}
	}, [windowInnerWidth]);

	//---------------------------------------------------------
	// TOGGLE PROJECTS DISPLAYED BASED ON FILTER
	//---------------------------------------------------------
	const [filterKey, setFilterKey] = useState<any>(initFilterKey);

	const [filterBy, setFilterBy] = useState<TFilterBy>(initFilterBy);

	const onSelectFilterBy = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterBy(e.target.value as TFilterBy);
		registerEvent(events.pages.projects.toggleProjectsFilterBy({ filter_by: e.target.value }));
	};
	let filterList = [];
	let currProjects = "All";
	if (filterBy === "project-nature") {
		filterList = [
			{
				key: "all",
				label: "All",
			},
			...PROJECT_NATURE,
		];
		currProjects = PROJECT_NATURE.find((item) => item.key === filterKey)?.label || "All";
	} else {
		filterList = [
			{
				key: "all",
				label: "All",
			},
			...Object.values(TECH_STACKS),
		];
		currProjects = TECH_STACKS[filterKey as keyof typeof TECH_STACKS]?.label || "All";
	}

	//---------------------------------------------------------
	// DISPLAYED PROJECTS
	//---------------------------------------------------------
	const onFilterProjects = ({ key }: { key: string }) => {
		registerEvent(events.pages.projects.filterProjectsByKey({ filter_key: key }));
		setFilterKey(key);
	};

	let displayedProjects = PROJECTS;

	if (filterBy === "tech-stack") {
		if (filterKey === "all") {
			displayedProjects = PROJECTS;
		} else {
			displayedProjects = PROJECTS.filter((project) => {
				return project.tech.includes(filterKey as keyof typeof TECH_STACKS);
			});
		}
	}

	if (filterBy === "project-nature") {
		if (filterKey === "all") {
			displayedProjects = PROJECTS;
		} else {
			displayedProjects = PROJECTS.filter((project) => {
				return project.type === filterKey;
			});
		}
	}

	if (filterBy === "open-source") {
		if (filterKey === "all") {
			displayedProjects = PROJECTS.filter((project) => {
				const { githublink } = project;
				return githublink && githublink.length > 0;
			});
		} else {
			displayedProjects = PROJECTS.filter((project) => {
				const { githublink, tech } = project;
				return githublink && githublink.length > 0 && tech.includes(filterKey as keyof typeof TECH_STACKS);
			});
		}
	}
	if (filterBy === "closed-source") {
		if (filterKey === "all") {
			displayedProjects = PROJECTS.filter((project) => {
				const { githublink } = project;
				return !githublink || githublink.length === 0;
			});
		} else {
			displayedProjects = PROJECTS.filter((project) => {
				const { githublink, tech } = project;
				return (!githublink || githublink.length === 0) && tech.includes(filterKey as keyof typeof TECH_STACKS);
			});
		}
	}

	useIsomorphicLayoutEffect(() => {
		if (!initialPageLoad) {
			ScrollTrigger.refresh();
			scrollToProjectsSection();
		} else {
			setInitialPageLoad(false);
		}
	}, [displayedProjects.length]);

	const { title, description, url, image } = METADATA["projects"];

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

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav hasBackdropFilter={false} />
			<BannerCurtain containerRef={blackCoverRef} />
			<Banners.OtherPages
				texts={["Projects", "Playground", "Replicas", "xperiments"]}
				textWrapperRef={textWrapperRef}
				scrollIndicatorRef={scrollIndicatorRef}
				bannerRef={bannerRef}
				bannerHeight={bannerHeight}
			/>
			<Layout.DarkSection darkSectionRef={darkSectionRef} bannerHeight={bannerHeight}>
				<div className={styles.content} id="projects-list">
					<div className={styles.filterWrapper}>
						<button onClick={onOpenFilter} data-key="open-filter-btn" aria-label="Open Filter">
							<FilterIcon />
						</button>
					</div>

					<p className={styles.note}>Note: Projects listed here are mainly freelance/personal projects</p>
					<div className={styles.header}>
						<h2 ref={contentRef}>
							Viewing <span>{currProjects}</span> projects
						</h2>
						<ProjectsViewSelector currentView={currentView} handleSetCurrentView={handleSetCurrentView} />
					</div>
					<Projects onViewProject={onSelectProject} displayedProjects={displayedProjects} currentView={currentView} />
				</div>
			</Layout.DarkSection>
			<Footer />
			<Noise />

			<ProjectModal
				selectedProjectId={selectedProjectId}
				modalRef={modalRef}
				onDeselectProject={onDeselectProject}
				modalImgRef={modalImgRef}
				onGoToProject={onGoToProject}
				isOpen={isOpen}
			/>

			<ProjectsFilterModal
				isOpen={showFilter}
				onFilterProjects={onFilterProjects}
				onCloseFilter={onCloseFilter}
				filterKey={filterKey}
				filterList={filterList}
				filterBy={filterBy}
				onSelectFilterBy={onSelectFilterBy}
			/>
		</>
	);
}

export default ProjectsPage;

export async function getServerSideProps(ctx: NextPageContext) {
	const { query } = ctx;
	return {
		props: {
			initFilterBy: query.filter_by || "tech-stack",
			initFilterKey: query.filter_key || "all",
		},
	};
}

ProjectsPage.withAnim = true;
