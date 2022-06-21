import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function useAboutAnimation() {
    const aboutListRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (aboutListRef.current) {
            const { children } = aboutListRef.current;

            // CREATE TIMELINE
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: children[0],
                    start: "top center",
                    end: "bottom center",
                    endTrigger: children[children.length - 1],
                    toggleActions: "restart pause reverse pause",
                    scrub: true
                }
            });

            let timelineActions = [];

            // CREATE ACTIONS TO EXECUTE IN TIMELINE
            for (let i = 0; i < children.length; i++) {
                timelineActions.push({ target: children[i], vars: { opacity: 1 }, options: i !== 0 ? "<" : "" });

                // Dont decrease the opacity of the last item
                if (i !== children.length - 1) {
                    timelineActions.push({ target: children[i], vars: { opacity: 0.2 }, options: "" });
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
        }
    }, [aboutListRef.current]);
    return {
        aboutListRef
    };
}
