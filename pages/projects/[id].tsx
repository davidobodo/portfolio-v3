import Head from "next/head";
import { Nav, Layout, Noise, SingleProject } from "#/components";
import { useRouter } from "next/router";

export default function Project() {
    const router = useRouter();
    const { id } = router.query;

    const onClose = () => {
        router.push("/projects");
    };

    if (!id) {
        return null;
    }

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
                    <SingleProject currProjectId={id as string} onClose={onClose} />
                </>
            </Layout.DarkSection>
            <Noise />
        </div>
    );
}
