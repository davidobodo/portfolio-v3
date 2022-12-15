import styles from "./styles.module.scss";
import Link from "next/link";
import { TwitterShareButton } from "next-share";
import { BASE_URL } from "#/constants";

export default function ShareArticle({ url, title }: { url: string; title: string }) {
	return (
		<div className={styles.container}>
			<TwitterShareButton url={`${BASE_URL}/blog/${url}`} title={`I just read "${title}" by @phitGeek  `}>
				<div className={styles.tweetArticle}>
					Tweet this article
					<span></span>
				</div>
			</TwitterShareButton>

			<Link href={`https://twitter.com/search?q=${BASE_URL}/blog/${url}`} passHref>
				<a target="_blank">
					Discuss on Twitter
					<span></span>
				</a>
			</Link>
		</div>
	);
}
