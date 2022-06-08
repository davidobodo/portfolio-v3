import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/globals.module.scss";
import { Preloader, Banner } from "#/components";
import { useInitAnimation } from "#/hooks";
import { useRef } from "react";

const Home: NextPage = () => {
    const { preloaderBgRef, logoRef } = useInitAnimation();
    const bannerRef = useRef(null);
    const fieldRef = useRef(null);
    const nameRef = useRef(null);
    const firstSubFieldRef = useRef(null);
    const secondSubFieldRef = useRef(null);

    const windowInnerHeight = typeof window !== "undefined" ? window.innerHeight : undefined;
    return (
        <div className={styles.container}>
            <Head>
                <title>David Obodo</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Preloader logoRef={logoRef} preloaderBgRef={preloaderBgRef} />
            <Banner
                bannerRef={bannerRef}
                fieldRef={fieldRef}
                nameRef={nameRef}
                firstSubFieldRef={firstSubFieldRef}
                secondSubFieldRef={secondSubFieldRef}
                windowInnerHeight={windowInnerHeight}
            />
        </div>
    );
};

export default Home;
