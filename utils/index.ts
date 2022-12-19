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
	document.body.style.overflow = "hidden";
}

function allowAppScroll() {
	document.body.style.overflow = "auto";
}

function createCopyButton() {
	const button = document.createElement("button");
	button.classList.add("prism-copy-button");
	button.textContent = "Copy";
	return button;
}

function highlightCode(pre: Element, highlightRanges: string, lineNumberRowsContainer: Element) {
	const ranges = highlightRanges.split(",").filter((val: string) => val);
	const preWidth = pre.scrollWidth;

	for (const range of ranges) {
		const split = range.split("-");
		let start = parseInt(split[0]);
		let end = parseInt(split[1]);
		if (!start || !end) {
			start = parseInt(range);
			end = parseInt(range);
		}

		for (let i = start; i <= end; i++) {
			const lineNumberSpan = lineNumberRowsContainer.querySelector(`span:nth-child(${i})`) as HTMLSpanElement;
			lineNumberSpan.style.setProperty("--highlight-background", "rgb(100 100 100 / 0.5)");
			lineNumberSpan.style.setProperty("--highlight-width", `${preWidth - 5}px`); // 5 is the width of the left border
			lineNumberSpan.style.setProperty("border-left", `5px solid #fff`);
		}
	}
}

export {
	normalize,
	animateFaintSvg,
	fetchProjects,
	matchElement,
	executeTimelineActions,
	preventAppScroll,
	allowAppScroll,
	createCopyButton,
	highlightCode,
};
