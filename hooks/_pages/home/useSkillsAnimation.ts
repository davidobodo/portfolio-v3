import gsap from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { skillsSectionAnimations } from "#/utils/animations/atoms";

const { desktopAnimation, mobileAnimation } = skillsSectionAnimations;

export default function useSkillsAnimation({ windowInnerWidth }: { windowInnerWidth: number }) {
	//------------------------------------------
	//DESKTOP ANIMATION
	//------------------------------------------
	const skillsContainerRef = useRef<HTMLDivElement>(null);
	const skillsContainerSelector = gsap.utils.selector(skillsContainerRef);

	useIsomorphicLayoutEffect(() => {
		if (skillsContainerRef.current) {
			const radialGradient = document.querySelector<HTMLDivElement>('[data-key="radial-gradient"]');
			const faintBgTitle = skillsContainerSelector('[data-id="faint-svg"]');
			const image = skillsContainerSelector('[data-id="hand-image"]');
			const skillLists = skillsContainerSelector('[data-id="skill"]');
			const contentWrapper = skillsContainerSelector('[data-key="skills-content"]');

			const tl = desktopAnimation({
				radialGradient,
				faintBgTitle: faintBgTitle[0],
				image,
				lists: skillLists,
				contentWrapper: contentWrapper[0],
				container: skillsContainerRef.current,
				windowInnerWidth,
			});

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, [skillsContainerRef.current, windowInnerWidth]);

	//------------------------------------------
	//MOBILE ANIMATION
	//------------------------------------------
	const mobileSkillsContainerRef = useRef<HTMLDivElement>(null);
	const mobileSkillsContainerSelector = gsap.utils.selector(mobileSkillsContainerRef);

	useIsomorphicLayoutEffect(() => {
		//TODO: CONDITIONAL TO STOP DESKTOP VERSION FROM RUNNING WHEN MOBILE IS DOING SO
		if (mobileSkillsContainerRef.current) {
			const faintBgTitle = mobileSkillsContainerRef.current.querySelector('[data-id="faint-svg"]') as HTMLElement;
			const radialGradient = document.querySelector<HTMLDivElement>('[data-key="radial-gradient"]');

			const contentWrapper = mobileSkillsContainerSelector('[data-id="skills-content"]');
			const listsWrapper = mobileSkillsContainerSelector('[data-id="lists-wrapper"]');
			const lists = mobileSkillsContainerSelector('[data-id="skill"]');

			const tl = mobileAnimation({
				faintBgTitle,
				radialGradient,
				contentWrapper: contentWrapper[0],
				listsWrapper: listsWrapper[0],
				lists,
				container: mobileSkillsContainerRef.current,
				windowInnerWidth,
			});

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, [mobileSkillsContainerRef.current, windowInnerWidth]);
	return {
		skillsContainerRef,
		mobileSkillsContainerRef,
	};
}
