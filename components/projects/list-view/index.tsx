import styles from "./styles.module.scss";
import useBoxAnimation from "../useBoxAnimation";

import Box from "../floating-box";

export function ProjectListView({
	onViewProject,
	location,
	displayedProjects,
	filterBy,
	filterKey,
}: {
	onViewProject: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
	location: "home" | "projects";
}) {
	const { imgRef, btnRef, textRef, onMouseEnter, onMouseLeave, isActive, onEnterElement, listRef } = useBoxAnimation();

	return (
		<div className={styles.container}>
			<Box
				imgRef={imgRef}
				btnRef={btnRef}
				textRef={textRef}
				isActive={isActive}
				displayedProjects={displayedProjects}
			/>
			<ul className={styles.projectsList} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={listRef}>
				{displayedProjects.map((item, i) => {
					const { title, type, id, tech } = item;

					// let hide = false;

					// if (filterBy === "tech-stack") {
					// 	hide = !!tech.includes(filterKey);
					// }

					// console.log(hide, "THE HIDE");

					// if (hide) return null;

					return (
						<ProjectListItem
							key={i}
							onMouseEnter={onEnterElement}
							onClick={onViewProject}
							id={id}
							title={title}
							type={type}
							i={i}
						/>
					);
				})}
			</ul>
		</div>
	);
}

function ProjectListItem({
	onMouseEnter,
	onClick,
	id,
	title,
	type,
	i,
}: {
	onMouseEnter: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
	onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
	id: string;
	title: string;
	type: string;
	i: number;
}) {
	return (
		<li onMouseEnter={onMouseEnter} onClick={onClick} data-id={id} data-type="list-item">
			<div className={styles.row}>
				<h4>{title}</h4>
				<p>{type}</p>
			</div>

			<span className={styles.number}>{`${i + 1 < 10 ? "0" : ""}${i + 1}`}</span>
		</li>
	);
}
