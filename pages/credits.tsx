import Head from "next/head";
import styles from "#/styles/_pages/credits.module.scss";
import { Noise, Contact } from "#/components";
import { useEffect } from "react";
export default function Credit() {
    const CREDITS = [
        {
            link: "https://www.apple.com/ng/iphone-13-pro/"
        },
        {
            link: "https://www.youtube.com/watch?v=vJNVramny9k&feature=youtu.be",
            description: "You can easily learn how to perform the preloader in the portfolio with this turorial"
        },
        {
            link: "https://twitter.com/adeolajs",
            description: `Adeols's portfolio gave some inspiration for this work`
        },
        {
            link: "https://mayerr.com/"
        },
        {
            link: "https://dennissnellenberg.com/"
        },
        {
            link: "https://www.youtube.com/watch?v=wjHTKLstbRg",
            description: "liquid button"
        },
        {
            link: "https://css-tricks.com/animating-layouts-with-the-flip-technique/",
            description: "flip technique"
        },
        {
            link: "https://jesperlandberg.dev/"
        },
        {
            link: "https://www.linkedin.com/in/oluwaseunadedire/",
            description: "Reviewer"
        },
        {
            link:
                "https://javascript.plainenglish.io/advanced-page-transitions-in-next-js-with-router-events-and-gsap-e8435d2410bb ",
            description: "Next js Route transition"
        }
    ];

    useEffect(() => {
        document.querySelector("body")?.classList.remove("hide");
    }, []);
    return (
        <>
            <Head>
                <title>David Obodo - Credits</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <div className={styles.containerInner}>
                    <h1>Credits</h1>

                    <p className={styles.summary}>
                        I am naturally not a designer by skill and in order to bring this portfolios design to what it
                        is, I had to research, draw inspiration and also learn what others have done. For that I would
                        like to acknowledge a few works and people who contributed to the design of this portfolio
                    </p>

                    <ul>
                        {CREDITS.map((item, i) => {
                            const { link, description } = item;
                            return (
                                <li key={i}>
                                    <a href="">
                                        <span>{link}</span>
                                    </a>
                                    {description && <p>{description}</p>}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <Contact />
            <Noise />
        </>
    );
}
