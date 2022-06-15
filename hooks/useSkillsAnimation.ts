import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { animateFaintSvg } from "#/utils";
import { DATA_VALUES } from "#/constants";
import { TTimelineAction } from "#/interfaces";

export default function useSkillsAnimation({ windowInnerWidth }: { windowInnerWidth: number }) {
    const skillsListRef = useRef<HTMLDivElement>(null);
    const skillsContainerRef = useRef<HTMLDivElement>(null);
    const skillsContentWrapperRef = useRef<HTMLDivElement>(null);

    const [tl, setTl] = useState<gsap.core.Timeline>();
    useEffect(() => {
        if (skillsContainerRef.current && skillsListRef.current && skillsContentWrapperRef.current) {
            const svgElement = skillsContainerRef.current.querySelector('[data-id="faint-svg"]') as HTMLElement;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: skillsContainerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    toggleActions: "restart pause reverse pause",
                    scrub: true,
                    pin: skillsContentWrapperRef.current,
                    pinSpacing: false,
                    onUpdate: (self) => {
                        svgElement.style.bottom =
                            animateFaintSvg(
                                self.progress,
                                skillsContentWrapperRef.current as HTMLElement,
                                DATA_VALUES.skillsSvgViewportHeight,
                                windowInnerWidth
                            ) + "px";
                    }
                }
            });

            setTl(tl);
        }
    }, [skillsListRef.current, skillsContainerRef.current, skillsContentWrapperRef.current]);
    useEffect(() => {
        if (tl && skillsContainerRef.current && skillsListRef.current && skillsContentWrapperRef.current) {
            let timelineActions: TTimelineAction[] = [];

            const image = skillsContainerRef.current.querySelector('[data-id="hand-image"]') as HTMLElement;
            const skillLists = skillsListRef.current.querySelectorAll('[data-id="skill"]');

            // CREATE TIMELINE ACTIONS
            timelineActions.push({ target: image, vars: { width: "29vw", duration: 2 } });

            for (let i = 0; i < skillLists.length; i++) {
                const header = skillLists[i].firstElementChild as HTMLElement;
                const list = header?.nextElementSibling; // The "UL tag"
                const listItems = (list?.querySelectorAll("li>span") as unknown) as HTMLElement;

                //show heading
                timelineActions.push({ target: header, vars: { opacity: 1 } });
                //show list
                timelineActions.push({ target: listItems, vars: { stagger: 0.2, y: 0 } });
            }

            // EXECUTE TIMELINE ACTIONS
            for (let j = 0; j < timelineActions.length; j++) {
                const { target, vars, options } = timelineActions[j];

                if (target && vars) {
                    tl.to(target, vars, options);
                }
            }
        }
    }, [tl, skillsListRef.current, skillsContainerRef.current, skillsContentWrapperRef.current]);

    return {
        skillsListRef,
        skillsContainerRef,
        skillsContentWrapperRef
    };
}
