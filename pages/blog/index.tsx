import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import styles from "#/styles/_pages/blog.module.scss";
import { METADATA } from "#/constants";
import { PostCard, SeriesCard, Layout, MyInformation } from "#/components";
import { SearchIcon } from "#/components/icons";
import React, { useState } from "react";
import { TPostFrontMatter } from "#/types";
export default function Blog({ posts }: { posts: { frontMatter: TPostFrontMatter; slug: string }[] }) {
	const latestPost = posts[0].frontMatter;
	const remainingPosts = posts.slice(1);

	const [searchFilter, setSearchFilter] = useState("");
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchFilter(e.target.value);
	};

	let displayedPosts = remainingPosts;

	if (searchFilter.length > 0) {
		displayedPosts = posts.filter((post) => {
			const { title } = post.frontMatter;
			return title.toLowerCase().includes(searchFilter.toLowerCase());
		});
	} else {
		displayedPosts = remainingPosts;
	}

	const { title, description, url, image } = METADATA["blog"];

	const renderPosts = () => {
		if (displayedPosts.length > 0) {
			return (
				<>
					<h2>Articles</h2>
					<div className={styles.cardsWrapper}>
						{displayedPosts.map((item) => {
							const { url, title, date, banner, description, readingTime } = item.frontMatter;
							return (
								<PostCard
									title={title}
									subtitle={description}
									img={banner}
									url={url}
									key={url}
									time={readingTime}
									date={date}
								/>
							);
						})}
					</div>
				</>
			);
		} else {
			return (
				<div className={styles.noResults}>
					No results for <strong> &apos;{searchFilter}&apos; </strong>
				</div>
			);
		}
	};

	return (
		<div className={styles.wrapper}>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta property="type" content="website" />
				<meta property="url" content={url} />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#e1dfdd" />

				<meta property="title" content={title} />
				<meta name="description" content={description} />
				<meta property="image" content={image} />
				<meta content="image/*" property="og:image:type" />

				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={url} />
				<meta property="og:image" content={image} />
				<meta property="og:site_name" content={title} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@phitGeek" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />

				<meta
					name="keywords"
					content="David, Obodo, Software Developer, Frontend, Fullstack, Frontend Developer, Fullstack Developer"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout.BlogLayout>
				<div className={styles.container}>
					<div className={styles.header}>
						<h1>Blog</h1>
						<div className={styles.search}>
							<SearchIcon />
							<input type="text" placeholder="Search" value={searchFilter} onChange={onChange} />
						</div>
					</div>
					{/* <div className={styles.tagsSearch}>
						<div className={styles.tags}>
							<p>Filter posts by Tag</p>
							{TAGS.map((item) => {
								return <button key={item}>{item}</button>;
							})}
						</div>
					</div> */}

					{searchFilter.trim().length === 0 && (
						<section className={styles.latest}>
							<h2>LATEST</h2>
							<div>
								<SeriesCard
									img={latestPost.banner}
									title={latestPost.title}
									url={latestPost.url}
									time={latestPost.readingTime}
									date={latestPost.date}
									summary={latestPost.longDescription}
									themeColor={latestPost.themeColor ?? ""}
								/>
							</div>
						</section>
					)}

					<section className={styles.articles}>{renderPosts()}</section>

					{searchFilter.trim().length === 0 && (
						<div className={styles.myInfoWrapper}>
							<MyInformation />
						</div>
					)}
				</div>
			</Layout.BlogLayout>
		</div>
	);
}

Blog.isPlain = true;

export const getStaticProps = async () => {
	const files = fs.readdirSync(path.join("posts"));

	const posts = files
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

	return {
		props: {
			posts,
		},
	};
};

// const TAGS = [
// 	"react",
// 	"testing",
// 	"javascript",
// 	"typescript",
// 	"next.js",
// 	"life",
// 	"random-thoughts",
// 	"ajax",
// 	"react-testing-library",
// 	"node",
// 	"express",
// 	"css",
// 	"html",
// 	"sass",
// 	"scss",
// ];
