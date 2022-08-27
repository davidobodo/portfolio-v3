import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { otherSharedAnimations } from "#/utils/animations";

const { changeFocusedOpaqueText } = otherSharedAnimations;

export default function useAlternateTextOpacity() {
	const textsListRef = useRef<HTMLParagraphElement>(null);

	useIsomorphicLayoutEffect(() => {
		if (textsListRef.current) {
			const tl = changeFocusedOpaqueText(textsListRef.current.children);

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, []);
	return {
		textsListRef,
	};
}
