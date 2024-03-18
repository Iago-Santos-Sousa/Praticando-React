import React, { useState } from "react";
import "./VerticalTabs.css";

const allTabs = [
  { name: "Analytics", p: "lorem Analytics" },
  { name: "Reports", p: "lorem Reports" },
  { name: "Performance", p: "lorem Performance" },
  { name: "Funds", p: "lorem Funds" },
];

const allLinks = [
  {
    name: "Analytics",
    svg: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 3v18h18"></path>
        <path d="M20 18v3"></path>
        <path d="M16 16v5"></path>
        <path d="M12 13v8"></path>
        <path d="M8 16v5"></path>
        <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5"></path>
      </svg>
    ),
  },
  {
    name: "Reports",
    svg: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
        <path d="M7 3v4h4"></path>
        <path d="M9 17l0 4"></path>
        <path d="M17 14l0 7"></path>
        <path d="M13 13l0 8"></path>
        <path d="M21 12l0 9"></path>
      </svg>
    ),
  },
  {
    name: "Performance",
    svg: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
        <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
        <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
        <path d="M4 20l14 0"></path>
      </svg>
    ),
  },
  {
    name: "Funds",
    svg: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 21l18 0"></path>
        <path d="M3 10l18 0"></path>
        <path d="M5 6l7 -3l7 3"></path>
        <path d="M4 10l0 11"></path>
        <path d="M20 10l0 11"></path>
        <path d="M8 14l0 3"></path>
        <path d="M12 14l0 3"></path>
        <path d="M16 14l0 3"></path>
      </svg>
    ),
  },
];

const VerticalTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTab = (i) => {
    setTabIndex(i);
  };

  return (
    <div className="vertical-tabs-container">
      <ul className="tabs">
        {allLinks.map((elem, i) => (
          <li key={`tab${i}`}>
            <a
              id={`tab${i}`}
              title={elem.name}
              // href={`#tab${i}`}
              onClick={() => handleTab(i)}
              className={`${tabIndex === i ? "active-tab" : ""}`}
            >
              {elem.svg}
              {elem.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="vertical-tab-content-wrapper">
        {allTabs.map((elem, i) => (
          <section
            key={`${elem.name}-${i}`}
            id={`tab-${elem.name}-content`}
            className="tab-content"
            style={{ transform: `translateY(-${100 * tabIndex}%)` }}
          >
            <h2>{elem.name}</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus iste natus accusantium!
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default VerticalTabs;
