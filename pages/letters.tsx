import { NextPage } from "next";
import Head from "next/head";
import { SingleLetter, Nav, Layout, Noise, Banners } from "#/components";
import styles from "#/styles/_pages/letters.module.scss";
import { LETTERS } from "#/constants/letters";
import { useBannerAnimation } from "#/hooks";

const Letters: NextPage = () => {
    const { textWrapperRef, scrollIndicatorRef } = useBannerAnimation();

    return (
        <div className={styles.main}>
            <Head>
                <title>David Obodo - Letters</title>
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
                <div className={styles.container}>
                    <div className={styles.wrapper}>
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
            </Layout.DarkSection>

            <Noise />
        </div>
    );
};

export default Letters;
