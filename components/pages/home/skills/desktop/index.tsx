import styles from "./styles.module.scss";
import { TECH_STACKS } from "#/constants";
import { Ref } from "react";
import { FaintBgText } from "#/components";
import Link from "next/link";
import { events, registerEvent } from "#/utils/analytics/events";
import Image from "next/image";
import handImg from "#/public/home-hand.jpg";

export type SkillsDesktopProps = {
	skillsContainerRef: Ref<HTMLDivElement>;
	skillsSectionTitlteRef: Ref<HTMLHeadingElement>;
};
export default function SkillsDesktop({ skillsContainerRef, skillsSectionTitlteRef }: SkillsDesktopProps) {
	return (
		<div className={styles.container} ref={skillsContainerRef} id="skills-section">
			<div className={styles.contentWrapper} data-key="skills-content">
				<div className={styles.image} data-key="hand-image">
					<Image src={handImg} layout="fill" objectFit="cover" alt="My hand" />
				</div>
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
					</div>

					<div className={styles.skillsList} data-key="skills-list">
						<div></div>
						<div>
							<section className={styles.skills} data-key="skill">
								<h3>Languages</h3>
								<ul>
									{["html", "css", "sass", "javascript", "typescript", "solidity"].map((key, i) => {
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

						<section className={styles.skills + " " + styles.others} data-key="skill">
							<h3>Frameworks/ Libraries/ Others</h3>

							<ul>
								{[
									"react",
									"nextjs",
									"nodejs",
									"expressjs",
									"jest",
									"rtl",
									"gsap",
									"web3",
									"threejs",
									"redux",
									"reactquery",
									"tailwindcss",
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
								Developers need <strong> to learn everyday </strong> so this list could get really long 😅. <br /> See
								&nbsp;
								{/* <Link scroll={false} href="/projects?open_filter=true"> */}
								<Link
									scroll={false}
									href={{
										pathname: "/projects",
										query: {
											open_filter: true,
										},
									}}
								>
									<a onClick={() => registerEvent(events.pages.home.jumpToViewAllSkills())}>
										more frameworks/libraries here.
									</a>
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
