import { createContext, useContext, Dispatch, SetStateAction } from "react";

type TContext = {
    timeline: gsap.core.Timeline | null;
    setTransitionTimeline: (tl: gsap.core.Timeline) => void | Dispatch<SetStateAction<null>>;
};

export const PageTransitionContext = createContext<TContext>({
    timeline: null,
    setTransitionTimeline: () => {}
});

export const usePageTransitionContext = () => {
    return useContext(PageTransitionContext);
};
