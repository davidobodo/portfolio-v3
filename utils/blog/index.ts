import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import { TPost } from "#/types";

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

export const getPostFromSlug = (slug: string): TPost => {
	const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
	try {
		const source = fs.readFileSync(postPath);
		const { content, data } = matter(source);

		return {
			content,
			meta: {
				banner: data.banner ?? null,
				bannerAlt: data.bannerAlt ?? null,
				date: data.date ?? null,
				description: data.description ?? null,
				longDescription: data.longDescription ?? null,
				readingTime: data.readingTime ?? null,
				tags: data.tags ?? null,
				title: data.title ?? null,
				url: data.url ?? null,
				ogbanner: data.ogbanner ?? "",
				bgColor: data.bgColor ?? "",
				themeColor: data.themeColor ?? "",
			},
		};
	} catch (e) {
		return {
			content: "",
			meta: null,
		};
	}
};
