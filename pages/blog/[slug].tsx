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
	// const seo = {
	// 	title: frontMatter?.title || "The David Obodo Blog",
	// 	url: frontMatter?.url ? `${BASE_URL}${frontMatter?.url}` : `${BASE_URL}/blog`,
	// 	description: frontMatter?.description || "Technical and Life articles written by David Obodo",
	// 	image: `${BASE_URL}${frontMatter?.banner}` || `${BASE_URL}/images/covers/blog.png`,
	// };

	console.log(slug, "SLUG IN CLIENT");
	console.log(data, "THE DATA ========");

	return (
		<>
			<ErrorBoundary>
				{/* <Head>
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
				</Head> */}

				<div style={{ backgroundColor: "white", height: "50vh", color: "black" }}>
					<h1>THIS IS THE PAGE</h1>
					<div>{data?.title}</div>
				</div>

				{/* {!slug ? (
					<div>Loading...</div>
				) : (
					<BlogView slug={slug} frontMatter={frontMatter} similarPosts={similarPosts} mdxSource={mdxSource} />
				)} */}
			</ErrorBoundary>
		</>
	);
}

//------------------------------------------------
// GET STATIC PATHS
//------------------------------------------------
export async function getStaticPaths() {
	const paths = LETTERS.map((filename) => {
		return {
			params: {
				slug: filename.url,
			},
		};
	});

	return {
		paths,
		fallback: "blocking",
	};
	// const paths = files.map((filename) => {
	// 	return {
	// 		params: {
	// 			slug: filename.replace(".mdx", ""),
	// 		},
	// 	};
	// });

	// return {
	// 	paths,
	// 	fallback: true,
	// };
}

//------------------------------------------------
// GET STATIC PROPS
//------------------------------------------------
export async function getStaticProps({ params }: { params: { slug: string } }) {
	const { slug } = params;

	const file = LETTERS.find((item) => item.link === slug);

	return {
		props: {
			slug,
			data: file || null,
		},
	};

	// //Get Files
	// const files = fs.readdirSync(path.join("posts"));

	// //Get file details
	// const allPosts = files
	// 	.map((filename) => {
	// 		const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
	// 		const { data: frontMatter } = matter(markdownWithMeta);

	// 		return {
	// 			frontMatter,
	// 			slug: filename.split(".")[0],
	// 		};
	// 	})
	// 	.sort((a, b) => {
	// 		return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
	// 	});

	// //Check if the post we are searching for exists
	// const postExists = allPosts.find((item) => {
	// 	return item.slug === slug;
	// });

	// console.log(postExists, "POST EXISTS");

	// //Doesn't exist, so return
	// // if (!postExists) {
	// console.log("POST DOESNT EXIST SO RETURNING BEFORE TRYING TO READ FILE ASYNC");

	// return {
	// 	props: {
	// 		frontMatter: null,
	// 		slug,
	// 		mdxSource: null,
	// 		similarPosts: allPosts.slice(0, 3),
	// 	},
	// };
	// }

	// try {
	// 	//Get post details
	// 	const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8");
	// 	const { data: frontMatter, content } = matter(markdownWithMeta);
	// 	const mdxSource = await serialize(content, {
	// 		mdxOptions: {
	// 			rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
	// 			remarkPlugins: [
	// 				[
	// 					remarkPrism,
	// 					{
	// 						plugins: ["line-numbers"],
	// 					},
	// 				],
	// 			],
	// 		},
	// 	});

	// 	const similarPosts = allPosts
	// 		.filter((post) => {
	// 			const { tags, title } = post.frontMatter as TPostFrontMatter;
	// 			return tags.some((tag) => frontMatter.tags.includes(tag)) && frontMatter.title !== title;
	// 		})
	// 		.slice(0, 3);

	// 	return {
	// 		props: {
	// 			frontMatter,
	// 			slug,
	// 			mdxSource,
	// 			similarPosts,
	// 		},
	// 	};
	// } catch (e) {
	// 	return {
	// 		notFound: true,
	// 	};
	// 	console.log(e, "=======INSIDE THE SERVER CATCH");
	// 	return {
	// 		props: {
	// 			frontMatter: null,
	// 			slug,
	// 			mdxSource: null,
	// 			similarPosts: allPosts.slice(0, 3),
	// 		},
	// 	};
	// }
}
