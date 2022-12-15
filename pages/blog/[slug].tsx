import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styles from "#/styles/_pages/blog-post.module.scss";
import remarkPrism from "remark-prism";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { format } from "fecha";
import { serialize } from "next-mdx-remote/serialize";
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
import { TPostFrontMatter, TMdxSource } from "#/types";
import { createCopyButton, highlightCode } from "#/utils";

export default function Post({
	frontMatter,
	mdxSource,
	similarPosts,
	slug,
}: {
	frontMatter: TPostFrontMatter;
	mdxSource: TMdxSource;
	similarPosts: {
		frontMatter: TPostFrontMatter;
		slug: string;
	}[];
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
				const copyButton = createCopyButton(code);
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

			return () => cleanup.forEach((f) => f());
		}
	}, []);

	if (!frontMatter) {
		return (
			<Layout.BlogLayout>
				<>
					<TopProgress />
					<div className={styles.notFound}>
						<h1>
							404 <br />
							<span>"/blog/{slug}"</span> is not a page on davidobodo.com. <br /> So sorry
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

	const { title, description, tags, date, banner, bannerAlt, readingTime } = frontMatter;

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
						<div className={styles.image} style={{ backgroundColor: "#000" }}>
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

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const { slug } = params;

	//Get similar posts
	const files = fs.readdirSync(path.join("posts"));

	const allPosts = files
		.map((filename) => {
			const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
			const { data: frontMatter } = matter(markdownWithMeta);

			return {
				frontMatter,
				slug: filename.split(".")[0],
			};
		})
		.sort((a, b) => {
			return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
		});

	try {
		//Get post details
		const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8");
		const { data: frontMatter, content } = matter(markdownWithMeta);
		const mdxSource = await serialize(content, {
			mdxOptions: {
				rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
				remarkPlugins: [
					[
						remarkPrism,
						{
							plugins: ["line-numbers"],
						},
					],
				],
			},
		});

		const similarPosts = allPosts
			.filter((post) => {
				const { tags, title } = post.frontMatter as TPostFrontMatter;
				return tags.some((tag) => frontMatter.tags.includes(tag)) && frontMatter.title !== title;
			})
			.slice(0, 3);

		return {
			props: {
				frontMatter,
				slug,
				mdxSource,
				similarPosts,
			},
		};
	} catch (e) {
		return {
			props: {
				frontMatter: null,
				slug,
				mdxSource: null,
				similarPosts: allPosts.slice(0, 3),
			},
		};
	}
}

function NotFound({ slug }) {
	return <div>dsjkajdkaj</div>;
}

// function Found(){
// 	return (

// 	)
// }

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
