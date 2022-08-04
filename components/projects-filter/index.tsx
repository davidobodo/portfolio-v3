import { Ref, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Radio } from "../index";
import { TECH_STACKS } from "#/constants/tech-stacks";
import { PROJECT_NATURE } from "#/constants";
import { createPortal } from "react-dom";

type TFilterBy = "tech-stack" | "project-nature";
export default function ProjectsFilter({
	isOpen,
	containerRef,
	onFilterProjects,
}: {
	isOpen: boolean;
	containerRef: Ref<HTMLDivElement>;
	onFilterProjects: ({ key, filterBy }: { key: string; filterBy: string }) => void;
}) {
	//-----------------------------------------
	// FILTER BY
	//-----------------------------------------
	const [filterBy, setFilterBy] = useState<TFilterBy>("tech-stack");
	const onSelectFilterBy = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterBy(e.target.value as TFilterBy);
	};
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

	//-----------------------------------------
	// FILTER KEY
	//-----------------------------------------
	const [filterKey, setFilterKey] = useState("all");
	const onSetFilterKey = (key: string) => {
		setFilterKey(key);

		onFilterProjects({
			key,
			filterBy,
		});
	};

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

	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const content = isOpen ? (
		<div
			className={styles.container}
			ref={containerRef}
			style={{ opacity: isOpen ? 1 : 0, visibility: isOpen ? "visible" : "hidden" }}
		>
			<div className={styles.backdrop} data-key="backdrop"></div>
			<aside className={styles.aside} data-key="sidebar">
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
	) : null;

	if (isBrowser) {
		return createPortal(content, document.getElementById("filter-root") as HTMLElement);
	} else {
		return null;
	}
}
