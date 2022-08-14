// import imgBookmark from "#/public/images/projects/bookmark.png";
// import imgBurger from "#/public/images/projects/burger-builder.png";
// import imgCadmils from "#/public/images/projects/cadmils.png";
// import imgHospitalFinder from "#/public/images/projects/hospital-findr.png";
// import imgDchat from "#/public/images/projects/d-chat.png";
// import imgDcommerce from "#/public/images/projects/d-commerce.png";
// import imgDdiscus from "#/public/images/projects/d-discus.png";
// import imgDproductivity from "#/public/images/projects/d-productivity.png";
// import imgDeveloper from "#/public/images/projects/developer.png";
// import imgDrummachine from "#/public/images/projects/drum-machine.png";
// import imgFreebies from "#/public/images/projects/freebies.png";
// import imgPomodoro from "#/public/images/projects/pomodoro.png";
// import imgPv1 from "#/public/images/projects/pv-1.png";
// import imgQuizninja from "#/public/images/projects/quiz-ninja.png";
// import imgShortly from "#/public/images/projects/shortly.png";
// import imgProdeus from "#/public/images/projects/dashboard.png";

import { TProject } from "#/interfaces";

const COLORS = ["#dcd0c2", "#e2d1d9", "#b1a994", "#373737"];

const TYPES = ["Web Application", "Website", "Learn from Tutorial", "Experiments"];

export const PROJECTS: TProject[] = [
	{
		id: "prodeus",
		title: "Prodeus",
		details: `
		<p>Web application equivalane tof the Prodeus ChromE Extension, but with more features.</p>
		<p>Responsible for about 98% of the entire frontend architecture.</p>
		<p>This has to be one of my proudest projects, because the feature list cut across some very challenging and exciting front sectors. </p>
		<p>From <span>cache invalidation </span> (which everyone knows is one of the most tricky thing in development😅), 
		to <span>loading Infinite data</span> on both <span>single column layouts (like instagram, facebook and twitter)</span> as well as <span>multi column layouts (like pinterest)</span>. Nevertheless, the need for 
		<span>pixel perfect delivery</span> was also quite challenging and exciting, since the CEO was indeed the Designer.
		</p>
		<p>
		Also due to the enormous size of this application, there was need to structure the codebase in such a way that its easily scalable and yet performant. Handling such 
		enterprise grade application was quite a proud moment for me, cause I can say that I "owned" the codebase. Awesome stuff.
		</p>
		`,
		roles: ["fe"],
		sitelink: "https://www.prodeus.co/",
		tech: ["typescript", "react", "reactquery", "redux", "styledcomponents", "html", "sass", "storybook", "rtl"],
		bgImage: "/images/projects/test.jpg",
		type: "Web Application",
		bgColor: "#dcd0c2",
	},
	{
		id: "cadmils",
		title: "Cadmils Consulting",
		details: `
		<p>Freelance contract to setup the entire web presence for cadmils consulting agency.</p>
		<p>From collaborating in the design with <a href="https://www.linkedin.com/in/harmony-orakpoyovwuru-1716b117a/" target="_blank">Harmony Orakpoyovwuru</a>, to coding the frontend as well as the little backend server to integrate the mailing service with sendgrid. In addition to that, I also set up
		the company's staff emails as requested.
		</p>
		`,
		roles: ["design", "fe", "be"],
		sitelink: "https://www.cadmils.com/",
		tech: ["html", "css", "sass", "javascript", "nodejs", "expressjs", "heroku", "sendgrid"],
		bgImage: "/images/projects/cadmils.png",
		type: "Website",
		bgColor: "#e2d1d9",
	},
	{
		id: "medic-finder",
		title: "Medic finder",
		details: `
		<p>Easily find Hospitals, Clinics, Pharmacies and Health care centers around any place.</p>
		<p>This project was built as a requirement to get into the <a href="https://www.enye.tech/" target="_blank">enye</a> internship programme, however its of no news
		that its important is far beyond just as a requirement to get into an internship.
		</p>
		<p>Initial iteration was built with a full authentication process as well as a backend infrastructure to store users credentials and users history. However for easy accessibility for everyone these have been removed in the current iteration. Now YOU can access the full functionality of the application without having to give out any of your credentials.</p>
		<p>HOW TO USE: Type in a specific address, select the radius that search ought to cover, and finally select the type of medial facility you are looking for. Click on the SEARCH button and get the results of your search immediately.</p>
		<p>It's also notworthy to say I was responsible for the Entire Design of this application 😊</p>
		`,
		tech: [
			"figma",
			"react",
			"typescript",
			"redux",
			"materialui",
			"firebase",
			"graphql",
			"nodejs",
			"expressjs",
			"rtl",
			"googlemaps",
			"netlify",
		],
		roles: ["design", "fe", "be"],
		bgImage: "/images/projects/hospital-findr.png",
		type: "Web Application",
		bgColor: "#b1a994",
		githublink: "https://github.com/obododavid/Medic-Finder",
		sitelink: "https://medic-finder.netlify.app/",
	},
	{
		id: "d-productivity",
		title: "d-productivity",
		details: `<p>Web-based Kanban-style list-making application. Just like Trello or any other drag and drop productivity app</p>
			<p>The main purpose of embarking on this project was to have a deeper understanding of the HTML5 drag and drop API</p>
			<p>I eventually made two copies, of which one of them used the easy and wonderful <a href="https://www.npmjs.com/package/react-beautiful-dnd" target="_blank">react-beautiful-dnd</a> and the other used the plain <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API" target="_blank">html5 dnd api</a>. 
			Wonderful learning experience I say
			`,
		roles: ["fe", "design"],
		sitelink: "https://d-productivity.vercel.app/",
		githublink: "https://github.com/obododavid/d-productivity",
		tech: ["react", "typescript", "redux", "styledcomponents"],
		bgImage: "/images/projects/d-productivity.png",
		type: "Web Application",
		bgColor: "#373737",
	},
	{
		id: "d-Discus",
		title: "d-Discus",
		details: `<p>This site was my official first attempt at a full stack project. I followed along a tutorial done by <a href="https://www.youtube.com/c/TheNetNinja" target="_blank">The Net Ninja</a>. </p> 
		<p>After which I looked for 
		ways to "owned" the project in order to understand the inner workings perfectly. But Definitely still give the credits to "The Net Ninja". XDo check him out 
		</p> interaction with a no sql database`,
		sitelink: "https://myfirst-fullstackproject.firebaseapp.com/signin",
		tech: ["react", "typescript", "redux", "styledcomponents"],
		bgImage: "/images/projects/d-discus.png",
		type: "Web Application",
		bgColor: "#373737",
	},
	{
		id: "d-chat",
		title: "d-chat",
		details: `
		<p>It's of no news that majority of applications these days have the "chatting" functionality embedded into them, so this project was an attempt to understand how the "open connection idea" upon which the functionality is built upon.
		I initial executed it using only <a href="https://firebase.google.com/" target="_blank">Firebase</a> but that was when I was unaware of <a href="https://socket.io/" target="_blank">Socket.io</a>, which is actually the real deal
		</p>
		`,
		githublink: "",
		roles: [],
		sitelink: "https://d-chat-98abe.firebaseapp.com/auth",
		tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
		bgImage: "/images/projects/d-chat.png",
		bgColor: COLORS[0],
		type: "Web Application",
	},
	{
		id: "d-commerce",
		title: "d-commerce(WIP)",
		details: "An e-commerce platform",
		githublink: "",
		roles: [],
		sitelink: "https://d-commerce-99633.firebaseapp.com/",
		tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
		bgImage: "/images/projects/d-commerce.png",
		bgColor: COLORS[1],
		type: TYPES[0],
	},
	{
		id: "developer-of-the-year",
		title: "developer of the year",
		details: "Clone of “Awwwards” (https://www.awwwards.com/) awards site for the year 2020",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/developer-of-the-year/",
		tech: ["react", "typescript", "redux", "styledComponents"],
		bgImage: "/images/projects/developer.png",
		bgColor: COLORS[2],
		type: TYPES[3],
	},
	{
		id: "shortly",
		title: "Shortly",
		details: "Site that makes use of rel link API to shorten links",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/FEM-shortly/",
		tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
		bgImage: "/images/projects/shortly.png",
		bgColor: COLORS[3],
		type: TYPES[3],
	},
	{
		id: "bookmark",
		title: "Bookmark",
		details: "Bookmark landing page",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/FEM-bookmark-landing-page/",
		tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
		bgImage: "/images/projects/bookmark.png",
		bgColor: COLORS[0],
		type: TYPES[3],
	},
	{
		id: "burger-builder",
		title: "Burger builder",
		details: "Build and order your own burger",
		githublink: "",
		roles: [],
		sitelink: "https://burger-builder.obododavid5.now.sh/",
		tech: ["react", "typescript", "redux", "styledComponents"],
		bgImage: "/images/projects/burger-builder.png",
		bgColor: COLORS[1],
		type: TYPES[2],
	},
	{
		id: "drum-machine",
		title: "Drum Machine",
		details: "Simple drum machine",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/drumMachine/",
		tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
		bgImage: "/images/projects/drum-machine.png",
		bgColor: COLORS[2],
		type: TYPES[3],
	},

	{
		id: "pomodoro-clock",
		title: "Pomodoro clock",
		details: "Timer for pomodoro time management technique",
		githublink: "",
		roles: [],
		sitelink: "https://pomodoroclock.now.sh/",
		tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
		bgImage: "/images/projects/pomodoro.png",
		bgColor: COLORS[3],
		type: TYPES[3],
	},
	{
		id: "quiz-ninja",
		title: "Quiz ninja",
		details: "How well do you know super heroes real names?",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/Learning-javascript-quiz-ninja/",
		tech: ["react", "typescript", "redux", "styledComponents"],
		bgImage: "/images/projects/quiz-ninja.png",
		bgColor: COLORS[0],
		type: TYPES[2],
	},
	{
		id: "freebies",
		title: "Freebies",
		details: "clone of freebies(https://freebies.bypeople.com/) website home page",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/freebies/",
		tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
		bgImage: "/images/projects/freebies.png",
		bgColor: COLORS[1],
		type: TYPES[3],
	},
	{
		id: "pv1",
		title: "Portfolio v1",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/portfolio/",
		tech: ["react", "typescript", "redux", "styledComponents"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "pv2",
		title: "Portfolio v2",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/portfolio/",
		tech: ["react", "typescript", "redux", "styledComponents"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "pv2",
		title: "Portfolio v3",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/portfolio/",
		tech: ["react", "typescript", "redux", "styledComponents"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "tgwt",
		title: "GSAP with Three.js",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/portfolio/",
		tech: ["gsap", "three.js"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "tgwt",
		title: "Weather Application",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/portfolio/",
		tech: ["gsap", "three.js"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "tgwt",
		title: "Prodeus ckeditor",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/portfolio/",
		tech: ["gsap", "three.js"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "tgwt",
		title: "Bloom",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/portfolio/",
		tech: ["gsap", "three.js"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "tgwt",
		title: "Chugg",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/portfolio/",
		tech: ["gsap", "three.js"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "tgwt",
		title: "Private Lattice",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/portfolio/",
		tech: ["gsap", "three.js"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "tgwt",
		title: "Number Guesser(A play with React Native)",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/portfolio/",
		tech: ["gsap", "three.js"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "tgwt",
		title: "OPPO Redefinition Contest",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/portfolio/",
		tech: ["gsap", "three.js"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "tgwt",
		title: "Ozidi",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "https://obododavid.github.io/portfolio/",
		tech: ["gsap", "three.js"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
];
// export const PROJECTS = [
//     {
//         id: "prodeus",
//         title: "Prodeus",
//         details: "Prodeus web app",
//         githublink: '', roles: [], sitelink: "https://www.prodeus.co/",
//         tech: ["react", "typescript", "styledcomponents", "html", "sass", "reactquery"],
//         // height: "40rem"
//         bgImage: imgProdeus
//     },
//     {
//         id: "cadmils",
//         title: "Cadmils Consulting",
//         details: "Official website of cadmils consulting agency",
//         githublink: '', roles: [], sitelink: "https://www.cadmils.com/",
//         tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
//         // height: "40rem"
//         bgImage: imgCadmils
//     },
//     {
//         id: "hospital-finder",
//         title: "Hospital finder",
//         details: "Find Hospitals, Clinics, Pharmacies and Health care centers close to you",
//         githublink: '', roles: [], sitelink: "https://medic-finder.netlify.app/",
//         tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
//         height: "60rem",
//         bgImage: imgHospitalFinder
//     },
//     {
//         id: 2,
//         title: "d-productivity",
//         details: "Web-based Kanban-style list-making application",
//         githublink: '', roles: [], sitelink: "https://d-productivity.now.sh/",
//         tech: ["react", "typescript", "redux", "styledComponents"],
//         height: "35rem",
//         bgImage: imgDproductivity
//     },
//     {
//         id: 3,
//         title: "d-Discus",
//         details: "A site where people can share details of projects together.",
//         githublink: '', roles: [], sitelink: "https://myfirst-fullstackproject.firebaseapp.com/signin",
//         tech: ["react", "typescript", "redux", "styledComponents"],
//         height: "45rem",
//         bgImage: imgDdiscus
//     },
//     {
//         id: 4,
//         title: "d-chat",
//         details: "A basic chat application.",
//         githublink: '', roles: [], sitelink: "https://d-chat-98abe.firebaseapp.com/auth",
//         height: "40rem",
//         tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
//         bgImage: imgDchat
//     },
//     {
//         id: 5,
//         title: "d-commerce(WIP)",
//         details: "An e-commerce platform",
//         githublink: '', roles: [], sitelink: "https://d-commerce-99633.firebaseapp.com/",
//         height: "42rem",
//         tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
//         bgImage: imgDcommerce
//     },
//     {
//         id: 16,
//         title: "developer of the year",
//         details: "Clone of “Awwwards” (https://www.awwwards.com/) awards site for the year 2020",
//         githublink: '', roles: [], sitelink: "https://obododavid.github.io/developer-of-the-year/",
//         tech: ["react", "typescript", "redux", "styledComponents"],
//         // height: "40rem"
//         bgImage: imgDeveloper
//     },
//     {
//         id: 6,
//         title: "Shortly",
//         details: "Site that makes use of rel link API to shorten links",
//         githublink: '', roles: [], sitelink: "https://obododavid.github.io/FEM-shortly/",
//         tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
//         // height: "40rem"
//         bgImage: imgShortly
//     },
//     {
//         id: 7,
//         title: "Bookmark",
//         details: "Bookmark landing page",
//         githublink: '', roles: [], sitelink: "https://obododavid.github.io/FEM-bookmark-landing-page/",
//         height: "70rem",
//         tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
//         bgImage: imgBookmark
//     },
//     {
//         id: 13,
//         title: "Burger builder",
//         details: "Build and order your own burger",
//         githublink: '', roles: [], sitelink: "https://burger-builder.obododavid5.now.sh/",
//         // height: "40rem"
//         tech: ["react", "typescript", "redux", "styledComponents"],
//         bgImage: imgBurger
//     },
//     {
//         id: 14,
//         title: "Drum Machine",
//         details: "Simple drum machine",
//         githublink: '', roles: [], sitelink: "https://obododavid.github.io/drumMachine/",
//         tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
//         // height: "40rem"
//         bgImage: imgDrummachine
//     },

//     {
//         id: 9,
//         title: "Pomodoro clock",
//         details: "Timer for pomodoro time management technique",
//         githublink: '', roles: [], sitelink: "https://pomodoroclock.now.sh/",
//         tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
//         // height: "40rem"
//         bgImage: imgPomodoro
//     },
//     {
//         id: 10,
//         title: "Quiz ninja",
//         details: "How well do you know super heroes real names?",
//         githublink: '', roles: [], sitelink: "https://obododavid.github.io/Learning-javascript-quiz-ninja/",
//         tech: ["react", "typescript", "redux", "styledComponents"],
//         // height: "40rem"
//         bgImage: imgQuizninja
//     },
//     {
//         id: 11,
//         title: "Freebies",
//         details: "clone of freebies(https://freebies.bypeople.com/) website home page",
//         githublink: '', roles: [], sitelink: "https://obododavid.github.io/freebies/",
//         tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
//         // height: "40rem"
//         bgImage: imgFreebies
//     },
//     {
//         id: 8,
//         title: "Portfolio v1.0",
//         details: "My first portfolio site",
//         githublink: '', roles: [], sitelink: "https://obododavid.github.io/portfolio/",
//         height: "40rem",
//         tech: ["react", "typescript", "redux", "styledComponents"],
//         bgImage: imgPv1
//     }
// ];
