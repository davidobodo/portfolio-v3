import Head from "next/head";
import { NextPage } from "next";
import { useState } from "react";
import { Banners, Contact, Grid, Nav, Radio } from "#/components";
import { TECH_STACKS } from "#/constants/tech-stacks";
import { PROJECT_NATURE } from "#/constants";
import styles from "#/styles/projects.module.scss";
import { useCalculateFooterHeight } from "#/hooks";
const Projects: NextPage = () => {
    const { footerHeight, footerRef } = useCalculateFooterHeight();

    const [filterBy, setFilterBy] = useState("tech-stack");
    const onSelectFilterBy = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterBy(e.target.value);
    };

    const [activeKey, setActiveKey] = useState("");

    const onSetActiveKey = (key: string) => {
        setActiveKey(key);
    };

    let filterList = [];

    if (filterBy === "project-nature") {
        filterList = [
            {
                key: "all",
                label: "All"
            },
            ...PROJECT_NATURE
        ];
    } else {
        filterList = [
            {
                key: "all",
                label: "All"
            },
            ...Object.values(TECH_STACKS)
        ];
    }
    return (
        <div>
            <Head>
                <title>David Obodo - Projects</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            <Banners.OtherPages title="Projects." />
            <div className={styles.main} style={{ marginBottom: footerHeight + "px" }}>
                <aside className={styles.aside}>
                    <div className={styles.filter}>
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
                    </div>
                    <ul>
                        {filterList.map((item) => {
                            return (
                                <li key={item.key} className={activeKey === item.key ? styles.active : ""}>
                                    <button onClick={() => onSetActiveKey(item.key)}>{item.label}</button>
                                </li>
                            );
                        })}
                    </ul>
                    {/* {filterBy === "project-nature" ? (
                        <ul>
                            <li>
                                <button>All</button>
                            </li>
                            {PROJECT_NATURE.map((item) => {
                                return (
                                    <li key={item.key}>
                                        <button>{item.label}</button>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <ul>
                            <li>
                                <button>All</button>
                            </li>
                            {Object.values(TECH_STACKS).map((item) => {
                                return (
                                    <li key={item.key}>
                                        <button>{item.label}</button>
                                    </li>
                                );
                            })}
                        </ul>
                    )} */}
                </aside>

                <section className={styles.content}>
                    <header>{/* <h2>All projects</h2> */}</header>
                    <Grid />
                </section>
            </div>

            <footer className="fixed-footer" ref={footerRef}>
                <Contact />
            </footer>
            <div className="noise"></div>
        </div>
    );
};

export default Projects;
