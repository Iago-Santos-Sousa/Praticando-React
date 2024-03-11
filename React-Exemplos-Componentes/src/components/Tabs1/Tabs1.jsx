import React, { useEffect, useRef, useState } from "react";
import "./Tabs1.css";
import gamesSvg from "../../assets/games.svg";
import moviesSvg from "../../assets/movies.svg";
import booksSvg from "../../assets/books.svg";
import barbieImg from "../../assets/barbie.png";
import code_warImg from "../../assets/code_war.png";
import lotrImg from "../../assets/lotr.jpeg";
import mechinariumImg from "../../assets/mechinarium.png";
import oppenheimerImg from "../../assets/oppenheimer.jpg";
import space_simulatorImg from "../../assets/space_simulator.png";

const SVG_TABS = {
  svgsTab: [gamesSvg, moviesSvg, booksSvg],
};

const tabRecords = [
  {
    src: space_simulatorImg,
    name: "Space Simulator",
    description: "Game / Free / Simulation",
    type: "games",
  },
  {
    src: code_warImg,
    name: "Code of War",
    description: "Game / Free / Action",
    type: "games",
  },
  {
    src: oppenheimerImg,
    name: "Oppenheimer",
    description: "Drama / Thriller",
    type: "movies",
  },
  {
    src: barbieImg,
    name: "Barbie",
    description: "Comedy / Drama",
    type: "movies",
  },
  {
    src: lotrImg,
    name: "Lord of the rings: Fellowship of the ring",
    description: "Action / Fantasy",
    type: "movies",
  },
];

const tabOptions = ["games", "movies"];

const Tabs1 = () => {
  const [tabIndex, setTabIndex] = useState(0);
  // const [animationKey, setAnimationKey] = useState(0);

  const handleTabsClick = (i) => {
    setTabIndex(i);
    // setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <div id="container-tab1">
      <div className="tabs">
        {tabOptions.map((option, i) => (
          <span
            key={i}
            onClick={() => handleTabsClick(i)}
            className={`${tabIndex === i ? "active-tab" : ""}`}
          >
            <img src={`${SVG_TABS.svgsTab[i]}`} alt="" />
            {option}
          </span>
        ))}
      </div>

      {/* Para adicionar a animação CSS quando ocorre uma mudança no tabRecords, você pode fazer uso do React key nas suas abas. Isso faz com que o React recrie o componente quando o key é alterado. Para implementar isso, você pode fazer algumas modificações no seu código. 
      Primeiramente, adicione uma chave única para cada tab com base no tipo e índice do registro. */}

      <div className="tab-content-wrapper">
        {tabRecords
          .filter((elem) => {
            return elem.type === tabOptions[tabIndex];
          })
          .map((elemFilter, i) => (
            <div className="tab-content" key={`${elemFilter.type}-${i}`}>
              <div className="record">
                <div className="avatar-wrapper">
                  <img src={elemFilter.src} alt="" className="avatar" />
                </div>
                <div className="content">
                  <div className="title-description">
                    <div className="title">{elemFilter.name}</div>
                    <div className="description">{elemFilter.description}</div>
                  </div>
                  <a
                    href="#explore-more"
                    className="explore-button"
                    title="Explore"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tabs1;
