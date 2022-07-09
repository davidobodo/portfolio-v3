import { createContext, useContext } from "react";

export const PageTransitionContext = createContext({
    timeline: null,
    setTransitionTimeline: (tl: gsap.core.Timeline) => {}
});

export const usePageTransitionContext = () => {
    return useContext(PageTransitionContext);
};
