import Head from "next/head";
import styles from "#/styles/_pages/single-project.module.scss";
import { useRouter } from "next/router";
import { PROJECTS } from "#/constants/projects";
import { Nav, Layout, Noise } from "#/components";

// {
//     project: TProject | null;
// }
export default function SingleProject() {
    // const { project } = props;

    const router = useRouter();
    const { id } = router.query;

    const project = PROJECTS.find((item) => item.id === id);

    if (!project) {
        return null;
    }

    const { title, bgImage } = project;

    return (
        <div>
            <Head>
                <title>David Obodo</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout.DarkSection>
                <>
                    <Nav />
                    <div className={styles.container}>
                        {/* <div>
                    <button onClick={onTriggerAction} value="close">
                        Close
                    </button>
                    <button onClick={onTriggerAction} value="next">
                        Next
                    </button>
                    <button onClick={onTriggerAction} value="previous">
                        Previous
                    </button>
                </div> */}

                        <section className={styles.title}>
                            <h1>{title}</h1>
                            {/* <p>{details}</p> */}
                        </section>

                        <div className={styles.image} style={{ backgroundImage: `url(${bgImage})` }}></div>

                        <section className={styles.about}>
                            <h2>About this project</h2>

                            <p>
                                On this Open Source project I was responsible for the initial UI/UX architecture,
                                structure, design and animations. The idea was to follow the 3 column UX trend of
                                webchats like skype, hipchat, gitter and slack. Building upon that an Open Source
                                alternative with similar functionalities.
                            </p>

                            <p>
                                The UI/UX was conceived with a mobile first approach. So it would be possible to
                                effortlessly launch it into any platform without making any changes to the main
                                application.
                            </p>
                        </section>

                        <section className={styles.tech}>
                            <h2>Technical Sheet</h2>
                            <p>Code technologies I got involved with while working on this project.</p>

                            <ul>
                                <li>
                                    <span className={styles.circle}></span>UI/UX Design
                                </li>
                                <li>
                                    <span className={styles.circle}></span>UI/UX Architecture
                                </li>
                                <li>
                                    <span className={styles.circle}></span>UI/UX Animations
                                </li>
                                <li>
                                    <span className={styles.circle}></span>HTML5 – semantic, audio, video, canvas
                                </li>
                                <li>
                                    <span className={styles.circle}></span>CSS3 – preprocessed with LESS + LESSHAT
                                </li>
                                <li>
                                    <span className={styles.circle}></span>Meteor.js
                                </li>
                                <li>
                                    <span className={styles.circle}></span>Blaze
                                </li>
                                <li>
                                    <span className={styles.circle}></span>MongoDB
                                </li>
                            </ul>
                        </section>

                        <div className={styles.links}>
                            <a href="">
                                Visit site
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-external-link"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#86868b"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                                    <line x1="10" y1="14" x2="20" y2="4" />
                                    <polyline points="15 4 20 4 20 9" />
                                </svg>
                            </a>
                            <a href="">
                                Github repo
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-brand-github"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#86868b"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </>
            </Layout.DarkSection>
            <Noise />
        </div>
    );
}

// export async function getStaticProps(context: NextPageContext) {
//     console.log(context.query);

//     return {
//         paths: [
//             // String variant:
//             "/blog/first-post",
//             // Object variant:
//             { params: { slug: "second-post" } }
//         ],
//         fallback: true
//     };
//     return {
//         props: {
//             project: {}
//         } // will be passed to the page component as props
//     };
// }
