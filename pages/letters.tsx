import { NextPage } from "next";
import Head from "next/head";
import { Banners, Contact, SingleLetter, Nav, DarkRadialGradient } from "#/components";
import styles from "#/styles/_pages/letters.module.scss";
import { LETTERS } from "#/constants/letters";
import { usePinRadialGradient, useRegisterGsapScrollTrigger } from "#/hooks";
const Projects: NextPage = () => {
    const { darkSectionRef, darkSectionRadialGradientRef } = usePinRadialGradient();
    return (
        <>
            <Head>
                <title>David Obodo - Projects</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            <div className={styles.container} ref={darkSectionRef}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Letters/Articles</h1>

                    {LETTERS.map((item) => {
                        const { url, title, date, time, summary, tags } = item;
                        return (
                            <div key={url} className={styles.letterWrapper}>
                                <SingleLetter
                                    url={url}
                                    title={title}
                                    date={date}
                                    time={time}
                                    summary={summary}
                                    tags={tags}
                                />
                            </div>
                        );
                    })}
                </div>

                <DarkRadialGradient containerRef={darkSectionRadialGradientRef} />
                {/* <Banners.OtherPages title="Letters." /> */}
            </div>
            <Contact />
            <div className="noise"></div>
        </>
    );
};

export default Projects;
