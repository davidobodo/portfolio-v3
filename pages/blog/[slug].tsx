import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "fecha";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Layout, Highlight } from "#/components";
import styles from "#/styles/_pages/blog-post.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
// import rehypeHighlight from "rehype-highlight";
import remarkPrism from "remark-prism";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { useEffect, useRef } from "react";
import Image from "next/image";
// import "highlight.js/styles/atom-one-dark.css";

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
			lineNumberSpan.style.setProperty("--highlight-width", `${preWidth}px`);
		}
	}
}

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

	useEffect(() => {
		const allPres = rootRef.current.querySelectorAll("pre");
		const cleanup: (() => void)[] = [];

		for (const pre of allPres) {
			const code = pre.firstElementChild;
			if (!code || !/code/i.test(code.tagName)) {
				continue;
			}

			pre.appendChild(createCopyButton(code));

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
	}, []);

	const { title, description, tags, date, banner } = frontMatter;

	console.log(format(new Date(date), "mediumDate"));

	return (
		<Layout.BlogLayout>
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
						<span>
							<span className={styles.circle}></span>
							{format(new Date(date), "MMMM Do, YYYY")}
						</span>
						<span>
							<span className={styles.circle}></span>
							{tags.reduce((total, a, i) => {
								return i === 0 ? total + "" + a : total + ", " + a;
							}, "")}
						</span>
						<span>
							<span className={styles.circle}></span>8 min read
						</span>
					</p>
					<div className={styles.blogImage} style={{ backgroundColor: frontMatter.color ?? "#000" }}>
						{banner && <Image src={banner} layout="fill" objectFit="contain" />}
					</div>
				</section>
				<MDXRemote {...mdxSource} components={{ Highlight, Image }} />
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
