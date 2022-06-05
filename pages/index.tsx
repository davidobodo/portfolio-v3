import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Preloader } from "#/components";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>David Obodo</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Preloader />
        </div>
    );
};

export default Home;
