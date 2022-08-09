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
	ProgressBar,
} from "#/components";
import styles from "#/styles/_pages/projects.module.scss";
import { useSelectProjectAnimation, useGenericPageInit, useWindowSize, useIsomorphicLayoutEffect } from "#/hooks";

import { PROJECTS } from "#/constants/projects";
import { useState, useRef, useCallback } from "react";
import { useRadialGradientAnimContext } from "#/state";
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

	const { timeline } = useRadialGradientAnimContext();

	useIsomorphicLayoutEffect(() => {
		if (timeline) {
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

	return (
		<>
			<Head>
				<title>David Obodo - Projects</title>
				<meta name="description" content="David Obodo's portfolio website" />
				<link rel="icon" href="/favicon.ico" />
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
					<h2 className={styles.contentTitle} ref={contentRef}>
						Viewing <span>{currProjects}</span> projects
					</h2>
					<div className={styles.projectsWrapper}>
						<Projects onViewProject={onSelectProject} displayedProjects={displayedProjects} />
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
			<ProgressBar />
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
