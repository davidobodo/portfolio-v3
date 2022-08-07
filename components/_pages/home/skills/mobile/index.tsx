import styles from "./styles.module.scss";
import { TECH_STACKS } from "#/constants/tech-stacks";
import { FaintBgText } from "../../../../index";
import { Ref } from "react";

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

						{/* <div
                            className={styles.image}
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1499914485622-a88fac536970?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZHMlMjBvbiUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800')`
                            }}
                            data-key="hand-image"
                        ></div> */}
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
									{[
										"react",
										"nextjs",
										"nodejs",
										"graphql",
										"redux",
										"gsap",
										// "styledcomponents",
										"tailwindcss",
										"threejs",
										"expressjs",
										"jest",
										"web3",
										"pupeteer",
										"chakraui",
										"gcp",
										"heroku",
										"netlify",
									].map((key, i) => {
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
									This list could get very long cause of a developers need to learn everyday depending on what provides
									the best solution to a given problem, so would stop here
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
