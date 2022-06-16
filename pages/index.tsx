import Head from "next/head";
import type { NextPage } from "next";
import styles from "#/styles/home.module.scss";
import { Preloader, Banner, About, Work, Thoughts, Skills, Projects, Contact } from "#/components";
import {
    useInitAnimation,
    useWindowSize,
    useAboutAnimation,
    useRegisterGsapScrollTrigger,
    usePinRadialGradient,
    useWorkAnimation,
    useRevealParagraph,
    useSkillsAnimation,
    useProjectAnimation,
    // useCalculateFooterHeight,
    useScrollToTop,
    useRevealHeading
} from "#/hooks";

const Home: NextPage = () => {
    useScrollToTop();
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
    const { textWrapperRef: thoughtOneText } = useRevealParagraph();
    const { textWrapperRef: thoughtTwoText } = useRevealParagraph();

    const { headingRef: skillsSectionTitlteRef } = useRevealHeading({ windowInnerWidth });
    const { headingRef: mobileSkillsSectionTitlteRef } = useRevealHeading({ windowInnerWidth });
    const {
        skillsListRef,
        skillsContainerRef,
        skillsContentWrapperRef,
        mobileSkillsContainerRef
    } = useSkillsAnimation({ windowInnerWidth });
    const { headingRef: projectTitleRef } = useRevealHeading({ windowInnerWidth });
    const { projectsListWrapperRef } = useProjectAnimation();
    // const { footerHeight, footerRef } = useCalculateFooterHeight();

    return (
        <div>
            <Head>
                <title>David Obodo</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Preloader logoRef={logoRef} preloaderBgRef={preloaderBgRef} windowInnerHeight={windowInnerHeight} />
            <div className={styles.main}>
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
                        <Skills
                            skillsListRef={skillsListRef}
                            skillsContainerRef={skillsContainerRef}
                            skillsContentWrapperRef={skillsContentWrapperRef}
                            skillsSectionTitlteRef={skillsSectionTitlteRef}
                            mobileSkillsContainerRef={mobileSkillsContainerRef}
                            mobileSkillsSectionTitlteRef={mobileSkillsSectionTitlteRef}
                        />
                        <Thoughts.Two textWrapperRef={thoughtTwoText} />
                        <Projects projectsListWrapperRef={projectsListWrapperRef} projectTitleRef={projectTitleRef} />
                    </div>
                </div>
            </div>

            {/* <footer className={styles.footer} ref={footerRef}> */}
            <Contact />
            {/* </footer> */}
            <div className={styles.noise}></div>
        </div>
    );
};

export default Home;
