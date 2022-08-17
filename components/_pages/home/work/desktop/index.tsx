import styles from "./styles.module.scss";
import { KEYBOARD_KEYS, WORK } from "#/constants";
import { FaintBgText } from "../../../../index";
import { Ref } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";
import gsap from "gsap";

export type WorkDesktopProps = {
	workContainerRef: Ref<HTMLDivElement>;
	onWorkTitleKeyDown: (event: React.KeyboardEvent<HTMLUListElement>) => void;
	onWorkDetailsKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
};

export default function ViewDesktop({ workContainerRef, onWorkTitleKeyDown, onWorkDetailsKeyDown }: WorkDesktopProps) {
	return (
		<div className={styles.container} ref={workContainerRef} id="work-section">
			<div className={styles.contentWrapper} data-key="work-tabs">
				<div className={styles.tabs} onKeyDown={onWorkDetailsKeyDown} tabIndex={0}>
					<div className={styles.tabHeadersContainer}>
						<ul className={styles.tabHeaders} data-key="work-companies">
							<li className={styles.bgGradient} data-key="gradient"></li>
							{WORK.map((item, i) => {
								return (
									<li
										className={styles.tabHeader}
										key={i}
										// onKeyDown={onWorkTitleKeyDown}
										data-section={i + 1}
									>
										{item.company}
									</li>
								);
							})}
						</ul>
					</div>
					<div className={styles.tabDetails} data-key="work-details">
						{WORK.map((item, i) => {
							const { title, company, location, range, url, note, urlLabel } = item;
							return (
								<div className={styles.tabDetail} key={i} data-key="work-detail">
									<section>
										<h4>{company}</h4>
										<div className={styles.notes} dangerouslySetInnerHTML={{ __html: note }} />
										<span>{range}</span>
										<ul>
											<li> {title}</li>
											{location && <li> {location}</li>}
											<li>
												<a href={url} target="_blank">
													{urlLabel ? urlLabel : url}
												</a>
											</li>
										</ul>
									</section>
								</div>
							);
						})}
					</div>
				</div>
				<FaintBgText text="work" />
			</div>
		</div>
	);
}
