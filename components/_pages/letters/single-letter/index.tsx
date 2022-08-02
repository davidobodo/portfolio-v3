import gsap from "gsap";
import styles from "./styles.module.scss";
import { useIsomorphicLayoutEffect } from "#/hooks";
import { useRef } from "react";
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
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: articleRef.current,
				start: "top 80%",
				end: "bottom center",
				toggleActions: "restart pause reverse pause",
				scrub: true,
			},
		});

		tl.to(articleRef.current, { opacity: 1, y: 0 });
	}, []);

	return (
		<div className={styles.letterWrapper} ref={articleRef}>
			<article className={styles.container}>
				<a href={url} target="_blank" rel="noreferrer">
					<h1>{title}</h1>
					<p>
						{date} | {time} read
					</p>
					<p>{summary}</p>

					<ul>
						{tags.map((item) => {
							return <li key={item}>#{item}</li>;
						})}
					</ul>
				</a>
			</article>
			<span className={styles.number}>{i < 10 ? `0${i + 1}.` : `.${i + 1}`}</span>
		</div>
	);
}
