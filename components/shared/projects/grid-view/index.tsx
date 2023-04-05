import styles from "./styles.module.scss";
import { TProject } from "#/types";
import Image from "next/image";
export function ProjectsGridView({
	onViewProject,
	displayedProjects,
}: {
	onViewProject: (event: React.MouseEvent<HTMLLIElement | HTMLButtonElement, MouseEvent>) => void;
	displayedProjects: TProject[];
}) {
	return (
		<div className={styles.container}>
			{displayedProjects.map((item, i) => {
				const { id, media, title, bgColor } = item;

				return (
					<button
						key={i}
						className={styles.box}
						data-id={id}
						data-type="box-item"
						onClick={onViewProject}
						style={{ backgroundColor: bgColor }}
					>
						{media[0] && <Image src={media[0].source || ""} alt={title} objectFit="cover" layout="fill" />}
						<div className={styles.boxOverlay}></div>
						<div className={styles.boxCircle}>
							<span>View</span>
						</div>
					</button>
				);
			})}
		</div>
	);
}
