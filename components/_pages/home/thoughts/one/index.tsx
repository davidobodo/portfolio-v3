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
			sentence: "we do reveal someting about",
			color: "ash",
			key: 2,
		},
		{
			sentence: "who we are,",
			color: "white",
			key: 3,
		},
		{
			sentence: "so I always strive to",
			color: "ash",
			key: 4,
		},
		{
			sentence: "put excellence into it.",
			color: "white",
			key: 5,
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
			color: "white",
			key: 3,
		},
		{
			sentence: "efficient algorithms",
			color: "ash",
			key: 4,
		},
		{
			sentence: "to ensure",
			color: "white",
			key: 5,
		},
		{
			sentence: "to ensure",
			color: "ash",
			key: 6,
		},
		{
			sentence: `optimal performance because "Speed is king"`,
			color: "white",
			key: 7,
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
				</div>
			</div>
		</div>
	);
}
