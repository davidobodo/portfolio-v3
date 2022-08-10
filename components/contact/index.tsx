import Link from "next/link";
import styles from "./styles.module.scss";
import { useRef, useState, Ref } from "react";
import { SectionPlaceholder } from "../index";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { Form } from "./form";
import gsap from "gsap";
export default function Contact({ onRouteChange }: { onRouteChange: (path: string) => void }) {
	const { innerHeight, innerWidth } = useWindowSize();
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

	const wrapperRef = useRef(null);
	useIsomorphicLayoutEffect(() => {
		const anim = gsap.timeline({
			scrollTrigger: {
				trigger: wrapperRef.current,
				// markers: true,
				start: "top center",
				end: "bottom bottom",
				scrub: true,
			},
		});

		anim.to(wrapperRef.current.querySelector("[data-key='contact-curtain']"), {
			scaleY: 0,
		});
	}, []);

	return (
		<div ref={wrapperRef} className={styles.wrapper}>
			<Details containerRef={containerRef} onRouteChange={onRouteChange} isFooterFixed={isFooterFixed} />

			<div className={styles.placeholderWrapper}>
				<SectionPlaceholder
					styles={{ height: footerHeight + "px", display: isFooterFixed ? "block" : "none" }}
					containerRef={placeholderRef}
				/>
			</div>

			<div className={styles.blackCurtain} data-key="contact-curtain"></div>
		</div>
	);
}

function Details({
	containerRef,
	onRouteChange,
	isFooterFixed,
}: {
	containerRef: Ref<HTMLDivElement>;
	onRouteChange: (path: string) => void;
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
					<HelpfulLinks onRouteChange={onRouteChange} />
				</div>
				<div className={styles.formSection}>
					<Form />
				</div>
			</div>
			<Social />
		</div>
	);
}

function HelpfulLinks({ onRouteChange }: { onRouteChange: (path: string) => void }) {
	return (
		<>
			<div>
				<div className={styles.helpfulLinks}>
					<h3>Quick Links</h3>
					<ul>
						<li onClick={() => onRouteChange("/")}>
							<Link href="/">
								<a>
									<span>Home</span>
								</a>
							</Link>
						</li>
						<li className={styles.line}></li>
						<li onClick={() => onRouteChange("/projects")}>
							<Link href="/projects">
								<a>
									<span>Projects</span>
								</a>
							</Link>
						</li>
						<li className={styles.line}></li>
						<li onClick={() => onRouteChange("/letters")}>
							<Link href="/letters">
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
						<li>
							<Link href="https://drive.google.com/file/d/1dVxGS3654jFz_YiWrkrCDU93ISZSj_lc/view?usp=sharing" passHref>
								<a target="_blank" rel="noreferrer noopener">
									{" "}
									<span>Resume</span>
								</a>
							</Link>
						</li>
						<li className={styles.line}></li>

						<li onClick={() => onRouteChange("/credits")}>
							<Link href="/credits">
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

function Social() {
	return (
		<div className={styles.social}>
			<ul>
				<li>
					<Link href="https://www.linkedin.com/in/obodo-david-998786174/" passHref>
						<a target="_blank" rel="noreferrer noopener">
							<span>Linkedin</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://github.com/obododavid" passHref>
						<a target="_blank" rel="noreferrer noopener">
							<span>Github</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://twitter.com/phitGeek" passHref>
						<a target="_blank" rel="noreferrer noopener">
							<span>Twitter</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="mailto: obododavid5@gmail.com" passHref>
						<a>
							<span>Email</span>
						</a>
					</Link>
				</li>
			</ul>

			<p> &#169; 2022 David Obodo</p>
		</div>
	);
}
