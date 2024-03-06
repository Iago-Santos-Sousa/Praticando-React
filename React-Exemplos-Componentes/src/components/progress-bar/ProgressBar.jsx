import "./ProgressBar.css";
import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); // ProgressBar

  useEffect(() => {
    // ProgressBar
    // setInterval(() => setProgress(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  const containerStyle = {
    width: "100%",
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
  };

  const Parentdiv = {
    height: 30,
    width: "60%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: "20px auto",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#99ccff",
    borderRadius: 40,
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div className="container" style={containerStyle}>
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{`${progress}%`}</span>
        </div>
      </div>
      <button onClick={() => setProgress(40)} style={{ margin: "0 auto" }}>
        Incrementa a barra.
      </button>
    </div>
  );
};

export default ProgressBar;
