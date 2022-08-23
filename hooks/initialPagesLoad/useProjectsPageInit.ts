import gsap from "gsap";
import { useRef, RefObject } from "react";
import { usePageTransitionsContext } from "#/context";
import { projectAnimations, sharedAnimations } from "#/utils/animations";
import { useIsomorphicLayoutEffect, useSetBannerHeight } from "#/hooks";
import { useRouter } from "next/router";

const { transitionToDarkSection, genericPageBannerAnimation, openNoiseLayers, drawSvgLogo, closeNoiseLayers } =
	sharedAnimations;

const { scrollToProjectsSection } = projectAnimations;
/**
 *
 * Generic pages include
 * 1. Projects Page
 * 2. Letters Page
 * 3. Site Credits Page
 */

export default function useProjectsPageInit({
	windowInnerHeight,
	windowInnerWidth,
	darkSectionRef,
	onOpenFilter,
}: {
	windowInnerHeight: number;
	windowInnerWidth: number;
	darkSectionRef: RefObject<HTMLDivElement>;
	onOpenFilter: () => void;
}) {
	const router = useRouter();
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
		if (initialAppLoad) {
			setInitialAppLoad(false);
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

		if (router.query.open_filter) {
			master.add(scrollToProjectsSection());
			master.add(() => {
				onOpenFilter();
				window.history.pushState(null, "New Page Title", `/projects`);
			});
		}

		return () => {
			master.kill();
		};
	}, [router.query.open_filter]);

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
