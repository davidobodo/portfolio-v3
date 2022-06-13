import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function useProjectAnimation() {
    // HORIZONTAL SCROLLING
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

    //TITLE DISPLACEMENT
    const projectTitleRef = useRef<HTMLHeadElement>(null);
    useEffect(() => {
        if (projectTitleRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: projectTitleRef.current,
                    toggleActions: "restart pause reverse pause",
                    start: "top center",
                    end: "bottom center",
                    scrub: true
                }
            });

            tl.to(projectTitleRef.current.children[0], { x: 80 })
                .to(projectTitleRef.current.children[1], { x: -100 }, "<")
                .to(projectTitleRef.current.children[2], { x: 80 }, "<");
        }
    }, [projectTitleRef]);
    return {
        projectsListWrapperRef,
        projectTitleRef
    };
}
