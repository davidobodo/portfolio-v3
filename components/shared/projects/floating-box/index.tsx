import styles from "./styles.module.scss";
import { Ref } from "react";
import { TProject } from "#/types";
import Image from "next/image";

export default function Box({
	isActive,
	imgRef,
	btnRef,
	textRef,
	displayedProjects,
}: {
	isActive: boolean;
	imgRef: Ref<HTMLDivElement>;
	btnRef: Ref<HTMLDivElement>;
	textRef: Ref<HTMLDivElement>;
	displayedProjects: TProject[];
}) {
	return (
		<>
			<div
				className={isActive ? styles.container + " " + styles.active : styles.container}
				ref={imgRef}
				data-key="project-box"
			>
				<div className={styles.projectsListBoundary}>
					<ul className={styles.projectsList} data-key="projects-list">
						{displayedProjects.map((item, i) => {
							const { bgColor, media, title } = item;
							return (
								<li key={i} className={styles.project + " " + styles.visible}>
									<span
										className={styles.overlayImage}
										style={{
											backgroundColor: bgColor,
										}}
									>
										{media[0] && <Image src={media[0].source} alt={title} />}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className={isActive ? styles.btn + " " + styles.active : styles.btn} ref={btnRef}></div>
			<div className={isActive ? styles.text + " " + styles.active : styles.text} ref={textRef}>
				<p>View</p>
			</div>
		</>
	);
}
