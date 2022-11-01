import gsap from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { skillsSectionAnimations } from "#/utils/animations";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const { desktopAnimation, mobileAnimation } = skillsSectionAnimations;

export default function useSkillsAnimation({ windowInnerWidth }: { windowInnerWidth: number }) {
	const skillsContainerRef = useRef<HTMLDivElement>(null);
	const skillsContainerSelector = gsap.utils.selector(skillsContainerRef);
	const mobileSkillsContainerRef = useRef<HTMLDivElement>(null);
	const mobileSkillsContainerSelector = gsap.utils.selector(mobileSkillsContainerRef);

	useIsomorphicLayoutEffect(() => {
		ScrollTrigger.matchMedia({
			//------------------------------------------
			//DESKTOP ANIMATION
			//------------------------------------------
			"(min-width: 992px)": () => {
				if (skillsContainerRef.current) {
					const radialGradient = document.querySelector<HTMLDivElement>(
						'[data-key="radial-gradient"]'
					) as HTMLDivElement;
					const noise = document.querySelector('[data-key="noise"]') as HTMLDivElement;
					const faintBgTitle = skillsContainerSelector<HTMLDivElement>('[data-key="faint-svg"]');
					const image = skillsContainerSelector<HTMLDivElement>('[data-key="hand-image"]');
					const skillLists = skillsContainerSelector<HTMLDivElement>('[data-key="skill"]');
					const contentWrapper = skillsContainerSelector<HTMLDivElement>('[data-key="skills-content"]');

					const tl = desktopAnimation({
						radialGradient,
						faintBgTitle: faintBgTitle[0],
						image: image[0],
						lists: skillLists,
						contentWrapper: contentWrapper[0],
						container: skillsContainerRef.current,
						windowInnerWidth,
						noise,
					});

					return () => {
						tl.scrollTrigger?.kill();
					};
				}
			},

			//------------------------------------------
			//MOBILE ANIMATION
			//------------------------------------------
			"(max-width: 991px)": () => {
				if (mobileSkillsContainerRef.current) {
					const faintBgTitle = mobileSkillsContainerSelector<HTMLDivElement>('[data-key="faint-svg"]');
					const radialGradient = document.querySelector('[data-key="radial-gradient"]') as HTMLDivElement;
					const noise = document.querySelector('[data-key="noise"]') as HTMLDivElement;
					const contentWrapper = mobileSkillsContainerSelector<HTMLDivElement>('[data-key="skills-content"]');
					const listsWrapper = mobileSkillsContainerSelector<HTMLDivElement>('[data-key="lists-wrapper"]');
					const lists = mobileSkillsContainerSelector<HTMLDivElement>('[data-key="skill"]');

					const tl = mobileAnimation({
						faintBgTitle: faintBgTitle[0],
						radialGradient,
						contentWrapper: contentWrapper[0],
						listsWrapper: listsWrapper[0],
						lists,
						container: mobileSkillsContainerRef.current,
						windowInnerWidth,
						noise,
					});

					return () => {
						tl.scrollTrigger?.kill();
					};
				}
			},
		});
	}, [windowInnerWidth]);

	return {
		skillsContainerRef,
		mobileSkillsContainerRef,
	};
}
