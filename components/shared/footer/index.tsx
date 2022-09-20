import styles from "./styles.module.scss";
import { useRef, useState } from "react";
import { SectionPlaceholder } from "#/components";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { events, registerEvent } from "#/utils/analytics/events";
import { Details } from "./details";
import { otherSharedAnimations } from "#/utils/animations";
import { useAnimationsContext } from "#/context";

const { openContactCurtain } = otherSharedAnimations;
export default function Contact() {
	const { innerHeight, innerWidth } = useWindowSize();
	const containerRef = useRef<HTMLDivElement>(null);
	const placeholderRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	//-------------------------------------------------------------
	// FOOTER HEIGHT
	//-------------------------------------------------------------
	const [footerHeight, setFooterHeight] = useState(10);
	const calculateFooterHeight = (node: HTMLDivElement) => {
		setFooterHeight(node.clientHeight);
	};
	useIsomorphicLayoutEffect(() => {
		if (containerRef.current) {
			calculateFooterHeight(containerRef.current);
		}
	}, [innerWidth, innerHeight]);

	//-------------------------------------------------------------
	// FIXED FOOTER LOGIC
	//-------------------------------------------------------------
	const [isFooterFixed, setIsFooterFixed] = useState(true);
	const onFooterFix = (event: { key: string; keyCode: number }) => {
		if (event.key === "Tab" || event.keyCode === 9) {
			setIsFooterFixed(false);
		}
	};
	useIsomorphicLayoutEffect(() => {
		//On desktop devices toggle between fixed and relative cause footer height might be greater than viewport height
		if (containerRef.current && placeholderRef.current) {
			if (innerWidth >= 768) {
				if (footerHeight > innerHeight) {
					setIsFooterFixed(false);
				} else {
					setIsFooterFixed(true);
				}
			} else {
				setIsFooterFixed(false);
			}
		}
	}, [innerHeight, innerWidth, footerHeight]);

	useIsomorphicLayoutEffect(() => {
		// Contact form would not be seen if an element inside it is focused and the contact form is still fixed,
		// so we remove the fixed position immediately we detect user using keyboard
		document.body.addEventListener("keydown", onFooterFix);

		return () => {
			document.body.removeEventListener("keydown", onFooterFix);
		};
	}, []);

	const { setContactOpenerAnimation } = useAnimationsContext();
	//-------------------------------------------------------------
	// REVEAL FOOTER ANIMATION
	//-------------------------------------------------------------
	useIsomorphicLayoutEffect(() => {
		if (wrapperRef.current && footerHeight) {
			const tl = openContactCurtain({
				trigger: wrapperRef.current,
				curtain: wrapperRef.current.querySelector("[data-key='contact-curtain']") as HTMLDivElement,
			});

			setContactOpenerAnimation(tl);

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, [footerHeight]);

	//-------------------------------------------------------------
	// Google analytics
	//-------------------------------------------------------------
	const handlePageGAEvents = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		const { link } = e.currentTarget.dataset;
		const { linkedin, twitter, resume, github, clickEmail } = events.shared.contactForm;
		switch (link) {
			case "resume":
				registerEvent(resume());
				return;
			case "linkedin":
				registerEvent(linkedin());
				return;
			case "twitter":
				registerEvent(twitter());
				return;
			case "github":
				registerEvent(github());
				return;
			case "email":
				registerEvent(clickEmail());
				return;
			default:
				return;
		}
	};

	return (
		<footer ref={wrapperRef} className={styles.wrapper}>
			<Details containerRef={containerRef} isFooterFixed={isFooterFixed} handlePageGAEvents={handlePageGAEvents} />

			<div className={styles.placeholderWrapper}>
				<SectionPlaceholder
					styles={{ height: footerHeight + "px", display: isFooterFixed ? "block" : "none" }}
					containerRef={placeholderRef}
				/>
			</div>

			<div className={styles.blackCurtain} data-key="contact-curtain"></div>
		</footer>
	);
}
