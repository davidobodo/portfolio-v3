import { createContext, useContext, Dispatch, SetStateAction } from "react";

type TContext = {
	pageLeaveAnimation: gsap.core.Timeline | null;
	setPageLeaveAnimation: (tl: gsap.core.Timeline) => void | Dispatch<SetStateAction<null>>;
};

const PageLeaveAnimationContext = createContext<TContext>({
	pageLeaveAnimation: null,
	setPageLeaveAnimation: () => {},
});

const usePageLeaveAnimationContext = () => {
	return useContext(PageLeaveAnimationContext);
};

type TRadGradTimeline = {
	timeline: gsap.core.Timeline | null;
	setTimeline: (tl: gsap.core.Timeline) => void | Dispatch<SetStateAction<null>>;
};

const RadialGradientAnimContext = createContext<TRadGradTimeline>({
	timeline: null,
	setTimeline: () => {},
});

const useRadialGradientAnimContent = () => {
	return useContext(RadialGradientAnimContext);
};

export {
	PageLeaveAnimationContext,
	usePageLeaveAnimationContext,
	RadialGradientAnimContext,
	useRadialGradientAnimContent,
};
