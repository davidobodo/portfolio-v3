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
} from "#/components";
import styles from "#/styles/_pages/projects.module.scss";
import { useSelectProjectAnimation, useGenericPageInit, useWindowSize, useIsomorphicLayoutEffect } from "#/hooks";

import { PROJECTS } from "#/constants/projects";
import { useState, useRef, useCallback } from "react";
import { useRadialGradientAnimContext } from "#/context";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TECH_STACKS } from "#/constants/tech-stacks";
import { PROJECT_NATURE } from "#/constants";
type TFilterBy = "tech-stack" | "project-nature";

const ProjectsPage: NextPage = () => {
	const darkSectionRef = useRef(null);
	const contentRef = useRef(null);

	const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();
	const { textWrapperRef, scrollIndicatorRef, blackCoverRef, bannerRef, bannerHeight } = useGenericPageInit({
		windowInnerHeight,
		windowInnerWidth,
		darkSectionRef,
	});
	const { selectedProjectId, onSelectProject, onDeselectProject, modalImgRef, modalRef, onGoToProject, isOpen } =
		useSelectProjectAnimation();

	//-----------------------------------------
	// TOGGLE FILTER
	//-----------------------------------------
	const [showFilter, setShowFilter] = useState(false);

	const onOpenFilter = () => {
		if (showFilter) return;
		setShowFilter(true);
	};

	const onCloseFilter = () => {
		setShowFilter(false);
	};
	const [filterKey, setFilterKey] = useState("all");

	const [displayedProjects, setDisplayedProjects] = useState(PROJECTS);
	const onFilterProjects = useCallback(({ key, filterBy }: { key: string; filterBy: string }) => {
		const res = PROJECTS.filter((project) => {
			const { type, tech } = project;

			if (filterBy === "tech-stack") {
				return tech.includes(key);
			} else {
				return type === key;
			}
		});

		setDisplayedProjects(res);
		setFilterKey(key);
	}, []);

	const { animation } = useRadialGradientAnimContext();

	useIsomorphicLayoutEffect(() => {
		if (animation) {
			ScrollTrigger.refresh();
			const elem = document.querySelector("[data-key='projects']");
			if (elem) {
				elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
			}
		}
	}, [displayedProjects.length]);

	const [filterBy, setFilterBy] = useState<TFilterBy>("tech-stack");
	const onSelectFilterBy = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterBy(e.target.value as TFilterBy);
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

	const [currentView, setCurrentView] = useState<"list" | "grid">("list");
	const handleSetCurrentView = (e) => {
		const elem = document.querySelector("[data-key='projects']");
		if (elem) {
			elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
		}
		setCurrentView(e.currentTarget.value);
	};
	const [canSelectView, setCanSelectView] = useState();
	useIsomorphicLayoutEffect(() => {
		if (windowInnerWidth < 768) {
			setCurrentView("grid");
		}
	}, [windowInnerWidth]);

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
			<Filter onClick={onOpenFilter} displayTriggerNode={contentRef} />

			<BannerCurtain containerRef={blackCoverRef} />

			<Banners.OtherPages
				texts={["Projects", "Playground", "xperiments", "Replicas"]}
				textWrapperRef={textWrapperRef}
				scrollIndicatorRef={scrollIndicatorRef}
				bannerRef={bannerRef}
				bannerHeight={bannerHeight}
			/>
			<Layout.DarkSection darkSectionRef={darkSectionRef}>
				<div className={styles.content} data-key="projects">
					<div className={styles.header}>
						<h2 className={styles.contentTitle} ref={contentRef}>
							Viewing <span>{currProjects}</span> projects
						</h2>
						<div className={styles.view}>
							<button
								value="list"
								className={currentView === "list" ? styles.active : ""}
								onClick={handleSetCurrentView}
								aria-label="list-view"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="#86868b"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<line x1="9" y1="6" x2="20" y2="6" />
									<line x1="9" y1="12" x2="20" y2="12" />
									<line x1="9" y1="18" x2="20" y2="18" />
									<line x1="5" y1="6" x2="5" y2="6.01" />
									<line x1="5" y1="12" x2="5" y2="12.01" />
									<line x1="5" y1="18" x2="5" y2="18.01" />
								</svg>
							</button>
							<button
								value="grid"
								className={currentView === "grid" ? styles.active : ""}
								onClick={handleSetCurrentView}
								aria-label="grid-view"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="#86868b"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<rect x="4" y="4" width="6" height="6" rx="1" />
									<rect x="14" y="4" width="6" height="6" rx="1" />
									<rect x="4" y="14" width="6" height="6" rx="1" />
									<rect x="14" y="14" width="6" height="6" rx="1" />
								</svg>
							</button>
						</div>
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
