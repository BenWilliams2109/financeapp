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
            I am an ambitious MSc Data Science student at University College
            London.
          </div>
          <div className="title-1-content">
            I enjoy learning about various applications of programming and
            maths, and I built this website to showcase my work.
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
      <div className="university-Lboro">
        Bsc Mathematics, Loughborough University
      </div>
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
          <div className="row-2-col-title">Diploma in Professional Studies</div>
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
            <div className="row-2-col-grade">First Class Honours</div>
          </div>
          <div className="row-2-col-footer">
            <div>Operational Research</div>
            <div>Statistics for Large Data</div>
            <div>Computational Methods in Finance</div>
          </div>
        </div>
      </div>
      <div className="university-UCL">
        MSc Data Science, University College London
      </div>

      <div className="UCL-2-col">
        <div className="row-2-col-title">Modules</div>
        <div className="UCL-container">
          <div className="UCL-box">
            <div className="UCL-modules-header">Semester 1</div>
            <div className="UCL-module">
              <div>Introduction to Machine Learning</div>
              <div>Introduction to Statistical Data Science</div>
              <div>Statistical Design of Investigations</div>
              <div>Graphical Models</div>
            </div>
          </div>
          <div className="UCL-box">
            <div className="UCL-modules-header">Semester 2</div>
            <div className="UCL-module">
              <div>Applied Bayesian Methods</div>
              <div>Inference at Scale</div>
              <div>Information Retrieval and Data Mining</div>
              <div>Statistical Computing</div>
            </div>
          </div>
          <div className="UCL-box">
            <div className="UCL-modules-header">Semester 3</div>
            <div className="UCL-module">
              <div>Research Project</div>
            </div>
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
