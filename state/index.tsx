import { createContext, useContext, Dispatch, SetStateAction } from "react";

type TContext = {
    pageLeaveAnimation: gsap.core.Timeline | null;
    setPageLeaveAnimation: (tl: gsap.core.Timeline) => void | Dispatch<SetStateAction<null>>;
};

export const PageLeaveAnimationContext = createContext<TContext>({
    pageLeaveAnimation: null,
    setPageLeaveAnimation: () => {}
});

export const usePageLeaveAnimationContext = () => {
    return useContext(PageLeaveAnimationContext);
};
