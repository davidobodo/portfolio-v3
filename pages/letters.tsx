import { NextPage } from "next";
import Head from "next/head";
import { Banners, Contact, SingleLetter } from "#/components";
import styles from "#/styles/_pages/letters.module.scss";
import { LETTERS } from "#/constants/letters";
const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>David Obodo - Projects</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Letters</h1>

                    {LETTERS.map((item) => {
                        const { url, title, date, time, summary, tags } = item;
                        return (
                            <div key={url} style={{ marginBottom: "6rem" }}>
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

                {/* <Banners.OtherPages title="Letters." /> */}
                <Contact />
                <div className="noise"></div>
            </div>
        </>
    );
};

export default Projects;
