import gsap from "gsap";
import { useRef, RefObject } from "react";
import { useInitialAppLoadContext } from "#/state";
import { animPageLoaders, sharedAnimations } from "#/utils/animations";
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
	const { initialAppLoad } = useInitialAppLoadContext();

	const textRefSelector = gsap.utils.selector(textWrapperRef);

	useIsomorphicLayoutEffect(() => {
		const layers = document.querySelectorAll("[data-key='layer']");
		const logo = document.querySelector("[data-key='logo']") as Element;
		const logoChildren = document.querySelectorAll("[data-key='logo'] path");

		const master = gsap.timeline();

		if (initialAppLoad) {
			master.add(drawSvgLogo(logo, logoChildren));
		}

		master.add(openNoiseLayers(layers));

		if (scrollIndicatorRef.current) {
			master.add(genericPageBannerAnimation(textRefSelector("h1") as HTMLHeadingElement[], scrollIndicatorRef.current));
		}

		return () => {
			master.kill();
		};
	}, []);

	const { bannerHeight } = useSetBannerHeight({ windowInnerHeight, windowInnerWidth });
	//-----------------------------------------
	// BLACK COVER ANIMATION
	//-----------------------------------------
	const blackCoverRef = useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		if (darkSectionRef.current && bannerRef.current && blackCoverRef.current) {
			const tl = transitionToDarkSection({
				darkSection: darkSectionRef.current,
				banner: bannerRef.current,
				blackCurtain: blackCoverRef.current,
			});

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, []);

	return {
		textWrapperRef,
		scrollIndicatorRef,
		blackCoverRef,
		bannerRef,
		bannerHeight,
	};
}
