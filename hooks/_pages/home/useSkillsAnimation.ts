import gsap from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { skillsSectionAnimations } from "#/utils/animations";

const { desktopAnimation, mobileAnimation } = skillsSectionAnimations;

export default function useSkillsAnimation({ windowInnerWidth }: { windowInnerWidth: number }) {
	//------------------------------------------
	//DESKTOP ANIMATION
	//------------------------------------------
	const skillsContainerRef = useRef<HTMLDivElement>(null);
	const skillsContainerSelector = gsap.utils.selector(skillsContainerRef);

	useIsomorphicLayoutEffect(() => {
		if (skillsContainerRef.current) {
			const radialGradient = document.querySelector<HTMLDivElement>('[data-key="radial-gradient"]') as HTMLDivElement;
			const faintBgTitle = skillsContainerSelector<HTMLDivElement>('[data-id="faint-svg"]');
			const image = skillsContainerSelector<HTMLDivElement>('[data-id="hand-image"]');
			const skillLists = skillsContainerSelector<HTMLDivElement>('[data-id="skill"]');
			const contentWrapper = skillsContainerSelector<HTMLDivElement>('[data-key="skills-content"]');

			const tl = desktopAnimation({
				radialGradient,
				faintBgTitle: faintBgTitle[0],
				image: image[0],
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
			const faintBgTitle = mobileSkillsContainerSelector<HTMLDivElement>('[data-id="faint-svg"]');
			const radialGradient = document.querySelector('[data-key="radial-gradient"]') as HTMLDivElement;

			const contentWrapper = mobileSkillsContainerSelector<HTMLDivElement>('[data-id="skills-content"]');
			const listsWrapper = mobileSkillsContainerSelector<HTMLDivElement>('[data-id="lists-wrapper"]');
			const lists = mobileSkillsContainerSelector<HTMLDivElement>('[data-id="skill"]');

			const tl = mobileAnimation({
				faintBgTitle: faintBgTitle[0],
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
