import { TPost, TPostFrontMatter } from "#/types";
import { PostCard } from "#/components";
import styles from "./styles.module.scss";

export default function SimilarArticles({ data }: { data: TPost[] }) {
	return (
		<div className={styles.container}>
			<h2>More Articles</h2>

			<div className={styles.posts}>
				{data?.map((item) => {
					const { url, title, date, banner, description, readingTime } = item.meta as TPostFrontMatter;
					return (
						<PostCard title={title} subtitle={description} img={banner} url={url} key={url} time={readingTime} date={date} />
					);
				})}
			</div>
		</div>
	);
}
