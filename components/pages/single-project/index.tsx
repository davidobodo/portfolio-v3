import styles from "./styles.module.scss";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ChevronRight, ChevronLeft, Github, ExternalLink } from "#/components/icons";
import { Slider } from "#/components";
import { fetchProjects } from "#/utils";
import { Ref } from "react";
import { TECH_STACKS } from "#/constants";
import { ROLES } from "#/constants";
import { events, registerEvent } from "#/utils/analytics/events";

type Props = {
	currProjectId: string;
	onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	modalImgRef?: Ref<HTMLDivElement>;
	onGoToProject: (id: string) => void;
};

type TPageGAEvents = "info_view" | "not_found" | "github" | "live_site";

export default function SingleProject({ currProjectId, onClose, modalImgRef, onGoToProject }: Props) {
	const { currProject, nextProject, prevProject } = fetchProjects(currProjectId);
	const { viewProjectGithub, viewProjectSite } = events.shared.homeAndProjects;

	const handlePageGAEvents = (key: TPageGAEvents) => {
		if (currProject) {
			switch (key) {
				case "not_found":
					registerEvent(events.pages.projects.viewUnknownProject({ project_title: currProjectId }));
					return;
				case "github":
					if (currProject.githublink) {
						registerEvent(viewProjectGithub({ project_title: currProject.title, link_url: currProject.githublink }));
					}
					return;
				case "live_site":
					if (currProject.sitelink) {
						registerEvent(viewProjectSite({ project_title: currProject.title, link_url: currProject.sitelink }));
					}
					return;
				default:
					return;
			}
		}
	};

	if (!currProject) {
		return (
			<div className={styles.empty}>
				<p>
					Oops! Sorry I do not have any project by the name: <br /> <span>&nbsp;{currProjectId}&nbsp;</span>{" "}
				</p>

				<Link href="/projects" scroll={false}>
					<a onClick={() => handlePageGAEvents("not_found")}>
						Go to Projects
						<ExternalLink />
					</a>
				</Link>
			</div>
		);
	}

	const { title, details, tech, roles, githublink, sitelink, media, responsibilities, bgColor } = currProject;

	return (
		<div className={styles.container} data-key="project-info">
			{/* ----------------------------------------------- */}
			{/* Prev Button Desktop */}
			{/* ----------------------------------------------- */}
			{prevProject && (
				<button
					value="previous"
					className={styles.desktopNavigator + " " + styles.btnPrevious}
					aria-label="previous"
					onClick={() => onGoToProject(prevProject.id)}
				>
					<ChevronLeft />
				</button>
			)}
			<div className={styles.content}>
				{/* ----------------------------------------------- */}
				{/* Title */}
				{/* ----------------------------------------------- */}
				<section className={styles.title} data-key="title">
					<h1>{title}</h1>

					<button onClick={onClose} className={styles.btnClose} data-key="close-button">
						<span>
							<strong>↙</strong>
						</span>
						<span>Close</span>
					</button>
				</section>

				{/* ----------------------------------------------- */}
				{/* Media Section */}
				{/* ----------------------------------------------- */}
				<div className={styles.media} ref={modalImgRef}>
					{media.length > 1 ? (
						<div>
							<Slider items={media} id={currProjectId} bgColor={bgColor || "#86868b"} />
						</div>
					) : (
						<SingleMediaFile file={media[0]} title={title} bgColor={bgColor || "#86868b"} />
					)}
				</div>

				{/* ----------------------------------------------- */}
				{/* About Project */}
				{/* ----------------------------------------------- */}
				<section className={styles.about} data-key="about">
					<h2>About this project</h2>
					<div className={styles.details} dangerouslySetInnerHTML={{ __html: details }} />

					{roles?.length > 0 && (
						<div className={styles.roles}>
							<h3>{roles.length === 1 ? "Role" : "Roles"} in Project</h3>
							<ul>
								{roles?.map((item, i) => {
									return <li key={i}>{ROLES[item].label}</li>;
								})}
							</ul>
						</div>
					)}

					{responsibilities?.length > 0 && (
						<div className={styles.responsibilities}>
							<h3>My Responsibilities &#38; Features I Implemented</h3>
							<div dangerouslySetInnerHTML={{ __html: responsibilities }} />
						</div>
					)}
				</section>

				{/* ----------------------------------------------- */}
				{/* Tech Sheet */}
				{/* ----------------------------------------------- */}
				<section className={styles.tech} data-key="tech">
					<h2>Technical Sheet</h2>
					<p>Some noteworthy technologies I got involved with while working on this project:</p>

					<ul>
						{tech.map((item) => {
							const tool = TECH_STACKS[item];

							if (!tool) return null;

							return <li key={tool.key}>{tool?.label}</li>;
						})}
					</ul>
				</section>

				{/* ----------------------------------------------- */}
				{/* Desktop Links */}
				{/* ----------------------------------------------- */}
				<div className={styles.links} data-key="buttons">
					{sitelink && (
						<a href={sitelink} target="_blank" onClick={() => handlePageGAEvents("live_site")}>
							Visit site
							<ExternalLink />{" "}
						</a>
					)}

					{githublink && (
						<a href={githublink} target="_blank" onClick={() => handlePageGAEvents("github")}>
							Github repo <Github />{" "}
						</a>
					)}
				</div>
			</div>
			{/* ----------------------------------------------- */}
			{/* Next Button Desktop */}
			{/* ----------------------------------------------- */}
			{nextProject && (
				<button
					value="next"
					className={styles.desktopNavigator + " " + styles.btnNext}
					aria-label="previous"
					onClick={() => onGoToProject(nextProject.id)}
				>
					<ChevronRight />
				</button>
			)}

			{/* ----------------------------------------------- */}
			{/* Prev and Next Buttons Mobile */}
			{/* ----------------------------------------------- */}
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

function SingleMediaFile({
	file,
	title,
	bgColor,
}: {
	file: { type: "image" | "video" | "gif"; source: StaticImageData };
	title: string;
	bgColor: string;
}) {
	//Can never occur, but won't hurt to have the conditional
	if (!file) {
		return (
			<div
				className={styles.image}
				style={{
					paddingTop: "62.5%",
					backgroundColor: bgColor,
				}}
			></div>
		);
	}
	if (file.type === "gif") {
		return (
			<div
				className={styles.image}
				style={{
					paddingTop: "62.5%",
					backgroundColor: bgColor,
				}}
			>
				<Image src={file.source} alt={title} layout="fill" objectFit="cover" />
			</div>
		);
	}
	return (
		<div
			className={styles.image}
			style={{
				backgroundColor: bgColor,
			}}
		>
			<Image src={file.source} alt={title} />
		</div>
	);
}
