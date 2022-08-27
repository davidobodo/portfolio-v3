import gsap from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { otherHomeSectionsAnimations } from "#/utils/animations";

const { revealParagraph } = otherHomeSectionsAnimations;

export default function useRevealText() {
	const textWrapperRef = useRef<HTMLDivElement>(null);
	const textSelector = gsap.utils.selector(textWrapperRef);

	useIsomorphicLayoutEffect(() => {
		if (textWrapperRef.current) {
			const paragraphs = textSelector("p");

			if (paragraphs) {
				const master = gsap.timeline();

				for (let i = 0; i < paragraphs.length; i++) {
					master.add(
						revealParagraph({
							trigger: paragraphs[i],
							words: paragraphs[i].querySelectorAll('[data-key="word"]'),
						})
					);
				}

				return () => {
					master.kill();
				};
			}
		}
	}, []);

	return {
		textWrapperRef,
	};
}
