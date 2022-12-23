import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "posts");

export const getSlugs = (): string[] => {
	const paths = sync(`${POSTS_PATH}/*.mdx`);

	return paths.map((path) => {
		const parts = path.split("/");
		const fileName = parts[parts.length - 1];
		const [slug, _ext] = fileName.split(".");
		return slug;
	});
};

export const getAllPosts = () => {
	const posts = getSlugs()
		.map((slug) => getPostFromSlug(slug))
		.sort((a, b) => {
			if (a.meta && b.meta) {
				if (a.meta.date > b.meta.date) return 1;
				if (a.meta.date < b.meta.date) return -1;
				return 0;
			}
			return 0;
		})
		.reverse();
	return posts;
};

interface Post {
	content: string;
	meta: PostMeta | null;
}

export interface PostMeta {
	excerpt: string;
	slug: string;
	title: string;
	tags: string[];
	date: string;
}

export const getPostFromSlug = (slug: string): Post => {
	const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
	console.log(postPath, "THE POST PATH");
	try {
		const source = fs.readFileSync(postPath);
		console.log(source, "====THE SOURCE TO BE ANALYZED");
		const { content, data } = matter(source);

		return {
			content,
			meta: {
				slug,
				excerpt: data.excerpt ?? "",
				title: data.title ?? slug,
				tags: (data.tags ?? []).sort(),
				date: (data.date ?? new Date()).toString(),
			},
		};
	} catch (e) {
		console.log(e, "THE ERROR GOTTEN HERE");
		return {
			content: "",
			meta: null,
		};
	}
};
