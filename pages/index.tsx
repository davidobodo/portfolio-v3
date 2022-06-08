import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/globals.module.scss";
import { Preloader, Banner } from "#/components";
import { useInitAnimation } from "#/hooks";

const Home: NextPage = () => {
    const { preloaderBgRef, logoRef } = useInitAnimation();
    return (
        <div className={styles.container}>
            <Head>
                <title>David Obodo</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Preloader logoRef={logoRef} preloaderBgRef={preloaderBgRef} />
            <Banner />
        </div>
    );
};

export default Home;
