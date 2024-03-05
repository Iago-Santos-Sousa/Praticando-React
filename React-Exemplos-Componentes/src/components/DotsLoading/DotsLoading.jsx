import React, { useState, useEffect } from "react";
import "./DotsLoading.css";

const DotsLoading = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    jusitfyContent: "center",
    alignItems: "center",
    gap: "3px",
  };

  const containerDotsStyle = {
    display: "flex",
    gap: "3px",
  };

  return (
    <>
      <div style={containerStyle} id="loading">
        <div className="loading-dots saving" style={containerDotsStyle}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </>
  );
};

export default DotsLoading;
