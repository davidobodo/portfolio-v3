import Head from "next/head";
import { NextPage } from "next";
import {
	Noise,
	Banners,
	Nav,
	ProjectModal,
	Layout,
	Projects,
	BannerCurtain,
	Contact,
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
import { TFilterBy } from "#/types";

const { scrollToProjectsSection } = projectAnimations;

const ProjectsPage: NextPage = () => {
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
	const { currentView, handleSetCurrentView } = useProjectsCurrentView();

	useIsomorphicLayoutEffect(() => {
		if (windowInnerWidth < 768) {
			handleSetCurrentView("grid");
		}
	}, [windowInnerWidth]);

	//---------------------------------------------------------
	// TOGGLE PROJECTS DISPLAYED BASED ON FILTER
	//---------------------------------------------------------
	const [filterKey, setFilterKey] = useState("all");
	const [filterBy, setFilterBy] = useState<TFilterBy>("tech-stack");
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
		currProjects = TECH_STACKS[filterKey]?.label || "All";
	}

	//---------------------------------------------------------
	// DISPLAYED PROJECTS
	//---------------------------------------------------------
	const [displayedProjects, setDisplayedProjects] = useState(PROJECTS);
	const onFilterProjects = ({ key, filterBy }: { key: string; filterBy: TFilterBy }) => {
		let filteredProjects = PROJECTS;

		if (key !== "all") {
			filteredProjects = PROJECTS.filter((project) => {
				const { type, tech } = project;

				if (filterBy === "tech-stack") {
					return tech.includes(key);
				} else if (filterBy === "project-nature") {
					return type === key;
				}
			});
		}

		registerEvent(events.pages.projects.filterProjectsByKey({ filter_key: key }));
		setDisplayedProjects(filteredProjects);
		setFilterKey(key);
	};

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

				<link rel="icon" href="/icon-192x192.png" />
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
					<div className={styles.header}>
						<h2 ref={contentRef}>
							Viewing <span>{currProjects}</span> projects
						</h2>
						<ProjectsViewSelector currentView={currentView} handleSetCurrentView={handleSetCurrentView} />
					</div>
					<Projects onViewProject={onSelectProject} displayedProjects={displayedProjects} currentView={currentView} />
				</div>
			</Layout.DarkSection>
			<Contact />
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
};

export default ProjectsPage;
