import gsap from "gsap";
import { useIsomorphicLayoutEffect, useSetBannerHeight, useWindowSize } from "..";
import { useAnimationsContext } from "#/context";
import { otherSharedAnimations, notFoundPageAnimations } from "#/utils/animations";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { events, registerEvent } from "#/utils/analytics/events";

const { openNoiseLayers, drawSvgLogo, closeNoiseLayers, removePageLoaderBlocker } = otherSharedAnimations;
const { bannerAnimation, stopRedirectAnimation } = notFoundPageAnimations;
export default function use404PageInit() {
	const { innerHeight, innerWidth } = useWindowSize();
	//-------------------------------------------
	// GENERAL HELPERS
	//-------------------------------------------
	const router = useRouter();
	const [countdown, setCountdown] = useState(15);
	const [timerId, setTimerId] = useState<NodeJS.Timeout>();
	const gradientRef = useRef<HTMLDivElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const containerSelector = gsap.utils.selector(containerRef);

	//-------------------------------------------
	// REDIRECT FUNCTIONS/HELPERS
	//-------------------------------------------
	const onInitRedirect = () => {
		const limit = new Date().getTime() + 16000;
		const id = setInterval(() => {
			const now = new Date().getTime();
			const distance = limit - now;
			const inas = Math.floor((distance % (1000 * 60)) / 1000);
			setCountdown(inas);
		}, 1000);
		setTimerId(id);
	};

	const onStopRedirect = () => {
		clearTimeout(timerId);

		if (containerRef.current && gradientRef.current && scrollRef.current) {
			const tl = stopRedirectAnimation({
				textsToRemove: containerSelector<HTMLDivElement>('[data-key="mortal-text"]'),
				container: containerRef.current,
				gradient: gradientRef.current,
				scroll: scrollRef.current,
			});

			tl.then(() => {
				registerEvent(events.pages.notFound.remainLost());
			});
		}
	};

	const redirectToHome = () => {
		closeNoiseLayers({ node: document.querySelectorAll("[data-key='layer']") }).then(() => {
			router.push("/");
		});
	};

	useEffect(() => {
		if (countdown <= 0) {
			clearTimeout(timerId);
			redirectToHome();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [countdown, timerId]);

	useEffect(() => {
		return () => {
			clearTimeout(timerId);
		};
	}, [timerId]);

	//-------------------------------------------
	// PAGE ANIMATION
	//-------------------------------------------
	const { initialAppLoad, setInitialAppLoad, exitAnimation } = useAnimationsContext();

	useIsomorphicLayoutEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
		// Navigating to this page directly from the browser url input
		const logo = document.querySelector("[data-key='logo']") as Element;
		const logoChildren = document.querySelectorAll("[data-key='logo'] path");
		const layers = document.querySelectorAll("[data-key='layer']");

		const master = gsap.timeline();

		if (initialAppLoad) {
			setInitialAppLoad(false);
			master.add(
				removePageLoaderBlocker({
					node: document.getElementById("blocker") as HTMLDivElement,
				})
			);
			master.add(drawSvgLogo(logo, logoChildren));
			//SET PAGE OUTRO ANIMATION
			exitAnimation.add(closeNoiseLayers({ node: layers }), 0);
		}

		master.add(openNoiseLayers(layers));
		master.add(() => {
			const navLogo = document.querySelector("[data-key='nav-logo']") as HTMLElement;
			navLogo.style.visibility = "visible";
		});
		master.add(
			bannerAnimation({
				sections: containerSelector<HTMLDivElement>('[data-key="section"]'),
			})
		);
		master.add(onInitRedirect);

		return () => {
			master.kill();
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { bannerHeight } = useSetBannerHeight({ windowInnerHeight: innerHeight, windowInnerWidth: innerWidth });

	return {
		onStopRedirect,
		countdown,
		containerRef,
		scrollRef,
		gradientRef,
		bannerHeight,
	};
}
