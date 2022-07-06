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

const COLORS = ["#dcd0c2", "#e2d1d9", "#b1a994", "#373737"];

const TYPES = ["Web Application", "Website", "Learn from Tutorial", "Experiments"];

export const PROJECTS = [
    {
        id: "prodeus",
        title: "Prodeus",
        details: "Prodeus web app",
        live_link: "https://www.prodeus.co/",
        tech: ["react", "typescript", "styledcomponents", "html", "sass", "reactquery"],
        bgImage: "/images/projects/dashboard.png",
        type: "Web Application",
        bgColor: "#dcd0c2"
    },
    {
        id: "cadmils",
        title: "Cadmils Consulting",
        details: "Official website of cadmils consulting agency",
        live_link: "https://www.cadmils.com/",
        tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
        bgImage: "/images/projects/cadmils.png",
        type: "Website",
        bgColor: "#e2d1d9"
    },
    {
        id: "hospital-finder",
        title: "Hospital finder",
        details: "Find Hospitals, Clinics, Pharmacies and Health care centers close to you",
        live_link: "https://medic-finder.netlify.app/",
        tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
        bgImage: "/images/projects/hospital-findr.png",
        type: "Web Application",
        bgColor: "#b1a994"
    },
    {
        id: "d-productivity",
        title: "d-productivity",
        details: "Web-based Kanban-style list-making application",
        live_link: "https://d-productivity.now.sh/",
        tech: ["react", "typescript", "redux", "styledComponents"],
        bgImage: "/images/projects/d-productivity.png",
        type: "Web Application",
        bgColor: "#373737"
    },
    {
        id: "d-Discus",
        title: "d-Discus",
        details: "A site where people can share details of projects together.",
        live_link: "https://myfirst-fullstackproject.firebaseapp.com/signin",
        tech: ["react", "typescript", "redux", "styledComponents"],
        bgImage: "/images/projects/d-discus.png",
        type: "Web Application",
        bgColor: "#373737"
    },
    {
        id: "d-chat",
        title: "d-chat",
        details: "A basic chat application.",
        live_link: "https://d-chat-98abe.firebaseapp.com/auth",
        tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
        bgImage: "/images/projects/d-chat.png",
        bgColor: COLORS[0],
        type: "Web Application"
    },
    {
        id: "d-commerce",
        title: "d-commerce(WIP)",
        details: "An e-commerce platform",
        live_link: "https://d-commerce-99633.firebaseapp.com/",
        tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
        bgImage: "/images/projects/d-commerce.png",
        bgColor: COLORS[1],
        type: TYPES[0]
    },
    {
        id: "developer-of-the-year",
        title: "developer of the year",
        details: "Clone of “Awwwards” (https://www.awwwards.com/) awards site for the year 2020",
        live_link: "https://obododavid.github.io/developer-of-the-year/",
        tech: ["react", "typescript", "redux", "styledComponents"],
        bgImage: "/images/projects/developer.png",
        bgColor: COLORS[2],
        type: TYPES[3]
    },
    {
        id: "shortly",
        title: "Shortly",
        details: "Site that makes use of rel link API to shorten links",
        live_link: "https://obododavid.github.io/FEM-shortly/",
        tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
        bgImage: "/images/projects/shortly.png",
        bgColor: COLORS[3],
        type: TYPES[3]
    },
    {
        id: "bookmark",
        title: "Bookmark",
        details: "Bookmark landing page",
        live_link: "https://obododavid.github.io/FEM-bookmark-landing-page/",
        tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
        bgImage: "/images/projects/bookmark.png",
        bgColor: COLORS[0],
        type: TYPES[3]
    },
    {
        id: "burger-builder",
        title: "Burger builder",
        details: "Build and order your own burger",
        live_link: "https://burger-builder.obododavid5.now.sh/",
        tech: ["react", "typescript", "redux", "styledComponents"],
        bgImage: "/images/projects/burger-builder.png",
        bgColor: COLORS[1],
        type: TYPES[2]
    },
    {
        id: "drum-machine",
        title: "Drum Machine",
        details: "Simple drum machine",
        live_link: "https://obododavid.github.io/drumMachine/",
        tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
        bgImage: "/images/projects/drum-machine.png",
        bgColor: COLORS[2],
        type: TYPES[3]
    },

    {
        id: "pomodoro-clock",
        title: "Pomodoro clock",
        details: "Timer for pomodoro time management technique",
        live_link: "https://pomodoroclock.now.sh/",
        tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
        bgImage: "/images/projects/pomodoro.png",
        bgColor: COLORS[3],
        type: TYPES[3]
    },
    {
        id: "quiz-ninja",
        title: "Quiz ninja",
        details: "How well do you know super heroes real names?",
        live_link: "https://obododavid.github.io/Learning-javascript-quiz-ninja/",
        tech: ["react", "typescript", "redux", "styledComponents"],
        bgImage: "/images/projects/quiz-ninja.png",
        bgColor: COLORS[0],
        type: TYPES[2]
    },
    {
        id: "freebies",
        title: "Freebies",
        details: "clone of freebies(https://freebies.bypeople.com/) website home page",
        live_link: "https://obododavid.github.io/freebies/",
        tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
        bgImage: "/images/projects/freebies.png",
        bgColor: COLORS[1],
        type: TYPES[3]
    },
    {
        id: "pv1",
        title: "Portfolio v1.0",
        details: "My first portfolio site",
        live_link: "https://obododavid.github.io/portfolio/",
        tech: ["react", "typescript", "redux", "styledComponents"],
        bgImage: "/images/projects/pv-1.png",
        bgColor: COLORS[2],
        type: TYPES[1]
    }
];
// export const PROJECTS = [
//     {
//         id: "prodeus",
//         title: "Prodeus",
//         details: "Prodeus web app",
//         live_link: "https://www.prodeus.co/",
//         tech: ["react", "typescript", "styledcomponents", "html", "sass", "reactquery"],
//         // height: "40rem"
//         bgImage: imgProdeus
//     },
//     {
//         id: "cadmils",
//         title: "Cadmils Consulting",
//         details: "Official website of cadmils consulting agency",
//         live_link: "https://www.cadmils.com/",
//         tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
//         // height: "40rem"
//         bgImage: imgCadmils
//     },
//     {
//         id: "hospital-finder",
//         title: "Hospital finder",
//         details: "Find Hospitals, Clinics, Pharmacies and Health care centers close to you",
//         live_link: "https://medic-finder.netlify.app/",
//         tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
//         height: "60rem",
//         bgImage: imgHospitalFinder
//     },
//     {
//         id: 2,
//         title: "d-productivity",
//         details: "Web-based Kanban-style list-making application",
//         live_link: "https://d-productivity.now.sh/",
//         tech: ["react", "typescript", "redux", "styledComponents"],
//         height: "35rem",
//         bgImage: imgDproductivity
//     },
//     {
//         id: 3,
//         title: "d-Discus",
//         details: "A site where people can share details of projects together.",
//         live_link: "https://myfirst-fullstackproject.firebaseapp.com/signin",
//         tech: ["react", "typescript", "redux", "styledComponents"],
//         height: "45rem",
//         bgImage: imgDdiscus
//     },
//     {
//         id: 4,
//         title: "d-chat",
//         details: "A basic chat application.",
//         live_link: "https://d-chat-98abe.firebaseapp.com/auth",
//         height: "40rem",
//         tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
//         bgImage: imgDchat
//     },
//     {
//         id: 5,
//         title: "d-commerce(WIP)",
//         details: "An e-commerce platform",
//         live_link: "https://d-commerce-99633.firebaseapp.com/",
//         height: "42rem",
//         tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
//         bgImage: imgDcommerce
//     },
//     {
//         id: 16,
//         title: "developer of the year",
//         details: "Clone of “Awwwards” (https://www.awwwards.com/) awards site for the year 2020",
//         live_link: "https://obododavid.github.io/developer-of-the-year/",
//         tech: ["react", "typescript", "redux", "styledComponents"],
//         // height: "40rem"
//         bgImage: imgDeveloper
//     },
//     {
//         id: 6,
//         title: "Shortly",
//         details: "Site that makes use of rel link API to shorten links",
//         live_link: "https://obododavid.github.io/FEM-shortly/",
//         tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
//         // height: "40rem"
//         bgImage: imgShortly
//     },
//     {
//         id: 7,
//         title: "Bookmark",
//         details: "Bookmark landing page",
//         live_link: "https://obododavid.github.io/FEM-bookmark-landing-page/",
//         height: "70rem",
//         tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
//         bgImage: imgBookmark
//     },
//     {
//         id: 13,
//         title: "Burger builder",
//         details: "Build and order your own burger",
//         live_link: "https://burger-builder.obododavid5.now.sh/",
//         // height: "40rem"
//         tech: ["react", "typescript", "redux", "styledComponents"],
//         bgImage: imgBurger
//     },
//     {
//         id: 14,
//         title: "Drum Machine",
//         details: "Simple drum machine",
//         live_link: "https://obododavid.github.io/drumMachine/",
//         tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
//         // height: "40rem"
//         bgImage: imgDrummachine
//     },

//     {
//         id: 9,
//         title: "Pomodoro clock",
//         details: "Timer for pomodoro time management technique",
//         live_link: "https://pomodoroclock.now.sh/",
//         tech: ["html", "css", "sass", "javascript", "nodeJs", "expressJs", "heroku"],
//         // height: "40rem"
//         bgImage: imgPomodoro
//     },
//     {
//         id: 10,
//         title: "Quiz ninja",
//         details: "How well do you know super heroes real names?",
//         live_link: "https://obododavid.github.io/Learning-javascript-quiz-ninja/",
//         tech: ["react", "typescript", "redux", "styledComponents"],
//         // height: "40rem"
//         bgImage: imgQuizninja
//     },
//     {
//         id: 11,
//         title: "Freebies",
//         details: "clone of freebies(https://freebies.bypeople.com/) website home page",
//         live_link: "https://obododavid.github.io/freebies/",
//         tech: ["react", "typescript", "redux", "materialUi", "firebase", "graphql", "nodeJs", "expressJs"],
//         // height: "40rem"
//         bgImage: imgFreebies
//     },
//     {
//         id: 8,
//         title: "Portfolio v1.0",
//         details: "My first portfolio site",
//         live_link: "https://obododavid.github.io/portfolio/",
//         height: "40rem",
//         tech: ["react", "typescript", "redux", "styledComponents"],
//         bgImage: imgPv1
//     }
// ];
