import Head from "next/head";
import { Nav, Layout, Noise, SingleProject } from "#/components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import gsap from "gsap";
import styles from "#/styles/_pages/single-project.module.scss";
import { useSelectProjectAnimation, removeCurrentProject, usePageTransition } from "#/hooks";
export default function Project() {
    const router = useRouter();
    const { id } = router.query;

    const { onRouteChange } = usePageTransition();

    function removeLoader() {
        const tl = gsap.timeline({});

        tl.to(document.querySelectorAll("[data-key='layer']"), {
            scaleY: 0,
            delay: 1
        });
        tl.add(() => {
            document.querySelector("body")?.classList.remove("hide");
        });
        return tl;
    }

    useEffect(() => {
        removeLoader();
    }, []);

    const {
        selectedProjectId,
        // onDeselectProject,
        modalImgRef,
        modalRef,
        onGoToProject,
        setSelectedProjectId
    } = useSelectProjectAnimation();

    const onDeselectProject = () => {
        if (modalRef.current && modalImgRef.current) {
            const tl = removeCurrentProject({
                modalContainer: modalRef.current,
                modalImage: modalImgRef.current
            });

            tl.to(modalRef.current, { opacity: 0 });
            tl.then(() => {
                setSelectedProjectId("");
                onRouteChange("/projects");
            });
        }
    };

    useEffect(() => {
        if (id) {
            setSelectedProjectId(id as string);
        }
    }, [id]);

    if (!id) {
        return null;
    }

    return (
        <div className={styles.main}>
            <Head>
                <title>David Obodo</title>
                <meta name="description" content="David Obodo's portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav alwaysVisible={true} />
            <Layout.DarkSection>
                <div ref={modalRef} className={styles.container}>
                    <SingleProject
                        currProjectId={selectedProjectId as string}
                        // onClose={onClose}
                        onClose={onDeselectProject}
                        modalImgRef={modalImgRef}
                        onGoToProject={onGoToProject}
                    />
                </div>
            </Layout.DarkSection>
            <Noise />
        </div>
    );
}
