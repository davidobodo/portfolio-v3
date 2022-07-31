import { HomePage, ProjectsPage, LettersPage, SingleProject } from "./_pages";

import Atoms from "./_atoms";
import Layout from "./layout";
import Contact from "./contact";
import ScrollAlert from "./scroll-alert";
import Banners from "./banners";
import Nav from "./nav";
import DarkRadialGradient from "./dark-radial-gradient";
import Modal, { ProjectModal } from "./modal";
import Noise from "./noise";
import Logo from "./logo";
import RouteTransitionOverlay from "./route-transition-overlay";
import Common from "./common";
import ScrollToTop from "./scroll-to-top";
import SectionPlaceholder from "./section-placeholder";
import BannerCurtain from "./banner-curtain";
import Projects, { ProjectListView } from "./projects";

const { Button, Radio } = Atoms;
const { Preloader, About, Work, Thoughts, Skills, FaintBgText } = HomePage;
const { SingleLetter } = LettersPage;

export {
    Preloader,
    About,
    Work,
    Thoughts,
    Skills,
    FaintBgText,
    Projects,
    Button,
    Contact,
    ScrollAlert,
    Banners,
    Nav,
    Radio,
    SingleLetter,
    DarkRadialGradient,
    Modal,
    Layout,
    Noise,
    SingleProject,
    ProjectListView,
    ProjectModal,
    Logo,
    RouteTransitionOverlay,
    Common,
    ScrollToTop,
    SectionPlaceholder,
    BannerCurtain
};
