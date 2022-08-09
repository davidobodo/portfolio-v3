import Link from "next/link";
import styles from "./styles.module.scss";
import { useRef, useState, Ref } from "react";
import { SectionPlaceholder } from "../index";
import { useIsomorphicLayoutEffect, useWindowSize } from "#/hooks";
import { Form } from "./form";
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

		console.log(innerWidth, placeholderRef.current, containerRef.current);
		// console.log(containerRef.current, placeholderRef.current);
		if (containerRef.current && placeholderRef.current) {
			console.log("ELEMENTS EXIST");
			if (innerWidth >= 768) {
				console.log("WINDOW IS IN LARGE SCREE");
				if (footerHeight > innerHeight) {
					// containerRef.current.style.position = "relative";
					// placeholderRef.current.style.display = "none";
					console.log("FOOTER ISNT FIXED", footerHeight, innerHeight);
					setIsFooterFixed(false);
				} else {
					console.log("FOOTER SHOULD BE FIXED");
					setIsFooterFixed(true);
					// containerRef.current.style.position = "fixed";
					// placeholderRef.current.style.display = "block";
				}
			} else {
				// containerRef.current.style.position = "relative";
				// placeholderRef.current.style.display = "none";
				setIsFooterFixed(false);
			}
		}
	}, [innerHeight, innerWidth, footerHeight]);

	console.log(isFooterFixed, "IS THE FOOTER FIXED");

	return (
		<>
			<Details containerRef={containerRef} onRouteChange={onRouteChange} isFooterFixed={isFooterFixed} />

			<div className={styles.placeholderWrapper}>
				<SectionPlaceholder
					styles={{ height: footerHeight + "px", display: isFooterFixed ? "block" : "none" }}
					containerRef={placeholderRef}
				/>
			</div>
		</>
	);
}

function Details({
	containerRef,
	onRouteChange,
	isFooterFixed,
}: // isFooterFixed,
{
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
