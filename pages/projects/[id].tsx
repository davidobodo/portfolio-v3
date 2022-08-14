import Head from "next/head";
import { Nav, Layout, Noise, SingleProject, Contact } from "#/components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "#/styles/_pages/single-project.module.scss";
import { useRef } from "react";
import { useSelectProjectAnimation, useSingleProjectPageInit } from "#/hooks";
import { singleProjectAnimations } from "#/utils/animations";
const { removeCurrentProject } = singleProjectAnimations;
export default function Project() {
	const darkSectionRef = useRef(null);
	const router = useRouter();
	const { id } = router.query;
	useSingleProjectPageInit();

	const {
		selectedProjectId,
		// onDeselectProject,
		modalImgRef,
		modalRef,
		onGoToProject,
		setSelectedProjectId,
	} = useSelectProjectAnimation();

	const onDeselectProject = () => {
		if (modalRef.current && modalImgRef.current) {
			const tl = removeCurrentProject({
				modalContainer: modalRef.current,
				modalImage: modalImgRef.current,
			});

			tl.to(modalRef.current, { opacity: 0 });

			tl.then(() => {
				// onRouteChange("/projects");
			});
		}
	};

	useEffect(() => {
		if (id) {
			setSelectedProjectId(id as string);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	if (!id) {
		return null;
	}

	return (
		<>
			<Head>
				<title>David Obodo | Project</title>
				<meta
					name="description"
					content="Software Developer that is highly addicted to Front End Development, yet capable of Full Stack Development3"
				/>
				<link rel="icon" href="/icon-192x192.png" />
			</Head>
			<Nav alwaysVisible={true} />
			<Layout.DarkSection darkSectionRef={darkSectionRef}>
				<div ref={modalRef} className={styles.container}>
					<SingleProject
						currProjectId={selectedProjectId}
						// onClose={onClose}
						onClose={onDeselectProject}
						modalImgRef={modalImgRef}
						onGoToProject={onGoToProject}
					/>
				</div>
			</Layout.DarkSection>
			<Noise />
			<Contact />
		</>
	);
}
