import Head from "next/head";
import styles from "#/styles/_pages/single-project.module.scss";
import { Nav, Layout, Noise, SingleProject, Contact } from "#/components";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useSelectProjectAnimation, useSingleProjectPageInit } from "#/hooks";
import { singleProjectAnimations } from "#/utils/animations";
import { fetchProjects } from "#/utils";
import { PROJECTS } from "#/constants/projects";
const { removeCurrentProject } = singleProjectAnimations;

type Props = {
	id: string;
	title: string;
};

export default function Project(props: Props) {
	const { id, title } = props;
	const darkSectionRef = useRef(null);
	const router = useRouter();
	useSingleProjectPageInit();

	const { selectedProjectId, modalImgRef, modalRef, onGoToProject } = useSelectProjectAnimation({ initialId: id });

	//------------------------------------------------------------
	// Redirect out of this page
	//------------------------------------------------------------
	const onDeselectProject = () => {
		if (modalRef.current && modalImgRef.current) {
			const tl = removeCurrentProject({
				modalContainer: modalRef.current,
				modalMedia: modalImgRef.current,
			});

			tl.to(modalRef.current, { opacity: 0 });

			tl.then(() => {
				router.push({ pathname: "/projects" });
			});
		}
	};

	return (
		<>
			<Head>
				<title>David Obodo | Projects | {title}</title>
				<meta
					name="description"
					content="Software Developer that is highly addicted to Front End Development, yet capable of Full Stack Development3"
				/>
				<link rel="icon" href="/icon-192x192.png" />
			</Head>
			<Nav headerSectionLogoMode="light" />
			<Layout.DarkSection darkSectionRef={darkSectionRef}>
				<div ref={modalRef} className={styles.container}>
					<SingleProject
						currProjectId={selectedProjectId}
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

export async function getStaticPaths() {
	return {
		paths: PROJECTS.map((item) => {
			return {
				params: {
					id: item.id,
				},
			};
		}),
		fallback: true, // Dont render 404 page, render my custom Project not found page
	};
}

export async function getStaticProps({ params }: { params: { id: string } }) {
	const { id } = params;

	const { currProject } = fetchProjects(id);

	return {
		props: { id, title: currProject?.title },
	};
}
