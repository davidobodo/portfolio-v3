import styles from "./styles.module.scss";
import { WORK } from "#/constants";
import { FaintBgText } from "#/components";
import { Ref } from "react";

export type WorkMobileProps = {
	mobileWorkContainerRef: Ref<HTMLDivElement>;
};
export default function ViewMobile({ mobileWorkContainerRef }: WorkMobileProps) {
	return (
		<div className={styles.container} ref={mobileWorkContainerRef} id="work-section">
			<div className={styles.contentWrapper} data-key="work-tabs">
				<div className={styles.tabs}>
					<div className={styles.bgGradient}></div>
					<ul className={styles.tabHeaders} data-key="work-companies">
						{WORK.map((item, i) => {
							return (
								<li className={styles.tabHeader} key={i}>
									{item.company.includes("Upwork") ? "Upwork" : item.company}
								</li>
							);
						})}
					</ul>

					<div className={styles.tabDetails} data-key="work-details">
						{/* <h2>WORK</h2> */}
						{WORK.map((item, i) => {
							const { title, location, range, url, note, urlLabel, company } = item;
							return (
								<div className={styles.tabDetail} key={i}>
									<section>
										<h3>{company}</h3>
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
				<FaintBgText
					text="work"
					containerStyles={{ width: "68vw", right: "0px", bottom: "0%" }}
					svgStyles={{ height: "30vw" }}
					textStyles={{ fontSize: "30vw" }}
				/>
			</div>
		</div>
	);
}
