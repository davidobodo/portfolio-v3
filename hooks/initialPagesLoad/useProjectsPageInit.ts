import gsap from "gsap";
import { useRef, RefObject } from "react";
import { useAnimationsContext } from "#/context";
import { projectAnimations, otherSharedAnimations } from "#/utils/animations";
import { useIsomorphicLayoutEffect, useSetBannerHeight, useTransitionToDarkSection } from "#/hooks";
import { useRouter } from "next/router";

const { genericPageBannerAnimation, openNoiseLayers, drawSvgLogo, closeNoiseLayers, removePageLoaderBlocker } =
	otherSharedAnimations;

const { scrollToProjectsSection } = projectAnimations;

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
	const { initialAppLoad, exitAnimation, setInitialAppLoad } = useAnimationsContext();

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
			master.add(
				removePageLoaderBlocker({
					node: document.getElementById("blocker") as HTMLDivElement,
				})
			);
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
			});
		}

		return () => {
			master.kill();
		};
	}, []);

	const { bannerHeight } = useSetBannerHeight({ windowInnerHeight, windowInnerWidth });

	const { blackCoverRef } = useTransitionToDarkSection({
		windowInnerWidth,
		darkSectionRef,
		bannerRef,
	});

	return {
		textWrapperRef,
		scrollIndicatorRef,
		blackCoverRef,
		bannerRef,
		bannerHeight,
	};
}
