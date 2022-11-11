import styles from "./styles.module.scss";
import { Ref } from "react";

export default function ThoughtOne({ textWrapperRef }: { textWrapperRef: Ref<HTMLDivElement> }) {
	const firstParagraph = [
		{
			sentence: "The things we make and the ",
			color: "ash",
			key: 0,
		},
		{
			sentence: "quality of the work",
			color: "white",
			key: 1,
		},
		{
			sentence: "we do reveal something about",
			color: "ash",
			key: 2,
		},
		{
			sentence: "who we are,",
			color: "white",
			key: 3,
		},
		{
			sentence: "so I always strive to put",
			color: "ash",
			key: 4,
		},
		{
			sentence: "my best",
			color: "white",
			key: 5,
		},
		{
			sentence: "into it.",
			color: "ash",
			key: 6,
		},
	];

	const secondParagraph = [
		{
			sentence: "From writing",
			color: "ash",
			key: 0,
		},
		{
			sentence: "clean and scalable code",
			color: "white",
			key: 1,
		},
		{
			sentence: "for posterity sake,",
			color: "ash",
			key: 2,
		},
		{
			sentence: "to using the most",
			color: "ash",
			key: 3,
		},
		{
			sentence: "efficient algorithms",
			color: "white",
			key: 4,
		},
		{
			sentence: "to ensure",
			color: "ash",
			key: 5,
		},
		{
			sentence: `optimal performance`,
			color: "white",
			key: 7,
		},
		{
			sentence: `because "Speed is king".`,
			color: "ash",
			key: 8,
		},
	];
	const thirdParagraph = [
		{
			sentence: "There is just ",
			color: "ash",
			key: 0,
		},
		{
			sentence: "one word",
			color: "white",
			key: 1,
		},
		{
			sentence: "to describe what I do 👇🏾",
			color: "ash",
			key: 2,
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.containerInner}>
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
					<p className={styles.paragraph}>
						{thirdParagraph.map((item) => {
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
