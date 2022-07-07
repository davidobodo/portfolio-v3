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
import RouteTransition from "./route-transition";

const { Button, Radio } = Atoms;

const { Preloader, About, Work, Thoughts, Skills, FaintBgText, Projects, ProjectListView } = HomePage;
const { Grid } = ProjectsPage;
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
    Grid,
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
    RouteTransition
};
