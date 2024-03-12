import React from "react";
import { useState, useEffect } from "react";
import "./Accordion.css";

const contents = [
  {
    btn: "Open Section 1",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    btn: "Open Section 2",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    btn: "Open Section 3",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Accordion = () => {
  /* criar um estado separado para cada item no array contents para controlar se a div correspondente está aberta ou fechada. Além disso, ajuste a lógica no evento de clique para lidar com o estado de cada item individualmente */
  const [activeContents, setActiveContents] = useState(
    contents.map(() => false),
  );

  const [styleOverflow, setStyleOverflow] = useState("");

  const collapsibleStyle = {
    backgroundColor: "#777",
    color: "white",
    cursor: "pointer",
    padding: "18px",
    width: "500px",
    border: "none",
    textAlign: "left",
    outline: "none",
    fontSize: "15px",
  };

  const activeStyle = {
    // backgroundColor: "#555",
  };

  const contentStyle = {
    padding: "0 18px",
    width: "100%",
    maxHeight: 0,
    transition: "all 0.2s ease-out",
    backgroundColor: "#f1f1f1",
    overflow: "hidden",
  };

  const overlayStyle = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(setStyleOverflow("auto"));
      }, 200);
    });
  };

  const handleClick = (index) => {
    setActiveContents((prev) => {
      // Modo accordion
      if (prev[index] === true) {
        // Permite fechar o item que já foi clicado
        prev[index] = false;
        return prev;
      }

      const newActiveContents = prev.map(() => false); // Define todos os valores como false

      newActiveContents[index] = true; // Define o valor correspondente ao índice como true

      return newActiveContents;
    });
  };

  console.log({ activeContents });
  // console.log(styleOverflow);

  return (
    <>
      {contents.map((ele, index, arr) => (
        <div key={index} style={{ width: "500px" }}>
          <button
            className={`accordion ${
              activeContents[index] ? "active-accordion" : ""
            }`}
            style={collapsibleStyle}
            onClick={() => {
              handleClick(index);
              setStyleOverflow("hidden");
              overlayStyle().then();
            }}
          >
            {ele.btn}
          </button>
          <div
            className="content"
            style={{
              ...contentStyle,
              maxHeight: activeContents[index] ? "100px" : "0",
              overflow: activeContents[index] ? styleOverflow : "hidden",
              padding: activeContents[index] ? "10px 18px" : "0 18px",
            }}
          >
            <p>{ele.paragraph}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
