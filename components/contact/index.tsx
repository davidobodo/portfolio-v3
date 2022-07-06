import styles from "./styles.module.scss";
import { Button } from "../index";
import Link from "next/link";
export default function Contact() {
    const handleClick = () => {};
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.links}>
                    <section>
                        <h4>Quick links</h4>

                        <ul>
                            <li>
                                <Link href="/">
                                    <a>
                                        <span>Home</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about-section">
                                    <a>
                                        <span>About</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#work-section">
                                    <a>
                                        <span>Work</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#skills-section">
                                    <a href="">
                                        <span>Skills</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <a>
                                        <span>Projects </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/letters">
                                    <a>
                                        <span>Letters </span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h4>Extras</h4>
                        <ul>
                            <li>
                                <Link
                                    href="https://drive.google.com/file/d/1dVxGS3654jFz_YiWrkrCDU93ISZSj_lc/view?usp=sharing"
                                    passHref
                                >
                                    <a target="_blank" rel="noreferrer noopener">
                                        {" "}
                                        <span>Resume</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a href="">
                                        {" "}
                                        <span>14 rAndom things</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a href="">
                                        {" "}
                                        <span>Site Credits</span>
                                    </a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/">
                                    <a href="">
                                        {" "}
                                        <span>Play a game</span>
                                    </a>
                                </Link>
                            </li> */}
                        </ul>
                    </section>
                </div>
                <div className={styles.contact}>
                    <h3>Would love to hear from you &#8595;.</h3>
                    <form>
                        <div className={styles.twoColumns}>
                            <div>
                                <div className={styles.formField}>
                                    <label htmlFor="">Name</label>
                                    <input type="Name" />
                                </div>
                                <div className={styles.formField}>
                                    <label htmlFor="">Email</label>
                                    <input type="Email" />
                                </div>
                                <div className={styles.formField}>
                                    <label htmlFor="">Message</label>
                                    <textarea name="" id="" cols={30} rows={10}></textarea>
                                </div>
                            </div>

                            <ul>
                                <li>
                                    <Link href="https://www.linkedin.com/in/obodo-david-998786174/" passHref>
                                        <a target="_blank" rel="noreferrer noopener">
                                            <span>LINKEDIN</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://github.com/obododavid" passHref>
                                        <a target="_blank" rel="noreferrer noopener">
                                            <span>GITHUB</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/phitGeek" passHref>
                                        <a target="_blank" rel="noreferrer noopener">
                                            <span>TWITTER</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto: obododavid5@gmail.com" passHref>
                                        <a>
                                            <span>Email</span>
                                        </a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <a href="">
                                        <span>CODEPEN</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>CODE SANDBOX</span>
                                    </a>
                                </li> */}
                            </ul>
                        </div>

                        <div className={styles.btnWrapper}>
                            <Button label="Send" onClick={handleClick} type="submit" ariaLabel="send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
