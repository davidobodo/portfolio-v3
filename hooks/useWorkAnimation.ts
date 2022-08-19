import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { workSectionAnimations } from "#/utils/animations";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FOCUSABLE_ELEMENT_STRING, KEYBOARD_KEYS } from "#/constants";
import { matchElement } from "#/utils";

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

	const [currLabel, setActiveLabel] = useState(0);
	const [timer, setTimer] = useState<NodeJS.Timeout>();

	useEffect(() => {
		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, [timer]);

	const onWorkDetailsKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		const key = e.key || e.keyCode;
		if (key === "Tab" && desktopTl) {
			if (currLabel === 0) {
				gsap.to(window, { scrollTo: desktopTl.scrollTrigger?.labelToScroll(`section-${currLabel + 1}-visible`) });
				setActiveLabel((prevState) => prevState + 1);
				return;
			}

			//Get element that triggered event
			const trigger = e.target as HTMLDivElement;

			//Get parent of element
			const parent = matchElement(trigger, "[data-key='work-detail']");

			if (parent) {
				//Get all focusable children of the parent
				const focusableChildren = [...parent.querySelectorAll(FOCUSABLE_ELEMENT_STRING)];

				//Get the position amongst the children of the element that triggered the event
				const pos = focusableChildren.findIndex((item) => item === trigger);

				if (e.shiftKey) {
					if (pos === 0 && currLabel !== 0) {
						//Focus on the last element in the previous section

						gsap.to(window, { scrollTo: desktopTl.scrollTrigger?.labelToScroll(`section-${currLabel - 1}-visible`) });
						setActiveLabel((prevState) => prevState - 1);

						const previousSection = parent.previousElementSibling;
						if (previousSection) {
							const previousSectionChildren = [...previousSection.querySelectorAll(FOCUSABLE_ELEMENT_STRING)];
							const lastItem = previousSectionChildren[previousSectionChildren.length - 1] as HTMLElement;

							//Wait for thread to become idle before giving the last element focus
							if (timer) {
								clearTimeout(timer);
							}
							const id = setTimeout(() => {
								lastItem.focus();
							}, 0);
							setTimer(id);
						}
					}
				} else {
					//Only move to next work section when we have gone through all links in this work section and we are not in the last section
					if (pos === focusableChildren.length - 1 && currLabel !== 5) {
						gsap.to(window, { scrollTo: desktopTl.scrollTrigger?.labelToScroll(`section-${currLabel + 1}-visible`) });
						setActiveLabel((prevState) => prevState + 1);
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
