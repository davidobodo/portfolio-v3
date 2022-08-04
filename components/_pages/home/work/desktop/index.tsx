import styles from "./styles.module.scss";
import { WORK } from "#/constants";
import { FaintBgText } from "../../../../index";
import { Ref } from "react";

export type WorkDesktopProps = {
	workContainerRef: Ref<HTMLDivElement>;
};
export default function ViewDesktop({ workContainerRef }: WorkDesktopProps) {
	return (
		<div className={styles.container} ref={workContainerRef} id="work-section">
			<div className={styles.contentWrapper} data-key="work-tabs">
				<div className={styles.tabs}>
					<div className={styles.tabHeadersContainer}>
						<ul className={styles.tabHeaders} data-key="work-companies">
							<li className={styles.bgGradient} data-key="gradient"></li>
							{WORK.map((item, i) => {
								return (
									<li className={styles.tabHeader} key={i}>
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
								<div className={styles.tabDetail} key={i}>
									<section>
										<h4>{company}</h4>
										<div className={styles.notes} dangerouslySetInnerHTML={{ __html: note }} />

										<span>{range}</span>

										<ul>
											<li> {title}</li>

											{location && <li> {location}</li>}
											<li>
												<a href={url} target="_blank" rel="noreferrer">
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
