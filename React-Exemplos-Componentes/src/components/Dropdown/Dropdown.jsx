import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const dropDownRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setActiveMenu(false);
      // console.log("clicou fora do input");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const dropDown = {
    position: "relative",
    display: "block",
    maxWidth: 140,
    margin: "0 auto",
  };

  const dropBtn = {
    width: "100%",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: 16,
    fontSize: 16,
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5px",
  };

  const dropDownContent = {
    width: "100%",
    // display: !activeMenu ? "none" : "block",
    visibility: !activeMenu ? "hidden" : "visible",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    opacity: !activeMenu ? 0 : 1,
    transition: "all ease-in-out 0.5s",
    maxHeight: 400,
    // zIndex: 1,
  };

  const aLink = {
    color: "black",
    padding: "12px 16px",
    textDecoration: "none",
    display: "block",
  };

  const svgStyle = {
    transform: !activeMenu ? "rotate(-90deg)" : "rotate(90deg)",
    transition: "0.5s ease",
  };

  console.log(activeMenu);

  /* Neste exemplo, o novo manipulador de eventos handleLinkClick é adicionado aos elementos <a>. Ele evita a propagação do evento usando e.stopPropagation() e, em seguida, fecha o dropdown-content e define activeMenu como false. */

  return (
    <div style={{ width: "100%" }}>
      <div
        className="dropdown"
        style={dropDown}
        onClick={() => setActiveMenu((prev) => !prev)}
        ref={dropDownRef}
      >
        <button className="dropdown-btn" style={dropBtn}>
          <span>Dropdown</span>
          <span style={svgStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="arcs"
            >
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </span>
        </button>
        <div className="dropdown-content" style={dropDownContent}>
          {[1, 2, 3].map((ele, index) => (
            <a
              key={index}
              style={aLink}
              onClick={(e) => {
                e.stopPropagation();
                setActiveMenu(false);
              }}
            >{`Link ${ele}`}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
