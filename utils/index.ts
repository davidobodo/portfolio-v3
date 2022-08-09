import { PROJECTS } from "#/constants/projects";
import { TProject } from "#/interfaces";

function normalize(value: number, lowerlimit: number, upperLimit: number) {
	return lowerlimit + (upperLimit - lowerlimit) * value;
}

function animateFaintSvg({
	progress,
	parentElement,
	svgViewportHeightRatio,
	windowWidth,
}: {
	progress: number;
	parentElement: HTMLElement;
	svgViewportHeightRatio: number;
	windowWidth: number;
}) {
	const progressEquivalent = normalize(progress, 0, 100);
	const displacement = (progressEquivalent / 100) * parentElement?.clientHeight;
	const svgHeight = svgViewportHeightRatio * windowWidth;
	const final = displacement - svgHeight;

	return final;
}

type ProjectData = { currProject: TProject | null; nextProject: TProject | null; prevProject: TProject | null };

function fetchProjects(id: string): ProjectData {
	let data: ProjectData = {
		currProject: null,
		nextProject: null,
		prevProject: null,
	};
	const projectsLength = PROJECTS.length;

	for (let i = 0; i < projectsLength; i++) {
		if (id === PROJECTS[i].id) {
			data = {
				currProject: PROJECTS[i],
				nextProject: i + 1 < projectsLength ? PROJECTS[i + 1] : null,
				prevProject: i - 1 >= 0 ? PROJECTS[i - 1] : null,
			};
		}
	}

	return data;
}

export { normalize, animateFaintSvg, fetchProjects };
