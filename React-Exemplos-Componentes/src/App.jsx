import { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./components/progress-bar/ProgressBar";

function App() {
  const [progress, setProgress] = useState(0); // ProgressBar
  useEffect(() => {
    // ProgressBar
    setInterval(() => setProgress(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <>
      <ProgressBar bgcolor="#99ccff" progress={progress} height={30} />
    </>
  );
}

export default App;
