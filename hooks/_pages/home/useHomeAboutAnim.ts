import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { homePageAnims } from "#/utils/animations/atoms";

const { changeFocusedAboutText } = homePageAnims;
export default function useHomeAboutAnim() {
    const aboutListRef = useRef<HTMLUListElement>(null);

    useIsomorphicLayoutEffect(() => {
        if (aboutListRef.current) {
            const tl = changeFocusedAboutText(aboutListRef.current.children);

            return () => {
                tl.scrollTrigger?.kill();
            };
        }
    }, []);
    return {
        aboutListRef
    };
}
