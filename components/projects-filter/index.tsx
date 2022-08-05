import gsap from "gsap";
import { Ref, useState, useEffect, useRef, memo } from "react";
import styles from "./styles.module.scss";
import { Radio } from "../index";
import { TECH_STACKS } from "#/constants/tech-stacks";
import { PROJECT_NATURE } from "#/constants";
import { createPortal } from "react-dom";
import { useTrapFocus } from "#/hooks";
import { projectsPageAnima } from "#/utils/animations/atoms";
const { animateFilterSection } = projectsPageAnima;

function BaseProjectsFilter({
	onFilterProjects,
	onCloseFilter,
	filterKey,
	filterList,
	filterBy,
	onSelectFilterBy,
}: {
	onFilterProjects: ({ key, filterBy }: { key: string; filterBy: string }) => void;
	onCloseFilter: () => void;
}) {
	const containerRef = useRef<HTMLDivElement>(null);

	const [tl, setTl] = useState<gsap.core.Timeline>();

	const containerRefSelector = gsap.utils.selector(containerRef);
	useEffect(() => {
		const backdrop = containerRefSelector<HTMLDivElement>('[data-key="backdrop"]');
		const sidebar = containerRefSelector('[data-key="sidebar"]');
		const listItems = containerRefSelector('[data-key="list-items"]');
		const filterOptions = containerRefSelector<HTMLDivElement>('[data-key="filter-options"]');
		const container = containerRefSelector('[data-key="container"]');
		const tl = animateFilterSection({
			backdrop: backdrop[0],
			sidebar: sidebar[0],
			listItems,
			filterOptions: filterOptions[0],
			container: container,
			openFilterBtn: document.querySelector('[data-key="open-filter-btn"]'),
			closeFilterBtn: document.querySelector('[data-key="close-filter-btn"]'),
		});
		tl.add(() => {
			document.body.style.overflow = "hidden";
		});
		setTl(tl);
	}, []);

	const onClose = () => {
		if (tl?.isActive()) return;
		tl.reverse().then(() => {
			onCloseFilter();
		});
	};

	const onSetFilterKey = (key: string) => {
		document.body.style.overflow = "auto";
		onFilterProjects({
			key,
			filterBy,
		});
		onClose();
	};

	const { onKeyDown } = useTrapFocus({
		containerRef,
		onClose: onClose,
	});

	const content = (
		<div className={styles.container} ref={containerRef} onKeyDown={onKeyDown}>
			<div className={styles.filterModal} data-key="container">
				<button className={styles.closeBtn} onClick={onClose} data-key="close-filter-btn" aria-label="close filter">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#fff"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<line x1="3" y1="3" x2="21" y2="21" />
						<path d="M9 5h9.5a1 1 0 0 1 .5 1.5l-4.049 4.454m-.951 3.046v5l-4 -3v-4l-5 -5.5a1 1 0 0 1 .18 -1.316" />
					</svg>
				</button>
				<div className={styles.empty} onClick={onClose}></div>
				<aside className={styles.aside}>
					<div className={styles.filterBy} data-key="filter-options">
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
					<ul className={styles.listWrapper}>
						{filterList.map((item) => {
							const { key } = item;
							return (
								<li key={item.key} className={filterKey === item.key ? styles.active : ""} data-key="list-items">
									<button onClick={() => onSetFilterKey(key)} data-key="tech-stack">
										<span></span>
										{item.label}
									</button>
								</li>
							);
						})}
					</ul>
				</aside>
			</div>
		</div>
	);

	return createPortal(content, document.getElementById("filter-root") as HTMLElement);
}

const ProjectsFilter = memo(BaseProjectsFilter);

export default ProjectsFilter;

//-----------------------------------------
// FILTER KEY
//-----------------------------------------

// useLayoutEffect(() => {
// 	console.log("THIS GUY GOT FIRED", timeline);
// 	if (timeline) {
// 		if (filterKey) {
// 			timeline.scrollTrigger.refresh();
// 		}

// 		const elem = document.querySelector("[data-key='projects']");

// 		if (elem) {
// 			console.log("LETS FIRE");
// 			elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
// 		}
// 	}
// }, []);
