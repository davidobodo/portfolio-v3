import { useLayoutEffect, useEffect } from "react";

import { HomePageHooks } from "./_pages";

import useWindowSize from "./useWindowSize";
import useRegisterGsapScrollTrigger from "./useRegisterGsapScrollTrigger";
import usePinRadialGradient from "./usePinRadialGradient";
import useRevealParagraph from "./useRevealParagraph";
import useCalculateFooterHeight from "./useCalculateFooterHeight";
import useScrollToTop from "./useScollToTop";
import useRevealHeading from "./useRevealHeading";
import useSelectProjectAnimation, {
    applyFlipAnim,
    removeCurrentProject,
    displayNextProject
} from "./useSelectProjectAnimation";
import usePageTransition from "./usePageTransition";

import initPageLoads from "./initialPagesLoad";

const { useHomeInit, useCreditsInit, useProjectsLettersInit, useSingleProjectInit } = initPageLoads;
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export {
    HomePageHooks,
    useWindowSize,
    useRegisterGsapScrollTrigger,
    usePinRadialGradient,
    useRevealParagraph,
    useCalculateFooterHeight,
    useScrollToTop,
    useRevealHeading,
    useSelectProjectAnimation,
    usePageTransition,
    applyFlipAnim,
    removeCurrentProject,
    displayNextProject,
    //---------------------------
    // PAGES INIT
    //---------------------------
    useHomeInit,
    useCreditsInit,
    useProjectsLettersInit,
    useSingleProjectInit,
    //---------------------------
    // UTILS
    //---------------------------
    useIsomorphicLayoutEffect
};
