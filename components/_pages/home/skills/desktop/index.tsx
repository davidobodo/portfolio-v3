import styles from "./styles.module.scss";
import { TECH_STACKS } from "#/constants/tech-stacks";
import { Ref } from "react";
import { FaintBgText } from "../../../../index";
import Link from "next/link";
import { events, registerEvent } from "#/utils/analytics/events";

export type SkillsDesktopProps = {
	skillsContainerRef: Ref<HTMLDivElement>;
	skillsSectionTitlteRef: Ref<HTMLHeadingElement>;
};
export default function SkillsDesktop({ skillsContainerRef, skillsSectionTitlteRef }: SkillsDesktopProps) {
	return (
		<div className={styles.container} ref={skillsContainerRef} id="skills-section">
			<div className={styles.contentWrapper} data-key="skills-content">
				<div className={styles.wrapper}>
					<div className={styles.heading}>
						<h2 className={styles.subTitle} ref={skillsSectionTitlteRef}>
							<span>
								<span>Used by</span>
							</span>
							<span>
								<span>
									<strong>my hands</strong>
								</span>
							</span>
							<span>
								<span>and mind</span>
							</span>
						</h2>

						<div
							className={styles.image}
							style={{
								backgroundImage: `url('https://images.unsplash.com/photo-1499914485622-a88fac536970?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZHMlMjBvbiUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800')`,
							}}
							data-key="hand-image"
						></div>
					</div>
					<div className={styles.skillsList} data-key="skills-list">
						<div></div>
						<div>
							<section className={styles.skills} data-key="skill">
								<h3>Languages</h3>
								<ul>
									{["html", "css", "sass", "javascript", "typescript", "solidity"].map((key, i) => {
										const skill = TECH_STACKS[key];
										return (
											<li key={i}>
												<span>
													<span className={styles.circle}></span>
													{skill?.label}
												</span>
											</li>
										);
									})}
								</ul>
							</section>
							<section className={styles.skills} data-key="skill">
								<h3>Special</h3>
								<ul>
									<li>
										<span>
											<span className={styles.circle}></span>
											Googling <span>😜</span>
										</span>
									</li>
								</ul>
							</section>
						</div>

						<section className={styles.skills + " " + styles.others} data-key="skill">
							<h3>Frameworks/ Libraries/ Others</h3>

							<ul>
								{["react", "nextjs", "nodejs", "expressjs", "jest", "rtl", "redux"].map((key, i) => {
									const skill = TECH_STACKS[key];
									return (
										<li key={i}>
											<span>
												<span className={styles.circle}></span>
												{skill?.label}
											</span>
										</li>
									);
								})}
							</ul>
							<p>
								This list could get very long cause of a <strong> developers need to learn everyday </strong> depending
								on what provides the best solution to a given problem, so would stop the list here. <br />
								However you can see a comprehensive list of all &nbsp;noteworthy&nbsp; frameworks and Libraries{" "}
								<Link scroll={false} href="/projects?open_filter=true">
									<a onClick={() => registerEvent(events.pages.home.jumpToViewAllSkills())}>here.</a>
								</Link>
							</p>
						</section>
					</div>
				</div>
				<FaintBgText
					text="skills"
					containerStyles={{ width: "42vw", right: "0px", bottom: "0%" }}
					svgStyles={{ height: "15vw" }}
				/>
			</div>
		</div>
	);
}
