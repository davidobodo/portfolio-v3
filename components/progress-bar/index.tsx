import { useIsomorphicLayoutEffect } from "#/hooks";
import styles from "./styles.module.scss";
import { useState } from "react";
export default function ProgressBar() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const handlescroll = () => {
		const totalDocHeight = document.body.offsetHeight;
		const scrolled = window.pageYOffset;

		const numerator = (window.innerHeight + scrolled) * 100;
		const denominator = totalDocHeight;

		const percent = numerator / denominator;

		setScrollProgress(percent);
	};

	useIsomorphicLayoutEffect(() => {
		window.addEventListener("scroll", handlescroll);

		return () => {
			window.removeEventListener("scroll", handlescroll);
		};
	}, []);
	return (
		<div className={styles.barWrapper}>
			<div className={styles.bar} style={{ height: scrollProgress + "%" }}></div>
		</div>
	);
}
