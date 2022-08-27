type TRoles = "design" | "fe" | "be" | "teamlead";
type TProjectType = "Web Application" | "Website" | "Learn from Tutorial" | "Experiment";
type TFilterBy = "tech-stack" | "project-nature";
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
type TProject = {
	id: string;
	title: string;
	details: string;
	sitelink: string;
	githublink?: string;
	roles: TRoles[];
	tech: string[];
	type: TProjectType;
	bgColor?: string;
	media: { type: "image" | "video"; source: string }[];
	responsibilities: string;
};

export type { TTimelineAction, TProject, TProjectsView, TProjectData, TLogoMode, TProjectType, TFilterBy, TFormFields };
