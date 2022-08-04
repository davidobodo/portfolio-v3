import { useLayoutEffect, useEffect } from "react";

import { HomePageHooks } from "./_pages";

import useWindowSize from "./useWindowSize";
import useRegisterGsapScrollTrigger from "./useRegisterGsapScrollTrigger";
import usePinRadialGradient from "./usePinRadialGradient";
import useRevealParagraph from "./useRevealParagraph";
import useCalculateFooterHeight from "./useCalculateFooterHeight";
import useRevealHeading from "./useRevealHeading";
import useSelectProjectAnimation from "./useSelectProjectAnimation";
import usePageTransition from "./usePageTransition";
import useSetBannerHeight from "./useSetBannerHeight";
import useAlternateTextOpacity from "./useAlternateTextOpacity";

import initPageLoads from "./initialPagesLoad";

const { useHomePageInit, useGenericPageInit, useSingleProjectPageInit, use404PageInit } = initPageLoads;

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export {
	HomePageHooks,
	useWindowSize,
	useCalculateFooterHeight,
	useSetBannerHeight,
	useIsomorphicLayoutEffect,
	//---------------------------
	// ANIMATIONS
	//---------------------------
	useAlternateTextOpacity,
	useRegisterGsapScrollTrigger,
	usePinRadialGradient,
	useRevealParagraph,
	useRevealHeading,
	useSelectProjectAnimation,
	usePageTransition,
	//---------------------------
	// PAGES INIT
	//---------------------------
	useHomePageInit,
	useGenericPageInit,
	useSingleProjectPageInit,
	use404PageInit,
};
