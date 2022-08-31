import { useState, useEffect } from "react";
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
		const innerHeight = window.innerHeight;
		const innerWidth = window.innerWidth;

		return {
			innerHeight,
			innerWidth,
		};
	}

	function onResize() {
		setWindowSize(getDimensions());
	}

	useIsomorphicLayoutEffect(() => {
		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return windowSize;
}
