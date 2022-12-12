import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "fecha";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Layout, Highlight, CodeTitle } from "#/components";
import styles from "#/styles/_pages/blog-post.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
// import rehypeHighlight from "rehype-highlight";
import remarkPrism from "remark-prism";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LETTERS } from "#/constants";
import PostCard from "#/components/shared/post-card";
import { usePageScrollProgress } from "#/hooks";
import Link from "next/link";
import bannerImg from "#/public/home-banner.jpg";
import { TwitterShareButton } from "next-share";
// import "highlight.js/styles/atom-one-dark.css";

//-----------------------------------------
//Highlight code
//-----------------------------------------
function highlightCode(pre, highlightRanges, lineNumberRowsContainer) {
	const ranges = highlightRanges.split(",").filter((val) => val);
	const preWidth = pre.scrollWidth;

	for (const range of ranges) {
		let [start, end] = range.split("-");
		if (!start || !end) {
			start = range;
			end = range;
		}

		for (let i = +start; i <= +end; i++) {
			const lineNumberSpan: HTMLSpanElement = lineNumberRowsContainer.querySelector(`span:nth-child(${i})`);
			lineNumberSpan.style.setProperty("--highlight-background", "rgb(100 100 100 / 0.5)");
			lineNumberSpan.style.setProperty("--highlight-width", `${preWidth - 5}px`); // 5 is the width of the left border
			lineNumberSpan.style.setProperty("border-left", `5px solid #fff`);
		}
	}
}

//-----------------------------------------
//Create copy button
//-----------------------------------------
function createCopyButton(codeEl) {
	const button = document.createElement("button");
	button.classList.add("prism-copy-button");
	button.textContent = "Copy";

	button.addEventListener("click", () => {
		if (button.textContent === "Copied") {
			return;
		}
		navigator.clipboard.writeText(codeEl.textContent || "");
		button.textContent = "Copied";
		button.disabled = true;
		setTimeout(() => {
			button.textContent = "Copy";
			button.disabled = false;
		}, 3000);
	});

	return button;
}

export default function Post({ frontMatter, mdxSource }) {
	const rootRef = useRef<HTMLDivElement>(null);
	const preInstance = useRef<boolean>();

	useEffect(() => {
		if (!preInstance.current && rootRef.current) {
			preInstance.current = true; // So this code is not run twice
			const allPres = rootRef.current.querySelectorAll("pre");
			const cleanup: (() => void)[] = [];

			for (const pre of allPres) {
				const code = pre.firstElementChild;
				if (!code || !/code/i.test(code.tagName)) {
					continue;
				}

				//Add a copy button to this code block
				const copyButton = createCopyButton(code);
				pre.parentElement.appendChild(copyButton);

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

			return () => cleanup.forEach((f) => f());
		}
	}, []);

	const { title, description, tags, date, banner, readingTime } = frontMatter;

	return (
		<Layout.BlogLayout>
			<TopProgress />
			<div className={styles.container} ref={rootRef}>
				<section className={styles.header}>
					{/* <button>
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
					</button> */}
					<h1>{title}</h1>
					<p className={styles.summary}>{description}</p>
					<p className={styles.info}>
						<span>{format(new Date(date), "MMMM Do, YYYY")}</span>
						{/* <span>
							<span className={styles.circle}></span>
							{tags.reduce((total, a, i) => {
								return i === 0 ? total + "" + a : total + ", " + a;
							}, "")}
						</span> */}
						<span>
							<span className={styles.circle}></span>
							{readingTime} read
						</span>
					</p>
					<div className={styles.blogImage} style={{ backgroundColor: frontMatter.color ?? "#000" }}>
						{banner && <Image src={banner} layout="fill" objectFit="contain" />}
					</div>
				</section>
				<section className={styles.postInfo}>
					<MDXRemote {...mdxSource} components={{ Highlight, Image, CodeTitle }} />

					<div className={styles.ctas}>
						<Link href="" passHref>
							<a>Tweet this article</a>
						</Link>

						<Link href="" passHref>
							<a>Discuss on Twitter</a>
						</Link>
					</div>
				</section>
				<MyInformation />
			</div>

			<div className={styles.bottomSection}>
				<MoreLike />
			</div>
		</Layout.BlogLayout>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const paths = files.map((filename) => {
		return {
			params: {
				slug: filename.replace(".mdx", ""),
			},
		};
	});

	//TODO: Custom blog 404 page
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8");

	const { data: frontMatter, content } = matter(markdownWithMeta);
	// const mdxSource = await serialize(content);
	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
			remarkPlugins: [
				[
					remarkPrism,
					{
						plugins: [
							// "autolinker",
							// "command-line",
							// "data-uri-highlight",
							// "diff-highlight",
							// "inline-color",
							// "keep-markup",
							"line-numbers",
							// "show-invisibles",
							// "treeview",
						],
					},
				],
			],
		},
	});

	return {
		props: {
			frontMatter,
			slug,
			mdxSource,
		},
	};
}

function MoreLike() {
	return (
		<div className={styles.morelike}>
			<h2>More Articles</h2>

			<div className={styles.morelikeposts}>
				{LETTERS.slice(0, 3).map((item) => {
					const { url, title, date, time, summary, tags, img } = item;
					return <PostCard title={title} subtitle={summary} img={img} />;
				})}
			</div>
		</div>
	);
}

function MyInformation() {
	return (
		<section className={styles.myInformation}>
			<div className={styles.bottom}>
				<Image src={bannerImg} width="180px" height="180px" objectFit="cover" style={{ borderRadius: "50%" }} />

				<p>
					David Obodo is a JavaScript software engineer and teacher. Kent's taught hundreds of thousands of people how to
					make the world a better place with quality software development tools and practices. He lives with his wife and
					four kids in Utah
				</p>
			</div>
		</section>
	);
}

function TopProgress() {
	const { scrollProgress } = usePageScrollProgress();

	return <div className={styles.topprogress} style={{ width: scrollProgress + "%" }}></div>;
}
