import { Ref } from "react";
import styles from "./styles.module.scss";
import { ABOUT_NOTE } from "#/constants";
export default function About({
	textsListRef,
	textsList = ABOUT_NOTE,
}: {
	textsListRef: Ref<HTMLUListElement>;
	textsList?: string[];
}) {
	return (
		<div className={styles.container}>
			<ul ref={textsListRef}>
				{textsList.map((text, i) => {
					return <li key={i}>{text}</li>;
				})}
			</ul>
		</div>
		// <div className={styles.container}>
		// 	<ul ref={textsListRef}>
		// 		{textsList.map((text, i) => {
		// 			return <li key={i}>{text}</li>;
		// 		})}
		// 	</ul>
		// </div>
	);
}
