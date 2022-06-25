import Head from "next/head";
import { NextPage } from "next";
import { useState, useRef } from "react";
import { Contact, Grid, DarkRadialGradient, Noise, Banners, ScrollAlert, Nav } from "#/components";
import { TECH_STACKS } from "#/constants/tech-stacks";
// import { PROJECT_NATURE } from "#/constants";
import styles from "#/styles/_pages/projects.module.scss";
import { usePinRadialGradient, useBannerAnimation } from "#/hooks";
import { TProject } from "#/interfaces";
import { Header } from "./letters";
import Router from "next/router";
import Banner from "#/components/banners/other-pages";
const Projects: NextPage = () => {
    const { textWrapperRef } = useBannerAnimation();
    // const [filterBy, setFilterBy] = useState("tech-stack");
    // const onSelectFilterBy = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFilterBy(e.target.value);
    // };

    const [activeKey, setActiveKey] = useState("all");

    const onSetActiveKey = (key: string) => {
        setActiveKey(key);
    };

    let filterList = [];

    // if (filterBy === "project-nature") {
    //     filterList = [
    //         {
    //             key: "all",
    //             label: "All"
    //         },
    //         ...PROJECT_NATURE
    //     ];
    // } else {
    filterList = [
        {
            key: "all",
            label: "All"
        },
        ...Object.values(TECH_STACKS)
    ];
    // }

    const containerRef = useRef(null);

    const { darkSectionRef, darkSectionRadialGradientRef } = usePinRadialGradient();

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         gsap.registerPlugin(ScrollTrigger);

    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: bannerRef.current,
    //                 // markers: true,
    //                 start: "bottom center",
    //                 toggleActions: "restart complete pause reverse",
    //                 onEnter: () => console.log("ENTERED"),
    //                 onEnterBack: () => console.log("ENTERED BACK"),
    //                 onLeave: () => console.log("LEAVED"),
    //                 onLeaveBack: () => console.log("LEAVED BACK")
    //             }
    //         });

    //         tl.to(containerRef.current, {
    //             backgroundColor: "#000"
    //         })
    //             .to(containerRef.current.querySelectorAll('[data-key="letter"]'), { color: "#fff" }, "<")
    //             .to(containerRef.current.querySelectorAll('[data-key="tech-stack"]'), { x: "0px", stagger: 0.1 });
    //         // .to(containerRef.current.querySelectorAll('[data-key="project"]'), { opacity: 1, stagger: 0.1 });
    //     }
    // }, []);

    // const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
    const onSelectProject = (item: TProject) => {
        Router.push(`/projects/${item.id}`);
    };
    return (
        <div className={styles.container} ref={containerRef}>
            <Head>
                <title>David Obodo - Projects</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            <Banners.OtherPages
                texts={["Projects", "Playground", "xperiments", "Replicas"]}
                textWrapperRef={textWrapperRef}
            />

            <div className={styles.main} ref={darkSectionRef}>
                <div className={styles.darkSection}>
                    <div className={styles.content}>
                        <aside className={styles.aside}>
                            <h4>Tech stack</h4>
                            <ul>
                                {filterList.map((item) => {
                                    return (
                                        <li key={item.key} className={activeKey === item.key ? styles.active : ""}>
                                            <button onClick={() => onSetActiveKey(item.key)} data-key="tech-stack">
                                                <span></span>
                                                {item.label}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </aside>

                        <section className={styles.gridWrapper}>
                            <Grid activeKey={activeKey} onSelectProject={onSelectProject} />
                        </section>
                    </div>
                </div>

                <DarkRadialGradient containerRef={darkSectionRadialGradientRef} />
            </div>

            <Contact />
            <Noise />
        </div>
    );
};

export default Projects;
