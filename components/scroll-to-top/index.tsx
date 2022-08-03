import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);
	const handlescroll = () => {
		// Toggle visibility
		if (window.pageYOffset >= 2000) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handlescroll);
		}
		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("scroll", handlescroll);
			}
		};
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);
		}
	}, []);
	return (
		<button
			className={styles.container}
			style={{ opacity: isVisible ? 1 : 0 }}
			onClick={() => {
				window.scrollTo({
					behavior: "smooth",
					top: 0,
					left: 0,
				});
			}}
		>
			<span>&#8593;</span>
		</button>
	);
}
