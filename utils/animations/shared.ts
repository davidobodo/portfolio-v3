import gsap from "gsap";
import { TTimelineAction } from "#/interfaces";

class SharedAnimations {
	transitionToDarkSection({
		darkSection,
		banner,
		blackCurtain,
		contactBlackCurtain,
	}: {
		darkSection: HTMLDivElement;
		banner: HTMLDivElement;
		blackCurtain: HTMLDivElement;
		contactBlackCurtain: HTMLDivElement;
	}) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: darkSection,
				toggleActions: "restart complete reverse reset",
				start: "top bottom",
				end: "top top",
				scrub: true,
				// markers: true,
				onEnterBack: () => {
					if (banner && blackCurtain) {
						banner.style.zIndex = "1";
						banner.style.opacity = "1";
						blackCurtain.style.zIndex = "2";
						contactBlackCurtain.style.zIndex = "-1";
					}
				},
				onLeave: () => {
					if (banner && blackCurtain) {
						banner.style.zIndex = "-1";
						banner.style.opacity = "0";
						blackCurtain.style.zIndex = "-1";
						contactBlackCurtain.style.zIndex = "2";
					}
				},
			},
		});
		tl.to(blackCurtain, {
			scaleY: 1,
			transformOrigin: "top",
		});
		tl.to(banner?.children, { opacity: 0 }, "<");

		return tl;
	}

	//-----
	changeFocusedOpaqueText(texts: HTMLCollection) {
		const firstElement = texts[0];
		const lastElement = texts[texts.length - 1];

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: firstElement,
				start: "top center",
				end: "bottom center",
				endTrigger: lastElement,
				toggleActions: "restart pause reverse pause",
				scrub: true,
			},
		});

		// CREATE ACTIONS TO EXECUTE IN TIMELINE
		let timelineActions = [];
		for (let i = 0; i < texts.length; i++) {
			timelineActions.push({ target: texts[i], vars: { opacity: 1 }, options: i !== 0 ? "<" : "" });

			// Dont decrease the opacity of the last item
			if (i !== texts.length - 1) {
				timelineActions.push({ target: texts[i], vars: { opacity: 0.2 }, options: "" });
			}
		}

		// EXECUTE TIMELINE ACTIONS
		for (let j = 0; j < timelineActions.length; j++) {
			const { target, vars, options } = timelineActions[j];
			if (options) {
				tl.to(target, vars, options);
			} else {
				tl.to(target, vars);
			}
		}

		return tl;
	}

	executeTimelineActions({ tl, tlActions }: { tl: gsap.core.Timeline; tlActions: TTimelineAction[] }) {
		for (let j = 0; j < tlActions.length; j++) {
			const { target, vars, options, isLabel, label } = tlActions[j];

			if (isLabel && label) {
				tl.add(label);
			} else {
				if (target && vars) {
					if (options) {
						tl.to(target, vars, options);
					} else {
						tl.to(target, vars);
					}
				}
			}
		}
	}

	fadeIn({ node }: { node: Element }) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: node,
				start: "top 80%",
				end: "bottom center",
				toggleActions: "restart pause reverse pause",
				scrub: true,
			},
		});

		tl.to(node, { opacity: 1, y: 0 });

		return tl;
	}

	genericPageBannerAnimation(children: HTMLHeadingElement[], scrollIndicatorNode: HTMLDivElement) {
		// const { children } = node;
		const tl = gsap.timeline({});

		//CREATE TIMELINE ACTIONS

		tl.add(() => {
			document.querySelector("body")?.classList.add("hide");
		});

		// 1. Slide in first element
		tl.to(children[0].querySelectorAll("[data-key='letter']"), { x: 0 });

		// 2. draw second elements backgorund
		tl.to(children[1].querySelectorAll("[data-key='bg']"), { width: "100%" });

		// 3. slide in second element
		tl.to(children[1].querySelectorAll("[data-key='letter']"), { x: 0 });

		// 4. slide in third element
		tl.to(children[2].querySelectorAll("[data-key='letter']"), { x: 0 });

		// 5. draw fourth elements background
		tl.to(children[3].querySelectorAll("[data-key='bg']"), { width: "100%" });

		// 6. slide in fourth element;
		tl.to(children[3].querySelectorAll("[data-key='letter']"), { x: 0 });

		tl.to(scrollIndicatorNode, { opacity: 1 });

		tl.add(() => {
			document.querySelector("body")?.classList.remove("hide");
		});

		return tl;
	}
}

const sharedAnimations = new SharedAnimations();

export default sharedAnimations;
