import Head from "next/head";
import type { NextPage } from "next";
import styles from "#/styles/_pages/home.module.scss";
import {
    Preloader,
    Banners,
    About,
    Work,
    Thoughts,
    Skills,
    Projects,
    Contact,
    Noise,
    Layout,
    ProjectModal
} from "#/components";
import {
    useRevealParagraph,
    useWindowSize,
    useRegisterGsapScrollTrigger,
    useScrollToTop,
    useRevealHeading,
    HomePageHooks,
    useSelectProjectAnimation
} from "#/hooks";
import Router from "next/router";

const {
    useInitAnimation,
    useAboutAnimation,
    useWorkAnimation,
    useSkillsAnimation
    // useProjectAnimation
} = HomePageHooks;

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
    // const { projectsListWrapperRef } = useProjectAnimation();

    const {
        selectedProjectId,
        onSelectProject,
        onDeselectProject,
        modalImgRef,
        modalRef
    } = useSelectProjectAnimation();

    const onRedirectToProjects = () => {
        Router.push("/projects");
    };

    return (
        <div>
            <Head>
                <title>David Obodo</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Preloader logoRef={logoRef} preloaderBgRef={preloaderBgRef} windowInnerHeight={windowInnerHeight} />
            <div className={styles.main}>
                <Banners.HomePage
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

                <Layout.DarkSection>
                    <>
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
                        {/* <Projects projectsListWrapperRef={projectsListWrapperRef} projectTitleRef={projectTitleRef} /> */}
                        <Projects
                            projectTitleRef={projectTitleRef}
                            onViewProject={onSelectProject}
                            onRedirectToProjects={onRedirectToProjects}
                            location="home"
                        />
                    </>
                </Layout.DarkSection>
            </div>

            {/* <Contact /> */}
            <Noise />

            <ProjectModal
                selectedProjectId={selectedProjectId}
                modalRef={modalRef}
                onDeselectProject={onDeselectProject}
                modalImgRef={modalImgRef}
            />
        </div>
    );
};

export default Home;
