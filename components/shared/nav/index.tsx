import styles from "./styles.module.scss";
import Link from "next/link";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { useState } from "react";
import { Logo } from "#/components";
import { TLogoMode } from "#/types";

type Props = {
	showInBanner?: boolean;
	headerSectionLogoMode?: TLogoMode;
	hasBackdropFilter?: boolean; // Should never show up in desktop
};

export default function Nav({ showInBanner = true, headerSectionLogoMode = "dark", hasBackdropFilter = true }: Props) {
	const { innerWidth, innerHeight } = useWindowSize();
	const [isVisible, setIsVisible] = useState(showInBanner);
	const [logoMode, setLogoMode] = useState<TLogoMode>(headerSectionLogoMode); // Since page loads at the top (i.e header)
	const [hasBackdrop, setHasBackdrop] = useState(hasBackdropFilter);

	const handlescroll = () => {
		const totalHeight = document.body.offsetHeight;
		const contactHeight = document.querySelector('[data-key="contact-form"]')?.clientHeight || 0;
		const LOGO_POSITION_HEIGHT = 95;
		const diff = totalHeight - contactHeight - LOGO_POSITION_HEIGHT;

		// When user is in the page banner section/header section
		if (window.pageYOffset < innerHeight) {
			setLogoMode(headerSectionLogoMode);
			setHasBackdrop(hasBackdropFilter);
			if (showInBanner) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		}

		// When user is in the dark-section/conetent section of the page
		if (window.pageYOffset >= innerHeight && window.pageYOffset < diff) {
			setLogoMode("light");
			setIsVisible(true);

			if (window.innerWidth < 768) {
				setHasBackdrop(true);
			}
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
		<>
			<Link href="/" scroll={false}>
				<a
					className={styles.link}
					data-key="nav-logo"
					style={{ outlineColor: color, visibility: isVisible ? "visible" : "hidden" }}
				>
					<Logo propStyles={styles.logo} color={color} opacity={isVisible ? 1 : 0} />
				</a>
			</Link>
			<div
				className={styles.backdrop}
				style={{
					backdropFilter: innerWidth >= 768 ? "none" : hasBackdrop && isVisible ? "blur(1.5rem) saturate(1.1)" : "none",
					WebkitBackdropFilter:
						innerWidth >= 768 ? "none" : hasBackdrop && isVisible ? "blur(1.5rem) saturate(1.1)" : "none",
				}}
			></div>
		</>
	);
}
