import Head from "next/head";
import { Nav, Layout, Noise, SingleProject, Footer } from "#/components";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useSelectProjectAnimation, useSingleProjectPageInit } from "#/hooks";
import { projectAnimations } from "#/utils/animations";
import { METADATA, PROJECTS } from "#/constants";
import { useAnimationsContext } from "#/context";
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

	const { radialGradientAnimation, contactOpenerAnimation } = useAnimationsContext();

	useEffect(() => {
		radialGradientAnimation?.scrollTrigger?.refresh();
		contactOpenerAnimation?.scrollTrigger?.refresh();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedProjectId]);

	const { title, description, url, image } = METADATA["singleproject"]({ id });

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta property="type" content="website" />
				<meta property="url" content={url} />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#e1dfdd" />

				<meta property="title" content={title} />
				<meta name="description" content={description} />
				<meta property="image" content={image} />
				<meta content="image/*" property="og:image:type" />

				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={url} />
				<meta property="og:image" content={image} />
				<meta property="og:site_name" content={title} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@phitGeek" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav headerSectionLogoMode="light" hasBackdropFilter={true} />
			<Layout.DarkSection darkSectionRef={darkSectionRef} pathname="/projects/[id]">
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
			<Footer />
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

Project.withAnim = true;

export async function getStaticProps({ params }: { params: { id: string } }) {
	const { id } = params;

	return {
		props: { id },
	};
}
