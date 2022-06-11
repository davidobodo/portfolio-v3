import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { normalize } from "#/utils";
import { DATA_VALUES } from "#/constants";

export default function useWorkAnimation({
    windowInnerHeight,
    windowInnerWidth
}: {
    windowInnerHeight: number;
    windowInnerWidth: number;
}) {
    //-----------------------------------------
    //DESKTOP ANIMATION
    //-----------------------------------------
    const workContainerRef = useRef(null);
    const workTabsRef = useRef<HTMLDivElement>(null);
    const workTitlesContainerRef = useRef<HTMLUListElement>(null);
    const workDetailsContainerRef = useRef<HTMLDivElement>(null);
    const activeWorkBgGradient = useRef<HTMLLIElement>(null);
    const [tl, setTl] = useState<gsap.core.Timeline>();

    function animateWorkSvg(progress: number) {
        if (workTabsRef.current) {
            const progressEquivalent = normalize(progress, 0, 100);
            const displacement = (progressEquivalent / 100) * workTabsRef.current.clientHeight;
            const svgHeight = DATA_VALUES.workSvgViewportHeight * windowInnerWidth;
            const final = displacement - svgHeight;

            return final;
        }
    }

    useEffect(() => {
        if (windowInnerWidth > 768) {
            if (workContainerRef.current && workTabsRef.current) {
                const svgElement = workTabsRef.current.querySelector("#work-svg") as HTMLElement;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: workContainerRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        toggleActions: "restart pause reverse pause",
                        scrub: true,
                        pin: workTabsRef.current,
                        pinSpacing: false,
                        onUpdate: (self) => {
                            svgElement.style.bottom = animateWorkSvg(self.progress) + "px";
                        }
                    }
                });
                setTl(tl);
            }
        }
    }, [workContainerRef, workTabsRef, windowInnerHeight, windowInnerWidth]);

    useEffect(() => {
        if (tl && workDetailsContainerRef.current && workTitlesContainerRef.current) {
            const titles = workTitlesContainerRef.current.children;
            const details = workDetailsContainerRef.current.children;

            let timelineActions: {
                target?: Element;
                vars?: Record<string, string | number>;
                action?: string;
                options?: string;
                isLabel?: boolean;
                label?: string;
            }[] = [];

            // CREATE TIMELINE ACTIONS
            for (let i = 0; i < details.length; i++) {
                const target = details[i];

                //Increase title opacity
                timelineActions.push({ target: titles[i + 1], vars: { opacity: 1 } });

                // Move the background gradient
                timelineActions.push({
                    target: activeWorkBgGradient.current as Element,
                    vars: { y: i * DATA_VALUES.workTitleHeightDesktop },
                    options: "<"
                });

                // Increase details opacity
                timelineActions.push({ target, vars: { opacity: 1 }, action: "increase opac" });

                // Add a label at this point to the timeline (Might be useful for click events)
                timelineActions.push({ isLabel: true, label: `active-${i}` });

                // Translate details to their normal position
                timelineActions.push({ target, vars: { y: 0 }, options: "<", action: "move up" });

                // Dont decrease opacity for the last item
                if (i !== details.length - 1) {
                    // Decrease details opacity
                    timelineActions.push({
                        target,
                        vars: { opacity: 0 },
                        options: ">-25%", // start at 25% towards the end of the previous animation
                        action: "decrease opac"
                    });

                    // Decrease title opacity
                    timelineActions.push({ target: titles[i + 1], vars: { opacity: 0.2 } });
                }
            }

            // EXECUTE TIMELINE ACTIONS
            for (let j = 0; j < timelineActions.length; j++) {
                const { target, vars, options, action, isLabel, label } = timelineActions[j];

                if (isLabel && label) {
                    tl.add(label);
                } else {
                    if (target && vars) {
                        if (options) {
                            tl.to(target, vars, options);
                        } else {
                            tl.to(target, vars);
                        }
                    }
                }
            }
        }
    }, [tl, workTitlesContainerRef, workDetailsContainerRef]);

    //-----------------------------------------
    //MOBILE ANIMATION
    //-----------------------------------------
    const mobileWorkContainerRef = useRef(null);
    const mobileWorkContentWrapperRef = useRef<HTMLDivElement>(null);
    const mobileWorkTitlesContainerRef = useRef<HTMLUListElement>(null);
    const mobileWorkDetailsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (windowInnerWidth < 768) {
            if (
                mobileWorkContainerRef.current &&
                mobileWorkTitlesContainerRef.current &&
                mobileWorkDetailsContainerRef.current
            ) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: mobileWorkContainerRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        toggleActions: "restart pause reverse pause",
                        scrub: true,
                        pin: mobileWorkContentWrapperRef.current,
                        pinSpacing: false
                    }
                });

                const titles = (mobileWorkTitlesContainerRef.current.children as unknown) as HTMLElement[];

                const details = mobileWorkDetailsContainerRef.current.children;

                const posDic: Record<string, string | number> = {};

                for (let k = 0; k < titles.length; k++) {
                    posDic[k] = titles[k].offsetLeft;
                }

                let timelineActions: {
                    target: Element;
                    vars: Record<string, string | number>;
                    options?: string;
                }[] = [];

                //Create the animation for the timeline
                for (let i = 0; i < details.length; i++) {
                    const target = details[i];
                    const topTarget = titles[i];

                    //Increase bottom opacity
                    timelineActions.push({ target: topTarget, vars: { opacity: 1 } });
                    if (i !== 0) {
                        timelineActions.push({
                            target: mobileWorkTitlesContainerRef.current,
                            vars: { left: -posDic[i] + 20 }
                        });
                        // Dont need to increase the first items opacity since its already visible
                    }
                    timelineActions.push({ target, vars: { opacity: 1 } });

                    //Decrease bottom opacity
                    if (i !== details.length - 1) {
                        timelineActions.push({ target: topTarget, vars: { opacity: 0.2 } });
                        //Dont need to decrease the last items opacity so its still visible in the DOM when we scroll out
                        timelineActions.push({ target, vars: { opacity: 0 } });
                    }
                }

                //Execute the timeline
                for (let j = 0; j < timelineActions.length; j++) {
                    const { target, vars, options } = timelineActions[j];
                    tl.to(target, vars, options);
                }
            }
        }
    }, [mobileWorkContainerRef, mobileWorkContentWrapperRef, windowInnerWidth]);
    return {
        workContainerRef,
        workTabsRef,
        activeWorkBgGradient,
        workTitlesContainerRef,
        workDetailsContainerRef,
        mobileWorkDetailsContainerRef,
        mobileWorkTitlesContainerRef,
        mobileWorkContainerRef,
        mobileWorkContentWrapperRef
    };
}
