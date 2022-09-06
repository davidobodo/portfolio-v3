import Head from "next/head";
import { Nav, Layout, Noise, SingleProject, Contact, HeadChildren } from "#/components";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useSelectProjectAnimation, useSingleProjectPageInit } from "#/hooks";
import { projectAnimations } from "#/utils/animations";
import { METADATA, PROJECTS } from "#/constants";
import { usePageTransitionsContext } from "#/context";
const { removeCurrentProject } = projectAnimations;

type Props = {
	id: string;
	title: string;
};

export default function Project(props: Props) {
	const { id } = props;
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

	const { radialGradientAnimation } = usePageTransitionsContext();

	useEffect(() => {
		radialGradientAnimation?.scrollTrigger?.refresh();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedProjectId]);

	return (
		<>
			<Head>
				<HeadChildren {...METADATA["singleproject"]({ id })} />
			</Head>
			<Nav headerSectionLogoMode="light" hasBackdropFilter={true} />
			<Layout.DarkSection darkSectionRef={darkSectionRef}>
				<div ref={modalRef}>
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

	return {
		props: { id },
	};
}
