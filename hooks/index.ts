//---------------------------
// UTILS
//---------------------------
import useWindowSize from "./useWindowSize";
import useCalculateFooterHeight from "./useCalculateFooterHeight";
import useSetBannerHeight from "./useSetBannerHeight";
import useTrapFocus from "./useTrapFocus";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import useSmoothScroll from "./useSmoothScroll";
import usePrevious from "./usePrevious";
import useDebounceScrollToTop from "./useDebounceScrollToTop";
import usePageScrollProgress from "./usePageScrollProgress";

//---------------------------
// ANIMATIONS
//---------------------------
import useRegisterGsapScrollTrigger from "./useRegisterGsapPlugins";
import usePinRadialGradient from "./usePinRadialGradient";
import useRevealParagraph from "./useRevealParagraph";
import useRevealHeading from "./useRevealHeading";
import useSelectProjectAnimation from "./useSelectProjectAnimation";
import useAlternateTextOpacity from "./useAlternateTextOpacity";
import useSkillsAnimation from "./useSkillsAnimation";
import useWorkAnimation from "./useWorkAnimation";
import useFloatingBoxAnimation from "./useFloatingBoxAnimation";
import useExcellenceAnimation from "./useExcellenceAnimation";
import useTransitionToDarkSection from "./useTransitionToDarkSection";

//---------------------------
// PAGE LOAD
//---------------------------
import initPageLoads from "./initialPagesLoad";
const { useHomePageInit, useGenericPageInit, useSingleProjectPageInit, use404PageInit, useProjectsPageInit } =
	initPageLoads;

//---------------------------
// OTHERS
//---------------------------
import useProjectsCurrentView from "./useProjectsCurrentView";
import useContactForm from "./useContactForm";

export {
	useWindowSize,
	useCalculateFooterHeight,
	useSetBannerHeight,
	useIsomorphicLayoutEffect,
	useTrapFocus,
	useAlternateTextOpacity,
	useRegisterGsapScrollTrigger,
	usePinRadialGradient,
	useRevealParagraph,
	useRevealHeading,
	useSelectProjectAnimation,
	useSkillsAnimation,
	useWorkAnimation,
	useHomePageInit,
	useGenericPageInit,
	useSingleProjectPageInit,
	use404PageInit,
	useFloatingBoxAnimation,
	useExcellenceAnimation,
	useProjectsPageInit,
	useProjectsCurrentView,
	useSmoothScroll,
	usePrevious,
	useContactForm,
	useTransitionToDarkSection,
	useDebounceScrollToTop,
	usePageScrollProgress,
};
