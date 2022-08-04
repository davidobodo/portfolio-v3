type TTimelineAction = {
	target?: Element;
	vars?: Record<string, string | number>;
	action?: string;
	options?: string;
	isLabel?: boolean;
	label?: string;
};

type TProject = {
	id: string;
	title: string;
	details: string;
	live_link: string;
	tech: string[];
	bgImage: string;
	type: string;
	bgColor?: string;
};

export type { TTimelineAction, TProject };
