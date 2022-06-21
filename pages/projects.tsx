import Head from "next/head";
import { NextPage } from "next";
import { Banners, Contact, Grid } from "#/components";
import { TECH_STACKS } from "#/constants/tech-stacks";
import styles from "#/styles/projects.module.scss";
const Projects: NextPage = () => {
    console.log(TECH_STACKS, "DJFKSJ");
    return (
        <div>
            <Head>
                <title>David Obodo - Projects</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Banners.OtherPages title="Projects." />
            <div className={styles.main}>
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
            <Contact />
            <div className="noise"></div>
        </div>
    );
};

export default Projects;
