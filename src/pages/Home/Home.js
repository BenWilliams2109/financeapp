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
            I am an ambitious final year Mathematics student at Loughborough
            University.
          </div>
          <div className="title-1-content">
            I enjoy learning about data analytics, and I built this website to
            showcase some of my work.
          </div>
        </div>
        <div className="right-col-1">
          <div className="right-col-1-image">
            <img src={dataAnalytics} alt="dataAnalytics" />
          </div>
        </div>
      </div>
    </div>
    {/* This is the second row */}
    <div className="row-2-purple">
      <div className="row-2-university">University Education</div>
      <div className="content-container-row-2">
        <div className="row-2-col">
          <div className="row-2-col-title">Year 1</div>
          <div className="row-2-col-content">
            <div className="row-2-col-grade">78% Overall</div>
          </div>
          <div className="row-2-col-footer">
            <div>Probability and Statistics</div>
            <div>Computing and Numerical Methods</div>
            <div>Linear Algebra 1&2</div>
          </div>
        </div>
        <div className="row-2-col">
          <div className="row-2-col-title">Year 2</div>
          <div className="row-2-col-content">
            <div className="row-2-col-grade">76.1% Overall</div>
          </div>
          <div className="row-2-col-footer">
            <div>Probability Theory</div>
            <div>Advanced Numerical Methods</div>
            <div>Communicating Mathematics</div>
          </div>
        </div>
        <div className="row-2-col">
          <div className="row-2-col-title">Placement</div>
          <div className="row-2-col-content">
            <div className="row-2-col-grade">A (Outstanding)</div>
          </div>
          <div className="row-2-col-footer">
            <div>Interim Placement Report</div>
            <div>Final Placement Report</div>
          </div>
        </div>
        <div className="row-2-col">
          <div className="row-2-col-title">Year 4</div>
          <div className="row-2-col-content">
            <div className="row-2-col-grade">Expected 1st</div>
          </div>
          <div className="row-2-col-footer">
            <div>Operational Research</div>
            <div>Statistics for Large Data</div>
            <div>Computational Methods in Finance</div>
          </div>
        </div>
      </div>
    </div>
    {/* This is the third row */}
    <div className="row-3-white">
      <div className="content-container-row-3">
        <div className="left-col-3">
          <div className="left-col-3-image">
            <img src={MSD} alt="MSD" />
          </div>
          <div className="col-3-title">IT Business Analyst</div>
          <div className="col-3-text">
            1 year Industrial Placement at MSD between July 2021 and June 2022.
            Agile development of new and existing IT systems across a variety of
            sectors within the business.
          </div>
        </div>
        <div className="right-col-3">
          <div className="right-col-3-image">
            <img src={Cap1} alt="Cap-1" />
          </div>
          <div className="col-3-title">Strategy Analyst</div>
          <div className="col-3-text">
            3 month summer internship between June 2022 - Sep 2022. Sole
            ownership of project investigating customer acquisition
            optimisations using SQL, Python and Excel.
          </div>
        </div>
      </div>
    </div>
    {/* This is the fourth row */}
    <div className="row-2-purple"></div>
  </div>
);

export default Home;
