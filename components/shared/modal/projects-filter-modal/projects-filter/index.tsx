import gsap from "gsap";
import styles from "./styles.module.scss";
import { useState, useEffect, useRef } from "react";
import { Radio } from "#/components";
import { useTrapFocus, usePrevious } from "#/hooks";
import { projectAnimations } from "#/utils/animations";
import { FilterCancelIcon } from "#/components/icons";
import { TFilterBy } from "#/types";
import { allowAppScroll, preventAppScroll } from "#/utils";

const { animateFilterSectionIn, slideInListItems, animateFilterSectionOut } = projectAnimations;

export default function BaseProjectsFilter({
	onFilterProjects,
	onCloseFilter,
	filterKey,
	filterList,
	filterBy,
	onSelectFilterBy,
}: {
	onFilterProjects: ({ key }: { key: string }) => void;
	onCloseFilter: () => void;
	filterKey: string;
	filterList: { key: string; label: string }[];
	filterBy: TFilterBy;
	onSelectFilterBy: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const containerRefSelector = gsap.utils.selector(containerRef);

	//--------------------------------------------------------
	//CLOSE
	//--------------------------------------------------------
	const onClose = () => {
		allowAppScroll();

		// Remove open filter params
		const searchParams = new URLSearchParams(window.location.search);
		searchParams.delete("open_filter");
		const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
		window.history.pushState(null, "", newRelativePathQuery);

		const listItems = containerRefSelector('[data-key="list-items"]');
		const filterOptions = containerRefSelector<HTMLDivElement>('[data-key="filter-options"]');
		const tl = animateFilterSectionOut({
			listItems,
			filterOptions: filterOptions[0],
			closeFilterBtn: document.querySelector('[data-key="close-filter-btn"]') as HTMLButtonElement,
		});
		if (tl?.isActive()) return;
		tl?.then(() => {
			onCloseFilter();
			const btnFilter = document.querySelector('[data-key="open-filter-btn"]') as HTMLElement;
			btnFilter.focus();
		});
	};

	//--------------------------------------------------------
	//INITIAL ANIMATION
	//--------------------------------------------------------
	useEffect(() => {
		const listItems = containerRefSelector('[data-key="list-items"]');
		const filterOptions = containerRefSelector<HTMLDivElement>('[data-key="filter-options"]');
		const tl = animateFilterSectionIn({
			listItems,
			filterOptions: filterOptions[0],
			closeFilterBtn: document.querySelector('[data-key="close-filter-btn"]') as HTMLButtonElement,
		});
		tl.add(() => {
			preventAppScroll();
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//--------------------------------------------------------
	//Select a filter key
	//--------------------------------------------------------
	const onSetFilterKey = (key: string) => {
		allowAppScroll();
		onFilterProjects({
			key,
		});
		window.history.pushState(null, "New Page Title", `/projects?filter_by=${filterBy}&filter_key=${key}`);
		onClose();
	};

	const [initialLoad, setInitialLoad] = useState(true);
	const prevFilter = usePrevious(filterBy);
	useEffect(() => {
		if (!initialLoad && prevFilter && prevFilter !== filterBy) {
			slideInListItems({
				listItems: containerRefSelector('[data-key="list-items"]'),
			});
		} else {
			setInitialLoad(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterBy, initialLoad]);

	//--------------------------------------------------------
	//TRAP FOCUS (Since this is a modal)
	//--------------------------------------------------------
	const { onKeyDown } = useTrapFocus({
		containerRef,
		onClose: onClose,
	});

	//--------------------------------------------------------
	//MODAL CONTENT
	//--------------------------------------------------------
	const FILTERS = [
		{
			label: "Tech Stack",
			key: "tech-stack",
		},
		{
			label: "Project Nature",
			key: "project-nature",
		},
		// {
		// 	label: "Open Source",
		// 	key: "open-source",
		// },
		// {
		// 	label: "Closed Source",
		// 	key: "closed-source",
		// },
	];

	return (
		<div className={styles.filterModal} onKeyDown={onKeyDown} ref={containerRef}>
			<div className={styles.empty} onClick={onClose}></div>
			<aside className={styles.aside}>
				<button className={styles.closeBtn} onClick={onClose} data-key="close-filter-btn" aria-label="close filter">
					<FilterCancelIcon />
				</button>
				<div className={styles.filterBy} data-key="filter-options">
					<h4>Filter by</h4>

					{FILTERS.slice(0, 2).map((item) => {
						const { label, key } = item;
						return (
							<div className={styles.filterCheck} key={key}>
								<label htmlFor={key}>{label}</label>
								<Radio id={key} name="filter" value={key} onchange={onSelectFilterBy} checked={filterBy === key} />
							</div>
						);
					})}
				</div>
				{/* <div className={styles.filterBy} data-key="filter-options" style={{ opacity: 1 }}>
					<h4>Souce Code availability</h4>

					{FILTERS.slice(2).map((item) => {
						const { label, key } = item;
						return (
							<div className={styles.filterCheck} key={key}>
								<label htmlFor={key}>{label}</label>
								<Radio id={key} name="filter" value={key} onchange={onSelectFilterBy} checked={filterBy === key} />
							</div>
						);
					})}
				</div> */}
				<ul className={styles.listWrapper}>
					{filterList.map((item) => {
						const { key } = item;
						return (
							<li key={item.key} className={filterKey === item.key ? styles.active : ""} data-key="list-items">
								<button onClick={() => onSetFilterKey(key)} data-key="tech-stack">
									{item.label}
								</button>
							</li>
						);
					})}
				</ul>
			</aside>
		</div>
	);
}
