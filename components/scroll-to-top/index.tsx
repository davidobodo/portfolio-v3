import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { events, registerEvent } from "#/utils/analytics/events";
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

	const onClick = () => {
		registerEvent(events.shared.scrollToTopBtn());
		window.scrollTo({
			behavior: "smooth",
			top: 0,
			left: 0,
		});
	};
	return (
		<button className={styles.container} style={{ opacity: isVisible ? 1 : 0 }} onClick={onClick}>
			<span>&#8593;</span>
		</button>
	);
}
