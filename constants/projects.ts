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
		githublink: "https://github.com/davidobodo/d-discus",
		tech: ["react", "typescript", "redux", "styledcomponents"],
		bgImage: "/images/projects/d-discus.png",
		type: "Web Application",
		bgColor: "#373737",
		roles: [],
	},
	{
		id: "d-chat",
		title: "d-chat",
		details: `
		<p>It's of no news that majority of applications these days have the "chatting" functionality embedded into them, so this project was an attempt to understand how the "open connection idea" upon which the functionality is built upon.
		I initial executed it using only <a href="https://firebase.google.com/" target="_blank">Firebase</a> but that was when I was unaware of <a href="https://socket.io/" target="_blank">Socket.io</a>, which is actually the real deal
		</p>
		`,
		roles: [],
		sitelink: "https://d-chat-98abe.firebaseapp.com/auth",
		githublink: "https://github.com/davidobodo/d-chat",
		tech: ["react", "typescript", "redux", "materialui", "firebase", "graphql", "nodejs", "expressjs"],
		bgImage: "/images/projects/d-chat.png",
		bgColor: COLORS[0],
		type: "Web Application",
	},
	{
		id: "d-commerce",
		title: "d-commerce(WIP)",
		details: `<p>When getting acclaimated with the features of a framework/technoly or even a programming language, one of the applications one should try building is an ecommerce platform.</p>
		<p>This is because, and e-commerce platform has features that cut across a great deal of <strong>what is possible</strong> in frontend. For this reason i set out to build this application</p>
		<p>The UI was replicated from an online store. As this project was done quite a while ago I currently can't remember the exact name, if not I would have gien them their due credit </p>
		`,
		githublink: "https://github.com/davidobodo/d-commerce",
		roles: ["fe", "be"],
		sitelink: "https://d-commerce-99633.firebaseapp.com/",
		tech: ["html", "css", "sass", "javascript", "nodejs", "expressjs", "heroku"],
		bgImage: "/images/projects/d-commerce.png",
		bgColor: COLORS[1],
		type: TYPES[0],
	},
	{
		id: "developer-of-the-year",
		title: "developer of the year",
		details: `<p>A static desktop clone of <a href="https://www.awwwards.com/" target="_blank">awwwards</a> awards site for the year 2020.</p>
		<p>The motivation to build this static clone was a desire to achieve the "VIEW NOMINEES CIRCULAR SECTION" at the bottom with just css and javascript😅.</p>
		<p>Trust me wasn't an easy process cause it involved some tricky <strong>Mathematics</strong> which was finally arrived at with help from my mentor <a href="https://www.linkedin.com/in/oluwaseunadedire/" target="_blank">Oluwaseun Adedire</a>.</p>
		`,
		githublink: "https://github.com/davidobodo/developer-of-the-year",
		roles: ["fe"],
		sitelink: "https://davidobodo.github.io/developer-of-the-year/",
		tech: ["html", "css", "sass", "javascript", "ghpages"],
		bgImage: "/images/projects/developer.png",
		bgColor: COLORS[2],
		type: TYPES[3],
	},
	{
		id: "shortly",
		title: "Shortly",
		details: `<p>In the early stages of my career, I leveraged <a href="https://www.frontendmentor.io/">Frontend Mentor</a> which was very helpful in building me up.</p>
		<p>This project involved building a static reponsive clone of a UI and plugging it to an API endpoint that helps shorten long url links. Can't say for certain if the API ENDPOINT still returns a response as at today.</p>
		<p>You can check out the project instructions <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G/hub/url-shortening-api-landing-page-XxrpDIAz" target="_blank">here</a>.</p>
		`,
		githublink: "https://github.com/davidobodo/FEM-shortly",
		roles: ["fe"],
		sitelink: "https://davidobodo.github.io/FEM-shortly/",
		tech: ["html", "css", "sass", "typescript", "ghpages"],
		bgImage: "/images/projects/shortly.png",
		bgColor: COLORS[3],
		type: TYPES[3],
	},
	{
		id: "bookmark",
		title: "Bookmark",
		details: `<p>In the early stages of my career, I leveraged <a href="https://www.frontendmentor.io/">Frontend Mentor</a> which was very helpful in building me up.</p>
		<p>This project involved building a static reponsive clone of a UI.</p>
		<p>You can check out the project instructions <a href="https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158/hub/bookmark-landing-page-Xa4U_uHY" target="_blank">here</a>.</p>
		`,
		roles: ["fe"],
		githublink: "https://github.com/davidobodo/FEM-bookmark-landing-page",
		sitelink: "https://davidobodo.github.io/FEM-bookmark-landing-page/",
		tech: ["html", "css", "sass", "typescript", "ghpages"],
		bgImage: "/images/projects/bookmark.png",
		bgColor: COLORS[0],
		type: TYPES[3],
	},
	{
		id: "drum-machine",
		title: "Drum Machine",
		details: `<p>Simple drum machine inspired by <a href="https://javascript30.com/">Wes Bos's Javascript 30</a> </p>`,
		githublink: "https://github.com/davidobodo/drumMachine",
		roles: ["fe"],
		sitelink: "https://davidobodo.github.io/drumMachine/",
		tech: ["html", "css", "javascript"],
		bgImage: "/images/projects/drum-machine.png",
		bgColor: COLORS[2],
		type: TYPES[3],
	},

	{
		id: "pomodoro-clock",
		title: "Pomodoro clock",
		details: `<p>Pomodoro Clock, required by <a href="https://www.freecodecamp.org/" target="_blank">freecodecamp</a> to get a certificate </p>`,
		githublink: "https://github.com/davidobodo/pomodoroClock",
		roles: ["fe"],
		sitelink: "https://pomodoroclock.now.sh/",
		tech: ["react", "css", "nowsh"],
		bgImage: "/images/projects/pomodoro.png",
		bgColor: COLORS[3],
		type: TYPES[3],
	},
	// {
	// 	id: "quiz-ninja",
	// 	title: "Quiz ninja",
	// 	details: "How well do you know super heroes real names?",
	// 	githublink: "",
	// 	roles: [],
	// 	sitelink: "https://davidobodo.github.io/Learning-javascript-quiz-ninja/",
	// 	tech: ["react", "typescript", "redux", "styledComponents"],
	// 	bgImage: "/images/projects/quiz-ninja.png",
	// 	bgColor: COLORS[0],
	// 	type: TYPES[2],
	// },
	{
		id: "freebies",
		title: "Freebies",
		details: `<p>A static desktop clone of the <a href="https://freebies.bypeople.com/">Freebies</a> website. The motivation for this, was getting the whole moving items based on the mouse cursor position.</p>`,
		githublink: "https://github.com/davidobodo/freebies",
		roles: ["fe"],
		sitelink: "https://davidobodo.github.io/freebies/",
		tech: ["html", "css", "javascript"],
		bgImage: "/images/projects/freebies.png",
		bgColor: COLORS[1],
		type: TYPES[3],
	},
	{
		id: "pv1",
		title: "Portfolio v1",
		details: "<p>My very own first ever portfolio website</P>",
		githublink: "https://github.com/davidobodo/portfolio",
		roles: ["fe"],
		sitelink: "https://davidobodo.github.io/portfolio/",
		tech: ["html", "css", "javascript", "jquery", "ghpages"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "pv2",
		title: "Portfolio v2",
		details: "<p>My Second portfolio web site</p>",
		githublink: "https://github.com/davidobodo/portfolio-v2",
		roles: ["fe"],
		sitelink: "https://davidobodo.github.io/portfolio/",
		tech: ["react", "typescript", "redux", "styledcomponents", "nowsh"],
		bgImage: "/images/projects/pv-1.png",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "tgwt",
		title: "GSAP with Three.js",
		details: `<p>Venturing into the world of GSAP and Three.js is definitely always challenging and fun. Had to learn a little bit of <a href="https://www.blender.org/" _blank="">Blender</a> in order to customize the 3D model to suite my need.</p>
		<p>Definitely check out <a href="https://www.youtube.com/c/BlenderGuruOfficial" target="_blank">Blender Guru</a> and his hilarious yet educative <a href="https://www.youtube.com/watch?v=nIoXOplUvAw&list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD" target="_blank">Doughnut Tutorials</a> 😂</p>
		<p>Also, I believe its worth mentioning, that <a href="https://sketchfab.com/" target="_blank">Sketchfab</a> is an awesome place to get 3D models as that was where I got <a href="" target="_blank">this</a> from</p>
		`,
		githublink: "",
		roles: ["fe"],
		sitelink: "",
		tech: ["html", "css", "javascript", "gsap", "threejs"],
		bgImage: "",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "weather",
		title: "Weather Application",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "",
		tech: ["gsap", "three.js"],
		bgImage: "",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "prodeus-editor",
		title: "Prodeus ckeditor",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "",
		tech: ["gsap", "three.js"],
		bgImage: "",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "bloom",
		title: "Bloom",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "",
		tech: ["gsap", "three.js"],
		bgImage: "",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "chugg",
		title: "Chugg",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "",
		tech: ["gsap", "three.js"],
		bgImage: "",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "private-lattice",
		title: "Private Lattice",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "",
		tech: ["gsap", "three.js"],
		bgImage: "",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	// {
	// 	id: "tgwt",
	// 	title: "Number Guesser(A play with React Native)",
	// 	details: "My first portfolio site",
	// 	githublink: "",
	// 	roles: [],
	// 	sitelink: "",
	// 	tech: ["gsap", "three.js"],
	// 	bgImage: "",
	// 	bgColor: COLORS[2],
	// 	type: TYPES[1],
	// },
	{
		id: "oppo",
		title: "OPPO Redefinition Contest",
		details: "My first portfolio site",
		githublink: "",
		roles: [],
		sitelink: "",
		tech: ["gsap", "three.js"],
		bgImage: "",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
	{
		id: "ozidi",
		title: "Ozidi/Agricpay",
		details: `
		<p><span>Ozidi</span> which later became <span>Agricpay</span>, was a promising startup which had a vision to <a>help small-scale farmers in "Nigeria" get access to loans.</a> It is of no news that in order for 
		any business to request for loans from banks and other loan agencies, the owner must have some form of <span>collateral to give</span> should in case the individual is not able to pay the loan. Unfortunately most smale scale farmers 
		do not have any collateral to give, hence the need for Agricpay.
		</p>
		<p>
		Agricpay aimed at solving this problem, by inculcating in the farmers mindset the <span>habit of saving</span>. Using this approach meant in the long run the farmer would be borrowing his/her own money
		</p>

		<p>I worked as the <span>"main" frontend developer responsible for the entire ui/ux as well as about 80% of the entire frontend </span> , together with <a href="https://www.linkedin.com/in/godinson/" target="_blank">Joseph Godwin (full stack developer)</a> and <a href="https://www.linkedin.com/in/oluwaferanmiadetunji/" target="_blank">Adetunji Oluwaferanmi (full stack developer)</a>, at the <a href="https://www.enye.tech/" target="_blank">Enye Cohort 4 internship</a>, we set out to build a 
		fully functional dashboard to help with Agricpays vision.
		</p>
		<div>
			<p>Some of the features included:</p>
			<ul>
				<li>- Admin authentication</li>
				<li>- Ability to generate recharge card numbers. (i.e Farmers save by buying reacharge cards)</li>
				<li>- History of all recharge cards generated</li>
				<li>- Farmers data</li>
			</ul>
		</div>

		<p>Unfortunately, not all startups reach the "promise land" irrespective of a solid technology, because there are more things asides from the tech involved in the success of a business. So the live links are currently down, however for curiousity sake 
		I believe you could still visit <a href="https://mobile.twitter.com/agricpay" target="_blank">Twitter</a> as well as <a href="https://www.instagram.com/agricpay/" target="_blank">Instagram</a>
		</p>

		<p><span>Project span: July 2020 - September 2020.</span></p>
		`,
		roles: ["design", "fe"],
		sitelink: "",
		tech: ["react", "redux", "typescript", "materialui", "ga", "graphql", "enzyme", "jest"],
		bgImage: "",
		bgColor: COLORS[2],
		type: TYPES[1],
	},
];
