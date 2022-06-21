import Head from "next/head";
import { NextPage } from "next";
import { Banners, Contact, Grid, Nav } from "#/components";
import { TECH_STACKS } from "#/constants/tech-stacks";
import styles from "#/styles/projects.module.scss";
import { useCalculateFooterHeight } from "#/hooks";
const Projects: NextPage = () => {
    const { footerHeight, footerRef } = useCalculateFooterHeight();
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
                            <span className="circle"></span> Tech
                        </div>
                        <div className={styles.filterCheck}>
                            <span className="circle"></span> Nature
                        </div>
                    </div>
                    <ul>
                        {Object.values(TECH_STACKS).map((item) => {
                            return <li key={item.key}>{item.label}</li>;
                        })}
                    </ul>
                </aside>

                <section className={styles.content}>
                    <header>
                        <h2>All projects</h2>
                    </header>
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
