import gsap from "gsap";

class OtherSharedAnimations {
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
				pin: banner,
				pinSpacing: false,
				onEnterBack: () => {
					if (banner && blackCurtain) {
						blackCurtain.style.zIndex = "2";
					}
				},
				onLeave: () => {
					if (banner && blackCurtain) {
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

	openNoiseLayers(node: NodeListOf<Element>) {
		const tl = gsap.timeline();
		const ease = "Power1.easeInOut";
		tl.fromTo(node, { scaleY: 1, delay: 0.3, ease: ease }, { scaleY: 0, delay: 0.3, ease: ease });
		return tl;
	}

	closeNoiseLayers({ node }: { node: NodeListOf<Element> | HTMLCollection }) {
		const tl = gsap.timeline();

		tl.to(node, { scaleY: 1, ease: "Power1.easeIn" });
		return tl;
	}

	drawSvgLogo(logoSvg: Element, logoSvgPaths: NodeListOf<Element>) {
		const tl = gsap.timeline();
		tl.to(logoSvgPaths, {
			strokeDashoffset: 0,
			duration: 1,
			stagger: 0.2,
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

	removePageLoaderBlocker({ node }: { node: HTMLDivElement }) {
		return gsap.to(node, { opacity: 0, zIndex: -2, duration: 1 });
	}

	openContactCurtain({ trigger, curtain }: { trigger: HTMLDivElement; curtain: HTMLDivElement }) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger,
				start: "top 110%",
				end: "bottom bottom",
				scrub: true,
				toggleActions: "restart complete restart reset",
			},
		});
		tl.to(curtain, { zIndex: 2, duration: 0.1 });
		tl.to(curtain, {
			scaleY: 0,
		});

		return tl;
	}
}

const otherSharedAnimations = new OtherSharedAnimations();

export default otherSharedAnimations;
