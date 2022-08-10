import styles from "./styles.module.scss";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { useState } from "react";
export default function ProgressBar() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const handlescroll = () => {
		const totalDocHeight = document.body.offsetHeight;
		const scrolled = window.pageYOffset;
		const viewportHeight = window.innerHeight;

		const numerator = (viewportHeight + scrolled) * 100;
		const denominator = totalDocHeight;
		const percent = numerator / denominator;

		setScrollProgress(percent);

		if (scrolled >= viewportHeight) {
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
	return (
		<div className={isVisible ? styles.barWrapper + " " + styles.show : styles.barWrapper}>
			<div className={styles.bar} style={{ height: scrollProgress + "%" }}></div>
		</div>
	);
}
