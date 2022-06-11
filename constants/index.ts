const DEFAULT_MOBILE_HEIGHT = 812;

const DATA_VALUES = {
    workSvgViewportHeight: 0.13,
    workTitleHeightDesktop: 83
};

const ABOUT_NOTE = [
    "4 years dedicating my time into converting designs into",
    "pixel-perfect,",
    "performant,",
    "accessible",
    "and responsive applications/websites.",
    "I have always being excited about the entire development spectrum",
    "and working on ambitious projects with positive people",
    "in a conducive work environment"
];

const WORK = [
    {
        date: "2017-12-21",
        title: "Front End Developer",
        company: "Prodeus",
        location: "Cupertino, CA",
        range: "July - December 2017",
        url: "https://www.apple.com/music/",
        work: [
            "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
            "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
            "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
            "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps"
        ]
    },
    {
        date: "2015-12-21",
        title: "Full Stack Developer",
        company: "Upwork/Freelancing",
        location: "Boston, MA",
        range: "July - December 2015",
        url: "https://us.mullenlowe.com/",
        work: [
            "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
            "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
            "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"
        ]
    },
    {
        date: "2017-04-01",
        title: "Full Stack Developer",
        company: "Joyup",
        location: "Northeastern University",
        range: "January - June 2017",
        url: "https://web.northeastern.edu/scout/",

        work: [
            "Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern",
            "Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript"
        ]
    },
    {
        date: "2018-04-01",
        title: "Front End Developer",
        company: "Liveizy",
        location: "Northeastern University",
        range: "January - April 2018",
        url: "https://web.northeastern.edu/scout/",

        work: [
            "Worked with a team of three designers to build a marketing website and e-commerce platform for [blistabloc](https://blistabloc.com), an ambitious startup originating from Northeastern",
            "Helped solidify a brand direction for blistabloc that spans both packaging and web",
            "Interfaced with clients on a weekly basis, providing technological expertise"
        ]
    },
    {
        date: "2016-12-21",
        title: "Front End Developer",
        company: "Sumosoft",
        location: "Boston, MA",
        range: "July - December 2016",
        url: "https://starry.com/",
        work: [
            "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
            "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station",
            "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps"
        ]
    }
];

const IMAGES = {
    one:
        "https://images.unsplash.com/photo-1553608578-d6fd2621a3d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMHNpdHRpbmclMjBvbiUyMGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800"
};

export { WORK, ABOUT_NOTE, DEFAULT_MOBILE_HEIGHT, DATA_VALUES, IMAGES };
