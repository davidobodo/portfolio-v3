import styles from "./styles.module.scss";
import { Ref } from "react";

export default function ThoughtTwo({ textWrapperRef }: { textWrapperRef: Ref<HTMLDivElement> }) {
	const firstParagraph = [
		{
			sentence: "Truth is the life of a programmer requires one to",
			color: "ash",
		},
		{
			sentence: "learn new things",
			color: "white",
		},
		{
			sentence: "everyday, cause technology keeps changing at a",
			color: "ash",
		},
		{
			sentence: "very fast pace.",
			color: "white",
		},
	];

	const secondParagraph = [
		{
			sentence: "I have therefore embraced the concept of being a ",
			color: "ash",
		},
		{
			sentence: "life long learner.",
			color: "white",
		},
		{
			sentence: "Learn to solve what ever problem is encountered, ain'tthat why",
			color: "ash",
		},
		{
			sentence: "Googling is almost our best friend 😅",
			color: "white",
		},
	];

	return (
		<div className={styles.container}>
			<div></div>
			<div className={styles.rightSection}>
				<div className={styles.paragraphWrapper} ref={textWrapperRef}>
					<p className={styles.paragraph}>
						{firstParagraph.map((item, i) => {
							const { color, sentence } = item;
							if (color === "white") {
								return (
									<>
										<strong key={i}>
											{sentence.split(" ").map((item, i) => {
												return (
													<span className={styles.wordWrapper} key={i}>
														<span className={styles.word} data-key="word">
															{item}&nbsp;
														</span>
													</span>
												);
											})}
										</strong>
									</>
								);
							} else {
								return (
									<>
										{sentence.split(" ").map((item, i) => {
											return (
												<span className={styles.wordWrapper} key={i}>
													<span className={styles.word} data-key="word">
														{item}&nbsp;
													</span>
												</span>
											);
										})}
									</>
								);
							}
						})}
					</p>
					<p className={styles.paragraph}>
						{secondParagraph.map((item, i) => {
							const { color, sentence } = item;
							if (color === "white") {
								return (
									<>
										<strong>
											{sentence.split(" ").map((item, i) => {
												return (
													<span className={styles.wordWrapper}>
														<span className={styles.word} data-key="word">
															{item}&nbsp;
														</span>
													</span>
												);
											})}
										</strong>
									</>
								);
							} else {
								return (
									<>
										{sentence.split(" ").map((item, i) => {
											return (
												<span className={styles.wordWrapper}>
													<span className={styles.word} data-key="word">
														{item}&nbsp;
													</span>
												</span>
											);
										})}
									</>
								);
							}
						})}
					</p>
				</div>
			</div>
		</div>
	);
}
