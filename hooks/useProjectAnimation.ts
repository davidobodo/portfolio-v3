import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function useProjectAnimation() {
    const projectsListWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (projectsListWrapperRef.current) {
            const scrollView = projectsListWrapperRef.current.children[0] as HTMLDivElement;

            gsap.to(scrollView, {
                x: () => -(scrollView.scrollWidth - document.documentElement.clientWidth) + "px",
                ease: "none",
                scrollTrigger: {
                    start: "top top",
                    trigger: projectsListWrapperRef.current,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    pin: true,
                    scrub: 1,
                    pinSpacing: true,
                    end: () => "+=" + scrollView.offsetWidth
                }
            });
        }
    }, []);
    return {
        projectsListWrapperRef
    };
}
