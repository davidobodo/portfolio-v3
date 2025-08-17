import styles from "./styles.module.scss";
import { Ref } from "react";
import { ABOUT_NOTE } from "#/constants";
import classNames from "classnames";

export default function AlternatingOpacity({
	textsListRef,
	textsList = ABOUT_NOTE,
	isStatic = false,
}: {
	textsListRef: Ref<HTMLParagraphElement>;
	textsList?: string[];
	isStatic?: boolean;
}) {
	return (
		<div className={classNames(styles.container, { [styles.isStatic]: isStatic })}>
			<p ref={textsListRef}>
				{textsList.map((text, i) => {
					return <span key={i}>{text}</span>;
				})}
			</p>
		</div>
	);
}
