import { useEffect } from "react";
import gsap from "gsap";
import { animPageLoaders } from "#/utils/animations";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";
import { usePageTransitionsContext } from "#/context";
const { openNoiseLayers, drawSvgLogo, closeNoiseLayers } = animPageLoaders;

export default function useSingleProjectInit() {
	const { initialAppLoad, exitAnimation, setInitialAppLoad } = usePageTransitionsContext();

	useIsomorphicLayoutEffect(() => {
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
		});

		return () => {
			master.kill();
		};
	}, []);

	return {};
}
