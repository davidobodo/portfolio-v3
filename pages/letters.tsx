import { NextPage } from "next";
import Head from "next/head";
import { Banners, Contact } from "#/components";
const Projects: NextPage = () => {
    return (
        <div>
            <Head>
                <title>David Obodo - Projects</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Banners.OtherPages title="Letters." />
            <Contact />
            <div className="noise"></div>
        </div>
    );
};

export default Projects;
