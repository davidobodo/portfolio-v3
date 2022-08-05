import Link from "next/link";
import styles from "./styles.module.scss";
import { useRef, useEffect, useState, Ref } from "react";
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
	useEffect(() => {
		if (containerRef.current) {
			calculateFooterHeight(containerRef.current);
		}
	}, []);

	useIsomorphicLayoutEffect(() => {
		//On desktop devices toggle between fixed and relative cause footer height might be greater than viewport height

		console.log(innerWidth);
		// console.log(containerRef.current, placeholderRef.current);
		if (containerRef.current && placeholderRef.current) {
			if (innerWidth >= 768) {
				if (footerHeight > innerHeight) {
					containerRef.current.style.position = "relative";
					placeholderRef.current.style.display = "none";
				} else {
					containerRef.current.style.position = "fixed";
					placeholderRef.current.style.display = "block";
				}
			} else {
				console.log("THIS GUY GOT CALLED");
				containerRef.current.style.position = "relative";
				placeholderRef.current.style.display = "none";
			}
		}
	}, [innerHeight, innerWidth, footerHeight]);

	return (
		<>
			<Details
				containerRef={containerRef}
				onRouteChange={onRouteChange}
				// isFooterFixed={isFooterFixed}
			/>

			<div className={styles.placeholderWrapper}>
				<SectionPlaceholder styles={{ height: footerHeight + "px" }} containerRef={placeholderRef} />
			</div>
		</>
	);
}

function Details({
	containerRef,
	onRouteChange,
}: // isFooterFixed,
{
	containerRef: Ref<HTMLDivElement>;
	onRouteChange: (path: string) => void;
	// isFooterFixed: boolean;
}) {
	return (
		<div className={styles.container} ref={containerRef} data-key="dhfjshjfjshkjshkfsjhk">
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
							<a>
								<span>Home</span>
							</a>
						</li>
						<li className={styles.line}></li>
						<li onClick={() => onRouteChange("/projects")}>
							<a>
								<span>Projects</span>
							</a>
						</li>
						<li className={styles.line}></li>
						<li onClick={() => onRouteChange("/letters")}>
							<a>
								<span>Letters </span>
							</a>
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
						{/* <li>
							<Link href="/">
								<a href="">
									{" "}
									<span>14 rAndom stuffzzzz</span>
								</a>
							</Link>
						</li> */}
						{/* <li className={styles.line}></li> */}
						<li onClick={() => onRouteChange("/credits")}>
							<a>
								<span>Site credits</span>
							</a>
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
