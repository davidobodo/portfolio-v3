import styles from "./styles.module.scss";
import { useFloatingBoxAnimation } from "#/hooks";
import Box from "../floating-box";
import { TProject } from "#/types";

export function ProjectListView({
	onViewProject,
	displayedProjects,
}: {
	onViewProject: (event: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>) => void;
	displayedProjects: TProject[];
}) {
	const { imgRef, btnRef, textRef, onMouseEnter, onMouseLeave, isActive, onEnterElement, listRef } =
		useFloatingBoxAnimation();

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
					const { title, type, id } = item;

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
		<li onMouseEnter={onMouseEnter} onClick={onClick} data-id={id} data-type="list-item" tabIndex={0}>
			<div className={styles.row}>
				<h2>{title}</h2>
				<p>{type}</p>
			</div>

			<span className={styles.number}>{`${i + 1 < 10 ? "0" : ""}${i + 1}`}</span>
		</li>
	);
}
