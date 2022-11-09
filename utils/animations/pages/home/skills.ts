import gsap from "gsap";
import { TTimelineAction } from "#/types";
import { animateFaintSvg, executeTimelineActions } from "#/utils";

class SkillsSectionAnimations {
	constructor() {
		this.desktopAnimation = this.desktopAnimation.bind(this);
		this.mobileAnimation = this.mobileAnimation.bind(this);
		this.createSkillsSectionTimeline = this.createSkillsSectionTimeline.bind(this);
	}

	//-----------------------------------------------------------
	// GROUP DESKTOP TIMELINE ANIMATIONS
	//-----------------------------------------------------------
	private createDesktopAnimationTimeline({ lists, image }: { image: HTMLDivElement; lists: HTMLDivElement[] }) {
		let timelineActions: TTimelineAction[] = [];

		timelineActions.push({ target: image, vars: { width: "29vw" } });

		for (let i = 0; i < lists.length; i++) {
			const header = lists[i].firstElementChild as HTMLElement;
			const list = header?.nextElementSibling; // The "UL tag"
			const listItems = list?.querySelectorAll("li>span") as unknown as HTMLElement;
			const paragraph = list?.nextElementSibling;

			//show heading
			timelineActions.push({ target: header, vars: { opacity: 1 } });
			//show list
			timelineActions.push({ target: listItems, vars: { stagger: 0.2, y: 0 } });

			if (paragraph) {
				timelineActions.push({ target: paragraph, vars: { opacity: 1 } });
				timelineActions.push({ isLabel: true, label: "full-section-is-visible" });
			}
		}

		return timelineActions;
	}

	private getMobileSkillsListHeaderAndItems(element: HTMLElement | Element) {
		const header = element.querySelector("h3") as HTMLHeadElement;
		const listItems = element.querySelectorAll<HTMLSpanElement>("li>span");
		const paragraph = element.querySelector("p");

		return {
			header,
			listItems,
			paragraph,
		};
	}

	private createSkillsSectionTimeline(section: HTMLDivElement): TTimelineAction[] {
		const { header, listItems, paragraph } = this.getMobileSkillsListHeaderAndItems(section);

		const sectionTimline: TTimelineAction[] = [
			{ target: header, vars: { opacity: 1 } },
			{ target: listItems, vars: { stagger: 0.2, y: 0 } },
		];

		if (paragraph) {
			sectionTimline.push({ target: paragraph, vars: { opacity: 1 } });
			sectionTimline.push({ isLabel: true, label: "full-section-is-visible" });
		}
		return sectionTimline;
	}

	//-----------------------------------------------------------
	// GROUP MOBILE TIMELINE ANIMATIONS
	//-----------------------------------------------------------
	private createMobileAnimationTimeline({
		listsWrapper,
		skillsLists,
	}: {
		listsWrapper: HTMLDivElement;
		skillsLists: HTMLDivElement[];
	}) {
		let timelineActions: TTimelineAction[] = [];

		// CREATE TIMELINE ACTIONS
		timelineActions.push({ target: listsWrapper.children[0], vars: { opacity: 1 } });

		// Note: Display the first two lists
		timelineActions = [
			...timelineActions,
			...this.createSkillsSectionTimeline(skillsLists[0]),
			...this.createSkillsSectionTimeline(skillsLists[1]),
		];

		// Remove First and second list
		timelineActions.push({ target: listsWrapper.children[0], vars: { opacity: 0 } });
		timelineActions.push({ target: listsWrapper.children[1], vars: { opacity: 1 } });

		// Display the last list
		timelineActions = [...timelineActions, ...this.createSkillsSectionTimeline(skillsLists[2])];

		return timelineActions;
	}

	//-----------------------------------------------------------
	// MAIN MOBILE TIMELINE
	//-----------------------------------------------------------
	mobileAnimation({
		faintBgTitle,
		radialGradient,
		contentWrapper,
		listsWrapper,
		lists,
		container,
		windowInnerWidth,
		noise,
	}: {
		faintBgTitle: HTMLDivElement;
		radialGradient: HTMLDivElement;
		noise: HTMLDivElement;
		contentWrapper: HTMLDivElement;
		listsWrapper: HTMLDivElement;
		lists: HTMLDivElement[];
		container: HTMLDivElement;
		windowInnerWidth: number;
	}) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: "bottom bottom",
				toggleActions: "restart pause reverse pause",
				scrub: true,
				pin: contentWrapper,
				pinSpacing: false,
				snap: {
					snapTo: "labels",
					duration: { min: 0.2, max: 2 },
					delay: 0.1,
					ease: "power1.inOut",
				},
				onUpdate: (self) => {
					// Displace the faintbg text
					const yDisplacement = animateFaintSvg({
						progress: self.progress,
						parentElement: contentWrapper,
						svgViewportHeightRatio: 0.15, //Due to svg height's relationship with its container. Check the work section equivalent for a detailed explanation
						windowWidth: windowInnerWidth,
					});

					faintBgTitle.style.bottom = yDisplacement + "px";

					if (radialGradient) {
						radialGradient.style.opacity = self.progress.toString();
						noise.style.opacity = self.progress.toString();
					}
				},
			},
		});

		const timelineActions = this.createMobileAnimationTimeline({
			skillsLists: lists,
			listsWrapper,
		});

		// EXECUTE TIMELINE ACTIONS
		executeTimelineActions({
			tl,
			tlActions: timelineActions,
		});

		return tl;
	}

	//-----------------------------------------------------------
	// MAIN DESKTOP TIMELINE
	//-----------------------------------------------------------
	desktopAnimation({
		faintBgTitle,
		radialGradient,
		image,
		lists,
		contentWrapper,
		container,
		windowInnerWidth,
		noise,
	}: {
		faintBgTitle: HTMLDivElement;
		radialGradient: HTMLDivElement;
		noise: HTMLDivElement;
		image: HTMLDivElement;
		lists: HTMLDivElement[];
		contentWrapper: HTMLDivElement;
		container: HTMLDivElement;
		windowInnerWidth: number;
	}) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: "bottom bottom",
				toggleActions: "restart pause reverse pause",
				scrub: true,
				pin: contentWrapper,
				pinSpacing: false,
				snap: {
					snapTo: "labels",
					duration: { min: 0.2, max: 2 },
					delay: 0.1,
					ease: "power1.inOut",
				},
				onUpdate: (self) => {
					// Displace the faintbg text
					const yDisplacement = animateFaintSvg({
						progress: self.progress,
						parentElement: contentWrapper,
						svgViewportHeightRatio: 0.15, //Due to svg height. Check the work section equivalent for a detailed explanation
						windowWidth: windowInnerWidth,
					});

					faintBgTitle.style.bottom = yDisplacement + "px";

					if (radialGradient) {
						radialGradient.style.opacity = self.progress.toString();
						noise.style.opacity = self.progress.toString();
					}
				},
			},
		});

		const timelineActions = this.createDesktopAnimationTimeline({
			lists,
			image,
		});

		// EXECUTE TIMELINE ACTIONS
		executeTimelineActions({
			tl,
			tlActions: timelineActions,
		});

		return tl;
	}
}

const skillsSectionAnimations = new SkillsSectionAnimations();

export default skillsSectionAnimations;
