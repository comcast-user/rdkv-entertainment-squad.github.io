import React from "react";
import './Home.css'; // Ensure this CSS file exists and is correctly referenced

export const Home = (props) => {
  // Check if props.data is available and contains the necessary information
  const homeData = props.data && props.data[0]; // Assumes 'Home' is an array with one object

  return (
    <div id="home" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h4>{homeData ? homeData.title : "ENTERTAINMENT SQUAD"}</h4>        
          <ul>
            <li>Our Entertainment QA Squads stands as the cornerstone of our commitment to excellence and customer satisfaction. With a relentless focus on empowering quality through meticulous testing and continuous improvement, our QA squad plays a pivotal role in ensuring that every product we deliver meets the highest standards of performance and reliability. Through meticulous testing, we not only validate functionality but also validate user interface design, performance under stress, security protocols, and compatibility across platforms.</li>
            <li>Within our Entertainment QA organization, we operate multiple specialized squads, each focused on ensuring the quality and reliability of our products across various devices and platforms.</li>
            <li>Our QA Squad supports a variety of devices, including XUMO TV models such as Element, Pioneer, and Hisense, as well as streaming boxes like Flex and ES1. </li>
          </ul>
          <h3>{homeData ? homeData.title : "XUMO TV"}</h3>
          <ul>
          <li>Xumo TV brings together 250+ apps in a simple intuitive smart TV experience. Search across all apps at once, curate a watchlist with My List and easily discover your next entertainment.</li>
          <li>Search across hundreds of apps at once to find favorites by title, actor or genre — and use your voice remote to find your next watch even faster.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

