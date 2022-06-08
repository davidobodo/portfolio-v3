import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function useInitAnimation() {
    const preloaderBgRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (preloaderBgRef.current && logoRef.current) {
            const tl = gsap.timeline();

            tl.to(logoRef.current.children, { strokeDashoffset: 0, duration: 2, stagger: 0.8 })
                .to(logoRef.current, { fill: "#fcfcfc" })
                .to(logoRef.current, { opacity: 0 })
                .to(preloaderBgRef.current, { y: "-100vh" });
        }
    }, [preloaderBgRef, logoRef]);

    return {
        preloaderBgRef,
        logoRef
    };
}
