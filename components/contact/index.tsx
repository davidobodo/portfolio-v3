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
                                    <a href="">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a href="about">About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a href="">Work</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a href="">Skills</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <a>Projects</a>
                                </Link>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h4>Extras</h4>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Resume</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a href="">14 rAndom things</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a href="">Site Credits</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a href="">Play a game</a>
                                </Link>
                            </li>
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
                                    <a>LINKEDIN</a>
                                </li>
                                <li>
                                    <a>GITHUB</a>
                                </li>
                                <li>
                                    <a>TWITTER</a>
                                </li>
                                <li>
                                    <a>Email</a>
                                </li>
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
