import styles from "./styles.module.scss";
import Link from "next/link";
import { TwitterShareButton } from "next-share";
import { BASE_URL } from "#/constants";
import { events, registerEvent } from "#/utils/analytics/events";

export default function ShareArticle({ url, title }: { url: string; title: string }) {
	return (
		<div className={styles.container}>
			<TwitterShareButton url={`${BASE_URL}/blog/${url}`} title={`I just read "${title}" by @phitGeek  `}>
				<div
					className={styles.tweetArticle}
					onClick={() => {
						registerEvent(
							events.pages.blog.tweetBlogPost({
								url: `${BASE_URL}/blog/${url}`,
								title: title,
							})
						);
					}}
				>
					Tweet this article
					<span></span>
				</div>
			</TwitterShareButton>

			<Link href={`https://twitter.com/search?q=${BASE_URL}/blog/${url}`} passHref>
				<a
					target="_blank"
					onClick={() => {
						registerEvent(
							events.pages.blog.discussBlogPost({
								url: `${BASE_URL}/blog/${url}`,
								title: title,
							})
						);
					}}
					data-link="clickFooterPortfolioLink"
				>
					Discuss on Twitter
					<span></span>
				</a>
			</Link>
		</div>
	);
}
