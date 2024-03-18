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
import Accordion from "./components/Accordion/Accordion";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Tabs1 from "./components/Tabs1/Tabs1";
import SliderTranslate from "./components/SliderTranslate/SliderTranslate";
import VerticalTabs from "./components/VerticalTabs/VerticalTabs";
import SideBar from "./components/SideBar/SideBar";

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
      <br />
      <Accordion />
      <br />
      <SearchBar />
      <br />
      <ImageSlider />
      <br />
      <Tabs1 />
      <br />
      <SliderTranslate />
      <br />
      <VerticalTabs />
      <br />
      <SideBar />
    </>
  );
}

export default App;
