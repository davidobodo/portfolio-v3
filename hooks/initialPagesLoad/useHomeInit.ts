import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { animPageLoaders, homePageAnims } from "#/utils/animations/atoms";
import { usePageLeaveAnimationContext } from "#/state";
import { useIsomorphicLayoutEffect, useSetBannerHeight } from "#/hooks";

const { drawSvgLogo, openNoiseLayers } = animPageLoaders;
const { bannerAnimation } = homePageAnims;
export default function useHomeInit({ windowInnerHeight, windowInnerWidth, darkSectionRef }) {
	const bannerRef = useRef<HTMLDivElement>(null);

	const { pageLeaveAnimation } = usePageLeaveAnimationContext();

	const bannerRefSelector = gsap.utils.selector(bannerRef);

	const getElements = () => {
		const nameLetters = bannerRefSelector<HTMLSpanElement>('[data-key="name"] [data-key="letter"]');
		const fieldLetters = bannerRefSelector<HTMLSpanElement>('[data-key="field"] [data-key="letter"]');
		const subFields = bannerRefSelector<HTMLDivElement>('[data-key="sub-field"]');
		const picMobile = bannerRefSelector<HTMLDivElement>('[data-key="mobile-image"]');
		const picDesktopblind = bannerRefSelector<HTMLDivElement>('[data-key="desktop-image"] span');
		const scrollIndicator = bannerRefSelector<HTMLDivElement>('[data-key="scroll-alert"]');

		return {
			nameLetters,
			fieldLetters,
			subFields,
			picMobile,
			picDesktopblind,
			scrollIndicator,
		};
	};
	useIsomorphicLayoutEffect(() => {
		const { nameLetters, fieldLetters, subFields, picMobile, picDesktopblind, scrollIndicator } = getElements();

		if (pageLeaveAnimation) {
			// Navigating from another page to this page
			const layers = document.querySelectorAll("[data-key='layer']");
			const master = gsap.timeline();
			master.add(openNoiseLayers(layers)).add(
				bannerAnimation({
					nameLetters,
					fieldLetters,
					subFieldOne: subFields[0],
					subFieldTwo: subFields[1],
					picMobile: picMobile,
					picDesktop: picDesktopblind,
					scrollIndicator,
				})
			);

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
				.add(
					bannerAnimation({
						nameLetters,
						fieldLetters,
						subFieldOne: subFields[0],
						subFieldTwo: subFields[1],
						picMobile: picMobile,
						picDesktop: picDesktopblind,
						scrollIndicator,
					})
				);
			return () => {
				master.kill();
			};
		}
	}, []);

	//-----------------------------------------
	// BLACK COVER ANIMATION
	//-----------------------------------------
	const blackCoverRef = useRef(null);

	const { bannerHeight } = useSetBannerHeight({ windowInnerHeight, windowInnerWidth });

	useIsomorphicLayoutEffect(() => {
		const banner = document.querySelector('[data-key="banner"]');
		// Only create this timeline when the correct banner height has been set
		if (blackCoverRef.current) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: darkSectionRef.current,
					toggleActions: "restart complete reverse reset",
					start: "top bottom",
					end: "top top",
					scrub: true,
					onEnterBack: () => {
						banner.style.zIndex = 1;
						banner.style.opacity = 1;
						blackCoverRef.current.style.zIndex = 2;
					},
					onLeave: () => {
						banner.style.zIndex = -1;
						banner.style.opacity = 0;
						blackCoverRef.current.style.zIndex = -1;
					},
				},
			});
			tl.to(blackCoverRef.current, {
				scaleY: 1,
				transformOrigin: "top",
			});
		}
	}, []);

	return {
		bannerRef,
		blackCoverRef,
		bannerHeight,
	};
}
