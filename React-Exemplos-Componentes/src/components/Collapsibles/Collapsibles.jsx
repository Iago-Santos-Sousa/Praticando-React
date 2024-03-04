import React from "react";
import { useState, useEffect } from "react";
import "./Collapsibles.css";

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

const Collapsibles = () => {
  /* criar um estado separado para cada item no array contents para controlar se a div correspondente está aberta ou fechada. Além disso, ajuste a lógica no evento de clique para lidar com o estado de cada item individualmente */
  const [activeContents, setActiveContents] = useState(
    contents.map(() => false),
  );

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

    transition: "max-height 0.2s ease-out",
    backgroundColor: "#f1f1f1",
  };

  const handleClick = (index) => {
    setActiveContents((prev) => {
      const newActiveContents = [...prev];
      console.log(newActiveContents);
      newActiveContents[index] = !newActiveContents[index];
      console.log(newActiveContents);
      return newActiveContents;
      /* Essa refatoração utiliza o método map para criar um novo array, onde o valor correspondente ao índice clicado é negado, mantendo os outros valores inalterados. Isso simplifica a lógica da função handleClick. 
      const test = prev.map((value, i) => (i === index ? !value : value));
      console.log(test);
      */
    });
  };

  // console.log(activeContents);

  return (
    <>
      {contents.map((ele, index, arr) => (
        <div key={index} style={{ width: "500px" }}>
          <button
            className={`collapsible ${activeContents[index] ? "active" : ""}`}
            style={collapsibleStyle}
            onClick={() => handleClick(index)}
          >
            {ele.btn}
          </button>
          <div
            className="content"
            style={{
              ...contentStyle,
              maxHeight: activeContents[index] ? "100px" : "0",
              overflow: activeContents[index] ? "auto" : "hidden",
            }}
          >
            <p>{ele.paragraph}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Collapsibles;
