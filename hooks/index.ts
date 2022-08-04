import { useLayoutEffect, useEffect } from "react";

import { HomePageHooks } from "./_pages";

import useWindowSize from "./useWindowSize";
import useRegisterGsapScrollTrigger from "./useRegisterGsapScrollTrigger";
import usePinRadialGradient from "./usePinRadialGradient";
import useRevealParagraph from "./useRevealParagraph";
import useCalculateFooterHeight from "./useCalculateFooterHeight";
import useRevealHeading from "./useRevealHeading";
import useSelectProjectAnimation, {
	applyFlipAnim,
	removeCurrentProject,
	displayNextProject,
} from "./useSelectProjectAnimation";
import usePageTransition from "./usePageTransition";
import useSetBannerHeight from "./useSetBannerHeight";
import useAlternateTextOpacity from "./useAlternateTextOpacity";

import initPageLoads from "./initialPagesLoad";

const { useHomePageInit, useGenericPageInit, useSingleProjectPageInit } = initPageLoads;
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export {
	HomePageHooks,
	useWindowSize,
	useRegisterGsapScrollTrigger,
	usePinRadialGradient,
	useRevealParagraph,
	useCalculateFooterHeight,
	useRevealHeading,
	useSelectProjectAnimation,
	usePageTransition,
	applyFlipAnim,
	removeCurrentProject,
	displayNextProject,
	useSetBannerHeight,
	useAlternateTextOpacity,
	//---------------------------
	// PAGES INIT
	//---------------------------
	useHomePageInit,
	useGenericPageInit,
	useSingleProjectPageInit,
	//---------------------------
	// UTILS
	//---------------------------
	useIsomorphicLayoutEffect,
};
