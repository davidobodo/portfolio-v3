import gsap from "gsap";
import { useState, useEffect, useRef, memo } from "react";
import styles from "./styles.module.scss";
import { Radio } from "../index";
import { createPortal } from "react-dom";
import { useTrapFocus } from "#/hooks";
import { projectAnimations } from "#/utils/animations";
import { FilterCancelIcon } from "#/components/icons";
const { animateFilterSection } = projectAnimations;

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
	filterKey: string;
	filterList: { key: string; label: string }[];
	filterBy: string;
	onSelectFilterBy: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	const containerRef = useRef<HTMLDivElement>(null);

	const [tl, setTl] = useState<gsap.core.Timeline>();

	const containerRefSelector = gsap.utils.selector(containerRef);
	useEffect(() => {
		const listItems = containerRefSelector('[data-key="list-items"]');
		const filterOptions = containerRefSelector<HTMLDivElement>('[data-key="filter-options"]');
		const container = containerRefSelector<HTMLDivElement>('[data-key="container"]');
		const tl = animateFilterSection({
			listItems,
			filterOptions: filterOptions[0],
			container: container[0],
			openFilterBtn: document.querySelector('[data-key="open-filter-btn"]') as HTMLButtonElement,
			closeFilterBtn: document.querySelector('[data-key="close-filter-btn"]') as HTMLButtonElement,
		});
		tl.add(() => {
			document.body.style.overflow = "hidden";
		});
		setTl(tl);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onClose = () => {
		if (tl?.isActive()) return;
		tl?.reverse().then(() => {
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
					<FilterCancelIcon />
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
