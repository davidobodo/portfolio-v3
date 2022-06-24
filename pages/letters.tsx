import { NextPage } from "next";
import Head from "next/head";
import { Contact, SingleLetter, Nav, Layout, Noise } from "#/components";
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

            <Header />
            <Layout.DarkSection>
                <>
                    <div className={styles.container}>
                        <div className={styles.wrapper}>
                            {/* <h1 className={styles.title}>Letters/Articles</h1> */}

                            {LETTERS.map((item, i) => {
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
                                        <span className={styles.number}>{i < 10 ? `0${i + 1}.` : `.${i + 1}`}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            </Layout.DarkSection>

            <Contact />
            <Noise />
        </>
    );
};

export default Projects;

export function Header() {
    return (
        <div className={styles.headerWrapper}>
            <Nav />

            <header className={styles.header}>
                <h1>Letters</h1>

                <p className={styles.list}>
                    Technical write-ups <span></span> Thoughts <span></span> Opinions <span></span> Stories
                </p>

                <p className={styles.summary}>
                    Writing is one of the best ways to <span> solidify knowledge </span> and to grant someone the
                    courtesy of diving into the <span> world of your mind</span>
                </p>
            </header>
        </div>
    );
}
