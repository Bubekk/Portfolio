import { useState } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import Windows from "./components/Windows/Windows";

function App() {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const handleCodeEditorLink = () => {
    setIsCodeVisible(!isCodeVisible);
  };
  return (
    <div className="main">
      <Windows handleCodeEditorLink={handleCodeEditorLink} style={{ display: isCodeVisible ? "none" : "block" }} />
      <CodeEditor handleCodeEditorLink={handleCodeEditorLink} style={{ display: isCodeVisible ? "block" : "none" }} />
    </div>
  );
}

export default App;
