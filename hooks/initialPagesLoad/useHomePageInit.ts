import gsap from "gsap";
import { useRef, RefObject, useState } from "react";
import { otherHomeSectionsAnimations, otherSharedAnimations } from "#/utils/animations";
import { useAnimationsContext } from "#/context";
import { useIsomorphicLayoutEffect, useSetBannerHeight, useTransitionToDarkSection } from "#/hooks";

const { bannerAnimation } = otherHomeSectionsAnimations;
const { drawSvgLogo, openNoiseLayers, closeNoiseLayers, removePageLoaderBlocker } = otherSharedAnimations;

type Props = {
	windowInnerHeight: number;
	windowInnerWidth: number;
	darkSectionRef: RefObject<HTMLDivElement>;
};

export default function useHomeInit({ windowInnerHeight, windowInnerWidth, darkSectionRef }: Props) {
	const { initialAppLoad, exitAnimation, setInitialAppLoad } = useAnimationsContext();
	const { bannerHeight } = useSetBannerHeight({ windowInnerHeight, windowInnerWidth });

	//-----------------------------------------
	// BANNER ANIMATION
	//-----------------------------------------
	const bannerRef = useRef<HTMLDivElement>(null);
	const bannerRefSelector = gsap.utils.selector(bannerRef);

	const initPage = () => {
		//Ensure page scrolls to the top, since it might not be at the top due to our page transition effect
		window.scrollTo({
			top: 0,
			left: 0,
		});

		const nameLetters = bannerRefSelector<HTMLSpanElement>('[data-key="name"] [data-key="letter"]');
		const fieldLetters = bannerRefSelector<HTMLSpanElement>('[data-key="field"] [data-key="letter"]');
		const subFields = bannerRefSelector<HTMLDivElement>('[data-key="sub-field"]');
		const picMobile = bannerRefSelector<HTMLDivElement>('[data-key="mobile-image"]');
		const picDesktopblind = bannerRefSelector<HTMLSpanElement>('[data-key="desktop-image"] span');
		const scrollIndicator = bannerRefSelector<HTMLDivElement>('[data-key="scroll-alert"]');
		const logo = document.querySelector("[data-key='logo']") as Element;
		const logoChildren = document.querySelectorAll("[data-key='logo'] path");
		const layers = document.querySelectorAll("[data-key='layer']");

		const master = gsap.timeline();

		if (initialAppLoad) {
			setInitialAppLoad(false);
			master.add(
				removePageLoaderBlocker({
					node: document.getElementById("blocker") as HTMLDivElement,
				})
			);
			master.add(drawSvgLogo(logo, logoChildren));
			exitAnimation.add(closeNoiseLayers({ node: layers }), 0);
		}
		master.add(openNoiseLayers(layers));
		master.add(
			bannerAnimation({
				nameLetters,
				fieldLetters,
				subFieldOne: subFields[0],
				subFieldTwo: subFields[1],
				picMobile: picMobile[0],
				picDesktopBlind: picDesktopblind[0],
				scrollIndicator: scrollIndicator[0],
			})
		);

		return master;
	};

	useIsomorphicLayoutEffect(() => {
		const callback = () => {
			const tl = initPage();

			return () => {
				tl.kill();
			};
		};

		if (document.readyState === "complete") {
			const tl = initPage();

			return () => {
				tl.kill();
			};
		} else {
			window.addEventListener("load", callback);

			return () => {
				window.removeEventListener("load", callback);
			};
		}
	}, []);

	const { blackCoverRef } = useTransitionToDarkSection({
		windowInnerWidth,
		darkSectionRef,
		bannerRef,
	});

	return {
		bannerRef,
		blackCoverRef,
		bannerHeight,
	};
}
