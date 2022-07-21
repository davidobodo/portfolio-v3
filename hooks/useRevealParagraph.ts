import gsap from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { homePageAnims } from "#/utils/animations/atoms";

const { revealParagraph } = homePageAnims;
export default function useRevealText() {
    const textWrapperRef = useRef<HTMLDivElement>(null);
    const textSelector = gsap.utils.selector(textWrapperRef);

    useIsomorphicLayoutEffect(() => {
        if (textWrapperRef.current) {
            const paragraphs = textSelector("p");

            if (paragraphs) {
                console.log(paragraphs, "TEH PARA");
                const master = gsap.timeline();
                master.add(
                    revealParagraph({
                        trigger: paragraphs[0],
                        words: paragraphs[0].querySelectorAll('[data-key="word"]')
                    })
                );
                master.add(
                    revealParagraph({
                        trigger: paragraphs[1],
                        words: paragraphs[1].querySelectorAll('[data-key="word"]')
                    })
                );
            }
        }
    }, []);

    return {
        textWrapperRef
    };
}
