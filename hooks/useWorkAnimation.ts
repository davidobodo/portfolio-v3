import gsap from "gsap";
import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { workSectionAnimations } from "#/utils/animations";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FOCUSABLE_ELEMENT_STRING } from "#/constants";
import { matchElement } from "#/utils";

const { desktopAnimation, mobileAnimation } = workSectionAnimations;

export default function useWorkAnimation({ windowInnerWidth }: { windowInnerWidth: number }) {
	const workContainerRef = useRef(null);
	const workContainerSelector = gsap.utils.selector(workContainerRef);

	const mobileWorkContainerRef = useRef(null);
	const mobileWorkContainerSelector = gsap.utils.selector(mobileWorkContainerRef);

	const [desktopTl, setDesktopTl] = useState<gsap.core.Timeline>(); // Need this for keyboard accessibility
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

					setDesktopTl(tl);

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

	const [currLabel, setCurrentLabel] = useState(0);
	const onWorkDetailsKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		const key = e.key || e.keyCode;
		if (key === "Tab" && desktopTl) {
			//First time getting to this section
			if (currLabel === 0) {
				gsap.to(window, { scrollTo: desktopTl.scrollTrigger?.labelToScroll(`section-${currLabel + 1}-visible`) });
				setCurrentLabel((prevState) => prevState + 1);
				return;
			}

			const trigger = e.target as HTMLDivElement; //Get element that triggered the event
			const parent = matchElement(trigger, "[data-key='work-detail']"); //Get parent of element

			if (parent) {
				const focusableChildren = [...parent.querySelectorAll(FOCUSABLE_ELEMENT_STRING)]; //Get all focusable children of the parent
				const pos = focusableChildren.findIndex((item) => item === trigger); //Get the triggered elements position amongst the focusable elements of its parent

				if (e.shiftKey) {
					if (pos === 0 && currLabel !== 0) {
						gsap.to(window, { scrollTo: desktopTl.scrollTrigger?.labelToScroll(`section-${currLabel - 1}-visible`) });
						setCurrentLabel((prevState) => prevState - 1);
					}
				} else {
					//Only move to next work section when we have gone through all links in this work section and we are not in the last section
					if (pos === focusableChildren.length - 1 && currLabel !== 5) {
						gsap.to(window, { scrollTo: desktopTl.scrollTrigger?.labelToScroll(`section-${currLabel + 1}-visible`) });
						setCurrentLabel((prevState) => prevState + 1);
					}
				}
			}
		}
	};

	return {
		workContainerRef,
		mobileWorkContainerRef,
		onWorkDetailsKeyDown,
	};
}
