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
import CssIcon from "../assets/icons/css.svg";
import ErrorIcon from "../assets/icons/error.png";
import ExpolrerIcon from "../assets/icons/explorer-icon.png";
import FigmaIcon from "../assets/icons/figma.png";
import FolderIcon from "../assets/icons/folder-icon.png";
import GitIcon from "../assets/icons/git-icon.png";
import HtmlIcon from "../assets/icons/html.svg";
import IllustratorIcon from "../assets/icons/illustrator.png";
import JsIcon from "../assets/icons/js.svg";
import LogoffIcon from "../assets/icons/logoff.png";
import MinesweeperIcon from "../assets/icons/minesweeper.png";
import PdfIcon from "../assets/icons/pdf-icon.png";
import PhotoshopIcon from "../assets/icons/photoshop.png";
import ProjectIcon from "../assets/icons/project-icon.png";
import PythonIcon from "../assets/icons/python.svg";
import ReactIcon from "../assets/icons/react.svg";
import ShutdownIcon from "../assets/icons/shutdown.png";
import VueIcon from "../assets/icons/vue.svg";

//Pixel photos imports
import p1 from "../assets/pixelsPhoto/blockhouse.png";
import p2 from "../assets/pixelsPhoto/cars.png";
import p3 from "../assets/pixelsPhoto/emberSword.png";
import p4 from "../assets/pixelsPhoto/farmer.png";
import p5 from "../assets/pixelsPhoto/oldResume.png";
import p6 from "../assets/pixelsPhoto/redSnow.png";
import p7 from "../assets/pixelsPhoto/seaHouse.png";

//Pixel gifs imports

//Wallpaper import
import Wallpaper from "../assets/wallpaper/windowsXp.jpg";

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
    cssIcon: CssIcon,
    errorIcon: ErrorIcon,
    explorerIcon: ExpolrerIcon,
    figmaIcon: FigmaIcon,
    folderIcon: FolderIcon,
    gitIcon: GitIcon,
    htmlIcon: HtmlIcon,
    illustratorIcon: IllustratorIcon,
    jsIcon: JsIcon,
    logoffIcon: LogoffIcon,
    minesweeperIcon: MinesweeperIcon,
    pdfIcon: PdfIcon,
    photoshopIcon: PhotoshopIcon,
    projectIcon: ProjectIcon,
    pythonIcon: PythonIcon,
    reactIcon: ReactIcon,
    shutdownIcon: ShutdownIcon,
    vueIcon: VueIcon,
  };

  const pixelPhotos = {
    Blockhouse: p1,
    Ecto1: p2,
    EmberSwords: p3,
    Farmer: p4,
    OldResume: p5,
    RedSnow: p6,
    SeaHouse: p7,
  };

  const pixelGifs = {};

  const wallpaper = {
    wallpaper: Wallpaper,
  };

  const window = {
    window: Window,
  };

  const resume = {
    resume: Resume,
  };

  const imageContextValues = {
    btnsIcon,
    icons,
    pixelPhotos,
    pixelGifs,
    wallpaper,
    window,
    resume,
  };
  return <ImageContext.Provider value={imageContextValues}>{children}</ImageContext.Provider>;
};

export { ImageContext, ImageContextProvider };
