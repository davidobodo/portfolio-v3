import Head from "next/head";
import type { NextPage } from "next";
import styles from "#/styles/home.module.scss";
import { Preloader, Banner, About, Work, Thoughts, Skills } from "#/components";
import {
    useInitAnimation,
    useWindowSize,
    useAboutAnimation,
    useRegisterGsapScrollTrigger,
    usePinRadialGradient,
    useWorkAnimation,
    useRevealText,
    useSkillsAnimation
} from "#/hooks";

const Home: NextPage = () => {
    useRegisterGsapScrollTrigger();
    const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();

    const {
        preloaderBgRef,
        logoRef,
        bannerRef,
        fieldRef,
        nameRef,
        firstSubFieldRef,
        secondSubFieldRef,
        profilePicRef,
        scrollIndicatorRef,
        mobilePicRef
    } = useInitAnimation();
    const { darkSectionRef, darkSectionRadialGradientRef } = usePinRadialGradient();
    const { aboutListRef } = useAboutAnimation();
    const {
        workContainerRef,
        workTabsRef,
        activeWorkBgGradient,
        workTitlesContainerRef,
        workDetailsContainerRef,
        mobileWorkDetailsContainerRef,
        mobileWorkTitlesContainerRef,
        mobileWorkContainerRef,
        mobileWorkContentWrapperRef
    } = useWorkAnimation({ windowInnerHeight, windowInnerWidth });

    const { textWrapperRef: thoughtOneText } = useRevealText();

    const { skillsListRef, skillsContainerRef } = useSkillsAnimation({ windowInnerWidth });

    return (
        <div>
            <Head>
                <title>David Obodo</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Preloader logoRef={logoRef} preloaderBgRef={preloaderBgRef} windowInnerHeight={windowInnerHeight} />
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
                mobilePicRef={mobilePicRef}
            />
            <div className={styles.darkSection} ref={darkSectionRef}>
                <div className={styles.darkSectionGradient} ref={darkSectionRadialGradientRef}></div>
                <div className={styles.darkSectionContent}>
                    <About aboutListRef={aboutListRef} />
                    <Work
                        workContainerRef={workContainerRef}
                        workTabsRef={workTabsRef}
                        activeWorkBgGradient={activeWorkBgGradient}
                        workTitlesContainerRef={workTitlesContainerRef}
                        workDetailsContainerRef={workDetailsContainerRef}
                        mobileWorkDetailsContainerRef={mobileWorkDetailsContainerRef}
                        mobileWorkTitlesContainerRef={mobileWorkTitlesContainerRef}
                        mobileWorkContainerRef={mobileWorkContainerRef}
                        mobileWorkContentWrapperRef={mobileWorkContentWrapperRef}
                    />
                    <Thoughts.One textWrapperRef={thoughtOneText} />
                    <Skills skillsListRef={skillsListRef} skillsContainerRef={skillsContainerRef} />

                    <div style={{ height: "150vh" }}></div>
                    <div className={styles.noise}></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
