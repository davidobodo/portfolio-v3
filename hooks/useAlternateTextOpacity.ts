import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { sharedAnimations } from "#/utils/animations";

const { changeFocusedOpaqueText } = sharedAnimations;

export default function useAlternateTextOpacity() {
	const textsListRef = useRef<HTMLUListElement>(null);

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
