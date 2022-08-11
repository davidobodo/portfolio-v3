import styles from "./styles.module.scss";
import { ChevronRight, ChevronLeft, Github, ExternalLink } from "#/components/icons";
import { fetchProjects } from "#/utils";
import { Ref } from "react";
import { TECH_STACKS } from "#/constants/tech-stacks";
import { ROLES } from "#/constants";
import Link from "next/link";

type Props = {
	currProjectId: string;
	onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	modalImgRef?: Ref<HTMLDivElement>;
	onGoToProject: (id: string) => void;
};

export default function SingleProject({ currProjectId, onClose, modalImgRef, onGoToProject }: Props) {
	const { currProject, nextProject, prevProject } = fetchProjects(currProjectId);

	if (!currProject) {
		return (
			<div className={styles.empty}>
				<p>
					Oops! Sorry I do not have any project by the name: <br /> <span>"{currProjectId}"</span>{" "}
				</p>

				<Link href="/projects">
					<a>
						Go to Projects
						<ExternalLink />
					</a>
				</Link>
			</div>
		);
	}

	const { title, bgImage, details, tech, roles, githublink, sitelink } = currProject;

	return (
		<div className={styles.container} data-key="project-info">
			{prevProject && (
				<button
					value="previous"
					className={styles.navBtn + " " + styles.btnPrevious}
					aria-label="previous"
					onClick={() => onGoToProject(prevProject.id)}
				>
					<ChevronLeft />
				</button>
			)}
			<div className={styles.content}>
				<button onClick={onClose} className={styles.btnClose} data-key="close-button">
					<span>
						<strong>↙</strong>
					</span>
					<span>Close</span>
				</button>
				<section className={styles.title} data-key="title">
					<h1>{title}</h1>
				</section>

				<div className={styles.links + " " + styles.mobile} data-key="buttons">
					<a href="">
						Visit site
						<ExternalLink />{" "}
					</a>
					<a href="">
						Github repo <Github />{" "}
					</a>
				</div>
				<div className={styles.image} style={{ backgroundImage: `url(${bgImage})` }} ref={modalImgRef}></div>

				<section className={styles.about} data-key="about">
					<h2>About this project</h2>
					<p dangerouslySetInnerHTML={{ __html: details }} />

					{roles?.length > 0 && (
						<>
							<h3>Role in Project</h3>
							<ul>
								{roles?.map((item) => {
									return (
										<li>
											<span className={styles.circle}></span>
											{ROLES[item].label}
										</li>
									);
								})}
							</ul>
						</>
					)}
				</section>

				<section className={styles.tech} data-key="tech">
					<h2>Technical Sheet</h2>
					<p>Some noteworthy technologies I got involved with while working on this project.</p>

					<ul>
						{tech.map((item) => {
							const tool = TECH_STACKS[item];

							console.log(tool, item, "TH ETOOK");
							return (
								<li>
									<span className={styles.circle}></span>
									{tool?.label}
								</li>
							);
						})}
					</ul>
				</section>

				<div className={styles.links + " " + styles.desktop} data-key="buttons">
					{sitelink && (
						<a href={sitelink} target="_blank">
							Visit site
							<ExternalLink />{" "}
						</a>
					)}

					{githublink && (
						<a href={githublink} target="_blank">
							Github repo <Github />{" "}
						</a>
					)}
				</div>
			</div>
			{nextProject && (
				<button
					value="next"
					className={styles.navBtn + " " + styles.btnNext}
					aria-label="previous"
					onClick={() => onGoToProject(nextProject.id)}
				>
					<ChevronRight />
				</button>
			)}

			<div className={styles.mobileNavigator}>
				{prevProject ? (
					<button value="previous" aria-label="previous" onClick={() => onGoToProject(prevProject.id)}>
						<ChevronLeft />
					</button>
				) : (
					<div></div>
				)}

				{nextProject ? (
					<button value="next" aria-label="previous" onClick={() => onGoToProject(nextProject.id)}>
						<ChevronRight />
					</button>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}
