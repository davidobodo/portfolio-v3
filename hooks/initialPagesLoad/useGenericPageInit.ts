import gsap from "gsap";
import { useRef, RefObject } from "react";
import { usePageTransitionsContext } from "#/context";
import { sharedAnimations } from "#/utils/animations";
import { useIsomorphicLayoutEffect, useSetBannerHeight } from "#/hooks";

const { transitionToDarkSection, genericPageBannerAnimation, openNoiseLayers, drawSvgLogo, closeNoiseLayers } =
	sharedAnimations;
/**
 *
 * Generic pages include
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
	const { initialAppLoad, exitAnimation, setInitialAppLoad } = usePageTransitionsContext();

	const textRefSelector = gsap.utils.selector(textWrapperRef);

	useIsomorphicLayoutEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
		const layers = document.querySelectorAll("[data-key='layer']");
		const logo = document.querySelector("[data-key='logo']") as Element;
		const logoChildren = document.querySelectorAll("[data-key='logo'] path");

		const master = gsap.timeline();

		//PAGE INTRO ANIMATION
		if (initialAppLoad) {
			setInitialAppLoad(false);
			//SET PAGE OUTRO ANIMATION
			exitAnimation.add(closeNoiseLayers({ node: layers }), 0);
			master.add(drawSvgLogo(logo, logoChildren));
		}
		master.add(openNoiseLayers(layers));
		if (scrollIndicatorRef.current) {
			master.add(
				genericPageBannerAnimation({
					children: textRefSelector("h1") as HTMLHeadingElement[],
					scrollIndicatorNode: scrollIndicatorRef.current,
				})
			);
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
				windowInnerWidth,
			});

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, [windowInnerWidth]);

	return {
		textWrapperRef,
		scrollIndicatorRef,
		blackCoverRef,
		bannerRef,
		bannerHeight,
	};
}
