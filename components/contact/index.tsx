import Link from "next/link";
import styles from "./styles.module.scss";
import { useRef, useEffect, useState, Ref } from "react";
import { SectionPlaceholder } from "../index";
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
            <SectionPlaceholder styles={{ height: footerHeight + "px" }} />
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
        <div className={styles.container} ref={containerRef}>
            <div className={styles.containerInner}>
                <div className={styles.leftSection}>
                    <div className={styles.top}></div>
                    <HelpfulLinks onRouteChange={onRouteChange} />
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.rightSectionInner}>
                        <Form onSubmit={onSubmitForm} />
                    </div>
                </div>
            </div>
            <Social />
        </div>
    );
}

function Form({ onSubmit }: { onSubmit: () => void }) {
    return (
        <>
            <div className={styles.title}>
                <h1>
                    Would love to hear from <br /> you &#8595;.
                </h1>
                <p>
                    I’m currently interested in a <span> Full-time Front-end developer role </span> with a major on
                    <span>React.js Framework</span>, however still open to other opportunities. However, if you have
                    other request or question, don’t hesitate to use the form.
                </p>
                {/* <span>Currently open to Full time front-end developer role (React.js Major)</span> */}
            </div>
            <form action="" className={styles.form} onSubmit={onSubmit}>
                {/* <h3>Contact</h3> */}
                <div className={styles.twoColumns}>
                    <div className={styles.formField}>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="">Email</label>
                        <input type="Email" placeholder="Email" />
                    </div>
                </div>
                <div className={styles.formField}>
                    <label htmlFor="">Subject</label>
                    <input type="text" placeholder="Subject" />
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
        </>
    );
}

function HelpfulLinks({ onRouteChange }: { onRouteChange: (path: string) => void }) {
    return (
        <>
            <div>
                <div className={styles.helpfulLinks}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li onClick={() => onRouteChange("/")}>
                            <a>
                                <span>Home</span>
                            </a>
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
                <div className={styles.helpfulLinks}>
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
                        <li onClick={() => onRouteChange("/credits")}>
                            <a>
                                <span>Site credits</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

function Social() {
    return (
        <div className={styles.social}>
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
    );
}
