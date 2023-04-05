import { StaticImageData } from "next/image";
import TECH_STACKS from "#/constants/tech-stacks";

type TRoles = "design" | "fe" | "be" | "teamlead";
type TProjectType = "Web Application" | "Website" | "Learn from Tutorial" | "Experiment";
type TFilterBy = "tech-stack" | "project-nature" | "open-source" | "closed-source";
type TProjectsView = "list" | "grid";
type TLogoMode = "light" | "dark";
type TProjectData = { currProject: TProject | null; nextProject: TProject | null; prevProject: TProject | null };
type TFormFields = { name: string; email: string; subject: string; message: string };
type TTimelineAction = {
	target?: Element | NodeListOf<Element>;
	vars?: Record<string, string | number>;
	options?: string;
	isLabel?: boolean;
	label?: string;
};
type TMediaFormats = "image" | "video" | "gif";
type TMediaFile = { type: TMediaFormats; source: StaticImageData };
type TProject = {
	id: string;
	title: string;
	details: string;
	sitelink: string;
	githublink?: string;
	roles: TRoles[];
	tech: Array<keyof typeof TECH_STACKS>;
	type: TProjectType;
	bgColor?: string;
	media: TMediaFile[];
	responsibilities: string;
};

type TPostFrontMatter = {
	banner: string;
	bannerAlt: string;
	date: string;
	description: string;
	longDescription: string;
	readingTime: string;
	tags: string[];
	title: string;
	url: string;
	ogbanner?: string;
	bgColor?: string;
	themeColor?: string;
};

type TPost = {
	content: string;
	meta: TPostFrontMatter | null;
};

type TMdxSource = {
	compiledSource: string;
	frontMatter: TPostFrontMatter;
	scope: {};
};

export type {
	TTimelineAction,
	TProject,
	TProjectsView,
	TProjectData,
	TLogoMode,
	TProjectType,
	TFilterBy,
	TFormFields,
	TPostFrontMatter,
	TMdxSource,
	TPost,
	TMediaFile,
	TMediaFormats,
	TRoles,
};
