import styles from "./styles.module.scss";
import Link from "next/link";
import { TECH_STACKS } from "#/constants";
import { FaintBgText } from "#/components";
import { Ref } from "react";
import { events, registerEvent } from "#/utils/analytics/events";
import Image from "next/image";
import handImg from "#/public/home-hand.jpg";

export type SkillsMobileProps = {
	mobileSkillsContainerRef: Ref<HTMLDivElement>;
	mobileSkillsSectionTitlteRef: Ref<HTMLHeadingElement>;
};
export default function SkillsMobile({ mobileSkillsContainerRef, mobileSkillsSectionTitlteRef }: SkillsMobileProps) {
	const displayedSkills: Array<keyof typeof TECH_STACKS> = [
		"html",
		"css",
		"sass",
		"javascript",
		"typescript",
		"solidity",
	];
	const displayedSkills2: Array<keyof typeof TECH_STACKS> = [
		"react",
		"nextjs",
		"nodejs",
		"expressjs",
		"jest",
		"gsap",
		"web3",
		"threejs",
		"redux",
		"reactquery",
		"tailwindcss",
		"enzyme",
	];
	return (
		<>
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
										{displayedSkills.map((key, i) => {
											const skill = TECH_STACKS[key];

											if (!skill) return null;

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
										{displayedSkills2.map((key, i) => {
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
										Developers need <strong> to learn everyday </strong> so this list could get really long 😅. <br /> See &nbsp;
										<Link scroll={false} href="/projects?open_filter=true">
											<a onClick={() => registerEvent(events.pages.home.jumpToViewAllSkills())}>more frameworks/libraries here.</a>
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

			<div className={styles.imageSection}>
				<Image src={handImg} layout="fill" objectFit="cover" alt="My hand" objectPosition="left" />
			</div>
		</>
	);
}
