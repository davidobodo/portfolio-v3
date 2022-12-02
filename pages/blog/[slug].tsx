import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "#/components";
import styles from "#/styles/_pages/blog-post.module.scss";

export default function Post({ frontMatter, mdxSource }) {
	return (
		<div className={styles.container}>
			<MDXRemote {...mdxSource} components={MDXComponents} />
		</div>
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
	const mdxSource = await serialize(content);

	return {
		props: {
			frontMatter,
			slug,
			mdxSource,
		},
	};
}
