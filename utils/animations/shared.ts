import gsap from "gsap";
import { TTimelineAction } from "#/interfaces";

class SharedAnimations {
	pinRadialGradient({ section, gradient }: { section: HTMLDivElement; gradient: HTMLDivElement }) {
		const anim = gsap.to(
			{},
			{
				scrollTrigger: {
					trigger: section,
					start: "top top",
					end: "bottom bottom",
					toggleActions: "restart complete reverse none",
					pin: gradient,
				},
			}
		);
		return anim;
	}

	transitionToDarkSection({
		darkSection,
		banner,
		blackCurtain,
		windowInnerWidth,
	}: {
		darkSection: HTMLDivElement;
		banner: HTMLDivElement;
		blackCurtain: HTMLDivElement;
		windowInnerWidth: number;
	}) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: darkSection,
				toggleActions: "restart complete reverse reset",
				start: "top bottom",
				end: "top top",
				scrub: true,
				// markers: true,
				pin: banner,
				pinSpacing: false,
				onEnterBack: () => {
					if (banner && blackCurtain) {
						// banner.style.zIndex = "1";
						// banner.style.opacity = "1";
						blackCurtain.style.zIndex = "2";
					}
				},
				onLeave: () => {
					if (banner && blackCurtain) {
						// banner.style.zIndex = "-1";
						// banner.style.opacity = "0";
						blackCurtain.style.zIndex = "-1";
					}
				},
			},
		});

		if (windowInnerWidth > 992) {
			tl.to(blackCurtain, {
				scaleY: 1,
				height: "50vh",
				transformOrigin: "top",
			});
			tl.to(banner?.children, { opacity: 0 }, "<");
		}

		return tl;
	}

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
		const anim = gsap.to(node, {
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: node,
				start: "top 80%",
				end: "bottom center",
				toggleActions: "restart pause reverse pause",
				scrub: true,
			},
		});

		return anim;
	}

	genericPageBannerAnimation({
		children,
		scrollIndicatorNode,
	}: {
		children: HTMLHeadingElement[];
		scrollIndicatorNode: HTMLDivElement;
	}) {
		// const { children } = node;
		const tl = gsap.timeline({});

		//CREATE TIMELINE ACTIONS

		// Make sure page is not scrollable until banner animation is complete
		tl.add(() => {
			document.querySelector("body")?.classList.add("hide");
			const navLogo = document.querySelector("[data-key='nav-logo']") as HTMLElement;
			if (navLogo) {
				navLogo.style.visibility = "visible";
			}
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

		// Make oage scrollable, since banner animation has been completed
		tl.add(() => {
			document.querySelector("body")?.classList.remove("hide");
		});

		return tl;
	}

	showLoadingTexts(nodesWrapper: Element, nodes: HTMLSpanElement[]) {
		const tl = gsap.timeline({ repeat: -1 });

		// CREATE TIMELINE ACTIONS
		let timelineActions = [];
		timelineActions.push({ target: nodesWrapper, vars: { visibility: "visible" } });
		for (let i = 0; i < nodes.length; i++) {
			timelineActions.push({
				target: nodes[i],
				vars: {
					opacity: 0,
				},
			});

			// Move node to the middle
			timelineActions.push({
				target: nodes[i],
				vars: {
					y: 0,
					opacity: 1,
					ease: "power4.out",
				},
			});
			// Move node to the top
			timelineActions.push({
				target: nodes[i],
				vars: {
					y: -300,
					opacity: 0,
					delay: 1,
					ease: "power4.out",
				},
			});
		}

		// EXECUTE TIMELINE
		for (let j = 0; j < timelineActions.length; j++) {
			const { target, vars } = timelineActions[j];
			tl.to(target, vars);
		}

		return tl;
	}

	hideLoadingTexts(node: HTMLDivElement) {
		const tl = gsap.timeline();
		tl.to(node, { visibility: "hidden", opacity: 0 });
		return tl;
	}

	openNoiseLayers(node: NodeListOf<Element>) {
		const tl = gsap.timeline();
		tl.fromTo(node, { scaleY: 1, delay: 0.3 }, { scaleY: 0, delay: 0.3 });
		return tl;
	}

	closeNoiseLayers({ node }: { node: NodeListOf<Element> | HTMLCollection }) {
		const tl = gsap.timeline();

		tl.to(node, { scaleY: 1 });
		return tl;
	}

	drawSvgLogo(logoSvg: Element, logoSvgPaths: NodeListOf<Element>) {
		const tl = gsap.timeline();
		tl.to(logoSvgPaths, {
			strokeDashoffset: 0,
			duration: 2,
			stagger: 0.8,
			delay: 1,
		})
			.to(logoSvg, {
				fill: "#fcfcfc",
			})
			.to(logoSvg, {
				opacity: 0,
			})
			.to(logoSvg, {
				visibility: "hidden",
			});

		return tl;
	}
}

const sharedAnimations = new SharedAnimations();

export default sharedAnimations;
