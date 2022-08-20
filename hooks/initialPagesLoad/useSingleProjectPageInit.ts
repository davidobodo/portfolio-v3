import { useEffect } from "react";
import gsap from "gsap";
import { animPageLoaders } from "#/utils/animations";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";
import { usePageTransitionsContext } from "#/context";
const { openNoiseLayers, drawSvgLogo, closeNoiseLayers } = animPageLoaders;

export default function useSingleProjectInit() {
	const { initialAppLoad, exitAnimation, setInitialAppLoad } = usePageTransitionsContext();

	useIsomorphicLayoutEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
		const layers = document.querySelectorAll("[data-key='layer']");
		const logo = document.querySelector("[data-key='logo']") as Element;
		const logoChildren = document.querySelectorAll("[data-key='logo'] path");

		const master = gsap.timeline();

		if (initialAppLoad) {
			setInitialAppLoad(false);
			master.add(drawSvgLogo(logo, logoChildren));
			//SET PAGE OUTRO ANIMATION
			exitAnimation.add(closeNoiseLayers({ node: layers }), 0);
		}

		master.add(openNoiseLayers(layers));
		master.add(() => {
			document.querySelector("body")?.classList.remove("hide");
			const navLogo = document.querySelector("[data-key='nav-logo']") as HTMLElement | null;

			if (navLogo) {
				navLogo.style.visibility = "visible";
			}
		});

		return () => {
			master.kill();
		};
	}, []);

	return {};
}
