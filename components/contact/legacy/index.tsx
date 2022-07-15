import styles from "./styles.module.scss";
import { Ref, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Placeholder } from "../placeholder";

export default function Contact({ onRouteChange }: { onRouteChange: (path: string) => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [footerHeight, setFooterHeight] = useState(10);
    const calculateFooterHeight = (node: HTMLDivElement) => {
        setFooterHeight(node.clientHeight);
    };
    useEffect(() => {
        if (containerRef.current) {
            calculateFooterHeight(containerRef.current);
        }
    }, []);

    const onSubmitForm = () => {};

    return (
        <>
            <Details containerRef={containerRef} onSubmitForm={onSubmitForm} onRouteChange={onRouteChange} />
            <Placeholder footerHeight={footerHeight} />
        </>
    );
}
function Details({
    containerRef,
    onSubmitForm,
    onRouteChange
}: {
    containerRef: Ref<HTMLDivElement>;
    onSubmitForm: () => void;
    onRouteChange: (path: string) => void;
}) {
    return (
        <div className={styles.container} ref={containerRef}>
            <div className={styles.contentWrapper}>
                <div className={styles.contentWrapperInner}>
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
                                <li onClick={() => onRouteChange("/projects")}>
                                    <a>
                                        <span>Projects</span>
                                    </a>
                                </li>
                                <li onClick={() => onRouteChange("/letters")}>
                                    <a>
                                        <span>Letters </span>
                                    </a>
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
                                    <Link href="/credits">
                                        <a>
                                            <span>Site Credits</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className={styles.contact}>
                        <div>
                            <h3>Would love to hear from you &#8595;.</h3>

                            <p>
                                I’m currently interested in a <span> Full-time Front-end developer role </span> with a
                                major on
                                <span>React.js Framework</span>, however still open to other opportunities. However, if
                                you have other request or question, don’t hesitate to use the form.
                            </p>
                        </div>

                        <form onSubmit={onSubmitForm}>
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

                                    <div className={styles.btnWrapper}>
                                        <button>
                                            <span>Submit</span>
                                            <span className={styles.arrow}>&#8594;</span>
                                            {/* <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="m.819 50.513 8.307 8.238 38.423-38.454-.059 28.89h11.638V.424H10.47l-.14 11.564h28.983L.819 50.513Zm55.31-47.09v42.764V3.424Z"
                                                    fill="currentColor"
                                                    strokeWidth="2px"
                                                ></path>
                                            </svg> */}
                                        </button>
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
                                </ul>
                            </div>

                            {/* <div className={styles.btnWrapper}>
                                <Button
                                    label="Send"
                                    onClick={onSubmitForm}
                                    type="submit"
                                    ariaLabel="send"
                                    endAdornment={<SendLink color="#000" />}
                                />
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
