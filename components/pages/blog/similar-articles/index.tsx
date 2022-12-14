import { TPostFrontMatter } from "#/types";
import { PostCard } from "#/components";
import styles from "./styles.module.scss";

export default function SimilarArticles({
	data,
}: {
	data: {
		frontMatter: TPostFrontMatter;
		slug: string;
	}[];
}) {
	return (
		<div className={styles.container}>
			<h2>More Articles</h2>

			<div className={styles.posts}>
				{data.map((item) => {
					const { url, title, date, time, summary, tags, img, banner, description, readingTime } = item.frontMatter;
					return (
						<PostCard title={title} subtitle={description} img={banner} url={url} key={url} time={readingTime} date={date} />
					);
				})}
			</div>
		</div>
	);
}
