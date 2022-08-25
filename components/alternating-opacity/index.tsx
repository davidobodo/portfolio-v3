import styles from "./styles.module.scss";
import { Ref } from "react";
import { ABOUT_NOTE } from "#/constants";

export default function About({
	textsListRef,
	textsList = ABOUT_NOTE,
}: {
	textsListRef: Ref<HTMLParagraphElement>;
	textsList?: string[];
}) {
	return (
		<div className={styles.container}>
			<p ref={textsListRef}>
				{textsList.map((text, i) => {
					return <span key={i}>{text}</span>;
				})}
			</p>
		</div>
	);
}
