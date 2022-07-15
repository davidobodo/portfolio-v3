import gsap from "gsap";
import { useRef, useEffect } from "react";
import { animPageLoaders } from "#/utils/animations/atoms";
import { usePageLeaveAnimationContext } from "#/state";

export default function useHomeInit() {
    const bannerRef = useRef<HTMLDivElement>(null);

    const { pageLeaveAnimation } = usePageLeaveAnimationContext();

    const bannerRefSelector = gsap.utils.selector(bannerRef);
    useEffect(() => {
        const nameLetters = (bannerRefSelector(
            '[data-key="name"] [data-key="letter"]'
        ) as unknown) as NodeListOf<HTMLSpanElement>;
        const fieldLetters = (bannerRefSelector(
            '[data-key="field"] [data-key="letter"]'
        ) as unknown) as NodeListOf<HTMLSpanElement>;
        const subFields = (bannerRefSelector('[data-key="sub-field"]') as unknown) as NodeListOf<HTMLDivElement>;
        const picMobile = (bannerRefSelector('[data-key="mobile-image"]') as unknown) as HTMLDivElement;
        const picDesktopblind = (bannerRefSelector('[data-key="desktop-image"] span') as unknown) as HTMLDivElement;
        const scrollIndicator = (bannerRefSelector('[data-key="scroll-alert"]') as unknown) as HTMLDivElement;

        if (pageLeaveAnimation) {
            // Navigating from another page to this page

            const master = gsap.timeline();
            master.add(pageLeaveAnimation.reverse()).add(
                bannerAnimation({
                    nameLetters,
                    fieldLetters,
                    subFieldOne: subFields[0],
                    subFieldTwo: subFields[1],
                    picMobile: picMobile,
                    picDesktop: picDesktopblind,
                    scrollIndicator
                })
            );

            return () => {
                master.kill();
            };
        } else {
            // Navigating to this page directly from the browser url input
            const { drawSvgLogo, openNoiseLayers } = animPageLoaders;

            const logo = document.querySelector("[data-key='logo']") as Element;
            const logoChildren = document.querySelectorAll("[data-key='logo'] path");
            const layers = document.querySelectorAll("[data-key='layer']");

            const master = gsap.timeline();
            master
                .add(drawSvgLogo(logo, logoChildren))
                .add(openNoiseLayers(layers))
                .add(
                    bannerAnimation({
                        nameLetters,
                        fieldLetters,
                        subFieldOne: subFields[0],
                        subFieldTwo: subFields[1],
                        picMobile: picMobile,
                        picDesktop: picDesktopblind,
                        scrollIndicator
                    })
                );
        }
    }, []);

    return {
        bannerRef
    };
}

function bannerAnimation({
    nameLetters,
    fieldLetters,
    subFieldOne,
    subFieldTwo,
    picMobile,
    picDesktop,
    scrollIndicator
}: {
    nameLetters: NodeListOf<Element>;
    fieldLetters: NodeListOf<Element>;
    subFieldOne: HTMLDivElement;
    subFieldTwo: HTMLDivElement;
    picMobile: HTMLDivElement;
    picDesktop: HTMLSpanElement;
    scrollIndicator: HTMLDivElement;
}) {
    const tl = gsap.timeline();

    tl.to(nameLetters, { x: 0 }).to(fieldLetters, { x: 0 }).to(subFieldOne, { y: 0 }).to(subFieldTwo, { y: 0 });

    // Because the animation for mobile image is different from the animation for desktop image
    if (window.innerWidth < 768) {
        tl.to(picMobile, { width: "100%" });
    } else {
        tl.to(picDesktop, { width: 0 });
    }

    tl.to(scrollIndicator, { opacity: 1 });
    tl.add(() => {
        document.querySelector("body")?.classList.remove("hide");
    });

    return tl;
}
