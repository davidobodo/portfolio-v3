import { PROJECTS } from "#/constants/";
import { TProjectData, TTimelineAction } from "#/types";

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

function fetchProjects(id: string): TProjectData {
	let data: TProjectData = {
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

function matchElement(origin: Element, destinationTag: string): Element | void {
	if (origin.matches(destinationTag)) {
		return origin;
	}

	if (!origin.parentElement) return;

	if (origin.parentElement.matches(destinationTag)) {
		return origin.parentElement;
	}

	return matchElement(origin.parentElement, destinationTag);
}

function executeTimelineActions({ tl, tlActions }: { tl: gsap.core.Timeline; tlActions: TTimelineAction[] }) {
	for (let j = 0; j < tlActions.length; j++) {
		const { target, vars, options, isLabel, label } = tlActions[j];

		if (isLabel && label) {
			tl.add(label);
		} else {
			if (target && vars) {
				if (options) {
					tl.to(target, vars, options);
				} else {
					tl.to(target, vars);
				}
			}
		}
	}
}

function preventAppScroll() {
	// const app = document.getElementById("app");
	// if (app) {
	// 	app.style.overflow = "hidden";
	// }
	document.body.style.overflow = "hidden";
}

function allowAppScroll() {
	// const app = document.getElementById("app");
	// if (app) {
	// 	app.style.overflow = "auto";
	// }
	document.body.style.overflow = "auto";
}

export {
	normalize,
	animateFaintSvg,
	fetchProjects,
	matchElement,
	executeTimelineActions,
	preventAppScroll,
	allowAppScroll,
};
