import { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./components/progress-bar/ProgressBar";
import Dropdown from "./components/Dropdown/Dropdown";
import Collapsibles from "./components/Collapsibles/Collapsibles";
import DotsLoading from "./components/DotsLoading/DotsLoading";
import MenuBurguer from "./components/MenuBurguer/MenuBurguer";
import LoaderUm from "./components/LoaderUm/LoaderUm";
import ToolTip from "./components/ToolTip/ToolTip";
import CountDownBar from "./components/CountDownBar/CountDownBar";

function App() {
  return (
    <>
      <ProgressBar />
      <br />
      <Dropdown />
      <br />
      <br />
      <Collapsibles />
      <br />
      <br />
      <DotsLoading />
      <br />
      <MenuBurguer />
      <br />
      <LoaderUm />
      <br />
      <ToolTip />
      <br />
      <br />
      <CountDownBar />
    </>
  );
}

export default App;
