import gsap from "gsap";
import { useRef, RefObject } from "react";
import { usePageLeaveAnimationContext } from "#/state";
import { animPageLoaders, sharedAnimations } from "#/utils/animations/atoms";
import { useIsomorphicLayoutEffect, useSetBannerHeight } from "#/hooks";
const { openNoiseLayers, drawSvgLogo } = animPageLoaders;
const { transitionToDarkSection, genericPageBannerAnimation } = sharedAnimations;
/**
 *
 * Generic pages include
 * 1. Projects Page
 * 2. Letters Page
 * 3. Site Credits Page
 */

export default function useGenericPageInit({
	windowInnerHeight,
	windowInnerWidth,
	darkSectionRef,
}: {
	windowInnerHeight: number;
	windowInnerWidth: number;
	darkSectionRef: RefObject<HTMLDivElement>;
}) {
	const bannerRef = useRef<HTMLDivElement>(null);
	const textWrapperRef = useRef<HTMLDivElement>(null);
	const scrollIndicatorRef = useRef<HTMLDivElement>(null);
	const { pageLeaveAnimation } = usePageLeaveAnimationContext();

	const textRefSelector = gsap.utils.selector(textWrapperRef);

	useIsomorphicLayoutEffect(() => {
		if (textWrapperRef.current && scrollIndicatorRef.current) {
			if (pageLeaveAnimation) {
				const layers = document.querySelectorAll("[data-key='layer']");
				// Navigating from another page to this page
				const master = gsap.timeline();
				master
					.add(openNoiseLayers(layers))
					.add(genericPageBannerAnimation(textRefSelector("h1") as HTMLHeadingElement[], scrollIndicatorRef.current));

				return () => {
					master.kill();
				};
			} else {
				// Navigating to this page directly from the browser url input
				const logo = document.querySelector("[data-key='logo']") as Element;
				const logoChildren = document.querySelectorAll("[data-key='logo'] path");
				const layers = document.querySelectorAll("[data-key='layer']");

				const master = gsap.timeline();
				master
					.add(drawSvgLogo(logo, logoChildren))
					.add(openNoiseLayers(layers))
					.add(genericPageBannerAnimation(textRefSelector("h1") as HTMLHeadingElement[], scrollIndicatorRef.current));

				return () => {
					master.kill();
				};
			}
		}
	}, []);

	const { bannerHeight } = useSetBannerHeight({ windowInnerHeight, windowInnerWidth });
	//-----------------------------------------
	// BLACK COVER ANIMATION
	//-----------------------------------------
	const blackCoverRef = useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		const tl = transitionToDarkSection({
			darkSection: darkSectionRef.current,
			banner: bannerRef.current,
			blackCurtain: blackCoverRef.current,
		});

		return () => {
			tl.scrollTrigger?.kill();
		};
	}, []);

	return {
		textWrapperRef,
		scrollIndicatorRef,
		blackCoverRef,
		bannerRef,
		bannerHeight,
	};
}
