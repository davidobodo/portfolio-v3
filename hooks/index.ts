//---------------------------
// UTILS
//---------------------------
import useWindowSize from "./useWindowSize";
import useCalculateFooterHeight from "./useCalculateFooterHeight";
import useSetBannerHeight from "./useSetBannerHeight";
import useTrapFocus from "./useTrapFocus";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

//---------------------------
// ANIMATIONS
//---------------------------
import useRegisterGsapScrollTrigger from "./useRegisterGsapScrollTrigger";
import usePinRadialGradient from "./usePinRadialGradient";
import useRevealParagraph from "./useRevealParagraph";
import useRevealHeading from "./useRevealHeading";
import useSelectProjectAnimation from "./useSelectProjectAnimation";
import usePageTransition from "./usePageTransition";
import useAlternateTextOpacity from "./useAlternateTextOpacity";
import useSkillsAnimation from "./useSkillsAnimation";
import useWorkAnimation from "./useWorkAnimation";
import useFloatingBoxAnimation from "./useFloatingBoxAnimation";
import useExcellenceAnimation from "./useExcellenceAnimation";

//---------------------------
// PROJECTS PAGE
//---------------------------
import useProjectsCurrentView from "./useProjectsCurrentView";

//---------------------------
// PAGE LOADS
//---------------------------
import initPageLoads from "./initialPagesLoad";
const { useHomePageInit, useGenericPageInit, useSingleProjectPageInit, use404PageInit, useProjectsPageInit } =
	initPageLoads;

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
	usePageTransition,
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
};
