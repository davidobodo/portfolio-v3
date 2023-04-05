import { TMediaFile, TMediaFormats, TProject, TRoles, TProjectType } from "#/types";
import { StaticImageData } from "next/image";
import TECH_STACKS from "#/constants/tech-stacks";

import prodeus1 from "#/public/proj-prodeus-dashboard-light.jpg";
import prodeus2 from "#/public/proj-prodeus-dashboard-dark.jpg";
import prodeus3 from "#/public/proj-prodeus-portfolio.jpg";
import prodeus4 from "#/public/proj-prodeus-discover.jpg";
import prodeus5 from "#/public/proj-prodeus-skills.jpg";
import cadmils from "#/public/proj-cadmils-home.jpg";
import medic1 from "#/public/proj-medic-home.jpg";
import medic2 from "#/public/proj-medic-results.jpg";
import medic3 from "#/public/proj-medic-history.jpg";
import lattice1 from "#/public/proj-lattice-auth.jpg";
import lattice2 from "#/public/proj-lattice-home.jpg";
import dprod from "#/public/proj-dprod-home.jpg";
import weather1 from "#/public/proj-weather-result.jpg";
import weather2 from "#/public/proj-weather-home.jpg";
import dcom1 from "#/public/proj-dcom-home.jpg";
import dcom2 from "#/public/proj-dcom-item.jpg";
import dcom3 from "#/public/proj-dcom-cart.jpg";
import prodeusEditor from "#/public/proj-prodeuseditor-pic.jpg";
import dchat from "#/public/proj-dchat-auth.jpg";
import pv1 from "#/public/proj-pv1-home.jpg";
import devofyear from "#/public/proj-dev-home.jpg";
import shortly from "#/public/proj-shortly-desktop-preview.jpg";
import pv2 from "#/public/proj-pv2-home.jpg";
import pv3 from "#/public/proj-pv3-home.jpg";
import bookmark from "#/public/proj-bookmark-desktop-preview.jpg";
import drum from "#/public/proj-drum-home.jpg";
import freebies from "#/public/proj-freebies-home.jpg";
import ozidi1 from "#/public/proj-ozidi-generator.jpg";
import ozidi2 from "#/public/proj-ozidi-reg.jpg";
import phintnftwhitelist1 from "#/public/proj-phitnftwhitelist-joined.jpg";
import phintnftwhitelist2 from "#/public/proj-phitnftwhitelist-pending.jpg";
import phitnft1 from "#/public/proj-phitnft-joined.jpg";
import phitnft2 from "#/public/proj-phitnft-pending.jpg";
import laptopPhone from "#/public/proj-laptopphone-index.gif";
import gamespeak1 from "#/public/proj-gamespeak-connections.png";
import gamespeak2 from "#/public/proj-gamespeak-home.png";
import gamespeak3 from "#/public/proj-gamespeak-notifications.png";
import gamespeak4 from "#/public/proj-gamespeak-profile.png";
import gamespeak5 from "#/public/proj-gamespeak-settings.png";
import gamespeak6 from "#/public/proj-gamespeak-login.png";

class Project {
	id = "";
	title = "";
	details = "";
	responsibilities = "";
	roles: TRoles[] = [];
	sitelink = "";
	tech: Array<keyof typeof TECH_STACKS> = [];
	type: TProjectType;
	bgColor = "";
	media: TMediaFile[] = [];

	constructor({ id, title, details, responsibilities, roles, sitelink, tech, type, bgColor, media }: TProject) {
		this.id = id;
		this.title = title;
		this.details = details;
		this.responsibilities = responsibilities;
		this.roles = roles;
		this.sitelink = sitelink;
		this.tech = tech;
		this.type = type;
		this.bgColor = bgColor || "";
		this.media = media;
	}
}

function createMediaFile(type: TMediaFormats) {
	return function (source: StaticImageData) {
		return {
			type,
			source,
		};
	};
}

const createImageFile = createMediaFile("image");

const PROJECTS: TProject[] = [
	new Project({
		id: "gamespeak",
		title: "Gamespeak",

		roles: ["fe"],
		sitelink: "https://beta-app.gamespeak.gg/",
		type: "Web Application",
		bgColor: "#1F032C",
		tech: [
			"html",
			"css",
			"sass",
			"javascript",
			"typescript",
			"nextjs",
			"recoil",
			"reactquery",
			"jest",
			"rtl",
			"chakraui",
			"git",
		],
		media: [
			createImageFile(gamespeak6),
			createImageFile(gamespeak4),
			createImageFile(gamespeak5),
			createImageFile(gamespeak1),
			createImageFile(gamespeak2),
			createImageFile(gamespeak3),
		],
		details: `
			<p>Social media platform for gamers. Having all the social media features you know and love, but streamlining it for the lovely community of gamers</p>
			<p>Visit <a href="https://beta-app.gamespeak.gg/" target="_blank">Gamespeak beta version</a> now to enjoy all the awesome features </p>
		`,
		responsibilities: `
		<ul>
		 <li>Converted over 20+ UI/UX designs into fully responsive (desktop, laptop, tablets), browser compatible web application pages</li>
		 <li>Connected over 70+ Restful APIs in order to make the application dynamic</li>
		 <li>Hooked up websocket connection, for realtime updates for messages and notifications</li>
		 <li>Created dark mode for all pages in the application</li>
		 <li>Added Progressive Web Application feature to the application</li>
		 <li>Wrote 50+ Unit and Integration tests to achieve over 80% coverage of the application using Jest and React Testing Library</li>
		 <li>Used effective caching strategies to improve performance of the application by 50%, due to reduction in frequency of API calls to the backend</li>
		 <li>Structured and architected the entire frontend codebase with over 1260+ files for maximum scalability and maintainability</li>
		</ul>
		`,
	}),
	{
		id: "prodeus",
		title: "Prodeus",
		details: `
		<p>Web application equivalent of the  <a href="https://chrome.google.com/webstore/detail/prodeus/aglakbhkijgpmoploegcpnbnedgiampn" target="_blank">Prodeus Chrome Extension</a> but with more features.
		This has to be one of my proudest projects because the feature list cuts across some very challenging and exciting frontend sectors. </p>
		`,
		responsibilities: `
		<ul>
			<li><span>Pixel perfect delivery</span> of around <span>59 pages</span> with 20 having 3 different unique views based on mode user views application (i.e standard mode, organization student mode, organization admin mode). 
			In addition to 
			that, the application has about <span>14 unique modals</span> and users can view the entire app in both <span>light and dark mode</span>.</li>
			<li>Intelligent cache usage and cache invalidation with <a href="https://react-query-v3.tanstack.com/" target="_blank">React Query</a></li>
			<li>Loading <span>infinite data</span> in both single column layouts (like instagram, facebook and twitter) as well as multi column layouts (like pinterest).
			
			<li>Responsible for about <span>98%</span> of the entire frontend architecture and codebase.</li>
		</ul>
		`,
		roles: ["fe"],
		sitelink: "https://www.prodeus.co/",
		tech: [
			"html",
			"css",
			"sass",
			"javascript",
			"typescript",
			"react",
			"reactquery",
			"redux",
			"styledcomponents",
			"storybook",
			"rtl",
			"jest",
			"googleanalytics",
		],
		type: "Web Application",
		bgColor: "#f4efe7",
		media: [
			{
				type: "image",
				source: prodeus1,
			},
			{
				type: "image",
				source: prodeus2,
			},
			{
				type: "image",
				source: prodeus3,
			},
			{
				type: "image",
				source: prodeus4,
			},
			{
				type: "image",
				source: prodeus5,
			},
		],
	},
	{
		id: "cadmils",
		title: "Cadmils Consulting",
		details: `
		<p>This was a freelance contract to setup the entire web presence for Cadmils Consulting Agency. Collaborated with 
		<a href="https://www.linkedin.com/in/harmony-orakpoyovwuru-1716b117a/" target="_blank">Harmony Orakpoyovwuru</a> to achieve the entire design of the website.</p>
		`,
		responsibilities: `
		<ul>
			<li>Designed <span>3 out of the 6 pages</span> on the website using Figma.</li>
			<li>Converted all mockup designs into <span>pixel perfect pages</span> for all screen sizes.</li>
			<li>Set up the backend <span>mailing service</span> as well as company emails.</li>
		</ul>
		`,

		roles: ["design", "fe", "be"],
		sitelink: "https://www.cadmils.com/",
		tech: ["html", "css", "sass", "javascript", "jquery", "nodejs", "expressjs", "heroku", "sendgrid"],
		type: "Website",
		bgColor: "#86868b",
		media: [
			{
				type: "image",
				source: cadmils,
			},
		],
	},
	{
		id: "medic-finder",
		title: "Medic finder",
		details: `
		<p>Easily find Hospitals, Clinics, Pharmacies and Health care centers around any place. This project was built as a requirement to get into the <a href="https://www.enye.tech/" target="_blank">enye</a> internship programme, 
		however it's importance is far beyond just a requirement to get into the internship.
		</p>
		<p>This project has <span>two iterations</span>. Initial iteration was built with a full authentication process as well as a backend infrastructure to store users credentials and users search history. 
		However, for easy accessibility, these have been removed in the current iteration.
		 </p>
		`,
		responsibilities: `
		<ul>
			<li>Designed the entire application using figma.</li>
			<li>Converted all mockup designs into <span>pixel perfect pages</span> for all screen sizes.</li>
			<li>Implemented an authentication process flow using Firebase (now deprecated in current iteration).</li>
			<li>Made use of Google's <a href="https://firebase.google.com" target="_blank">Cloud Firestore NoSQL database</a> to store users previous searches (now refactored in current iteration to use local storage).</li>
			<li>Integrated <a href="https://developers.google.com/maps" target="_blank">Google Maps Platform</a> to help give both autocomplete functionality when looking for places and to display the map with the needed results.</li>
			<li>Connected to database using GraphQL.</li>
		</ul>
		`,
		tech: [
			"figma",
			"html",
			"css",
			"sass",
			"react",
			"javascript",
			"typescript",
			"redux",
			"materialui",
			"firebase",
			"graphql",
			"apolloclient",
			"nodejs",
			"expressjs",
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
				source: medic1,
			},
			{
				type: "image",
				source: medic2,
			},
			{
				type: "image",
				source: medic3,
			},
		],
	},
	{
		id: "private-lattice",
		title: "Private Lattice",
		details: `<p>While working at <a href="https://www.upwork.com/ag/mpaccione/" target="_blank">M.Paccione Designs and Developement</a>, 
		I had the opportunity to add value as the main frontend developer in quite a couple of projects, amongst which is Private Lattice.</p>`,
		githublink: "",
		roles: ["fe"],
		responsibilities: `
		<ul>
			<li>Converted Sketch Designs into a functional web application.</li>
			<li>Connected the frontend to the necessary backend API endpoints.</li>
		</ul>
		`,
		sitelink: "https://www.privatelattice.com/",
		tech: ["html", "css", "javascript", "react", "sass", "semanticui"],
		bgColor: "#FF7943",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: lattice1,
			},
			{
				type: "image",
				source: lattice2,
			},
		],
	},
	{
		id: "d-productivity",
		title: "d-productivity",
		details: `<p>Web-based Kanban-style list-making application, just like <a href="https://trello.com/" target="_blank">Trello</a> or any other drag and drop productivity app.
		The main purpose of embarking on this project was to have a better understanding of the <span>HTML5 drag and drop API.</span></p>
			<p>Last updated on the 25th of February, 2020.</p>
			`,
		responsibilities: `
		<ul>
			<li>Designed the home screen.</li>
			<li>Implemented the drag and drop feature in two different ways:</li>
				<ul>
					<li>Using the easy and wonderful <a href="https://www.npmjs.com/package/react-beautiful-dnd" target="_blank">react-beautiful-dnd</a> (first iteration).</li>
					<li>Using the plain <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API" target="_blank">html5 dnd api</a> (second iteration).</li>
				</ul>
		</ul>
		`,
		roles: ["design", "fe"],
		sitelink: "https://d-productivity.vercel.app/",
		githublink: "https://github.com/obododavid/d-productivity",
		tech: ["html", "css", "sass", "react", "javascript", "typescript", "redux", "styledcomponents"],
		type: "Web Application",
		bgColor: "#F6EEF9",
		media: [
			{
				type: "image",
				source: dprod,
			},
		],
	},
	{
		id: "weather",
		title: "Weather Application",
		details: `<p>I created this weather application from design to coding, as a test for a company. 
		A user can check the weather of various places, after which they can bookmark certain places for easy access.</p>
		<p>In addition to that, it leverages local storage in order to give users the ability to store notes for various places they search. Furthermore, the application is fully a PWA (Progressive Web App), so even when users are offline, users can still see all their previous searches.</p>
		`,
		githublink: "https://github.com/davidobodo/weather-app",
		roles: ["design", "fe"],
		responsibilities: `
		<ul>
			<li>Created the design for the web application.</li>
			<li>Converted designs into responsive web application.</li>
			<li>Made app a <span>Progressive Web App (PWA)</span>.</li>
		</ul>
		`,
		sitelink: "https://knowtheweatherdcs.netlify.app/",
		tech: ["html", "css", "sass", "react", "javascript", "typescript", "styledcomponents", "rtl", "jest"],
		bgColor: "#fff",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: weather1,
			},
			{
				type: "image",
				source: weather2,
			},
		],
	},

	{
		id: "d-commerce",
		title: "d-commerce",
		details: `<p>When getting acclimated with the features of a framework/technology or even a programming language, one of the applications one should try to build is an e-commerce platform.</p>
		<p>This is because, an e-commerce platform has features that cut across a great deal of <strong>what is possible</strong> in frontend. For this reason, I set out to build this application when mastering react.js.</p>
		<p>The UI was replicated from an online store. But as this project was done quite a while ago, I currently cannot remember the exact name of the online store, if not, I would have given them their due credit.</p>
		<p>Last updated on the 4th of July, 2020.</p>
		`,
		githublink: "https://github.com/davidobodo/d-commerce",
		roles: ["fe", "be"],
		responsibilities: `
		<ul>
			<li>Created a pixel perfect replica of the UI.</li>
			<li>Implemented all the requirements of an ecommerce site (i.e viewing items, adding to cart, proceeding to checkout, authentication e.t.c).</li>
		</ul>
		`,
		sitelink: "https://d-commerce-99633.firebaseapp.com/",
		tech: [
			"html",
			"css",
			"sass",
			"styledcomponents",
			"javascript",
			"typescript",
			"react",
			"nodejs",
			"expressjs",
			"heroku",
			"mongodb",
			"firebase",
		],
		bgColor: "#2e5c87",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: dcom1,
			},
			{
				type: "image",
				source: dcom2,
			},
			{
				type: "image",
				source: dcom3,
			},
		],
	},

	{
		id: "pv-3",
		title: "Portfolio V3",
		details: `<p>Current portfolio website.</p>`,
		githublink: "",
		responsibilities: `
		<ul>
			<li>Designed entire site.</li>
			<li>Translated designs into high quality responsive code</li>
			<li>Made site a Progressice Web Application(PWA).</li>
			<li>Enabled google analytics</li>
			<li>Used Next.js api routes feature to implement the sendgrid backend for the mailing service.</li>
			<li>Configured Google recaptcha to prevent spamming of mail.</li>
		</ul>
		`,
		roles: ["design", "fe", "be"],
		sitelink: "https://www.davidobodo.com",
		tech: [
			"html",
			"css",
			"sass",
			"cssModules",
			"react",
			"nextjs",
			"javascript",
			"typescript",
			"gsap",
			"googleanalytics",
			"sendgrid",
			"jest",
		],
		bgColor: "#000",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: pv3,
			},
		],
	},

	{
		id: "prodeus-editor",
		title: "Prodeus ckeditor",
		details: `<p>While I was building <a href="/projects/prodeus">Prodeus web app</a>, there was a need for me to create a text editor. Despite the fact that there are many around, the requirement for a pixel perfect
		designed editor brought up the need to build a customized solution from the famous  <a href="https://ckeditor.com" target="_blank">ckeditor</a>.
		</p>
		<p>The project was later published as an <a href="https://www.npmjs.com/package/prodeus-editor" target="_blank">npm package here.</a></p>
		`,
		githublink: "",
		responsibilities: `
		<ul>
			<li>Customized Ckeditor to suite the Prodeus desired design.</li>
			<li>Published project as an npm package.</li>
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
				source: prodeusEditor,
			},
		],
	},

	{
		id: "d-chat",
		title: "d-chat",
		details: `
		<p>It is no news that majority of applications these days have the <span>"chatting" functionality</span> embedded in them. So this project was an attempt to understand how the "open connection idea", upon which the functionality works is built.
		Due to my obliviousness of <a href="https://socket.io/" target="_blank">Socket.io</a> at the time of creation, I executed this project using only <a href="https://firebase.google.com/" target="_blank">Firebase</a>. Now Socket.io is my go-to for 
		any "open connection" functionality (e.g chat and realtime notifications).
		</p>
		<p>The authentication screen design is a "not so pixel perfect clone" of <a href="https://dribbble.com/shots/5271131-Login-Sign-up-screen" target="_blank">Marcin Kohut's</a> design  on Dribbble.</p>
		<p>Last updated on the 5th of July, 2020.</p>
		`,
		responsibilities: `
		<ul>
			<li>Used skype chat UI has a reference for the design.</li>
			<li>Added the ability to chat realtime with anyone online.</li>
		</ul>
		`,
		roles: [],
		sitelink: "https://d-chat-98abe.firebaseapp.com/auth",
		githublink: "https://github.com/davidobodo/d-chat",
		tech: ["html", "css", "sass", "react", "javascript", "redux", "materialui", "firebase"],
		bgColor: "#fff",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: dchat,
			},
		],
	},
	{
		id: "pv1",
		title: "Portfolio v1",
		details: `<p>My very own first ever portfolio website.</P>
		<p>Last updated on the 21st of September, 2019</p>
		`,
		githublink: "https://github.com/davidobodo/portfolio",
		roles: ["design", "fe"],
		responsibilities: `
		<ul>
			<li>Created the design for website.</li>
			<li>Converted the design into a responsive web page.</li>
		</ul>
		`,
		sitelink: "https://davidobodo.github.io/portfolio/",
		tech: ["html", "css", "sass", "javascript", "jquery", "ghpages"],
		bgColor: "#1c1d26",
		type: "Website",
		media: [
			{
				type: "image",
				source: pv1,
			},
		],
	},
	{
		id: "developer-of-the-year",
		title: "Developer of the year",
		details: `<p>A static desktop clone of <a href="https://www.awwwards.com/" target="_blank">awwwards</a> awards site for the year 2020.</p>
		<p>The motivation behind building this static clone was the desire to achieve the "VIEW NOMINEES CIRCULAR SECTION" at the bottom of the design with just css and javascript😅.</p>
		<p>Trust me, it wasn't an easy process because I encountered tricky mathematical problems, which were later solved with the help of my mentor <a href="https://www.linkedin.com/in/oluwaseunadedire/" target="_blank">Oluwaseun Adedire</a>.</p>
		<p>Note that this is a static site hence, none of the call to actions are working.</p>
		<p>Last updated on the 15th of February, 2020.</p>
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
				source: devofyear,
			},
		],
	},
	{
		id: "shortly",
		title: "Shortly",
		details: `<p>In the early stages of my career, I leveraged <a href="https://www.frontendmentor.io/">Frontend Mentor</a> which was very helpful in building me up.</p>
		<p>This project involved building a static reponsive clone of a UI and plugging it to an API endpoint that helps shorten long url links. I cannot say for certain if the API ENDPOINT still returns a response as at the point you are reading this.</p>
		<p>You can check out the project instructions <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G/hub/url-shortening-api-landing-page-XxrpDIAz" target="_blank">here</a>.</p>
		<p>Last updated on the 19th of February, 2020.</p>
		`,
		githublink: "https://github.com/davidobodo/FEM-shortly",
		roles: ["fe"],
		responsibilities: `
		<ul>
			<li>Converted mockup into web page</li>
			<li>Connected form to endpoint (Like I mentioned above, not certain if the API still works currently 😅)</li>
		</ul>
		`,
		sitelink: "https://davidobodo.github.io/FEM-shortly/",
		tech: ["html", "css", "sass", "javascript", "ghpages"],
		bgColor: "#000",
		type: "Website",
		media: [
			{
				type: "image",
				source: shortly,
			},
		],
	},

	{
		id: "pv2",
		title: "Portfolio v2",
		details: "<p>My second portfolio website</p>",
		githublink: "https://github.com/davidobodo/portfolio-v2",
		roles: ["design", "fe"],
		responsibilities: `
		<ul>
			<li>Created design for website</li>
			<li>Converted design into responsive web page</li>
		</ul>
		`,
		sitelink: "https://www.obododavid.com",
		tech: ["html", "css", "sass", "react", "javascript", "typescript", "styledcomponents", "googleanalytics"],
		bgColor: "",
		type: "Website",
		media: [
			{
				type: "image",
				source: pv2,
			},
		],
	},
	{
		id: "bookmark",
		title: "Bookmark",
		details: `<p>In the early stages of my career, I leveraged <a href="https://www.frontendmentor.io/">Frontend Mentor</a>, which was very helpful in building me up.</p>
		<p>This project involved building a static reponsive clone of a UI.</p>
		<p>You can check out the project instructions <a href="https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158/hub/bookmark-landing-page-Xa4U_uHY" target="_blank">here</a>.</p>
		<p>Last updated on the 25th of February, 2020.</p>
		`,
		roles: ["fe"],
		responsibilities: `
		<ul>
			<li>Converted mockup into responsive web page</li>
		</ul>
		`,
		githublink: "https://github.com/davidobodo/FEM-bookmark-landing-page",
		sitelink: "https://davidobodo.github.io/FEM-bookmark-landing-page/",
		tech: ["html", "css", "sass", "ghpages"],
		bgColor: "#000",
		type: "Website",
		media: [
			{
				type: "image",
				source: bookmark,
			},
		],
	},
	{
		id: "drum-machine",
		title: "Drum Machine",
		details: `<p>Simple drum machine inspired by <a href="https://javascript30.com/" target="_blank">Wes Bos's Javascript 30.</a> </p>
		<p>Last updated on the 8th of September, 2019.</p>
		`,
		githublink: "https://github.com/davidobodo/drumMachine",
		roles: ["fe"],
		responsibilities: `
		<ul>
			<li>Converted mockup into responsive web page.</li>
			<li>Connected respective clicks to their wav files.</li>
		</ul>
		`,
		sitelink: "https://davidobodo.github.io/drumMachine/",
		tech: ["html", "css", "javascript"],
		bgColor: "#fff",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: drum,
			},
		],
	},
	{
		id: "freebies",
		title: "Freebies",
		details: `<p>This is a static desktop clone of the <a href="https://freebies.bypeople.com/" target="_blank">Freebies</a> website. The motivation behind this was to achieve the ability to move items based on the mouse cursor position.</p>
		<p>Last updated on the 14th of February, 2020</p>
		`,
		githublink: "https://github.com/davidobodo/freebies",
		roles: ["fe"],
		responsibilities: `
		<ul>
			<li>Converted mockup into web page</li>
			<li>Connected mouse movement to svg positions</li>
		</ul>
		`,
		sitelink: "https://davidobodo.github.io/freebies/",
		tech: ["html", "css", "javascript"],
		bgColor: "#000",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: freebies,
			},
		],
	},
	{
		id: "ozidi",
		title: "Ozidi/Agricpay",
		details: `
		<p><span>Ozidi</span>, which later became <span>Agricpay</span>, was a promising startup which had a vision to <a>help small scale farmers in "Nigeria" get access to loans.</a> It is no news that in order for
		a business owner to apply for a loan from banks and other loan agencies, the owner must have <span>collateral to use</span>, in case the owner will not be able to pay the loan. Unfortunately, most small scale farmers
		do not have any collateral to give, hence the need for Agricpay to be built.
		</p>
		<p>
		Agricpay aimed at solving this problem, by inculcating in the farmers mindset, the <span>habit of saving</span>. Using this approach meant, in the long run the farmer will be borrowing his/her own money.
		</p>

		<p>I worked as the <span>"main" frontend developer responsible for the entire ui/ux as well as about 80% of the entire frontend </span>, together with <a href="https://www.linkedin.com/in/godinson/" target="_blank">Joseph Godwin (full stack developer)</a> and <a href="https://www.linkedin.com/in/oluwaferanmiadetunji/" target="_blank">Adetunji Oluwaferanmi (full stack developer)</a>, at the <a href="https://www.enye.tech/" target="_blank">Enye Cohort 4 internship</a>. 
		We set out to build a fully functional dashboard to help with Agricpay's vision.
		</p>
		<div>
			<p>Some of the features included:</p>
			<ul>
				<li>Admin authentication.</li>
				<li>Ability to generate recharge card numbers. (i.e Farmers save by buying reacharge cards).</li>
				<li>History of all recharge cards generated.</li>
				<li>Farmers data.</li>
			</ul>
		</div>

		<p>Unfortunately, not all startups reach the "promise land", irrespective of a solid technology, because there are more things asides the tech involved in the success of a business. So the live links are currently down. However for curiousity sake,
		visit <a href="https://mobile.twitter.com/agricpay" target="_blank">Twitter</a> or <a href="https://www.instagram.com/agricpay/" target="_blank">Instagram</a>
		</p>

		<p><span>Project span: July 2020 - September 2020.</span></p>
		`,
		roles: ["design", "fe"],
		sitelink: "",
		responsibilities: `
		<ul>
			<li>Created entire app UI/UX using Figma.</li>
			<li>Converted about 80% of the design into functional responsive web app pages.</li>
			<Li>Connected pages to their respective backend endpoints.</li>
			<li>Used <span>Wordpress</span> to create a static publicly accessible web page for the company.</li>
		</ul>
		`,
		tech: [
			"html",
			"css",
			"sass",
			"react",
			"redux",
			"javascript",
			"typescript",
			"materialui",
			"graphql",
			"apolloclient",
			"enzyme",
			"jest",
		],
		bgColor: "#56D686",
		type: "Web Application",
		media: [
			{
				type: "image",
				source: ozidi1,
			},
			{
				type: "image",
				source: ozidi2,
			},
		],
	},
	{
		id: "phitnftswhitelist",
		title: "PhitNFTS Whitelist",
		details: `
		<p>Keeping abreast with latest technology advancements, I decided to learn web3 on the side. This has been really easy and straight forward with the help of <a href="https://learnweb3.io/" target="_blank">LearnWeb3</a>. This project
		is a modified version of the whitelist dapp taught in Learnweb3.</p>
		<p>In order to solidify some concepts taught, I decided to modify the project a little bit. Some of these modifications include:</p>
		<ul>
		<li>Refactoring of UI</li>
		<li>Displaying connected wallet address</li>
		</ul>
		<p>See contract details on <a href="https://rinkeby.etherscan.io/address/0xC62EEfe06F1f69C3010ab44F4581B1329F938D31" target="_blank">Rinkeby Etherscan</a></p>
		`,
		roles: ["design", "fe", "be"],
		sitelink: "https://learnweb3-phitnftwhitelist.vercel.app/",
		githublink: "https://github.com/davidobodo/learnweb3-phitnftwhitelist",
		responsibilities: ``,
		tech: ["html", "css", "react", "nextjs", "javascript", "tailwindcss", "solidity", "web3"],
		bgColor: "#000",
		type: "Learn from Tutorial",
		media: [
			{
				type: "image",
				source: phintnftwhitelist1,
			},
			{
				type: "image",
				source: phintnftwhitelist2,
			},
		],
	},
	{
		id: "phitnfts",
		title: "PhitNFTS ",
		details: `
		<p>Keeping abreast with latest technology advancements, I decided to learn web3 on the side. This has been really easy and straight forward with the help of <a href="https://learnweb3.io/" target="_blank">LearnWeb3</a>. This project
		is a modified version of the whitelist dapp taught in Learnweb3.</p>
		<p>In order to solidify some concepts taught, I decided to modify the project a little bit. Some of these modifications include:</p>
		<ul>
		<li>Refactoring of UI</li>
		<li>Displaying connected wallet address</li>
		<li>Giving users a direct link to their minted NFT</li>
		</ul>
		<p>See contract details on <a href="https://rinkeby.etherscan.io/address/0x864EC287eF39A1DE0445EA1Fb441b5EE7c83626F" target="_blank">Rinkeby Etherscan</a></p>
		<p>See NFT Collection on <a href="https://testnets.opensea.io/collection/phit-nfts-xuwds2pvht" target="_blank">Testnet Opensea</a></p>
		`,
		roles: ["design", "fe", "be"],
		sitelink: "https://learnweb3-phitnfts.vercel.app/",
		githublink: "https://github.com/davidobodo/learnweb3-phitnfts",
		responsibilities: ``,
		tech: ["html", "css", "react", "nextjs", "javascript", "tailwindcss", "solidity", "web3"],
		bgColor: "#fff",
		type: "Learn from Tutorial",
		media: [
			{
				type: "image",
				source: phitnft1,
			},
			{
				type: "image",
				source: phitnft2,
			},
		],
	},
	{
		id: "three",
		title: "GSAP and Three.js Experiment",
		details: `
		<p>Just an experiment to hook up gsap with three.js. I Also needed to learn a couple of things about <a href="https://www.blender.org/" target="_blank">Blender</a> in order to modify the 3D models.</p>
		`,
		roles: [],
		sitelink: "https://laptop-phone-three-js.vercel.app/",
		githublink: "https://github.com/davidobodo/laptop-phone-three-js",
		responsibilities: ``,
		tech: ["html", "css", "javascript", "gsap", "threejs"],
		bgColor: "#000",
		type: "Experiment",
		media: [
			{
				type: "gif",
				source: laptopPhone,
			},
		],
	},
];

export default PROJECTS;
