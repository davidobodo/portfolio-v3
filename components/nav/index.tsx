import { useEffect, useState } from "react";
import { Logo } from "../index";
import styles from "./styles.module.scss";

export default function Nav({ alwaysVisible = false, color = "#e1dfdd" }: { alwaysVisible?: boolean; color?: string }) {
	const [isVisible, setIsVisible] = useState(false);
	const handlescroll = () => {
		// Toggle visibility
		if (window.pageYOffset >= 95) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
	useEffect(() => {
		if (alwaysVisible) {
			setIsVisible(true);
		} else {
			if (typeof window !== "undefined") {
				window.addEventListener("scroll", handlescroll);
			}
			return () => {
				if (typeof window !== "undefined") {
					window.removeEventListener("scroll", handlescroll);
				}
			};
		}
	}, [alwaysVisible]);
	return <Logo propStyles={styles.logo} color={color} opacity={isVisible ? 1 : 0} />;
}
