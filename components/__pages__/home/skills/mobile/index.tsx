import styles from "./styles.module.scss";
import Link from "next/link";
import { TECH_STACKS } from "#/constants/tech-stacks";
import { FaintBgText } from "#/components";
import { Ref } from "react";
import { events, registerEvent } from "#/utils/analytics/events";

export type SkillsMobileProps = {
	mobileSkillsContainerRef: Ref<HTMLDivElement>;
	mobileSkillsSectionTitlteRef: Ref<HTMLHeadingElement>;
};
export default function SkillsMobile({ mobileSkillsContainerRef, mobileSkillsSectionTitlteRef }: SkillsMobileProps) {
	return (
		<div className={styles.container} ref={mobileSkillsContainerRef} id="skills-section">
			<div className={styles.contentWrapper} data-key="skills-content">
				<div className={styles.wrapper}>
					<div className={styles.heading}>
						<h2 className={styles.subTitle} ref={mobileSkillsSectionTitlteRef}>
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
					</div>
					<div className={styles.skillsList} data-key="lists-wrapper">
						<div className={styles.skillsListInner}>
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

						<div className={styles.skillsListInner}>
							<section className={styles.skills + " " + styles.others} data-key="skill">
								<h3>Frameworks/ Libraries/ Others</h3>
								<ul>
									{["react", "nextjs", "nodejs", "expressjs", "jest", "redux"].map((key, i) => {
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
									This list could get very long cause of a <strong> developers need to learn everyday </strong>{" "}
									depending on what provides the best solution to a given problem, so would stop the list here. <br />
									However you can see a comprehensive list of all &nbsp;noteworthy&nbsp; frameworks and Libraries{" "}
									<Link href="/projects?open_filter=true" scroll={false}>
										<a onClick={() => registerEvent(events.pages.home.jumpToViewAllSkills())}>here.</a>
									</Link>
								</p>
							</section>
						</div>
					</div>
				</div>
				<FaintBgText
					text="skills"
					containerStyles={{ width: "68vw", right: "0px", bottom: "0%" }}
					svgStyles={{ height: "30vw" }}
					textStyles={{ fontSize: "30vw" }}
				/>
			</div>
		</div>
	);
}
