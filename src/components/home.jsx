import React from "react";
import './Home.css'; // Ensure this CSS file exists and is correctly referenced

export const Home = (props) => {
  // Check if props.data is available and contains the necessary information
  const homeData = props.data && props.data[0]; // Assumes 'Home' is an array with one object

  return (
    <div id="home" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{homeData ? homeData.title : "Entertainment Squad"}</h2>
          <ul>
            <li>Our Entertainment QA Squads stands as the cornerstone of our commitment to excellence and customer satisfaction. With a relentless focus on empowering quality through meticulous testing and continuous improvement, our QA squad plays a pivotal role in ensuring that every product we deliver meets the highest standards of performance and reliability. Through meticulous testing, we not only validate functionality but also validate user interface design, performance under stress, security protocols, and compatibility across platforms.</li>
            <li>Within our Entertainment QA organization, we operate multiple specialized squads, each focused on ensuring the quality and reliability of our products across various devices and platforms.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

