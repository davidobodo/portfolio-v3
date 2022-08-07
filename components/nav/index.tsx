import styles from "./styles.module.scss";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { useState } from "react";
import { Logo } from "../index";

export default function Nav({ alwaysVisible = false, color = "#e1dfdd" }: { alwaysVisible?: boolean; color?: string }) {
	const [isVisible, setIsVisible] = useState(false);
	const handlescroll = () => {
		// Get the total height of the document
		const totalHeight = document.body.offsetHeight;
		const contactHeight = document.querySelector('[data-key="contact-form"]')?.clientHeight || 0;
		const LOGO_POSITION_HEIGHT = 95;
		const diff = totalHeight - contactHeight - LOGO_POSITION_HEIGHT;

		// Toggle visibility
		if (window.pageYOffset >= 95 && window.pageYOffset < diff) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
	useIsomorphicLayoutEffect(() => {
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
