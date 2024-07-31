import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { Squad } from "./components/Squad";
import { Reports } from "./components/reports";
import { Devices } from "./components/devices";
import { Testsuites } from "./components/testsuites";
import { Trainings } from "./components/trainings";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [currentTab, setCurrentTab] = useState("home");

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const handleNavigationClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <Navigation currentTab={currentTab} onClickTab={handleNavigationClick} />
      {currentTab === "home" && (
        <div className="intro">
          <Header data={landingPageData.Header} />
        </div>
      )}
      {currentTab === "home" && <Home data={landingPageData.Home} />}
      {currentTab === "squad" && <Squad data={landingPageData.Squad} />}
      {currentTab === "reports" && <Reports data={landingPageData.Reports} />}
      {currentTab === "devices" && <Devices data={landingPageData.Devices} />}
      {currentTab === "testsuites" && <Testsuites data={landingPageData.Testsuites} />}
      {currentTab === "trainings" && <Trainings data={landingPageData.Trainings} />}
      {currentTab === "contact" && <Contact data={landingPageData.Contact} />}
    </div>
  );
};

export default App;
