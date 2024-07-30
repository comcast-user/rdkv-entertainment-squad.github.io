import React from "react";

export const Navigation = ({ currentTab, onClickTab }) => {
  const getClassName = (tab) => {
    return `nav-link ${currentTab === tab ? 'active' : ''}`;
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Entertainment Squad
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className={getClassName("home")}>
              <a href="#home" className="page-scroll" onClick={() => onClickTab("home")}>
                Home
              </a>
            </li>
            <li className={getClassName("squad")}>
              <a href="#squad" className="page-scroll" onClick={() => onClickTab("squad")}>
                Squad
              </a>
            </li>
            <li className={getClassName("reports")}>
              <a href="#reports" className="page-scroll" onClick={() => onClickTab("reports")}>
                Reports
              </a>
            </li>
            <li className={getClassName("devices")}>
              <a href="#portfolio" className="page-scroll" onClick={() => onClickTab("devices")}>
                Devices
              </a>
            </li>
            <li className={getClassName("testsuites")}>
              <a href="#testsuites" className="page-scroll" onClick={() => onClickTab("testsuites")}>
                Test Suites
              </a>
            </li>
            <li className={getClassName("trainings")}>
              <a href="#team" className="page-scroll" onClick={() => onClickTab("trainings")}>
                Trainings
              </a>
            </li>
            <li className={getClassName("contact")}>
              <a href="#contact" className="page-scroll" onClick={() => onClickTab("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
