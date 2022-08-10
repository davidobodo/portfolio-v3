import gsap from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { workSectionAnimations } from "#/utils/animations";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const { desktopAnimation, mobileAnimation } = workSectionAnimations;

export default function useWorkAnimation({
	windowInnerHeight,
	windowInnerWidth,
}: {
	windowInnerHeight: number;
	windowInnerWidth: number;
}) {
	const workContainerRef = useRef(null);
	const workContainerSelector = gsap.utils.selector(workContainerRef);

	const mobileWorkContainerRef = useRef(null);
	const mobileWorkContainerSelector = gsap.utils.selector(mobileWorkContainerRef);

	useIsomorphicLayoutEffect(() => {
		ScrollTrigger.matchMedia({
			//-----------------------------------------
			//DESKTOP ANIMATION
			//-----------------------------------------
			"(min-width: 992px)": () => {
				if (workContainerRef.current) {
					const radialGradient = document.querySelector('[data-key="radial-gradient"]') as HTMLDivElement;
					const faintBgTitle = workContainerSelector<HTMLDivElement>('[data-key="faint-svg"]');
					const workTabs = workContainerSelector<HTMLDivElement>('[data-key="work-tabs"]');
					const workTabsTitles = workContainerSelector<HTMLDivElement>('[data-key="work-companies"]');
					const workTabsDetails = workContainerSelector<HTMLDivElement>('[data-key="work-details"]');
					const workTabsTitleBg = workContainerSelector<HTMLLIElement>('[data-key="gradient"]');

					const tl = desktopAnimation({
						faintBgTitle: faintBgTitle[0],
						radialGradient,
						container: workContainerRef.current,
						tabsWrapper: workTabs[0],
						titleBg: workTabsTitleBg[0],
						titles: workTabsTitles[0].children,
						details: workTabsDetails[0].children,
						windowInnerWidth,
					});

					return () => {
						tl.scrollTrigger?.kill();
					};
				}
			},
			//-----------------------------------------
			//MOBILE ANIMATION
			//-----------------------------------------
			"(max-width: 991px)": () => {
				if (mobileWorkContainerRef.current) {
					const radialGradient = document.querySelector('[data-key="radial-gradient"]') as HTMLDivElement;
					const faintBgTitle = mobileWorkContainerSelector<HTMLDivElement>('[data-key="faint-svg"]');
					const workTabs = mobileWorkContainerSelector<HTMLDivElement>('[data-key="work-tabs"]');
					const workTabsTitles = mobileWorkContainerSelector<HTMLUListElement>('[data-key="work-companies"]');
					const workTabsDetails = mobileWorkContainerSelector<HTMLDivElement>('[data-key="work-details"]');

					const tl = mobileAnimation({
						radialGradient,
						faintBgTitle: faintBgTitle[0],
						container: mobileWorkContainerRef.current,
						tabsWrapper: workTabs[0],
						titlesContainer: workTabsTitles[0],
						titles: workTabsTitles[0].children as unknown as HTMLLIElement[],
						details: workTabsDetails[0].children,
						windowInnerWidth,
					});
					return () => {
						tl.scrollTrigger?.kill();
					};
				}
			},
		});
	}, [windowInnerWidth]);
	return {
		workContainerRef,
		mobileWorkContainerRef,
	};
}
