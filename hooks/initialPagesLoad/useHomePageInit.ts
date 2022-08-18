import gsap from "gsap";
import { useRef, RefObject } from "react";
import { animPageLoaders, homePageAnimations, sharedAnimations } from "#/utils/animations";
import { usePageTransitionsContext } from "#/context";
import { useIsomorphicLayoutEffect, useSetBannerHeight } from "#/hooks";

const { drawSvgLogo, openNoiseLayers, closeNoiseLayers } = animPageLoaders;
const { bannerAnimation } = homePageAnimations;
const { transitionToDarkSection } = sharedAnimations;
export default function useHomeInit({
	windowInnerHeight,
	windowInnerWidth,
	darkSectionRef,
}: {
	windowInnerHeight: number;
	windowInnerWidth: number;
	darkSectionRef: RefObject<HTMLDivElement>;
}) {
	const bannerRef = useRef<HTMLDivElement>(null);

	const { initialAppLoad, exitAnimation, setInitialAppLoad } = usePageTransitionsContext();

	const bannerRefSelector = gsap.utils.selector(bannerRef);

	const getElements = () => {
		const nameLetters = bannerRefSelector<HTMLSpanElement>('[data-key="name"] [data-key="letter"]');
		const fieldLetters = bannerRefSelector<HTMLSpanElement>('[data-key="field"] [data-key="letter"]');
		const subFields = bannerRefSelector<HTMLDivElement>('[data-key="sub-field"]');
		const picMobile = bannerRefSelector<HTMLDivElement>('[data-key="mobile-image"]');
		const picDesktopblind = bannerRefSelector<HTMLSpanElement>('[data-key="desktop-image"] span');
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
		window.scrollTo({
			top: 0,
			left: 0,
		});
		const { nameLetters, fieldLetters, subFields, picMobile, picDesktopblind, scrollIndicator } = getElements();
		const logo = document.querySelector("[data-key='logo']") as Element;
		const logoChildren = document.querySelectorAll("[data-key='logo'] path");
		const layers = document.querySelectorAll("[data-key='layer']");
		const master = gsap.timeline();

		if (initialAppLoad) {
			setInitialAppLoad(false);
			master.add(drawSvgLogo(logo, logoChildren));
			//SET PAGE OUTRO ANIMATION
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
		bannerRef,
		blackCoverRef,
		bannerHeight,
	};
}
