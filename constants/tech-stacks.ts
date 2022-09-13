type TTech = {
	key: string;
	label: string;
};

const TECH_STACKS: Record<string, TTech> = {
	//---------------------------------------------
	//LANGUAGES
	//---------------------------------------------
	html: {
		key: "html",
		label: "HTML",
	},
	css: {
		key: "css",
		label: "CSS",
	},
	sass: {
		key: "sass",
		label: "SASS/SCSS",
	},
	javascript: {
		key: "javascript",
		label: "Vanilla Javascript",
	},
	typescript: {
		key: "typescript",
		label: "Typescript",
	},
	solidity: {
		key: "solidity",
		label: "Solidity",
	},
	//---------------------------------------------
	//FRAMEWORKS/LIBRARIES
	//---------------------------------------------
	react: {
		key: "react",
		label: "React.js",
	},
	nextjs: {
		key: "nextjs",
		label: "Next.js",
	},
	jest: {
		key: "jest",
		label: "Jest",
	},
	rtl: {
		key: "rtl",
		label: "React Testing Library",
	},
	reactquery: {
		key: "reactquery",
		label: "React Query",
	},
	redux: {
		key: "redux",
		label: "Redux",
	},
	styledcomponents: {
		key: "styledcomponents",
		label: "Styled Components",
	},
	graphql: {
		key: "graphql",
		label: "GraphQL",
	},
	expressjs: {
		key: "expressjs",
		label: "Express.js",
	},
	threejs: {
		key: "threejs",
		label: "Three.js",
	},
	gsap: {
		key: "gsap",
		label: "GSAP",
	},
	materialui: {
		key: "materialui",
		label: "Material UI",
	},
	semanticui: {
		key: "semanticui",
		label: "Semantic UI",
	},
	jquery: {
		key: "jquery",
		label: "JQuery",
	},
	enzyme: {
		key: "enzyme",
		label: "Enzyme",
	},

	tailwindcss: {
		key: "tailwindcss",
		label: "Tailwind CSS",
	},
	web3: {
		key: "web3",
		label: "Web3",
	},
	//---------------------------------------------
	//OTHERS
	//---------------------------------------------
	mongodb: {
		key: "mongodb",
		label: "Mongo DB",
	},
	nodejs: {
		key: "nodejs",
		label: "Node.js",
	},

	figma: {
		key: "figma",
		label: "Figma",
	},
	googlemaps: {
		key: "googlemaps",
		label: "Google Maps",
	},
	googleanalytics: {
		key: "googleanalytics",
		label: "Google Analytics",
	},
	storybook: {
		key: "storybook",
		label: "Storybook",
	},
	sendgrid: {
		key: "sendgrid",
		label: "Sendgrid",
	},
	//---------------------------------------------
	//DEPLOYMENT SERVICES
	//---------------------------------------------
	heroku: {
		key: "heroku",
		label: "Heroku",
	},
	netlify: {
		key: "netlify",
		label: "Netlify",
	},
	firebase: {
		key: "firebase",
		label: "Firebase",
	},
	ghpages: {
		key: "ghpages",
		label: "Github Pages",
	},
};

export default TECH_STACKS;

/**
 * chakra ui
 * pupeteer
 * socket io
 */
