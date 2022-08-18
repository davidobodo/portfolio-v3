import { useState } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
const nullDimensions = {
	innerHeight: 0,
	innerWidth: 0,
	outerHeight: 0,
	outerWidth: 0,
};

export default function useWindowSize() {
	const [windowSize, setWindowSize] = useState(typeof window !== "undefined" ? getDimensions() : nullDimensions);

	function getDimensions() {
		return {
			innerHeight: window.innerHeight,
			innerWidth: window.innerWidth,
			outerHeight: window.outerHeight,
			outerWidth: window.outerWidth,
		};
	}

	function onResize() {
		setWindowSize(getDimensions());
	}

	// set resize handler once on mount and clean before unmount
	useIsomorphicLayoutEffect(() => {
		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return windowSize;
}
