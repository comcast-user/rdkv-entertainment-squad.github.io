import React from 'react';
import PropTypes from 'prop-types';
import './navigation.css'; // Import the updated CSS file

export const Navigation = ({ currentTab, onClickTab }) => {
  // Function to determine the active tab class
  const getClassName = (tab) => `nav-link ${currentTab === tab ? 'active' : ''}`;

  return (
    <nav id="menu" className="navbar">
      <div className="logo-container">
        <img src="/images/logo.png" alt="Logo" className="logo-img" />
        <a className="logo-text page-scroll" href="#page-top">
          ENTERTAINMENT SQUAD
        </a>
      </div>

      <ul className="navbar-nav">
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
    </nav>
  );
};

Navigation.propTypes = {
  currentTab: PropTypes.string.isRequired,
  onClickTab: PropTypes.func.isRequired,
};
