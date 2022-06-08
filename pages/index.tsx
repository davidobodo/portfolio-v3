import Head from "next/head";
import type { NextPage } from "next";
import { Preloader, Banner } from "#/components";
import { useInitAnimation, useWindowSize } from "#/hooks";
import styles from "#/styles/home.module.scss";

const Home: NextPage = () => {
    const {
        preloaderBgRef,
        logoRef,
        bannerRef,
        fieldRef,
        nameRef,
        firstSubFieldRef,
        secondSubFieldRef,
        profilePicRef,
        scrollIndicatorRef
    } = useInitAnimation();

    const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();

    return (
        <>
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
                windowInnerWidth={windowInnerWidth}
                profilePicRef={profilePicRef}
                scrollIndicatorRef={scrollIndicatorRef}
            />
            <div className={styles.noise}></div>
        </>
    );
};

export default Home;
