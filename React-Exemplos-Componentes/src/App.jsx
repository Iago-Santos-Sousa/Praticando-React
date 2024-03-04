import { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./components/progress-bar/ProgressBar";
import Dropdown from "./components/Dropdown/Dropdown";
import Collapsibles from "./components/Collapsibles/Collapsibles";

function App() {
  return (
    <>
      <ProgressBar />
      <br />
      <Dropdown />
      <br />
      <br />
      <Collapsibles />
    </>
  );
}

export default App;
