import React, { useState } from "react";
import "./SideBar.css";

const sideBarLinks = [
  { a: "#dashboard", title: "Dashboard", imgSrc: "src/assets/dashboard.svg" },
  { a: "#project", title: "Project", imgSrc: "src/assets/analytics.svg" },
  {
    a: "#performance",
    title: "Performance",
    imgSrc: "src/assets/performance.svg",
  },
  {
    a: "#funds",
    title: "Funds",
    imgSrc: "src/assets/funds.svg",
  },
];

const SideBar = () => {
  const [expand, setExpand] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const handleViewSideBar = () => {
    setExpand((prev) => !prev);
  };

  const handleLinksSideBar = (elem, i) => {
    setActiveLink(i);
    console.log("clicou no link: " + elem.title);
  };

  return (
    <div className={`navbar-wrapper ${expand ? "collapsed" : ""}`}>
      <nav>
        <div className="sidebar-top">
          <a href="#" className="logo__wrapper">
            <img src="src/assets/logo.svg" alt="Logo" className="logo" />
            <h1 className="hide">Laplace</h1>
          </a>
          <div className="expand-btn" onClick={handleViewSideBar}>
            <img
              src="src/assets/chevron.svg"
              alt="Chevron"
              className={`${expand ? "rotate-img" : "no-rotate-img"}`}
            />
          </div>
        </div>
        <div className="sidebar-links">
          <ul>
            {sideBarLinks.map((elem, i) => (
              <li key={`${elem.title}-${i}`}>
                <a
                  href={elem.a}
                  alt={elem.title}
                  className="tooltip"
                  onClick={() => handleLinksSideBar(elem, i)}
                >
                  <img src={elem.imgSrc} alt={elem.title} />
                  <span className="link hide">{elem.title}</span>
                  <span className="tooltip__content">{elem.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
