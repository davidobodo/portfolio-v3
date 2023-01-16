import Image from "next/image";
import { useEffect, useRef } from "react";
import { format } from "fecha";
import { MDXRemote } from "next-mdx-remote";
import {
	Layout,
	Highlight,
	CodeTitle,
	Center,
	SimilarArticles,
	MyInformation,
	ShareArticle,
	TopProgress,
} from "#/components";
import { createCopyButton, highlightCode } from "#/utils";
import { TPostFrontMatter, TMdxSource, TPost } from "#/types";
import styles from "./styles.module.scss";

export default function BlogView({
	slug,
	frontMatter,
	similarPosts,
	mdxSource,
}: {
	frontMatter: TPostFrontMatter;
	mdxSource: TMdxSource;
	similarPosts: TPost[];
	slug: string;
}) {
	const postContentRef = useRef<HTMLDivElement>(null);
	const preInstance = useRef<boolean>();

	useEffect(() => {
		if (!preInstance.current && postContentRef.current) {
			preInstance.current = true; // So this code is not run twice
			const allPres = postContentRef.current.querySelectorAll("pre");
			const cleanup: (() => void)[] = [];

			for (const pre of allPres) {
				const code = pre.firstElementChild;
				if (!code || !/code/i.test(code.tagName)) {
					continue;
				}

				//Add a copy button to this code block
				const copyButton = createCopyButton();

				copyButton.addEventListener("click", () => {
					if (copyButton.textContent === "Copied") {
						return;
					}
					navigator.clipboard.writeText(code.textContent || "");
					copyButton.textContent = "Copied";
					copyButton.disabled = true;
					setTimeout(() => {
						copyButton.textContent = "Copy";
						copyButton.disabled = false;
					}, 3000);
				});

				pre?.parentElement?.appendChild(copyButton);

				//Add highlighting
				const highlightRanges = pre.dataset.line;
				const lineNumbersContainer = pre.querySelector(".line-numbers-rows");
				if (!highlightRanges || !lineNumbersContainer) {
					continue;
				}
				const runHighlight = () => highlightCode(pre, highlightRanges, lineNumbersContainer);
				runHighlight();

				const ro = new ResizeObserver(runHighlight);
				ro.observe(pre);

				cleanup.push(() => ro.disconnect());
			}

			return () => {
				cleanup.forEach((f) => f());
			};
		}
	}, [slug]);

	if (!frontMatter) {
		return (
			<Layout.BlogLayout>
				<>
					<TopProgress />
					<div className={styles.notFound}>
						<h1>
							404 <br />
							<span>&apos;/blog/{slug}&apos;</span> is not a page on davidobodo.com. <br /> So sorry
						</h1>

						<h2>Looking for something to read?</h2>
					</div>
					<div className={styles.shareAndInfoWrapper}>{/* <MyInformation /> */}</div>

					<div className={styles.similarArticlesWrapper}>
						<SimilarArticles data={similarPosts} />
					</div>
				</>
			</Layout.BlogLayout>
		);
	}

	const { title, description, date, banner, bannerAlt, readingTime, bgColor } = frontMatter;

	return (
		<Layout.BlogLayout>
			<>
				<TopProgress />
				<div className={styles.container} ref={postContentRef}>
					<section className={styles.header}>
						<h1>{title}</h1>
						<p className={styles.summary}>{description}</p>
						<p className={styles.info}>
							<span>{format(new Date(date), "MMMM Do, YYYY")}</span>

							<span>
								<span className={styles.line}></span>
								{readingTime} read
							</span>
						</p>
						<div className={styles.image} style={{ backgroundColor: bgColor ? bgColor : "#000" }}>
							{banner && <Image src={banner} layout="fill" objectFit="contain" alt={bannerAlt} />}
						</div>
					</section>
					<section className={styles.postContentWrapper}>
						<MDXRemote {...mdxSource} components={{ Highlight, Image, CodeTitle, Center }} />
					</section>
				</div>
				<div className={styles.shareAndInfoWrapper}>
					<ShareArticle url={slug} title={title} />
					<MyInformation />
				</div>

				<div className={styles.similarArticlesWrapper}>
					<SimilarArticles data={similarPosts} />
				</div>
			</>
		</Layout.BlogLayout>
	);
}

{
	/* <button>
							<svg
								width="28"
								height="28"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="#fff"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<line x1="5" y1="12" x2="19" y2="12" />
								<line x1="5" y1="12" x2="9" y2="16" />
								<line x1="5" y1="12" x2="9" y2="8" />
							</svg>
							Back to overview
						</button> */
}

{
	/* <span>
							<span className={styles.circle}></span>
							{tags.reduce((total, a, i) => {
								return i === 0 ? total + "" + a : total + ", " + a;
							}, "")}
						</span> */
}
