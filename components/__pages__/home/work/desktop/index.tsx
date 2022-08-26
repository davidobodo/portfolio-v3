import styles from "./styles.module.scss";
import { WORK } from "#/constants";
import { FaintBgText } from "#/components";
import { Ref } from "react";

export type WorkDesktopProps = {
	workContainerRef: Ref<HTMLDivElement>;
	onWorkDetailsKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
};

export default function ViewDesktop({ workContainerRef, onWorkDetailsKeyDown }: WorkDesktopProps) {
	return (
		<div className={styles.container} ref={workContainerRef} id="work-section">
			<div className={styles.contentWrapper} data-key="work-tabs">
				<div className={styles.tabs} onKeyDown={onWorkDetailsKeyDown}>
					<div className={styles.tabHeadersContainer}>
						<ul className={styles.tabHeaders} data-key="work-companies">
							<li className={styles.bgGradient} data-key="gradient"></li>
							{WORK.map((item, i) => {
								return (
									<li className={styles.tabHeader} key={i} data-section={i + 1}>
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
								<div className={styles.tabDetail} key={i} data-key="work-detail" data-label={i + 1}>
									<section>
										<h2 tabIndex={0}>{company}</h2>
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
