import gsap from "gsap";
import { useRef, useEffect } from "react";
import { animateFaintSvg } from "#/utils";
import { DATA_VALUES } from "#/constants";
import { TTimelineAction } from "#/interfaces";

export default function useSkillsAnimation({ windowInnerWidth }: { windowInnerWidth: number }) {
    const skillsListRef = useRef<HTMLDivElement>(null);
    const skillsContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (skillsContainerRef.current && skillsListRef.current) {
            return;
            const svgElement = skillsContainerRef.current.querySelector('[data-id="faint-svg"]') as HTMLElement;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: skillsContainerRef.current,
                    toggleActions: "restart pause reverse pause",
                    scrub: true,
                    pin: skillsContainerRef.current?.firstElementChild,
                    pinSpacing: false,
                    onUpdate: (self) => {
                        svgElement.style.bottom =
                            animateFaintSvg(
                                self.progress,
                                skillsContainerRef.current?.firstElementChild as HTMLElement,
                                DATA_VALUES.skillsSvgViewportHeight,
                                windowInnerWidth
                            ) + "px";
                    }
                }
            });

            let timelineActions: TTimelineAction[] = [];

            const skillLists = skillsListRef.current.querySelectorAll('[data-id="skill"]');

            // CREATE TIMELINE ACTIONS
            for (let i = 0; i < skillLists.length; i++) {
                const header = skillLists[i].firstElementChild as HTMLElement;
                const list = header?.nextElementSibling;
                const listItems = (list?.children as unknown) as HTMLElement;

                //show heading
                timelineActions.push({ target: header, vars: { opacity: 1 } });
                //show list
                timelineActions.push({ target: listItems, vars: { opacity: 1, stagger: 0.2 } });
            }

            // EXECUTE TIMELINE ACTIONS
            for (let j = 0; j < timelineActions.length; j++) {
                const { target, vars, options } = timelineActions[j];

                if (target && vars) {
                    tl.to(target, vars, options);
                }
            }
        }
    }, []);

    return {
        skillsListRef,
        skillsContainerRef
    };
}
