type TTimelineAction = {
	target: Element | NodeListOf<Element>;
	vars: Record<string, string | number>;
	action?: string;
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
	roles?: TRoles[];
	tech: string[];
	bgImage: string;
	type: string;
	bgColor?: string;
};

export type { TTimelineAction, TProject };
