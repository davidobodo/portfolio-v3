import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { animateFaintSvg } from "#/utils";
import { DATA_VALUES } from "#/constants";
import { TTimelineAction } from "#/interfaces";
import { useIsomorphicLayoutEffect } from "#/hooks";

export default function useSkillsAnimation({ windowInnerWidth }: { windowInnerWidth: number }) {
	const skillsListRef = useRef<HTMLDivElement>(null);
	const skillsContainerRef = useRef<HTMLDivElement>(null);
	const skillsContentWrapperRef = useRef<HTMLDivElement>(null);

	const [tl, setTl] = useState<gsap.core.Timeline>();
	useIsomorphicLayoutEffect(() => {
		if (skillsContainerRef.current && skillsListRef.current && skillsContentWrapperRef.current) {
			const svgElement = skillsContainerRef.current.querySelector('[data-id="faint-svg"]') as HTMLElement;
			const radialGradient = document.querySelector('[data-key="radial-gradient"]');
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: skillsContainerRef.current,
					start: "top top",
					end: "bottom bottom",
					toggleActions: "restart pause reverse pause",
					scrub: true,
					pin: skillsContentWrapperRef.current,
					pinSpacing: false,
					onUpdate: (self) => {
						svgElement.style.bottom =
							animateFaintSvg(
								self.progress,
								skillsContentWrapperRef.current as HTMLElement,
								DATA_VALUES.skillsSvgViewportHeight,
								windowInnerWidth
							) + "px";

						radialGradient.style.opacity = self.progress;
					},
				},
			});

			setTl(tl);
		}
	}, [skillsListRef.current, skillsContainerRef.current, skillsContentWrapperRef.current]);
	useIsomorphicLayoutEffect(() => {
		if (tl && skillsContainerRef.current && skillsListRef.current && skillsContentWrapperRef.current) {
			let timelineActions: TTimelineAction[] = [];

			const image = skillsContainerRef.current.querySelector('[data-id="hand-image"]') as HTMLElement;
			const skillLists = skillsListRef.current.querySelectorAll('[data-id="skill"]');

			// CREATE TIMELINE ACTIONS
			timelineActions.push({ target: image, vars: { width: "29vw", duration: 2 } });

			for (let i = 0; i < skillLists.length; i++) {
				const header = skillLists[i].firstElementChild as HTMLElement;
				const list = header?.nextElementSibling; // The "UL tag"
				const listItems = list?.querySelectorAll("li>span") as unknown as HTMLElement;
				const info = list?.nextElementSibling;

				//show heading
				timelineActions.push({ target: header, vars: { opacity: 1 } });
				//show list
				timelineActions.push({ target: listItems, vars: { stagger: 0.2, y: 0 } });

				if (info) {
					timelineActions.push({ target: info, vars: { opacity: 1 } });
				}
			}

			// EXECUTE TIMELINE ACTIONS
			for (let j = 0; j < timelineActions.length; j++) {
				const { target, vars, options } = timelineActions[j];

				if (target && vars) {
					tl.to(target, vars, options);
				}
			}
		}
	}, [tl, skillsListRef.current, skillsContainerRef.current, skillsContentWrapperRef.current]);

	//------------------------------------------
	//MOBILE ANIMATION
	//------------------------------------------
	const mobileSkillsContainerRef = useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		if (mobileSkillsContainerRef.current) {
			const svgElement = mobileSkillsContainerRef.current.querySelector('[data-id="faint-svg"]') as HTMLElement;
			const contentWrapper = mobileSkillsContainerRef.current.querySelector(
				'[data-id="content-wrapper"]'
			) as HTMLElement;
			const listWrapper = mobileSkillsContainerRef.current.querySelector('[data-id="lists-wrapper"]') as HTMLElement;
			const skillLists = mobileSkillsContainerRef.current.querySelectorAll('[data-id="skill"]');

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: mobileSkillsContainerRef.current,
					start: "top top",
					end: "bottom bottom",
					toggleActions: "restart pause reverse pause",
					scrub: true,
					pin: contentWrapper,
					pinSpacing: false,
					onUpdate: (self) => {
						svgElement.style.bottom =
							animateFaintSvg(self.progress, contentWrapper, DATA_VALUES.skillsSvgViewportHeight, windowInnerWidth) +
							"px";
					},
				},
			});

			let timelineActions = [];

			// CREATE TIMELINE ACTIONS
			timelineActions.push({ target: listWrapper.children[0], vars: { opacity: 1 } });

			const { header, listItems } = getListHeaderAndItems(skillLists[0]);
			timelineActions.push({ target: header, vars: { opacity: 1 } });
			timelineActions.push({ target: listItems, vars: { stagger: 0.2, y: 0 } });

			const { header: headerTwo, listItems: listItemsTwo } = getListHeaderAndItems(skillLists[1]);
			timelineActions.push({ target: headerTwo, vars: { opacity: 1 } });
			timelineActions.push({ target: listItemsTwo, vars: { stagger: 0.2, y: 0 } });

			timelineActions.push({ target: listWrapper.children[0], vars: { opacity: 0 } });
			timelineActions.push({ target: listWrapper.children[1], vars: { opacity: 1 } });

			const { header: headerThree, listItems: listItemsThree } = getListHeaderAndItems(skillLists[2]);
			timelineActions.push({ target: headerThree, vars: { opacity: 1 } });
			timelineActions.push({ target: listItemsThree, vars: { stagger: 0.2, y: 0 } });

			// EXECUTE TIMELINE ACTIONS
			for (let j = 0; j < timelineActions.length; j++) {
				const { target, vars } = timelineActions[j];

				if (target && vars) {
					tl.to(target, vars);
				}
			}
		}
	}, [mobileSkillsContainerRef.current, windowInnerWidth]);
	return {
		skillsListRef,
		skillsContainerRef,
		skillsContentWrapperRef,
		mobileSkillsContainerRef,
	};
}

function getListHeaderAndItems(element: HTMLElement | Element) {
	const header = element.firstElementChild as HTMLElement;
	const listItems = header?.nextElementSibling?.querySelectorAll("li>span") as unknown as HTMLElement;
	return {
		header,
		listItems,
	};
}
