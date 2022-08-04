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
import { useSelectProjectAnimation, useGenericPageInit, useWindowSize } from "#/hooks";

import { PROJECTS } from "#/constants/projects";
import { useEffect, useState, useRef } from "react";
import { projectsPageAnima } from "#/utils/animations/atoms";
import gsap from "gsap";

const { animateFilterSection } = projectsPageAnima;
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
	const filterRef = useRef(null);
	const filterRefSelector = gsap.utils.selector(filterRef);
	const [showFilter, setshowFilter] = useState(false);
	const [filterSectionAnim, setFilterSectionAnim] = useState<gsap.core.Timeline>();
	const onToggleFilter = () => {
		if (!filterSectionAnim) return;
		if (!showFilter) {
			filterSectionAnim.play();
			document.body.style.overflow = "hidden";
		} else {
			filterSectionAnim.reverse();
			document.body.style.overflow = "auto";
		}
		setshowFilter(!showFilter);
	};

	// Create filter section animation
	useEffect(() => {
		const backdrop = filterRefSelector<HTMLDivElement>('[data-key="backdrop"]');
		const sidebar = filterRefSelector('[data-key="sidebar"]');
		const listItems = filterRefSelector('[data-key="list-items"]');
		const tl = animateFilterSection({
			backdrop: backdrop[0],
			sidebar: sidebar[0],
			listItems,
		});
		setFilterSectionAnim(tl);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [displayedProjects, setDisplayedProjects] = useState(PROJECTS);
	const onFilterProjects = ({ key, filterBy }: { key: string; filterBy: string }) => {
		const res = PROJECTS.filter((project) => {
			const { type, tech } = project;

			if (filterBy === "tech-stack") {
				return tech.includes(key);
			} else {
				return type === key;
			}
		});
		setDisplayedProjects(res);
		onToggleFilter();
	};

	return (
		<>
			<Head>
				<title>David Obodo - Projects</title>
				<meta name="description" content="David Obodo's portfolio website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<Filter onClick={onToggleFilter} displayTriggerNode={contentRef} />

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
						Viewing all <span>Typescript</span> Projects
					</h2>
					<div className={styles.projectsWrapper}>
						<Projects onViewProject={onSelectProject} displayedProjects={displayedProjects} />
					</div>
					<ProjectsFilter isOpen={showFilter} containerRef={filterRef} onFilterProjects={onFilterProjects} />
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
