import { useState } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";

export default function usePageScrollProgress() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	const handlescroll = () => {
		const totalDocHeight = document.body.offsetHeight;
		const scrolled = window.pageYOffset;

		const viewportHeight = window.innerHeight;

		const numerator = scrolled * 100;
		const denominator = totalDocHeight - viewportHeight;
		const percent = numerator / denominator;

		setScrollProgress(percent);

		if (scrolled >= viewportHeight && scrolled < totalDocHeight) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useIsomorphicLayoutEffect(() => {
		window.addEventListener("scroll", handlescroll);

		return () => {
			window.removeEventListener("scroll", handlescroll);
		};
	}, []);

	return {
		scrollProgress,
		isVisible,
	};
}
