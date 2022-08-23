type TTimelineAction = {
	target?: Element | NodeListOf<Element>;
	vars?: Record<string, string | number>;
	options?: string;
	isLabel?: boolean;
	label?: string;
};

type TRoles = "design" | "fe" | "be" | "teamlead";

type TProject = {
	id: string;
	title: string;
	details: string;
	sitelink: string;
	githublink?: string;
	roles: TRoles[];
	tech: string[];
	type: string;
	bgColor?: string;
	media: { type: "image" | "video"; source: string }[];
	responsibilities: string;
};

type TProjectsView = "list" | "grid";

type TProjectData = { currProject: TProject | null; nextProject: TProject | null; prevProject: TProject | null };
type TLogoMode = "light" | "dark";

export type { TTimelineAction, TProject, TProjectsView, TProjectData, TLogoMode };
