import gsap from "gsap";
import { useEffect, useRef } from "react";
import { usePageLeaveAnimationContext } from "#/state";
import { animPageLoaders } from "#/utils/animations/atoms";
import { useIsomorphicLayoutEffect, useSetBannerHeight } from "#/hooks";
const { openNoiseLayers, drawSvgLogo } = animPageLoaders;

// Used in boths projects and letters page
export default function useProjectsLettersInit({
	windowInnerHeight,
	windowInnerWidth,
}: {
	windowInnerHeight: number;
	windowInnerWidth: number;
}) {
	const textWrapperRef = useRef<HTMLDivElement>(null);
	const scrollIndicatorRef = useRef<HTMLDivElement>(null);
	const { pageLeaveAnimation } = usePageLeaveAnimationContext();

	const textRefSelector = gsap.utils.selector(textWrapperRef);

	useIsomorphicLayoutEffect(() => {
		if (textWrapperRef.current && scrollIndicatorRef.current) {
			if (pageLeaveAnimation) {
				const layers = document.querySelectorAll("[data-key='layer']");
				// Navigating from another page to this page
				const master = gsap.timeline();
				master
					.add(openNoiseLayers(layers))
					.add(bannerAnimation(textRefSelector("h1") as HTMLHeadingElement[], scrollIndicatorRef.current));

				return () => {
					master.kill();
				};
			} else {
				// Navigating to this page directly from the browser url input
				const logo = document.querySelector("[data-key='logo']") as Element;
				const logoChildren = document.querySelectorAll("[data-key='logo'] path");
				const layers = document.querySelectorAll("[data-key='layer']");

				const master = gsap.timeline();
				master
					.add(drawSvgLogo(logo, logoChildren))
					.add(openNoiseLayers(layers))
					.add(bannerAnimation(textRefSelector("h1") as HTMLHeadingElement[], scrollIndicatorRef.current));

				return () => {
					master.kill();
				};
			}
		}
	}, []);

	const { bannerHeight } = useSetBannerHeight({ windowInnerHeight, windowInnerWidth });
	//-----------------------------------------
	// BLACK COVER ANIMATION
	//-----------------------------------------
	const blackCoverRef = useRef<HTMLDivElement>(null);
	const bannerRef = useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: bannerRef.current,
				toggleActions: "restart pause reverse pause",
				start: "top top",
				end: "bottom top",
				scrub: true,
				pin: true,
				pinSpacing: false,
				onEnterBack: () => {
					if (bannerRef.current && blackCoverRef.current) {
						bannerRef.current.style.zIndex = "1";
						blackCoverRef.current.style.zIndex = "2";
					}
				},
				onLeave: () => {
					if (bannerRef.current && blackCoverRef.current) {
						bannerRef.current.style.zIndex = "-1";
						blackCoverRef.current.style.zIndex = "-1";
					}
				},
			},
		});

		tl.to(blackCoverRef.current, {
			scaleY: 1,
			transformOrigin: "top",
		});
		tl.to(textWrapperRef.current, { opacity: 0 }, "<");
	}, [bannerRef.current, blackCoverRef.current]);

	return {
		textWrapperRef,
		scrollIndicatorRef,
		blackCoverRef,
		bannerRef,
		bannerHeight,
	};
}

function bannerAnimation(children: HTMLHeadingElement[], scrollIndicatorNode: HTMLDivElement) {
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
