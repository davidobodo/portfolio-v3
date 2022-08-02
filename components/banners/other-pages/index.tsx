import styles from "./styles.module.scss";
import { ScrollAlert, Logo } from "../../index";
import { Ref, RefObject } from "react";
export default function Banner({
	texts,
	textWrapperRef,
	scrollIndicatorRef,
	bannerRef,
}: {
	texts: string[];
	textWrapperRef: RefObject<HTMLDivElement>;
	scrollIndicatorRef: Ref<HTMLDivElement>;
	bannerRef: RefObject<HTMLDivElement>;
}) {
	console.log(styles);
	console.log(styles.logo);
	return (
		<>
			<div className={styles.container} ref={bannerRef}>
				<Logo color="#000" propStyles={styles.logo} />

				<div ref={textWrapperRef}>
					{texts.map((item, i) => {
						return (
							<h1 key={i}>
								<span className={styles.lineWrapper}>
									{item.split("").map((letter, i) => {
										return (
											<span className={styles.letterWrapper} key={i}>
												<span className={styles.letter} data-key="letter">
													{letter}
												</span>
											</span>
										);
									})}
									{i % 2 !== 0 && <span className={styles.bg} data-key="bg"></span>}
								</span>
							</h1>
						);
					})}
				</div>
				<div className={styles.bottom}>
					<div></div>
					<ScrollAlert containerRef={scrollIndicatorRef} containerStyles={{ opacity: 0 }} />
				</div>
			</div>
		</>
	);
}
