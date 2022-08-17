import gsap from "gsap";
import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { workSectionAnimations } from "#/utils/animations";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { KEYBOARD_KEYS } from "#/constants";

const { desktopAnimation, mobileAnimation } = workSectionAnimations;
const { ENTER_KEY } = KEYBOARD_KEYS;

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

	const [desktopTl, setDesktopTl] = useState<gsap.core.Timeline>();
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

	const [activeLabel, setActiveLabel] = useState(0);

	const onKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
		const key = e.key || e.keyCode;

		// const { section } = e.currentTarget.dataset;

		// if (key === "Enter" && desktopTl) {
		// 	const label = `section-${section}-visible`;
		// 	gsap.to(window, { scrollTo: desktopTl.scrollTrigger?.labelToScroll(label) });
		// }
	};

	const onWorkDetailsKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		const key = e.key || e.keyCode;

		console.log(activeLabel, key);
		if (key !== "Tab" && desktopTl) {
			e.preventDefault();
			console.log("IN HERE ");
			let section = 0;
			if (key === "ArrowDown") {
				if (activeLabel === 5) {
					section = 1;
				} else {
					section = activeLabel + 1;
				}
			}

			if (key === "ArrowUp") {
				let section = 0;
				if (activeLabel === 1 || activeLabel === 0) {
					section = 5;
				} else {
					section = activeLabel - 1;
				}
			}

			setActiveLabel(section);

			if (section !== 0) {
				const label = `section-${section}-visible`;
				gsap.to(window, { scrollTo: desktopTl.scrollTrigger?.labelToScroll(label) });
			}
		}
	};

	return {
		workContainerRef,
		mobileWorkContainerRef,
		onWorkTitleKeyDown: onKeyDown,
		onWorkDetailsKeyDown,
	};
}
