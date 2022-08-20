import { RefObject, useEffect, useState } from "react";
import { FOCUSABLE_ELEMENT_STRING } from "#/constants";

type TFocusableTypes =
	| HTMLAnchorElement
	| HTMLAreaElement
	| HTMLInputElement
	| HTMLSelectElement
	| HTMLTextAreaElement
	| HTMLButtonElement;

const useTrapFocus = ({ containerRef, onClose }: { containerRef: RefObject<HTMLDivElement>; onClose: () => void }) => {
	const [firstFocusableItem, setFirstFocusableItem] = useState<HTMLElement>();
	const [lastFocusableItem, setLastFocusableItem] = useState<HTMLElement>();

	useEffect(() => {
		if (containerRef?.current) {
			const a11yElems: Array<TFocusableTypes> = [
				...containerRef.current.querySelectorAll<TFocusableTypes>(FOCUSABLE_ELEMENT_STRING),
			];

			if (a11yElems.length > 0) {
				setFirstFocusableItem(a11yElems[0]);
				setLastFocusableItem(a11yElems[a11yElems.length - 1]);
				a11yElems[0].focus();
			}
		}
	}, []);

	const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		const key = e.key || e.keyCode;
		if (key === "Escape") {
			onClose();
		}

		if (key === "Tab") {
			if (e.shiftKey) {
				if (document.activeElement === firstFocusableItem) {
					e.preventDefault();

					if (lastFocusableItem) {
						lastFocusableItem.focus();
					}
				}
			} else {
				if (document.activeElement === lastFocusableItem) {
					e.preventDefault();
					console.log("IN HERE");
					if (firstFocusableItem) {
						firstFocusableItem.focus();
					}
				}
			}
		}
	};

	return {
		onKeyDown,
	};
};

export default useTrapFocus;
