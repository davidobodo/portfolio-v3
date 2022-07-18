import Head from "next/head";
import styles from "#/styles/_pages/credits.module.scss";
import { Noise, Nav, Layout, Banners, About } from "#/components";
import { useCreditsInit, useProjectsLettersInit, HomePageHooks } from "#/hooks";
import { useEffect, useRef } from "react";
import { fadeIn } from "#/utils/animations/atoms";
const { useHomeAboutAnim } = HomePageHooks;

export default function Credit() {
    // useCreditsInit();

    const SITES = [
        {
            link: "https://www.apple.com/ng/iphone-13-pro/"
        },
        {
            link: "https://mayerr.com/"
        },
        {
            link: "https://dennissnellenberg.com/"
        },
        {
            link: "https://www.richardekwonye.com/"
            // description: "Richard Ekwonye site"
        },
        {
            link: "https://css-tricks.com/animating-layouts-with-the-flip-technique/"
            // description: "Flip technique"
        },
        {
            link: "https://www.youtube.com/watch?v=vJNVramny9k&feature=youtu.be"
            // description: "You can easily learn how to perform the preloader in the portfolio with this turorial"
        },

        {
            link:
                "https://javascript.plainenglish.io/advanced-page-transitions-in-next-js-with-router-events-and-gsap-e8435d2410bb "
            // description: "Next js Route transition"
        },
        {
            link: "https://basement.studio/contact"
        }
    ];

    const PEOPLE = [
        {
            link: "https://www.linkedin.com/in/oluwaseunadedire/",
            description: "Reviewer"
        },
        {
            link: "https://www.linkedin.com/in/oluwaseunadedire/",
            description: "Harmony"
        },
        {
            link: "https://jesperlandberg.dev/"
        },
        {
            link: "https://twitter.com/adeolajs",
            description: `Adeols's portfolio gave some inspiration for this work`
        },

        {
            link: "https://www.linkedin.com/in/oluwaseunadedire/",
            description: "Ifeanyi "
        },

        {
            link: "https://www.linkedin.com/in/oluwaseunadedire/",
            description: "Onos"
        },
        {
            link: "https://www.linkedin.com/in/oluwaseunadedire/",
            description: "Lekan"
        },
        {
            link: "https://www.linkedin.com/in/oluwaseunadedire/",
            description: "Teenoh"
        },
        {
            link: "https://www.linkedin.com/in/oluwaseunadedire/",
            description: "Emma ui/ux"
        }
    ];

    const { textWrapperRef, scrollIndicatorRef } = useProjectsLettersInit();
    const { aboutListRef } = useHomeAboutAnim();

    const note = [
        `I am not a "professional designer" by skill`,
        `so in order to bring this portfolio's design to what
        it is,`,
        "I had to research,",
        "draw inspiration",
        "and also learn from what others have done.",
        "For that I would like to acknowledge",
        "works and people",
        "who contributed to the design of this portfolio"
    ];
    return (
        <>
            <Head>
                <title>David Obodo - Credits</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />

            <div className={styles.main}>
                <Banners.OtherPages
                    texts={["Design", "_____________", "Credits", "_____________"]}
                    textWrapperRef={textWrapperRef}
                    scrollIndicatorRef={scrollIndicatorRef}
                />

                <Layout.DarkSection>
                    <div className={styles.container}>
                        {/* <h1>Design Credits</h1> */}
                        <div className={styles.summary}>
                            <About aboutListRef={aboutListRef} textsList={note} />
                        </div>

                        <section>
                            <h3>Sites/Resources</h3>
                            <ul className={styles.list}>
                                {SITES.map((item, i) => {
                                    const { link, description } = item;
                                    return <ListItem key={i} link={link} description={description} />;
                                })}
                            </ul>
                        </section>
                        <section>
                            <h3>People</h3>
                            <ul className={styles.list}>
                                {PEOPLE.map((item, i) => {
                                    const { link, description } = item;
                                    return <ListItem key={i} link={link} description={description} />;
                                })}
                            </ul>
                        </section>
                    </div>
                </Layout.DarkSection>
            </div>

            <Noise />
        </>
    );
}

function ListItem({ link, description }: { link: string; description: string }) {
    const ref = useRef<HTMLLIElement>(null);
    useEffect(() => {
        if (ref.current) {
            const tl = fadeIn({
                node: ref.current
            });

            return () => {
                tl.scrollTrigger?.kill();
            };
        }
    }, []);
    return (
        <li ref={ref}>
            <a href="">
                <span>{link}</span>
            </a>
            {description && <p>{description}</p>}
        </li>
    );
}
