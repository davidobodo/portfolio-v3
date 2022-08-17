import Link from "next/link";
import styles from "./styles.module.scss";
import { useRef, useState, Ref } from "react";
import { SectionPlaceholder } from "../index";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { Form } from "./form";
import gsap from "gsap";
import { useRouter } from "next/router";
export default function Contact() {
	const { innerHeight, innerWidth } = useWindowSize();
	const router = useRouter();
	const containerRef = useRef<HTMLDivElement>(null);
	const placeholderRef = useRef<HTMLDivElement>(null);
	const [footerHeight, setFooterHeight] = useState(10);
	const calculateFooterHeight = (node: HTMLDivElement) => {
		setFooterHeight(node.clientHeight);
	};
	useIsomorphicLayoutEffect(() => {
		if (containerRef.current) {
			calculateFooterHeight(containerRef.current);
		}
	}, [innerWidth, innerHeight]);

	const [isFooterFixed, setIsFooterFixed] = useState(true);

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

	// Contact form would not be seen if an element inside it is focused and the contact form is still fixed, so we remove the fixed position immediately we detect user using keyboard
	useIsomorphicLayoutEffect(() => {
		document.body.addEventListener("keydown", function (event) {
			if (event.key === "Tab" || event.keyCode === 9) {
				setIsFooterFixed(false);
			}
		});
	}, []);

	const wrapperRef = useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		if (wrapperRef.current && footerHeight) {
			const curtain = wrapperRef.current.querySelector("[data-key='contact-curtain']");

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapperRef.current,
					start: "top bottom",
					end: "bottom bottom",
					scrub: true,
					toggleActions: "restart complete restart reverse",
				},
			});
			tl.to(curtain, { zIndex: 2, duration: 0 });
			tl.to(curtain, {
				scaleY: 0,
			});
			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, [footerHeight]);

	const handleGAEvent = (e) => {
		const { link } = e.currentTarget.dataset;
		const { gtag } = window;

		switch (link) {
			case "resume":
				gtag("event", "view_resume");
			case "linkedin":
				gtag("event", "visit_linkedin");
			case "twitter":
				gtag("event", "visit_twitter");
			case "github":
				gtag("event", "visit_github");
			case "email":
				gtag("event", "click_email");
			default:
				return;
		}
	};

	return (
		<footer ref={wrapperRef} className={styles.wrapper}>
			<Details containerRef={containerRef} isFooterFixed={isFooterFixed} handleGAEvent={handleGAEvent} />

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

function Details({
	containerRef,
	isFooterFixed,
	handleGAEvent,
}: {
	containerRef: Ref<HTMLDivElement>;
	isFooterFixed: boolean;
}) {
	return (
		<div
			className={styles.container}
			ref={containerRef}
			data-key="contact-form"
			style={{ position: isFooterFixed ? "fixed" : "relative" }}
		>
			<div className={styles.containerInner}>
				<div className={styles.leftSection}>
					<div className={styles.top}></div>
					<HelpfulLinks handleGAEvent={handleGAEvent} />
				</div>
				<div className={styles.formSection}>
					<Form />
				</div>
			</div>
			<Social handleGAEvent={handleGAEvent} />
		</div>
	);
}

function HelpfulLinks({ handleGAEvent }) {
	return (
		<>
			<div>
				<div className={styles.helpfulLinks}>
					<h3>Quick Links</h3>
					<ul>
						<li>
							<Link href="/" scroll={false}>
								<a>
									<span>Home</span>
								</a>
							</Link>
						</li>
						<li className={styles.line}></li>
						<li>
							<Link href="/projects" scroll={false}>
								<a>
									<span>Projects</span>
								</a>
							</Link>
						</li>
						<li className={styles.line}></li>
						<li>
							<Link href="/letters" scroll={false}>
								<a>
									<span>Letters </span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.helpfulLinks}>
					<h3>Extras</h3>
					<ul>
						<a
							href="https://drive.google.com/file/d/1dVxGS3654jFz_YiWrkrCDU93ISZSj_lc/view?usp=sharing"
							target="_blank"
						>
							<span id="resume">Resume</span>
						</a>
						<li>
							<Link href="https://drive.google.com/file/d/1dVxGS3654jFz_YiWrkrCDU93ISZSj_lc/view?usp=sharing">
								<a target="_blank">
									<span id="resume">Resume</span>
								</a>
							</Link>
						</li>
						<li className={styles.line}></li>

						<li>
							<Link href="/credits" scroll={false}>
								<a>
									<span>Site credits</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

function Social({ handleGAEvent }) {
	return (
		<div className={styles.social}>
			<ul>
				<li>
					<Link href="https://www.linkedin.com/in/obodo-david-998786174/" passHref>
						<a target="_blank" onClick={handleGAEvent} data-link="linkedin">
							<span>Linkedin</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://github.com/davidobodo" passHref>
						<a target="_blank" onClick={handleGAEvent} data-link="github">
							<span>Github</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://twitter.com/phitGeek" passHref>
						<a target="_blank" onClick={handleGAEvent} data-link="twitter">
							<span>Twitter</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="mailto: obododavid5@gmail.com" passHref>
						<a target="_blank" onClick={handleGAEvent} data-link="email">
							<span>Email</span>
						</a>
					</Link>
				</li>
			</ul>

			<p> &#169; 2022 David Obodo</p>
		</div>
	);
}
