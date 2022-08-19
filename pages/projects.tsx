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
	Filter,
	ProjectsFilter,
	Contact,
	ProjectsViewSelector,
} from "#/components";
import styles from "#/styles/_pages/projects.module.scss";
import {
	useSelectProjectAnimation,
	useWindowSize,
	useIsomorphicLayoutEffect,
	useProjectsPageInit,
	useProjectsCurrentView,
} from "#/hooks";

import { PROJECTS } from "#/constants/projects";
import { useState, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TECH_STACKS } from "#/constants/tech-stacks";
import { PROJECT_NATURE } from "#/constants";
import { events, registerEvent } from "#/utils/analytics/events";
type TFilterBy = "tech-stack" | "project-nature";

const ProjectsPage: NextPage = () => {
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
	const onFilterProjects = ({ key, filterBy }: { key: string; filterBy: string }) => {
		let filteredProjects = PROJECTS;

		if (key !== "all") {
			filteredProjects = PROJECTS.filter((project) => {
				const { type, tech } = project;

				if (filterBy === "tech-stack") {
					return tech.includes(key);
				} else {
					return type === key;
				}
			});
		}

		registerEvent(events.pages.projects.filterProjectsByKey({ filter_key: key }));
		setDisplayedProjects(filteredProjects);
		setFilterKey(key);
	};

	const scrollToProjectsList = () => {
		ScrollTrigger.refresh();
		const elem = document.querySelector("[data-key='projects']");
		if (elem) {
			elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
		}
	};

	const [initialPageLoad, setInitialPageLoad] = useState(true);
	useIsomorphicLayoutEffect(() => {
		if (!initialPageLoad) {
			scrollToProjectsList();
		} else {
			setInitialPageLoad(false);
		}
	}, [displayedProjects.length]);

	return (
		<>
			<Head>
				<title>David Obodo | Projects</title>
				<meta
					name="description"
					content="Software Developer that is highly addicted to Front End Development, yet capable of Full Stack Development3"
				/>
				<link rel="icon" href="/icon-192x192.png" />
			</Head>
			<Nav />
			<BannerCurtain containerRef={blackCoverRef} />
			<Banners.OtherPages
				texts={["Projects", "Playground", "xperiments", "Replicas"]}
				textWrapperRef={textWrapperRef}
				scrollIndicatorRef={scrollIndicatorRef}
				bannerRef={bannerRef}
				bannerHeight={bannerHeight}
			/>
			<Filter onClick={onOpenFilter} displayTriggerNode={contentRef} />
			<Layout.DarkSection darkSectionRef={darkSectionRef}>
				<div className={styles.content} data-key="projects" id="projects-list">
					<div className={styles.header}>
						<h2 className={styles.contentTitle} ref={contentRef}>
							Viewing <span>{currProjects}</span> projects
						</h2>
						<ProjectsViewSelector currentView={currentView} handleSetCurrentView={handleSetCurrentView} />
					</div>
					<div className={styles.projectsWrapper}>
						<Projects onViewProject={onSelectProject} displayedProjects={displayedProjects} currentView={currentView} />
					</div>
					{showFilter && (
						<ProjectsFilter
							onFilterProjects={onFilterProjects}
							onCloseFilter={onCloseFilter}
							filterKey={filterKey}
							filterList={filterList}
							filterBy={filterBy}
							onSelectFilterBy={onSelectFilterBy}
						/>
					)}
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
		</>
	);
};

export default ProjectsPage;
