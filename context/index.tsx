import gsap from "gsap";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type TContext = {
	initialAppLoad: boolean;
	setInitialAppLoad: (val: boolean) => void | Dispatch<SetStateAction<null>>;
	exitAnimation: gsap.core.Timeline;
	setExitAnimation: (tl: gsap.core.Timeline) => void | Dispatch<SetStateAction<null>>;
	radialGradientAnimation: gsap.core.Animation | null;
	setRadialGradientAnimation: (tl: gsap.core.Animation) => void | Dispatch<SetStateAction<null>>;
};

const PageTransitionsContext = createContext<TContext>({
	initialAppLoad: true,
	setInitialAppLoad: () => {},
	exitAnimation: gsap.timeline({ paused: true }),
	setExitAnimation: () => {},
	radialGradientAnimation: null,
	setRadialGradientAnimation: () => {},
});

const usePageTransitionsContext = () => {
	return useContext(PageTransitionsContext);
};

const PageTransitionsProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const [initialAppLoad, setInitialAppLoad] = useState<boolean>(true);
	const [exitAnimation, setExitAnimation] = useState(() => gsap.timeline({ paused: true }));
	const [radialGradientAnimation, setRadialGradientAnimation] = useState<gsap.core.Animation | null>(null);

	return (
		<PageTransitionsContext.Provider
			value={{
				initialAppLoad,
				setInitialAppLoad,
				exitAnimation,
				setExitAnimation,
				radialGradientAnimation,
				setRadialGradientAnimation,
			}}
		>
			{children}
		</PageTransitionsContext.Provider>
	);
};

export { PageTransitionsProvider, usePageTransitionsContext };
