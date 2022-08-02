import Head from "next/head";
import { NextPage } from "next";
import {
	Noise,
	Banners,
	Nav,
	ProjectListView,
	ProjectModal,
	Layout,
	Projects,
	BannerCurtain,
	Radio,
} from "#/components";
import styles from "#/styles/_pages/projects.module.scss";
import { useSelectProjectAnimation, useProjectsLettersInit, useWindowSize } from "#/hooks";
import { TECH_STACKS } from "#/constants/tech-stacks";
import { PROJECT_NATURE } from "#/constants";
import { PROJECTS } from "#/constants/projects";
import { useEffect, useState, useRef, Ref } from "react";
import { projectsPageAnima } from "#/utils/animations/atoms";

const { animateFilterSection } = projectsPageAnima;
const ProjectsPage: NextPage = () => {
	const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();
	const { textWrapperRef, scrollIndicatorRef, blackCoverRef, bannerRef, bannerHeight } = useProjectsLettersInit({
		windowInnerHeight,
		windowInnerWidth,
	});

	const { selectedProjectId, onSelectProject, onDeselectProject, modalImgRef, modalRef, onGoToProject, isOpen } =
		useSelectProjectAnimation();

	const [filterBy, setFilterBy] = useState("tech-stack");
	const onSelectFilterBy = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterBy(e.target.value);
	};

	const [displayedProjects, setDisplayedProjects] = useState(PROJECTS);
	let filterList = [];

	if (filterBy === "project-nature") {
		filterList = [
			{
				key: "all",
				label: "All",
			},
			...PROJECT_NATURE,
		];
	} else {
		filterList = [
			{
				key: "all",
				label: "All",
			},
			...Object.values(TECH_STACKS),
		];
	}

	const filterWrapperRef = useRef(null);
	const [filterSectionAnim, setFilterSectionAnim] = useState<gsap.core.Timeline>();
	const [showFilter, setshowFilter] = useState(false);

	const onToggleFilter = () => {
		if (!filterSectionAnim) return;
		if (!showFilter) {
			filterSectionAnim.play();
		} else {
			filterSectionAnim.reverse();
		}
		setshowFilter(!showFilter);
	};

	useEffect(() => {
		const tl = animateFilterSection({
			container: filterWrapperRef.current,
		});
		setFilterSectionAnim(tl);
	}, []);

	const [filterKey, setFilterKey] = useState("all");

	const onSetFilterKey = (key: string) => {
		// Save the key
		setFilterKey(key);

		// Filter the projects by the key
		const res = PROJECTS.filter((project) => {
			const { type, id, tech } = project;

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
			<BannerCurtain containerRef={blackCoverRef} />

			<Banners.OtherPages
				texts={["Projects", "Playground", "xperiments", "Replicas"]}
				textWrapperRef={textWrapperRef}
				scrollIndicatorRef={scrollIndicatorRef}
				bannerRef={bannerRef}
				bannerHeight={bannerHeight}
			/>
			<Layout.DarkSection>
				<div className={styles.content}>
					<div className={styles.projectsWrapper}>
						<Projects
							onViewProject={onSelectProject}
							displayedProjects={displayedProjects}
							filterBy={filterBy}
							filterKey={filterKey}
						/>
					</div>
					<button className={styles.btnFilter} onClick={onToggleFilter}>
						FILTER
					</button>
					<FilterSection
						isOpen={showFilter}
						containerRef={filterWrapperRef}
						filterBy={filterBy}
						onSelectFilterBy={onSelectFilterBy}
						filterKey={filterKey}
						filterList={filterList}
						onSetFilterKey={onSetFilterKey}
					/>
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

function FilterSection({
	isOpen,
	containerRef,
	filterBy,
	onSelectFilterBy,
	filterKey,
	filterList,
	onSetFilterKey,
}: {
	isOpen: boolean;
	containerRef: Ref<HTMLDivElement>;
}) {
	return (
		<aside className={styles.aside} ref={containerRef}>
			<div className={styles.filter}>
				<h4>Filter by</h4>

				<div className={styles.filterCheck}>
					<label htmlFor="tech-stack">Tech Stack</label>
					<Radio
						id="tech-stack"
						name="filter"
						value="tech-stack"
						onchange={onSelectFilterBy}
						checked={filterBy === "tech-stack"}
					/>
				</div>
				<div className={styles.filterCheck}>
					<label htmlFor="project-nature">Project Nature</label>
					<Radio
						id="project-nature"
						name="filter"
						value="project-nature"
						onchange={onSelectFilterBy}
						checked={filterBy === "project-nature"}
					/>
				</div>
			</div>
			{/* <h4>Tech stack</h4> */}
			<ul>
				{filterList.map((item) => {
					const { key } = item;
					return (
						<li key={item.key} className={filterKey === item.key ? styles.active : ""}>
							<button onClick={() => onSetFilterKey(key)} data-key="tech-stack">
								<span></span>
								{item.label}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
