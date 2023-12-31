import { Children, createContext } from "react";

//Btn imports
import BackIcon from "../assets/icons/back.png";
import BackBwIcon from "../assets/icons/back_bw.png";
import NextBwIcon from "../assets/icons/next_bw.png";
import NextIcon from "../assets/icons/next.png";

//Icons imports
import Avatar from "../assets/icons/avatar.png";
import CalcIcon from "../assets/icons/calc.jpg";
import CodeIcon from "../assets/icons/code-icon.png";
import ErrorIcon from "../assets/icons/error.png";
import ExpolrerIcon from "../assets/icons/explorer-icon.png";
import FolderIcon from "../assets/icons/folder-icon.png";
import GitIcon from "../assets/icons/git-icon.png";
import LogoffIcon from "../assets/icons/logoff.png";
import MinesweeperIcon from "../assets/icons/minesweeper.png";
import PdfIcon from "../assets/icons/pdf-icon.png";
import ProjectIcon from "../assets/icons/project-icon.png";
import ShutdownIcon from "../assets/icons/shutdown.png";

//skills icons imports
import CssIcon from "../assets/icons/css.svg";
import FigmaIcon from "../assets/icons/figma.png";
import HtmlIcon from "../assets/icons/html.svg";
import IllustratorIcon from "../assets/icons/illustrator.png";
import JsIcon from "../assets/icons/js.svg";
import PhotoshopIcon from "../assets/icons/photoshop.png";
import PythonIcon from "../assets/icons/python.svg";
import ReactIcon from "../assets/icons/react.svg";
import VueIcon from "../assets/icons/vue.svg";
import MailIcon from "../assets/icons/mailIcon.png";
import PhoneIcon from "../assets/icons/phoneIcon.png";
import LinkedInIcon from "../assets/icons/linkedinIcon.png";

//Pixel photos imports
import p1 from "../assets/pixelsPhoto/blockhouse.png";
import p2 from "../assets/pixelsPhoto/cars.png";
import p3 from "../assets/pixelsPhoto/emberSword.png";
import p4 from "../assets/pixelsPhoto/farmer.png";
import p5 from "../assets/pixelsPhoto/oldResume.png";
import p6 from "../assets/pixelsPhoto/redSnow.png";
import p7 from "../assets/pixelsPhoto/seaHouse.png";

//Pixel miniature pngs imports
import gp1 from "../assets/pixelsPhoto/bear_min.png";
import gp2 from "../assets/pixelsPhoto/breakingbad_min.png";
import gp3 from "../assets/pixelsPhoto/gameroom_min.png";
import gp4 from "../assets/pixelsPhoto/pikachu_min.png";
import gp5 from "../assets/pixelsPhoto/street_min.png";
import gp6 from "../assets/pixelsPhoto/toad_min.png";

//Gifs imports
import g1 from "../assets/gifs/bear.gif";
import g2 from "../assets/gifs/breakingbad.gif";
import g3 from "../assets/gifs/gameroom.gif";
import g4 from "../assets/gifs/pikachu.gif";
import g5 from "../assets/gifs/street.gif";
import g6 from "../assets/gifs/toad.gif";

//Window image import
import Window from "../assets/window/window.png";

//Resume import
import Resume from "../assets/resume/cv.png";

const ImageContext = createContext();

const ImageContextProvider = ({ children }) => {
  const btnsIcon = {
    backBtn: BackIcon,
    backBwBtn: BackBwIcon,
    nextBtn: NextIcon,
    nextBwIcon: NextBwIcon,
  };

  const icons = {
    avatar: Avatar,
    calcIcon: CalcIcon,
    codeIcon: CodeIcon,
    errorIcon: ErrorIcon,
    explorerIcon: ExpolrerIcon,
    folderIcon: FolderIcon,
    gitIcon: GitIcon,
    logoffIcon: LogoffIcon,
    minesweeperIcon: MinesweeperIcon,
    pdfIcon: PdfIcon,
    projectIcon: ProjectIcon,
    shutdownIcon: ShutdownIcon,
    mailIcon: MailIcon,
    phoneIcon: PhoneIcon,
    linkedinIcon: LinkedInIcon,
  };

  const skillsIcons = {
    cssIcon: CssIcon,
    figmaIcon: FigmaIcon,
    htmlIcon: HtmlIcon,
    illustratorIcon: IllustratorIcon,
    jsIcon: JsIcon,
    photoshopIcon: PhotoshopIcon,
    pythonIcon: PythonIcon,
    reactIcon: ReactIcon,
    vueIcon: VueIcon,
  };

  const pixelPhotos = {
    blockhouse: p1,
    ecto1: p2,
    emberSwords: p3,
    farmer: p4,
    oldResume: p5,
    redSnow: p6,
    seaHouse: p7,
    bear: gp1,
    breakingbad: gp2,
    gameroom: gp3,
    pikachu: gp4,
    street: gp5,
    toad: gp6,
  };

  const pixelGifs = {
    bear: g1,
    breakingBad: g2,
    gameRoom: g3,
    pikachu: g4,
    street: g5,
    toad: g6,
  };

  const window = {
    window: Window,
  };

  const resume = {
    resume: Resume,
  };

  //setting one value to make import easier
  const imageContextValues = {
    btnsIcon,
    icons,
    skillsIcons,
    pixelPhotos,
    pixelGifs,
    window,
    resume,
  };
  return <ImageContext.Provider value={imageContextValues}>{children}</ImageContext.Provider>;
};

export { ImageContext, ImageContextProvider };

// <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/password" title="password icons">Password icons created by Freepik - Flaticon</a> logout icon  */
