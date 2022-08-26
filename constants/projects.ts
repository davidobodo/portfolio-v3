import { TProject } from "#/types";

const COLORS = ["#dcd0c2", "#e2d1d9", "#b1a994", "#373737"];
const TYPES = ["Web Application", "Website", "Learn from Tutorial", "Experiments"];

export const PROJECTS: TProject[] = [
	{
		id: "prodeus",
		title: "Prodeus",
		details: `
		<p>Web application equivalent of the  <a href="https://chrome.google.com/webstore/detail/prodeus/aglakbhkijgpmoploegcpnbnedgiampn" target="_blank">Prodeus Chrome Extension</a>, but with more features.
		This has to be one of my proudest projects, because the feature list cuts across some very challenging and exciting frontend sectors. </p>
		`,
		responsibilities: `
		<ul>
			<li><span>Pixel perfect delivery</span> of around <span>59 pages</span> with 20 having 3 different unique views based on mode user views app (i.e standard mode, organization student mode, organization admin mode). In addition to 
			that, app has about <span>14 unique modals</span> and users can view the entire app in both <span>light and dark mode</span>.</li>
			<li>Intelligent cache usage and cache invalidation with <a href="https://react-query-v3.tanstack.com/" target="_blank">React Query</a></li>
			<li>Loading <span>infinite data</span> in both single column layouts (like instagram, facebook and twitter) as well as multi column layouts (like pinterest).
			
			<li>Responsible for about <span>98%</span> of the entire frontend architecture and codebase.</li>
		</ul>
		`,

		roles: ["fe"],
		sitelink: "https://www.prodeus.co/",
		tech: ["typescript", "react", "reactquery", "redux", "styledcomponents", "html", "css", "sass", "storybook", "rtl"],
		type: "Web Application",
		bgColor: "#f4efe7",
		media: [
			{
				type: "image",
				source: "/images/projects/prodeus/dashboard-light.jpg",
			},
			{
				type: "image",
				source: "/images/projects/prodeus/dashboard-dark.jpg",
			},
			{
				type: "image",
				source: "/images/projects/prodeus/portfolio.jpg",
			},
			{
				type: "image",
				source: "/images/projects/prodeus/discover.jpg",
			},
			{
				type: "image",
				source: "/images/projects/prodeus/skills.jpg",
			},
		],
	},
	{
		id: "cadmils",
		title: "Cadmils Consulting",
		details: `
		<p>Freelance contract to setup the entire web presence for cadmils consulting agency. Collaborated with  <a href="https://www.linkedin.com/in/harmony-orakpoyovwuru-1716b117a/" target="_blank">Harmony Orakpoyovwuru</a> to achieve the entire design of the website</p>
		`,
		responsibilities: `
		<ul>
			<li>Designed <span>3 out of the 6 pages</span> on the website using Figma</li>
			<li>Converted all mockup designs into <span>pixel perfect pages</span> for all screen sizes</li>
			<li>Set up the backend <span>mailing service</span> as well as company emails</li>
		</ul>
		`,

		roles: ["design", "fe", "be"],
		sitelink: "https://www.cadmils.com/",
		tech: ["html", "css", "sass", "javascript", "nodejs", "expressjs", "heroku", "sendgrid"],
		type: "Website",
		bgColor: "#e2d1d9",
		media: [
			{
				type: "image",
				source: "/images/projects/cadmils/home.jpg",
			},
		],
	},
	{
		id: "medic-finder",
		title: "Medic finder",
		details: `
		<p>Easily find Hospitals, Clinics, Pharmacies and Health care centers around any place. This project was built as a requirement to get into the <a href="https://www.enye.tech/" target="_blank">enye</a> internship programme, however it's of no news
		that its important is far beyond just as a requirement to get into an internship.
		</p>
		<p>Initial iteration was built with a full authentication process as well as a backend infrastructure to store users credentials and users search history. However for easy accessibility for everyone these have been removed in the current iteration.
		 </p>
		`,
		responsibilities: `
		<ul>
			<li>Designed the entire application using figma</li>
			<li>Converted all mockup designs into <span>pixel perfect pages</span> for all screen sizes</li>
			<li>Implemented an authentication process flow using Firebase (Now deprecated in current iteration )</li>
			<li>Made use of Google's <a href="https://firebase.google.com" target="_blank">Cloud Firestore NoSQL database</a> to store user's previous searches (Now refactored in current iteration to use local storage)</li>
			<li>Integrated <a href="https://developers.google.com/maps" target="_blank">Google Maps Platform</a> to help give both autocomplete functionality when looking for places and display the map with the needed results</li>
			<li>Connect to database using GraphQL</li>
		</ul>
		`,
		tech: [
			"html",
			"css",
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
		type: "Web Application",
		bgColor: "#f0f6ff",
		githublink: "https://github.com/obododavid/Medic-Finder",
		sitelink: "https://medic-finder.netlify.app/",
		media: [
			{
				type: "image",
				source: "/images/projects/medic-finder/home.jpg",
			},
			{
				type: "image",
				source: "/images/projects/medic-finder/results.jpg",
			},
			{
				type: "image",
				source: "/images/projects/medic-finder/history.jpg",
			},
		],
	},
	{
		id: "private-lattice",
		title: "Private Lattice",
		details: `<p>While working at <a href="https://www.upwork.com/ag/mpaccione/" target="_blank">M.Paccione Designs and Developement</a>, I had the opportunity to add value as the main frontend developer in quite a couple of projects, amongst which is Private Lattice</p>`,
		githublink: "",
		roles: ["fe"],
		responsibilities: `
		<ul>
			<li>Convert Sketch Design into functional web application</li>
			<li>Connect frontend to the necessary backend endpoints</li>
		</ul>
		`,
		sitelink: "https://www.privatelattice.com/",
		tech: ["html", "css", "react", "sass"],
		bgColor: "#FF7943",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: "/images/projects/private-lattice/auth.jpg",
			},
			{
				type: "image",
				source: "/images/projects/private-lattice/home.jpg",
			},
		],
	},
	{
		id: "d-productivity",
		title: "d-productivity",
		details: `<p>Web-based Kanban-style list-making application just like <a href="https://trello.com/" target="_blank">Trello</a> or any other drag and drop productivity app.
		The main purpose of embarking on this project was to have a deeper understanding of the <span>HTML5 drag and drop API.</span></p>
			<p>Last updated on 25th February 2020.</p>
			`,
		responsibilities: `
		<ul>
			<li>Designed the home screen</li>
			<li>Implemented the drag and drop feature in two different ways</li>
				<ul>
					<li>Using the easy and wonderful <a href="https://www.npmjs.com/package/react-beautiful-dnd" target="_blank">react-beautiful-dnd</a> (First Iteration)</li>
					<li>Using the plain <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API" target="_blank">html5 dnd api</a> (Second Iteration)</li>
				</ul>
		</ul>
		`,
		roles: ["design", "fe"],
		sitelink: "https://d-productivity.vercel.app/",
		githublink: "https://github.com/obododavid/d-productivity",
		tech: ["html", "css", "react", "typescript", "redux", "styledcomponents"],
		type: "Web Application",
		bgColor: "#F6EEF9",
		media: [
			{
				type: "image",
				source: "/images/projects/d-productivity/home.jpg",
			},
		],
	},
	{
		id: "weather",
		title: "Weather Application",
		details: `<p> Created this weather application from design to coding as a test for a comppany. Has quite some rich features and is still has valid use. User can check the weather of various places after which they can bookmark certain places for easy access.</p>
		<p>In addition to that, it leverages local storage in order to give users the ability to even store notes for various places they search. Furthermore application is fully a PWA(Progressive app), so even when users are offline users can still see all their previous searches</p>
		`,
		githublink: "https://github.com/davidobodo/weather-app",
		roles: ["design", "fe"],
		responsibilities: `
		<ul>
			<li>Create design for web app</li>
			<li>Convert design into responsive web app</li>
			<li>Make app a  <span>Progressive Web App (PWA)</span></li>
		</ul>
		`,
		sitelink: "https://knowtheweatherdcs.netlify.app/",
		tech: ["html", "css", "react", "typescript", "styledcomponents", "rtl"],
		bgColor: "#fff",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: "/images/projects/weather/result.jpg",
			},
			{
				type: "image",
				source: "/images/projects/weather/home.jpg",
			},
		],
	},

	{
		id: "d-commerce",
		title: "d-commerce",
		details: `<p>When getting acclaimated with the features of a framework/technology or even a programming language, one of the applications one should try building is an ecommerce platform.</p>
		<p>This is because, an e-commerce platform has features that cut across a great deal of majority of <strong>what is possible</strong> in frontend. For this reason I set out to build this application when mastering react.js</p>
		<p>The UI was replicated from an online store. As this project was done quite a while ago I currently can't remember the exact name, if not I would have gien them their due credit </p>
		<p>Last updated on 4th July 2020.</p>
		`,
		githublink: "https://github.com/davidobodo/d-commerce",
		roles: ["fe", "be"],
		responsibilities: `
		<ul><li>Implemented all the requirements of an ecommerce site (i.e viewing items, adding to cart, proceeding to checkout e.t.c)</li></ul>
		`,
		sitelink: "https://d-commerce-99633.firebaseapp.com/",
		tech: ["html", "css", "sass", "javascript", "react", "nodejs", "expressjs", "heroku", "mongodb", "firebase"],
		bgColor: "#2e5c87",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: "/images/projects/d-commerce/home.jpg",
			},
			{
				type: "image",
				source: "/images/projects/d-commerce/item.jpg",
			},
			{
				type: "image",
				source: "/images/projects/d-commerce/cart.jpg",
			},
		],
	},

	{
		id: "prodeus-editor",
		title: "Prodeus ckeditor",
		details: `<p>While building <a href="/projects/prodeus">Prodeus web app</a>, there was a need to create a text editor. Despite the fact that there are many around, the requirement for a pixel perfect
		designed editor brought up the need to build a customized solution from the famous  <a href="https://ckeditor.com" target="_blank">ckeditor</a>.
		</p>
		<p>Project was later published as an <a href="https://www.npmjs.com/package/prodeus-editor" target="_blank">npm package here </a></p>
		`,
		githublink: "",
		responsibilities: `
		<ul>
			<li>Customize Ckeditor to suite the Prodeus desired design</li>
		</ul>
		`,
		roles: [],
		sitelink: "",
		tech: ["html", "css", "react", "javascript"],
		bgColor: "#000",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: "/images/projects/prodeus-editor/pic.jpg",
			},
		],
	},

	{
		id: "d-chat",
		title: "d-chat",
		details: `
		<p>It's of no news that majority of applications these days have the <span>"chatting" functionality</span> embedded into them, so this project was an attempt to understand how the "open connection idea" upon which the functionality is built upon works.
		I initial executed it using only <a href="https://firebase.google.com/" target="_blank">Firebase</a> but that was when I was unaware of <a href="https://socket.io/" target="_blank">Socket.io</a>, which is actually the real deal. <a href="https://socket.io/" target="_blank">Socket.io</a> is my "goto" these days for any 
		"open connection" functionality (e.g chat and realtime notifications)
		</p>
		<p>The authentication screen design is a "not so pixel perfect clone 😅" of <a href="https://dribbble.com/shots/5271131-Login-Sign-up-screen" target="_blank">Marcin Kohut</a> design  on Dribbble.</p>
		<p>Last updated on 5th July 2020.</p>
		`,
		responsibilities: `
		<ul>
			<li>Used skype chat UI has a reference for the design</li>
			<li>Ability to chat realtime with anyone online</li>
		</ul>
		`,
		roles: [],
		sitelink: "https://d-chat-98abe.firebaseapp.com/auth",
		githublink: "https://github.com/davidobodo/d-chat",
		tech: ["html", "css", "react", "typescript", "redux", "materialui", "firebase"],
		bgColor: "#fff",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: "/images/projects/d-chat/auth.jpg",
			},
		],
	},
	{
		id: "pv1",
		title: "Portfolio v1",
		details: `<p>My very own first ever portfolio website</P>
		<p>Last updated 21st September 2019</p>
		`,
		githublink: "https://github.com/davidobodo/portfolio",
		roles: ["design", "fe"],
		responsibilities: `
		<ul>
			<li>Create design for website</li>
			<li>Convert design into responsive web page</li>
		</ul>
		`,
		sitelink: "https://davidobodo.github.io/portfolio/",
		tech: ["html", "css", "javascript", "jquery", "ghpages"],
		bgColor: "#1c1d26",
		type: "Website",
		media: [
			{
				type: "image",
				source: "/images/projects/pv-1/home.jpg",
			},
		],
	},
	{
		id: "developer-of-the-year",
		title: "developer of the year",
		details: `<p>A static desktop clone of <a href="https://www.awwwards.com/" target="_blank">awwwards</a> awards site for the year 2020.</p>
		<p>The motivation to build this static clone was a desire to achieve the "VIEW NOMINEES CIRCULAR SECTION" at the bottom with just css and javascript😅.</p>
		<p>Trust me wasn't an easy process cause it involved some tricky <strong>Mathematics</strong> which was finally arrived at with help from my mentor <a href="https://www.linkedin.com/in/oluwaseunadedire/" target="_blank">Oluwaseun Adedire</a>.</p>
		<p>This is a static site and none of the call to actions are working</p>
		<p>Last updated on 15th February 2020.</p>
		`,
		githublink: "https://github.com/davidobodo/developer-of-the-year",
		roles: ["fe"],
		responsibilities: ``,
		sitelink: "https://davidobodo.github.io/developer-of-the-year/",
		tech: ["html", "css", "sass", "javascript", "ghpages"],
		bgColor: "#EACEA8",
		type: "Experiment",
		media: [
			{
				type: "image",
				source: "/images/projects/developer/home.jpg",
			},
		],
	},
	{
		id: "shortly",
		title: "Shortly",
		details: `<p>In the early stages of my career, I leveraged <a href="https://www.frontendmentor.io/">Frontend Mentor</a> which was very helpful in building me up.</p>
		<p>This project involved building a static reponsive clone of a UI and plugging it to an API endpoint that helps shorten long url links. Can't say for certain if the API ENDPOINT still returns a response as at today.</p>
		<p>You can check out the project instructions <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G/hub/url-shortening-api-landing-page-XxrpDIAz" target="_blank">here</a>.</p>
		<p>Last updated on 19th February 2020.</p>
		`,
		githublink: "https://github.com/davidobodo/FEM-shortly",
		roles: ["fe"],
		responsibilities: `
		<ul>
			<li>Convert mockup into web page</li>
			<li>Connect form to endpoint (Like I mentioned above, not certain if the API still works currently 😅)</li>
		</ul>
		`,
		sitelink: "https://davidobodo.github.io/FEM-shortly/",
		tech: ["html", "css", "sass", "typescript", "ghpages"],
		bgColor: COLORS[3],
		type: "Website",
		media: [
			{
				type: "image",
				source: "/images/projects/shortly/desktop-preview.jpg",
			},
		],
	},

	{
		id: "pv2",
		title: "Portfolio v2",
		details: "<p>My second portfolio web site</p>",
		githublink: "https://github.com/davidobodo/portfolio-v2",
		roles: ["design", "fe"],
		responsibilities: `
		<ul>
			<li>Create design for website</li>
			<li>Convert design into responsive web page</li>
		</ul>
		`,
		sitelink: "https://www.obododavid.com",
		tech: ["html", "css", "react", "typescript", "styledcomponents", "nowsh"],
		bgColor: "",
		type: "Website",
		media: [
			{
				type: "image",
				source: "/images/projects/pv-2/home.jpg",
			},
		],
	},
	{
		id: "bookmark",
		title: "Bookmark",
		details: `<p>In the early stages of my career, I leveraged <a href="https://www.frontendmentor.io/">Frontend Mentor</a> which was very helpful in building me up.</p>
		<p>This project involved building a static reponsive clone of a UI.</p>
		<p>You can check out the project instructions <a href="https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158/hub/bookmark-landing-page-Xa4U_uHY" target="_blank">here</a>.</p>
		<p>Last updated on 25th February 2020.</p>
		`,
		roles: ["fe"],
		responsibilities: `
		<ul>
			<li>Convert mockup into responsive web page</li>
		</ul>
		`,
		githublink: "https://github.com/davidobodo/FEM-bookmark-landing-page",
		sitelink: "https://davidobodo.github.io/FEM-bookmark-landing-page/",
		tech: ["html", "css", "sass", "ghpages"],
		bgColor: COLORS[0],
		type: "Website",
		media: [
			{
				type: "image",
				source: "/images/projects/bookmark/desktop-preview.jpg",
			},
		],
	},
	{
		id: "drum-machine",
		title: "Drum Machine",
		details: `<p>Simple drum machine inspired by <a href="https://javascript30.com/">Wes Bos's Javascript 30</a> </p>
		<p>Last updated on 8th Sept 2019.</p>
		`,
		githublink: "https://github.com/davidobodo/drumMachine",
		roles: ["fe"],
		responsibilities: `
		<ul>
			<li>Convert mockup into responsive web page</li>
			<li>Connect respective clicks to their wav files</li>
		</ul>
		`,
		sitelink: "https://davidobodo.github.io/drumMachine/",
		tech: ["html", "css", "javascript"],
		bgColor: "#fff",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: "/images/projects/drum-machine/home.jpg",
			},
		],
	},
	{
		id: "freebies",
		title: "Freebies",
		details: `<p>A static desktop clone of the <a href="https://freebies.bypeople.com/" target="_blank">Freebies</a> website. The motivation for this, was achieving the moving items based on the mouse cursor position.</p>
		<p>Last updated 14th February 2020</p>
		`,
		githublink: "https://github.com/davidobodo/freebies",
		roles: ["fe"],
		responsibilities: `
		<ul>
			<li>Convert mockup into web page</li>
			<li>Connect mouse movement to svg positions</li>
		</ul>
		`,
		sitelink: "https://davidobodo.github.io/freebies/",
		tech: ["html", "css", "javascript"],
		bgColor: "#000",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: "/images/projects/freebies/home2.jpg",
			},
		],
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
				<li>Admin authentication</li>
				<li>Ability to generate recharge card numbers. (i.e Farmers save by buying reacharge cards)</li>
				<li>History of all recharge cards generated</li>
				<li>Farmers data</li>
			</ul>
		</div>

		<p>Unfortunately, not all startups reach the "promise land" irrespective of a solid technology, because there are more things asides from the tech involved in the success of a business. So the live links are currently down, however for curiousity sake
		I believe you could still visit <a href="https://mobile.twitter.com/agricpay" target="_blank">Twitter</a> as well as <a href="https://www.instagram.com/agricpay/" target="_blank">Instagram</a>
		</p>

		<p><span>Project span: July 2020 - September 2020.</span></p>
		`,
		roles: ["design", "fe"],
		sitelink: "",
		responsibilities: `
		<ul>
			<li>Create entire app UI/UX using Figma</li>
			<li>Convert about 80% of the design into functional responsive web app pages</li>
			<Li>Connect pages to their respective backend endpoints</li>
			<li>Use <span>Wordpress</span> to create a static publicly accessible web page for the company</li>
		</ul>
		`,
		tech: ["react", "redux", "typescript", "materialui", "ga", "graphql", "enzyme", "jest"],
		bgColor: "#56D686",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: "/images/projects/ozidi/generator.jpg",
			},
			{
				type: "image",
				source: "/images/projects/ozidi/reg.jpg",
			},
		],
	},
];
