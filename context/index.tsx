import gsap from "gsap";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type TContext = {
	initialAppLoad: boolean;
	setInitialAppLoad: (val: boolean) => void | Dispatch<SetStateAction<null>>;
	exitAnimation: gsap.core.Timeline;
	setExitAnimation: (tl: gsap.core.Timeline) => void | Dispatch<SetStateAction<null>>;
	radialGradientAnimation: gsap.core.Animation | null;
	setRadialGradientAnimation: (tl: gsap.core.Animation) => void | Dispatch<SetStateAction<null>>;
	contactOpenerAnimation: gsap.core.Animation | null;
	setContactOpenerAnimation: (tl: gsap.core.Animation) => void | Dispatch<SetStateAction<null>>;
};

const AnimationsContext = createContext<TContext>({
	initialAppLoad: true,
	setInitialAppLoad: () => {},
	exitAnimation: gsap.timeline({ paused: true }),
	setExitAnimation: () => {},
	radialGradientAnimation: null,
	setRadialGradientAnimation: () => {},
	contactOpenerAnimation: null,
	setContactOpenerAnimation: () => {},
});

const useAnimationsContext = () => {
	return useContext(AnimationsContext);
};

const AnimationsProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const [initialAppLoad, setInitialAppLoad] = useState<boolean>(true);
	const [exitAnimation, setExitAnimation] = useState(() => gsap.timeline({ paused: true }));
	const [radialGradientAnimation, setRadialGradientAnimation] = useState<gsap.core.Animation | null>(null);
	const [contactOpenerAnimation, setContactOpenerAnimation] = useState<gsap.core.Animation | null>(null);

	return (
		<AnimationsContext.Provider
			value={{
				initialAppLoad,
				setInitialAppLoad,
				exitAnimation,
				setExitAnimation,
				radialGradientAnimation,
				setRadialGradientAnimation,
				contactOpenerAnimation,
				setContactOpenerAnimation,
			}}
		>
			{children}
		</AnimationsContext.Provider>
	);
};

export { AnimationsProvider, useAnimationsContext };
