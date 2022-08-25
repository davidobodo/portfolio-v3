import { TProjectType } from "#/interfaces";

const DEFAULT_MOBILE_HEIGHT = 812;

const ABOUT_NOTE = [
	"4 years dedicating my time into converting designs into",
	"pixel-perfect,",
	"performant,",
	"accessible",
	"and responsive applications/websites.",
	"I have always been excited about the entire development spectrum",
	"and working on ambitious projects with positive people",
	"in a conducive work environment.",
];

const WORK = [
	{
		title: "Front End Developer (Remote)",
		company: "Prodeus",
		location: "Brooklyn, New York",
		range: "December 2020 - Present",
		url: "https://www.prodeus.co/",
		note: `Built from scratch the client side of the web application equivalent of the Prodeus <a href='https://chrome.google.com/webstore/detail/prodeus/aglakbhkijgpmoploegcpnbnedgiampn' target='_blank'>Google chrome extension </a>,
            using mockups provided by a UI/UX designer as guide. 
            `,
	},
	{
		title: "Front End Developer",
		company: "Upwork/Freelancing",
		range: "July 2019 - Present",
		url: "https://www.upwork.com/freelancers/~017d93e122abfca5eb/",
		urlLabel: "Upwork profile",
		note: `Wroked with <a href="https://www.upwork.com/ag/mpaccione/" target="_blank" >M.Paccione Design & Development Agency</a> to bring ideas to life. Also occasionally dive into side projects when the need arises since skilled hands are always needed. More freelance projects are shown soon in the projects section.`,
	},
	{
		title: "Full Stack Developer (Remote)",
		company: "Joyup",
		location: "San Francisco, CA, United States",
		range: "December 2020 - September 2021",
		url: "https://www.joyup.me/",
		note: `Actively upgraded and maintained the internal tools, platforms and services offered by Joyup. <br/> Among these include: 
        <ol>
        <li>Branded online ordering menu</li>
        <li>Custom checkout/payment system integrated with <a href="https://squareup.com/us/en" target="_blank" >Square</a></li>
        <li>MVP dashboard(more or less a CMS) that powers the branded online ordering menu</li>
        </ol>
       `,
	},
	{
		title: "Front End Developer (Remote - part-time/contract)",
		company: "Liveizy",
		location: "Lagos, Nigeria",
		range: "August 2020 - July 2021",
		url: "https://liveizy.com/",
		note: `Converted UI/UX designs to functional web application pages on a contract base, after which moved on to integrate more features into the <a href="https://cloud.liveizy.com/" target="_blank" >Liveizy platform</a>`,
	},
	{
		title: "Front End Developer (Remote)",
		company: "Sumosoft",
		location: "London, United Kingdom",
		range: "July - December 2016",
		url: "https://www.sumo-soft.com/",
		note: `Developed new user interfaces for the clients <a href="https://www.richard-james.com/" target="_blank" >Richard James</a> and <a href="https://www.archibaldlondon.com/" target="_blank" >Archibald London</a>  using mockups provided by a UI/UX designer as guide.`,
	},
];

const IMAGES = {
	one: "https://images.unsplash.com/photo-1553608578-d6fd2621a3d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMHNpdHRpbmclMjBvbiUyMGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800",
};

const PROJECT_NATURE: { key: TProjectType; label: string }[] = [
	{
		key: "Web Application",
		label: "Web Application",
	},
	{
		key: "Website",
		label: "Website",
	},
	// {
	// 	key: "Learn from Tutorial",
	// 	label: "Learn from Tutorials",
	// },
	{
		key: "Experiment",
		label: "Experiment/Playful",
	},
];

const FOCUSABLE_ELEMENT_STRING =
	'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

const ROLES = {
	design: {
		label: "UI/UX Designer",
		key: "design",
	},
	fe: {
		label: "Front End Developer",
		key: "fe",
	},
	be: {
		label: "Back End Developer",
		key: "fe",
	},
	teamlead: {
		label: "Team Lead",
		key: "teamlead",
	},
};
const KEYBOARD_KEYS = {
	UP_KEY: 38,
	DOWN_KEY: 40,
	ENTER_KEY: 13 || "Enter",
	SPACE_KEY: 32,
	TAB_KEY: 9,
	ESC_KEY: 27,
};

export {
	WORK,
	ABOUT_NOTE,
	DEFAULT_MOBILE_HEIGHT,
	IMAGES,
	PROJECT_NATURE,
	FOCUSABLE_ELEMENT_STRING,
	KEYBOARD_KEYS,
	ROLES,
};
