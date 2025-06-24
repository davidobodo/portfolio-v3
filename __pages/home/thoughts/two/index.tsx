import styles from "./styles.module.scss";
import { Ref } from "react";

export default function ThoughtTwo({ textWrapperRef }: { textWrapperRef: Ref<HTMLDivElement> }) {
	const firstParagraph = [
		{
			sentence: "Truth is, the life of a programmer requires one to",
			color: "ash",
			key: 0,
		},
		{
			sentence: "learn new things",
			color: "white",
			key: 1,
		},
		{
			sentence: "everyday, because technology keeps changing at a",
			color: "ash",
			key: 2,
		},
		{
			sentence: "very fast pace.",
			color: "white",
			key: 3,
		},
	];

	const secondParagraph = [
		{
			sentence: "I have therefore, embraced the concept of being a ",
			color: "ash",
			key: 1,
		},
		{
			sentence: "life long learner.",
			color: "white",
			key: 2,
		},
		{
			sentence: "Learning to solve whatever problem is encountered, ain't that why",
			color: "ash",
			key: 3,
		},
		{
			sentence: "Googling is a developers best friend 😅 ?",
			color: "white",
			key: 4,
		},
	];

	return (
		<div className={styles.container}>
			<div></div>
			<div className={styles.rightSection}>
				<div className={styles.paragraphWrapper} ref={textWrapperRef}>
					<p className={styles.paragraph}>
						{firstParagraph.map((item) => {
							const { color, sentence, key } = item;
							if (color === "white") {
								return (
									<strong key={key}>
										{sentence.split(" ").map((item, i) => {
											return (
												<span className={styles.wordWrapper} key={item + i}>
													<span className={styles.word} data-key="word">
														{item}&nbsp;
													</span>
												</span>
											);
										})}
									</strong>
								);
							} else {
								return sentence.split(" ").map((item) => {
									return (
										<span className={styles.wordWrapper} key={key + item}>
											<span className={styles.word} data-key="word">
												{item}&nbsp;
											</span>
										</span>
									);
								});
							}
						})}
					</p>
					<p className={styles.paragraph}>
						{secondParagraph.map((item) => {
							const { color, sentence, key } = item;
							if (color === "white") {
								return (
									<strong key={key}>
										{sentence.split(" ").map((item, i) => {
											return (
												<span className={styles.wordWrapper} key={item + i}>
													<span className={styles.word} data-key="word">
														{item}&nbsp;
													</span>
												</span>
											);
										})}
									</strong>
								);
							} else {
								return sentence.split(" ").map((item) => {
									return (
										<span className={styles.wordWrapper} key={key + item}>
											<span className={styles.word} data-key="word">
												{item}&nbsp;
											</span>
										</span>
									);
								});
							}
						})}
					</p>
				</div>
			</div>
		</div>
	);
}
