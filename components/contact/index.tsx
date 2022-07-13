import Link from "next/link";
import { useRef, useEffect, useState, Ref } from "react";
import styles from "./styles.module.scss";
import { Placeholder } from "./placeholder";
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
            <Details2 containerRef={containerRef} onSubmitForm={onSubmitForm} onRouteChange={onRouteChange} />
            <Placeholder footerHeight={footerHeight} />
        </>
    );
}

function Details2({
    containerRef,
    onSubmitForm,
    onRouteChange
}: {
    containerRef: Ref<HTMLDivElement>;
    onSubmitForm: () => void;
    onRouteChange: (path: string) => void;
}) {
    return (
        <div className={styles.wrapper} ref={containerRef}>
            <div className={styles.container2}>
                <div className={styles.leftSection}>
                    <div className={styles.top}></div>

                    <div>
                        <div className={styles.media} style={{ marginBottom: "60px" }}>
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Home</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.line}></li>
                                <li onClick={() => onRouteChange("/projects")}>
                                    <a>
                                        <span>Projects</span>
                                    </a>
                                </li>
                                <li className={styles.line}></li>
                                <li onClick={() => onRouteChange("/letters")}>
                                    <a>
                                        <span>Letters </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.media}>
                            <h3>Extras</h3>
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
                                <li className={styles.line}></li>
                                <li>
                                    <Link href="/">
                                        <a href="">
                                            {" "}
                                            <span>14 rAndom stuffzzzz</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.line}></li>
                                <li>
                                    <Link href="/credits">
                                        <a>
                                            <span>Site credits</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.rightSectionInner}>
                        <Form />
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <ul>
                    <li>
                        <Link href="https://www.linkedin.com/in/obodo-david-998786174/" passHref>
                            <a target="_blank" rel="noreferrer noopener">
                                <span>Linkedin</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/obododavid" passHref>
                            <a target="_blank" rel="noreferrer noopener">
                                <span>Github</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com/phitGeek" passHref>
                            <a target="_blank" rel="noreferrer noopener">
                                <span>Twitter</span>
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

                <p> &#169; 2022 David Obodo</p>
            </div>
        </div>
    );
}

function Form() {
    return (
        <form action="" className={styles.form}>
            <div className={styles.title}>
                <h1>Would love to hear from you &#8595;.</h1>
                <span>Currently open to Full time front-end developer role (React.js Major)</span>
            </div>
            {/* <h3>Contact</h3> */}
            <div className={styles.twoColumns}>
                <div className={styles.formField}>
                    <label htmlFor="">Name</label>
                    <input type="Name" placeholder="Name" />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="">Email</label>
                    <input type="Email" placeholder="Email" />
                </div>
            </div>

            <div className={styles.formField}>
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
            </div>

            <div className={styles.btnWrapper}>
                <button>
                    <span>Submit</span>
                    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m.819 50.513 8.307 8.238 38.423-38.454-.059 28.89h11.638V.424H10.47l-.14 11.564h28.983L.819 50.513Zm55.31-47.09v42.764V3.424Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </button>
            </div>
        </form>
    );
}
