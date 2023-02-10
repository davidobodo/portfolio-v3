import Link from "next/link";
import styles from "../styles.module.scss";
import { Form } from "./form";
import { Ref } from "react";
export function Details({
	containerRef,
	isFooterFixed,
	handlePageGAEvents,
}: {
	containerRef: Ref<HTMLDivElement>;
	isFooterFixed: boolean;
	handlePageGAEvents: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) {
	///////
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
					<div>
						<div className={styles.helpfulLinks}>
							<h3>Quick Links</h3>
							<ul>
								<li>
									<Link href="/" passHref>
										<a>
											<span>Home</span>
										</a>
									</Link>
								</li>
								<li className={styles.line}></li>
								<li>
									<Link href="/projects" passHref>
										<a>
											<span>Projects</span>
										</a>
									</Link>
								</li>
								<li className={styles.line}></li>
								<li>
									<Link href="/blog" passHref>
										<a>
											<span>Blog </span>
										</a>
									</Link>
								</li>
								{/* <li>
									<Link href="/letters">
										<a>
											<span>Letters </span>
										</a>
									</Link>
								</li> */}
							</ul>
						</div>
						<div className={styles.helpfulLinks}>
							<h3>Extras</h3>
							<ul>
								<li>
									<Link href="https://drive.google.com/file/d/1U8jfN1X4sefh7HbCwQDBQuR_1PvbpVOq/view?usp=sharing">
										<a target="_blank" onClick={handlePageGAEvents} data-link="resume">
											<span>Resume</span>
										</a>
									</Link>
								</li>
								<li className={styles.line}></li>

								<li>
									<Link href="/credits" passHref>
										<a>
											<span>Site credits</span>
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.formSection}>
					<Form />
				</div>
			</div>
			<div className={styles.social}>
				<ul>
					<li>
						<Link href="https://www.linkedin.com/in/david-obodo" passHref>
							<a target="_blank" onClick={handlePageGAEvents} data-link="linkedin">
								<span>Linkedin</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://github.com/davidobodo" passHref>
							<a target="_blank" onClick={handlePageGAEvents} data-link="github">
								<span>Github</span>
							</a>
						</Link>
					</li>
					{/* <li>
						<Link href="https://blog.davidobodo.com" passHref>
							<a target="_blank" onClick={handlePageGAEvents} data-link="blog">
								<span>Blog</span>
							</a>
						</Link>
					</li> */}
					<li>
						<Link href="https://twitter.com/phitGeek" passHref>
							<a target="_blank" onClick={handlePageGAEvents} data-link="twitter">
								<span>Twitter</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="mailto: contact@davidobodo.com" passHref>
							<a target="_blank" onClick={handlePageGAEvents} data-link="email">
								<span>Email</span>
							</a>
						</Link>
					</li>
				</ul>

				<p> &#169; 2022 David Obodo</p>
			</div>
		</div>
	);
}
