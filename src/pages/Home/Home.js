import React from "react";
import "./Home.css";
import dataAnalytics from "./images/Data-Analytics.png";
import MSD from "./images/MSD.png";
import Cap1 from "./images/Cap1.png";

const Home = () => (
  <div className="page-content">
    {/* This is the first row */}
    <div className="row-white-1">
      <div className="content-container-row-1">
        <div className="left-col-1">
          <div className="title-1">Hi, I'm Ben</div>
          <div className="title-1-content">
            I am a highly ambitious and confident final year Mathematics student
            at Loughborough University.
          </div>
          <div className="title-1-content">
            I enjoy learning about data analytics, and I built this website to
            showcase some of my work.
          </div>
        </div>
        <div className="right-col-1">
          <div className="right-col-1-image">
            <img src={dataAnalytics} alt="caveman-coder" />
          </div>
        </div>
      </div>
    </div>
    {/* This is the second row */}

    <div className="row-purple-1">
      <div className="content-container-row-2">
        <div className="left-col-2">
          My name is Ben Williams. I am a highly ambitious and confident final
          year Mathematics student at Loughborough University.
        </div>
        <div className="right-col-2"></div>
      </div>
    </div>
    {/* This is the third row */}
    <div className="row-white-2">
      <div className="content-container-row-3">
        <div className="left-col-3">
          <div className="left-col-3-image">
            <img src={MSD} alt="MSD" />
          </div>
          <div className="col-3-title">IT Business Analyst</div>
          <div className="col-3-text">
            I worked as an IT Business Analyst Industrial Placement Student at
            MSD between July 2021 and June 2022.
          </div>
        </div>
        <div className="right-col-3">
          <div className="right-col-3-image">
            <img src={Cap1} alt="Cap-1" />
          </div>
          <div className="col-3-title">Strategy Analyst</div>
          <div className="col-3-text">
            I worked as a Strategy Analyst Summer Intern at Capital One in the
            Upmarket Customer Acquisitions team.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
