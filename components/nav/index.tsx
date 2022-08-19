import styles from "./styles.module.scss";
import Link from "next/link";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { useState } from "react";
import { Logo } from "../index";
import { TLogoMode } from "#/interfaces";

type Props = { showInBanner?: boolean; headerSectionLogoMode?: TLogoMode };

export default function Nav({ showInBanner = true, headerSectionLogoMode = "dark" }: Props) {
	const [isVisible, setIsVisible] = useState(showInBanner);
	const [logoMode, setLogoMode] = useState<TLogoMode>(headerSectionLogoMode); // Since page loads at the top (i.e header)

	const handlescroll = () => {
		// Get the total height of the document
		const totalHeight = document.body.offsetHeight;
		const contactHeight = document.querySelector('[data-key="contact-form"]')?.clientHeight || 0;
		const LOGO_POSITION_HEIGHT = 95;
		const diff = totalHeight - contactHeight - LOGO_POSITION_HEIGHT;

		// When user is in the page banner section/header section
		if (window.pageYOffset < 95) {
			setLogoMode(headerSectionLogoMode);
			if (showInBanner) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		}

		// When user is in the dark section of the page
		if (window.pageYOffset >= 95 && window.pageYOffset < diff) {
			setLogoMode("light");
			setIsVisible(true);
		}

		//When user is in the contact section
		if (window.pageYOffset > diff) {
			setIsVisible(false);
		}
	};

	useIsomorphicLayoutEffect(() => {
		window.addEventListener("scroll", handlescroll);

		return () => {
			window.removeEventListener("scroll", handlescroll);
		};
	}, []);

	const color = logoMode === "light" ? "#e1dfdd" : "#000";
	return (
		<Link href="/" scroll={false}>
			<a className={styles.link} data-key="nav-logo" style={{ outlineColor: color }}>
				<Logo propStyles={styles.logo} color={color} opacity={isVisible ? 1 : 0} />
			</a>
		</Link>
	);
}
