import { METADATA, LETTERS } from "#/constants";
import Head from "next/head";
import styles from "#/styles/_pages/blog.module.scss";
import { PostCard, SeriesCard } from "#/components";

export default function Blog() {
	const { title, description, url, image } = METADATA["blog"];
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

			<div className={styles.container}>
				<div className={styles.tags}>
					<p>Filter by Tags</p>
					{["React.js", "Testing", "Javascript", "Next.js", "TAD", "Life", "Random"].map((item) => {
						return <button>{item}</button>;
					})}
				</div>

				<div className={styles.search}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-search"
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
						<circle cx="10" cy="10" r="7" />
						<line x1="21" y1="21" x2="15" y2="15" />
					</svg>
					<input type="text" placeholder="Search" />
				</div>
				<section>
					<h2>Series</h2>
					<div className={styles.seriesWrapper}>
						{[1].map((item) => {
							return <SeriesCard />;
						})}
					</div>
				</section>
				<section>
					<h2>Articles</h2>
					<div className={styles.cardsWrapper}>
						{LETTERS.map((item) => {
							const { url, title, date, time, summary, tags, img } = item;
							return <PostCard title={title} subtitle={summary} img={img} />;
						})}
					</div>
				</section>
			</div>
		</div>
	);
}

Blog.isPlain = true;
