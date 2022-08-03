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

const RadialGradientAnimContext = createContext({
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
