import { useEffect } from "react";
import gsap from "gsap";

export default function useCreditsInit() {
    function removeLoader() {
        const tl = gsap.timeline({});
        tl.to(document.querySelectorAll("[data-key='layer']"), {
            scaleY: 0,
            delay: 1
        });
        tl.add(() => {
            document.querySelector("body")?.classList.remove("hide");
        });
        return tl;
    }

    useEffect(() => {
        removeLoader();
    }, []);

    return {};
}
