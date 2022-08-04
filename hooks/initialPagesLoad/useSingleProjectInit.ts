import { useEffect } from "react";
import gsap from "gsap";
import { animPageLoaders } from "#/utils/animations/atoms";
const { openNoiseLayers, drawSvgLogo } = animPageLoaders;

export default function useSingleProjectInit() {
    function removeLoader() {
        const layers = document.querySelectorAll("[data-key='layer']");
        const logo = document.querySelector("[data-key='logo']") as Element;
        const logoChildren = document.querySelectorAll("[data-key='logo'] path");

        const master = gsap.timeline();
        master
            .add(drawSvgLogo(logo, logoChildren))
            .add(openNoiseLayers(layers))
            .add(() => {
                document.querySelector("body")?.classList.remove("hide");
            });
    }

    useEffect(() => {
        removeLoader();
    }, []);

    return {};
}
