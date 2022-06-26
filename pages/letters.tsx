import { NextPage } from "next";
import Head from "next/head";
import { Contact, SingleLetter, Nav, Layout, Noise, Banners } from "#/components";
import styles from "#/styles/_pages/letters.module.scss";
import { LETTERS } from "#/constants/letters";
import { useBannerAnimation } from "#/hooks";

const Letters: NextPage = () => {
    const { textWrapperRef, scrollIndicatorRef } = useBannerAnimation();
    return (
        <>
            <Head>
                <title>David Obodo - Projects</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <Banners.OtherPages
                texts={["Letters", "Thoughts", "Stories", "Ideas"]}
                textWrapperRef={textWrapperRef}
                scrollIndicatorRef={scrollIndicatorRef}
            />

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

export default Letters;

export function Header({ title }: { title: string }) {
    return (
        <>
            <div className={styles.headerWrapper}>
                <Nav />

                <header className={styles.header}>
                    <h1>{title}</h1>

                    <p className={styles.list}>
                        Technical write-ups <span></span> Thoughts <span></span> Opinions <span></span> Stories
                    </p>

                    <p className={styles.summary}>
                        Writing is one of the best ways to <span> solidify knowledge </span> and to grant someone the
                        courtesy of diving into the <span> world of your mind</span>
                    </p>
                </header>
            </div>
            <div className={styles.headerWrapperPlaceholder}></div>
        </>
    );
}
