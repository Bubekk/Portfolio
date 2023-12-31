import { useEffect, useState } from "react";
import "./App.css";
import { ImageContextProvider } from "./contexts/ImageContext";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import Windows from "./components/Windows/Windows";
import LogOff from "./components/LogOff/LogOff";
import MobileScreen from "./components/Mobile/MobileScreen";

function App() {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [isWindowsVisible, setIsWindowsVisible] = useState(true);
  const [logOff, setLogOff] = useState(false);
  const [shutDown, setShutDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800 || window.innerHeight <= 600) {
        setIsMobile(true);
        setIsWindowsVisible(false);
      } else {
        setIsMobile(false);
        setIsWindowsVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCodeEditorLink = () => {
    setIsCodeVisible(!isCodeVisible);
    setIsWindowsVisible(!isWindowsVisible);
  };

  const handleLogOff = () => {
    setLogOff(true);
    setIsWindowsVisible(!isWindowsVisible);
  };

  const handleShutDown = () => {
    setShutDown(true);
    setIsWindowsVisible(!isWindowsVisible);
  };

  //handling the timer which close the log off or shut down windows
  const handleBackToWindows = () => {
    setLogOff(false);
    setShutDown(false);
    setIsWindowsVisible(true);
  };

  return (
    <ImageContextProvider>
      <div className="main">
        {isMobile && <MobileScreen />}
        <LogOff
          logOff={logOff}
          shutDown={shutDown}
          handleBackToWindows={handleBackToWindows}
          style={{ display: logOff || shutDown ? "block" : "none" }}
        />
        <Windows
          handleLogOff={handleLogOff}
          handleShutDown={handleShutDown}
          handleCodeEditorLink={handleCodeEditorLink}
          style={{ display: isWindowsVisible ? "block" : "none" }}
        />
        <CodeEditor handleCodeEditorLink={handleCodeEditorLink} style={{ display: isCodeVisible ? "block" : "none" }} />
      </div>
    </ImageContextProvider>
  );
}

export default App;
