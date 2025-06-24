import styles from "./styles.module.scss";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { useRef } from "react";
import { events, registerEvent } from "#/utils/analytics/events";
import { otherSharedAnimations } from "#/utils/animations";

const { fadeIn } = otherSharedAnimations;
export default function SingleLetter({
	url,
	title,
	date,
	time,
	summary,
	tags,
	i,
}: {
	url: string;
	title: string;
	date: string;
	time: string;
	summary: string;
	tags: string[];
	i: number;
}) {
	const articleRef = useRef(null);

	useIsomorphicLayoutEffect(() => {
		if (articleRef.current) {
			const anim = fadeIn({ node: articleRef.current });

			return () => {
				anim.scrollTrigger?.kill();
			};
		}
	}, []);

	return (
		<article className={styles.letterWrapper} ref={articleRef}>
			<div className={styles.container}>
				<a
					href={url}
					target="_blank"
					onClick={() => registerEvent(events.pages.letters.viewLetter({ link_url: url, article_title: title }))}
				>
					{title}
				</a>
				<p>
					{date} | {time} read
				</p>
				<p>{summary}...</p>

				<ul>
					{tags.map((item) => {
						return <li key={item}>#{item}</li>;
					})}
				</ul>
			</div>
			<span className={styles.number}>{i < 10 ? `0${i + 1}.` : `.${i + 1}`}</span>
		</article>
	);
}
