import styles from "./styles.module.scss";
import { TECH_STACKS } from "#/constants/tech-stacks";
import { Ref } from "react";
import { FaintBgText } from "../index";

type Props = {
    skillsListRef: Ref<HTMLDivElement>;
    skillsContainerRef: Ref<HTMLDivElement>;
};
export default function Skills({ skillsListRef, skillsContainerRef }: Props) {
    return (
        <div className={styles.container} ref={skillsContainerRef}>
            <div className={styles.contentWrapper}>
                <div className={styles.wrapper}>
                    <div className={styles.heading}>
                        <h2 className={styles.subTitle}>
                            Used by <br /> <strong>my hands</strong> <br />
                            and mind
                        </h2>

                        <div
                            className={styles.image}
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1499914485622-a88fac536970?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZHMlMjBvbiUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800')`
                            }}
                        ></div>
                    </div>
                    <div className={styles.skillsList} ref={skillsListRef}>
                        <div></div>
                        <div>
                            <section className={styles.skills} data-id="skill">
                                <h4>Languages</h4>
                                <ul>
                                    {["html", "css", "sass", "javascript", "typescript", "solidity"].map((key, i) => {
                                        const skill = TECH_STACKS[key];
                                        return <li key={i}>{skill?.label}</li>;
                                    })}
                                </ul>
                            </section>
                            <section className={styles.skills} data-id="skill">
                                <h4>Special</h4>
                                <ul>
                                    <li>
                                        Googling <span>😜</span>
                                    </li>
                                </ul>
                            </section>
                        </div>

                        <section className={styles.skills + " " + styles.others} data-id="skill">
                            <h4>Frameworks/ Libraries/ Others</h4>
                            <ul>
                                {[
                                    "react",
                                    "nextjs",
                                    "nodejs",
                                    "graphql",
                                    "redux",
                                    "gsap",
                                    "styledcomponents",
                                    "tailwindcss",
                                    "threejs",
                                    "expressjs",
                                    "jest",
                                    "web3",
                                    "pupeteer",
                                    "chakraui",
                                    "gcp",
                                    "heroku",
                                    "netlify"
                                ].map((key, i) => {
                                    const skill = TECH_STACKS[key];
                                    return <li key={i}>{skill?.label}</li>;
                                })}
                            </ul>
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
