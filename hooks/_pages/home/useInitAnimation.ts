import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function useInitAnimation() {
    const bannerRef = useRef(null);
    const fieldRef = useRef<HTMLHeadingElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const firstSubFieldRef = useRef(null);
    const secondSubFieldRef = useRef(null);
    const profilePicRef = useRef<HTMLDivElement>(null);
    const mobilePicRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    function bannerAnimation() {
        const tl = gsap.timeline();

        tl.to(nameRef.current!.querySelectorAll('[data-key="letter"]'), { x: 0 })
            .to(fieldRef.current!.querySelectorAll('[data-key="letter"]'), { x: 0 })
            .to(firstSubFieldRef.current, { y: 0 })
            .to(secondSubFieldRef.current, { y: 0 });

        // Because the animation for mobile image is different from the animation for desktop image
        if (window.innerWidth < 768) {
            tl.to(mobilePicRef.current, { width: "100%" });
        } else {
            tl.to(profilePicRef.current!.querySelector("span"), { width: 0 });
            // .to(profilePicRef.current!.querySelector("polyline"), {
            //     strokeDashoffset: 0
            // });
        }

        tl.to(scrollIndicatorRef.current, { opacity: 1 });
        tl.add(() => {
            document.querySelector("body")?.classList.remove("hide");
        });
    }

    useEffect(() => {
        removeLoader().then(() => {
            bannerAnimation();
        });
    }, []);

    return {
        bannerRef,
        fieldRef,
        nameRef,
        firstSubFieldRef,
        secondSubFieldRef,
        profilePicRef,
        scrollIndicatorRef,
        mobilePicRef
    };
}

function removeLoader() {
    const tl = gsap.timeline({});

    const logo = document.querySelector("[data-key='logo']");
    const logoChildren = document.querySelectorAll("[data-key='logo'] path");
    tl.to(logoChildren, {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.8,
        delay: 1
    })
        .to(logo, {
            fill: "#fcfcfc"
        })
        .to(logo, {
            opacity: 0
        })
        .to(logo, {
            visibility: "hidden"
        })
        .to(document.querySelectorAll("[data-key='layer']"), {
            scaleY: 0
        });
    return tl;
}
