import React, { useState, useEffect } from "react";
import "./CountDownBar.css";

const CountDownBar = () => {
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(0); // ProgressBar

  const containerStyle = {
    width: "100%",
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
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
    // transition: "width 1s ease-in-out",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  let totalSeconds = 0;
  let intervalSeconds = null;

  useEffect(() => {
    totalSeconds = (seconds * 60) / 60;

    intervalSeconds = setInterval(() => {
      totalSeconds++;
      const newSeconds = totalSeconds % 60;
      const newProgress = (newSeconds / 15) * 100; // Calcula o progresso

      setSeconds(newSeconds);
      setProgress(newProgress);
    }, 1000);

    if (totalSeconds >= 15) {
      clearInterval(intervalSeconds);
    }

    return () => {
      clearInterval(intervalSeconds);
    };
  }, [seconds, progress]);

  return (
    <div className="container" style={containerStyle}>
      <h3 style={{ width: "min-content" }}>CountDownBar</h3>
      <p>{seconds}</p>
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{`${Math.round(progress)}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default CountDownBar;
