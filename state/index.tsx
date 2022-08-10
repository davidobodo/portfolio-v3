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
	animation: gsap.core.Timeline | null;
	setAnimation: (tl: gsap.core.Timeline) => void | Dispatch<SetStateAction<null>>;
};

const RadialGradientAnimContext = createContext<TRadGradTimeline>({
	animation: null,
	setAnimation: () => {},
});

const useRadialGradientAnimContext = () => {
	return useContext(RadialGradientAnimContext);
};

export { InitialAppLoadContext, useInitialAppLoadContext, RadialGradientAnimContext, useRadialGradientAnimContext };
