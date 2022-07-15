import gsap from "gsap";
import { useRef, useEffect } from "react";
import { animPageLoaders } from "#/utils/animations/atoms";
import { usePageLeaveAnimationContext } from "#/state";

export default function useHomeBannerAnimation() {
    const bannerRef = useRef<HTMLDivElement>(null);

    const { pageLeaveAnimation } = usePageLeaveAnimationContext();

    const bannerRefSelector = gsap.utils.selector(bannerRef);
    useEffect(() => {
        const nameLetters = bannerRefSelector('[data-key="name"] [data-key="letter"]');
        const fieldLetters = bannerRefSelector('[data-key="field"] [data-key="letter"]');
        const subFields = bannerRefSelector('[data-key="sub-field"]');

        const picMobile = bannerRefSelector('[data-key="mobile-image"]');
        const picDesktopblind = bannerRefSelector('[data-key="desktop-image"] span');
        const scrollIndicator = bannerRefSelector('[data-key="scroll-alert"]');

        if (pageLeaveAnimation) {
            // Navigating from another page to this page
            pageLeaveAnimation.reverse();
            pageLeaveAnimation.then(() => {
                bannerAnimation({
                    nameLetters,
                    fieldLetters,
                    subFieldOne: subFields[0],
                    subFieldTwo: subFields[1],
                    picMobile: picMobile,
                    picDesktop: picDesktopblind,
                    scrollIndicator
                });
            });
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
    picDesktop: HTMLDivElement;
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
