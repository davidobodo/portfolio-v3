import styles from "./styles.module.scss";
import { Ref } from "react";

export default function Heading({
	text,
	textRef,
	revealOrigin,
}: {
	text: string;
	textRef?: Ref<HTMLHeadingElement>;
	revealOrigin: "right" | "left";
}) {
	return (
		<h1 ref={textRef} className={styles.bigText}>
			<span className={styles.line}>
				{text.split("").map((item, i) => {
					return (
						<span className={styles.letterwrapper} key={i}>
							<span
								data-key="letter"
								style={{
									transform: revealOrigin === "right" ? "translateX(200px)" : "translateX(-200px)",
								}}
							>
								{item}
							</span>
						</span>
					);
				})}
			</span>
		</h1>
	);
}
