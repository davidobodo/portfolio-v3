import PROJECTS from "./projects";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const metadata = {
	home: {
		title: "David Obodo: Software Developer (Front End Developer)",
		description: `David Obodo is a Software Developer that majors in Front End Development, yet capable of full stack development.`,
		url: `${BASE_URL}`,
		image: `${BASE_URL}/images/covers/home.png`,
	},
	projects: {
		title: "David Obodo: Projects",
		description: "A list of projects, replicas, and experiments from David Obodo",
		url: `${BASE_URL}/projects`,
		image: `${BASE_URL}/images/covers/projects.png`,
	},
	letters: {
		title: "David Obodo: Letters",
		description: "Letters, Thoughts, Stories and Ideas from David Obodo",
		url: `${BASE_URL}/letters`,
		image: `${BASE_URL}/images/covers/letters.png`,
	},
	credits: {
		title: "David Obodo: Credits",
		description: "Site credits for some parts of the design of this portfolio",
		url: `${BASE_URL}/credits`,
		image: `${BASE_URL}/images/covers/credits.png`,
	},
	notfound: {
		title: "David Obodo: Lost",
		description: "404 Page not found, please go home ",
		url: `${BASE_URL}/lost`,
		image: `${BASE_URL}/images/covers/not-found.png`,
	},
	singleproject: ({ id }: { id: string }) => {
		const project = PROJECTS.find((item) => item.id === id);

		if (project) {
			const { title, media } = project;
			return {
				title: `David Obodo | Project | ${title}`,
				description: `${title} Project`,
				url: `${BASE_URL}/project/${id}`,
				image: media[0] ? `${BASE_URL}${media[0].source}` : `${BASE_URL}/images/covers/projects.png`,
			};
		} else {
			return {
				title: `David Obodo | Project`,
				description: `Invalid Project`,
				url: `${BASE_URL}/project/${id}`,
				image: `${BASE_URL}/images/covers/invalid-project.png`,
			};
		}
	},
	blog: {
		title: "The David Obodo Blog",
		description: "Technical and Life articles written by David Obodo",
		url: `${BASE_URL}/blog`,
		image: `${BASE_URL}/images/covers/blog.png`,
	},
};

export default metadata;
