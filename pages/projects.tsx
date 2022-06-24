import Head from "next/head";
import { NextPage } from "next";
import { useState, useRef } from "react";
import { Contact, Grid, DarkRadialGradient } from "#/components";
import { TECH_STACKS } from "#/constants/tech-stacks";
// import { PROJECT_NATURE } from "#/constants";
import styles from "#/styles/_pages/projects.module.scss";
import { usePinRadialGradient } from "#/hooks";
import { TProject } from "#/interfaces";
import { Header } from "./letters";
import Router from "next/router";
const Projects: NextPage = () => {
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
        // setSelectedProject(item);
        Router.push(`/projects/${item.id}`);
    };
    return (
        <div className={styles.container} ref={containerRef}>
            <Head>
                <title>David Obodo - Projects</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            {/* <Nav /> */}
            {/* <SingleProject /> */}

            {/* <div className={styles.scroller}> */}
            {/* <Banners.OtherPages title="Projects." bannerRef={bannerRef} /> */}
            {/* </div> */}
            <div className={styles.main} ref={darkSectionRef}>
                <div className={styles.darkSection}>
                    {/* <div className={styles.banner}>
                        <h1>Projects</h1>

                        <ul>
                            <li>Enterprise grade applications</li>
                            <li>Websites</li>
                            <li>Learnt from tutorials</li>
                            <li>Experiments</li>
                            <li>Playful</li>
                            <li>Ideas</li>
                            <li>Its all in here...</li>
                        </ul>

                        <ScrollAlert
                            // containerRef={scrollIndicatorRef}
                            containerStyles={{
                                marginBottom: "1rem",
                                position: "absolute",
                                bottom: "5rem",
                                right: "5rem",
                                color: "#e1dfdd"
                            }}
                        />
                    </div> */}

                    <div className={styles.content}>
                        <aside className={styles.aside}>
                            {/* <div className={styles.filter}>
                        <h4>Filter by</h4>

                        <div className={styles.filterCheck}>
                            <Radio
                                id="tech-stack"
                                name="filter"
                                value="tech-stack"
                                onchange={onSelectFilterBy}
                                checked={filterBy === "tech-stack"}
                            />
                            <label htmlFor="tech-stack">Tech Stack</label>
                        </div>
                        <div className={styles.filterCheck}>
                            <Radio
                                id="project-nature"
                                name="filter"
                                value="project-nature"
                                onchange={onSelectFilterBy}
                                checked={filterBy === "project-nature"}
                            />
                            <label htmlFor="project-nature">Project Nature</label>
                        </div>
                    </div> */}
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
                            {/* <header>
                                <h2>Projects</h2>
                                <span></span>
                            </header> */}
                            <Grid activeKey={activeKey} onSelectProject={onSelectProject} />
                        </section>
                    </div>
                </div>

                <DarkRadialGradient containerRef={darkSectionRadialGradientRef} />
            </div>

            {/* <footer className="fixed-footer" ref={footerRef}> */}
            <Contact />
            {/* </footer> */}
            <div className="noise"></div>
        </div>
    );
};

export default Projects;
