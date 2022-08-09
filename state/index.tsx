import { createContext, useContext, Dispatch, SetStateAction } from "react";

type TContext = {
	initialAppLoad: boolean;
	setInitialAppLoad: (val: boolean) => void | Dispatch<SetStateAction<null>>;
};

const InitialAppLoadContext = createContext<TContext>({
	initialAppLoad: true,
	setInitialAppLoad: () => {},
});

const useInitialAppLoadContext = () => {
	return useContext(InitialAppLoadContext);
};

type TRadGradTimeline = {
	timeline: gsap.core.Timeline | null;
	setTimeline: (tl: gsap.core.Timeline) => void | Dispatch<SetStateAction<null>>;
};

const RadialGradientAnimContext = createContext<TRadGradTimeline>({
	timeline: null,
	setTimeline: () => {},
});

const useRadialGradientAnimContext = () => {
	return useContext(RadialGradientAnimContext);
};

export { InitialAppLoadContext, useInitialAppLoadContext, RadialGradientAnimContext, useRadialGradientAnimContext };
