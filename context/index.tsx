import gsap from "gsap";
import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { useState } from "react";
//--------------------------------------------------------
// PAGE TRANSITIONS
//--------------------------------------------------------
type TContext = {
	initialAppLoad: boolean;
	setInitialAppLoad: (val: boolean) => void | Dispatch<SetStateAction<null>>;
	exitAnimation: gsap.core.Timeline;
	setExitAnimation: (tl: gsap.core.Timeline) => void | Dispatch<SetStateAction<null>>;
};

const PageTransitionsContext = createContext<TContext>({
	initialAppLoad: true,
	setInitialAppLoad: () => {},
	exitAnimation: gsap.timeline({ paused: true }),
	setExitAnimation: () => {},
});

const usePageTransitionsContext = () => {
	return useContext(PageTransitionsContext);
};

const PageTransitionsProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const [initialAppLoad, setInitialAppLoad] = useState<boolean>(true);
	const [exitAnimation, setExitAnimation] = useState(() => gsap.timeline({ paused: true }));
	return (
		<PageTransitionsContext.Provider
			value={{
				initialAppLoad,
				setInitialAppLoad,
				exitAnimation,
				setExitAnimation,
			}}
		>
			{children}
		</PageTransitionsContext.Provider>
	);
};

//--------------------------------------------------------
// RADIAL GRADIENT ANIMATION
//--------------------------------------------------------
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

export { PageTransitionsProvider, usePageTransitionsContext, RadialGradientAnimContext, useRadialGradientAnimContext };
