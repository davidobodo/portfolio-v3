import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkPrism from "remark-prism";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { BASE_URL, LETTERS } from "#/constants";

import { serialize } from "next-mdx-remote/serialize";
import { BlogView, ErrorBoundary } from "#/components";
import { TPostFrontMatter, TMdxSource } from "#/types";
import Head from "next/head";
import { getPostFromSlug, getSlugs } from "#/utils/blog";
export default function Post({
	frontMatter,
	mdxSource,
	similarPosts,
	slug,
	data,
}: {
	frontMatter: TPostFrontMatter;
	mdxSource: TMdxSource;
	similarPosts: {
		frontMatter: TPostFrontMatter;
		slug: string;
	}[];
	slug: string;
	data: any;
}) {
	const seo = {
		title: frontMatter?.title || "The David Obodo Blog",
		url: frontMatter?.url ? `${BASE_URL}${frontMatter?.url}` : `${BASE_URL}/blog`,
		description: frontMatter?.description || "Technical and Life articles written by David Obodo",
		image: `${BASE_URL}${frontMatter?.banner}` || `${BASE_URL}/images/covers/blog.png`,
	};

	return (
		<>
			<ErrorBoundary>
				<Head>
					<title>{seo.title}</title>
					<meta charSet="utf-8" />
					<meta property="type" content="website" />
					<meta property="url" content={seo.url} />
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					<meta name="theme-color" content="#e1dfdd" />

					<meta property="title" content={seo.title} />
					<meta name="description" content={seo.description} />
					<meta property="image" content={seo.image} />
					<meta content="image/*" property="og:image:type" />

					<meta property="og:type" content="website" />
					<meta property="og:title" content={seo.title} />
					<meta property="og:description" content={seo.description} />
					<meta property="og:url" content={seo.url} />
					<meta property="og:image" content={seo.image} />
					<meta property="og:site_name" content={seo.title} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content="@phitGeek" />
					<meta name="twitter:title" content={seo.title} />
					<meta name="twitter:description" content={seo.description} />
					<meta name="twitter:image" content={seo.image} />

					<meta
						name="keywords"
						content="David, Obodo, Software Developer, Frontend, Fullstack, Frontend Developer, Fullstack Developer"
					/>

					<link rel="icon" href="/favicon.ico" />
				</Head>

				<BlogView slug={slug} frontMatter={frontMatter} similarPosts={similarPosts} mdxSource={mdxSource} />
			</ErrorBoundary>
		</>
	);
}

//------------------------------------------------
// GET STATIC PATHS
//------------------------------------------------
export async function getStaticPaths() {
	const paths = getSlugs().map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: "blocking",
	};
}

//------------------------------------------------
// GET STATIC PROPS
//------------------------------------------------
export async function getStaticProps({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const { content, meta } = getPostFromSlug(slug);

	if (!meta) {
		return {
			props: {
				mdxSource: null,
				frontMatter: null,
				slug,
				similarPosts: [],
			},
		};
	}

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

	return { props: { mdxSource, frontMatter: meta, slug, similarPosts: [] } };
}
