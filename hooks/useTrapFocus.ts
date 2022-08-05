import { Ref, RefObject, useEffect, useState } from "react";
import { FOCUSABLE_ELEMENT_STRING, KEYBOARD_KEYS } from "#/constants";

const useTrapFocus = ({ containerRef, onClose }: { containerRef: RefObject<HTMLDivElement>; onClose: () => void }) => {
	const { ESC_KEY, TAB_KEY } = KEYBOARD_KEYS;
	const [firstFocusableItem, setFirstFocusableItem] = useState<HTMLElement>();
	const [lastFocusableItem, setLastFocusableItem] = useState<HTMLElement>();
	// const [focusedElemBeforeToggle, setFocusedElemBeforeToggle] = useState();

	useEffect(() => {
		if (containerRef?.current) {
			const a11yElems = [...containerRef.current.querySelectorAll(FOCUSABLE_ELEMENT_STRING)];

			// console.log(document.activeElement, "======THE ACTIVE ELEMENT");
			// setFocusedElemBeforeToggle(document.activeElement);

			if (a11yElems.length > 0) {
				setFirstFocusableItem(a11yElems[0]);
				setLastFocusableItem(a11yElems[a11yElems.length - 1]);
				a11yElems[0].focus();
			}
		}
	}, []);

	const onKeyDown = (e: KeyboardEvent) => {
		console.log("in the keyboard side");
		if (e.keyCode === ESC_KEY) {
			onClose();
		}

		if (e.keyCode === TAB_KEY) {
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
