import PROJECTS from "./projects";

const metadata = {
	home: {
		title: "David Obodo | Software Developer (Frontend Developer)",
		description:
			"David Obodo is a Software Developer that majors on Frontend Development, yet from time to time is no stranger to the entire full stack development.",
		url: "www.davidobodo.com",
		image: "www.davidobodo.com/images/covers/home.png",
	},
	projects: {
		title: "David Obodo | Projects | Software Developer (Frontend Developer)",
		description:
			"Projects | Playground | Replicas | Xperiments from David Obodo (Software Developer, Front end Developer)",
		url: "www.davidobodo.com/projects",
		image: "www.davidobodo.com/images/covers/projects.png",
	},
	letters: {
		title: "David Obodo | Letters | Software Developer (Frontend Developer)",
		description: "Letters | Thoughts | Stories | Ideas from David Obodo (Software Developer, Front end Developer)",
		url: "www.davidobodo.com/letters",
		image: "www.davidobodo.com/images/covers/letters.png",
	},
	credits: {
		title: "David Obodo | Credits | Software Developer (Frontend Developer)",
		description: "Portfolio Credits",
		url: "www.davidobodo.com/credits",
		image: "www.davidobodo.com/images/covers/credits.png",
	},
	notfound: {
		title: "Davud Obodo | Lost | Software Developer (Frontend Developer)",
		description: "404 Page not found  - Go Home ",
		url: "www.davidobodo.com/losty",
		image: "www.davidobodo.com/images/covers/not-found.png",
	},
	singleproject: ({ id }: { id: string }) => {
		const project = PROJECTS.find((item) => item.id === id);

		if (project) {
			const { title, media } = project;
			return {
				title: `David Obodo | Project | ${title}`,
				description: `${title} Project`,
				url: `www.davidobodo.com/project/${id}`,
				image: `www.davidobodo.com${media[0].source}`,
			};
		} else {
			return {
				title: `David Obodo | Project`,
				description: `Invalid Project`,
				url: `www.davidobodo.com/project/${id}`,
				image: "www.davidobodo.com/images/covers/invalid-project.png",
			};
		}
	},
};

export default metadata;
