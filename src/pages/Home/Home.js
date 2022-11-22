import React from "react";
import "./Home.css";
import caveman from "./images/caveman.jpg";

const Home = () => (
  <div className="page-content">
    <div className="row-top">
      <div className="left-col-top">Ben Williams</div>
      <div className="right-col-top"></div>
    </div>
    <div className="row">
      <div className="left-col">
        My name is Ben Williams. I am a highly ambitious and confident final
        year Mathematics student at Loughborough University.
      </div>
      <div className="right-col">
        <div className="right-col-image">
          <img src={caveman} alt="caveman-coder" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="left-col">
        The world is changing; companies are capturing trillions of bytes of
        information about their customers, suppliers, and operations. This
        explosion of data is disrupting industries and creating new
        opportunities. Companies need people who can take data, understand it,
        process it, extract value from it, visualise it, and communicate it.
        They need people who deeply understand data, its potential and its
        limitations, who can frame business problems, analyse data with
        statistical techniques, develop and maintain predictive models, and
        communicate analytics results to business executives, partners and
        customers.
      </div>
      <div className="right-col">
        {" "}
        Business Analytics is taught by UCL School of Management. It combines
        modules that explore how data and analytics are transforming key areas
        of business (strategy, marketing, operations) with modules that provide
        the statistical and computational skills needed to make effective use of
        the latest business analytics tools. Business Analytics requires a
        combination of management insight, strong quantitative and analytical
        skills, and an understanding of the technology required to handle data
        at scale. The innovative programme prepares people for leadership roles
      </div>
    </div>
    <div className="row">
      <div className="left-col">
        The world is changing; companies are capturing trillions of bytes of
        information about their customers, suppliers, and operations. This
        explosion of data is disrupting industries and creating new
        opportunities. Companies need people who can take data, understand it,
        process it, extract value from it, visualise it, and communicate it.
        They need people who deeply understand data, its potential and its
        limitations, who can frame business problems, analyse data with
        statistical techniques, develop and maintain predictive models, and
        communicate analytics results to business executives, partners and
        customers.
      </div>
      <div className="right-col">
        {" "}
        Business Analytics is taught by UCL School of Management. It combines
        modules that explore how data and analytics are transforming key areas
        of business (strategy, marketing, operations) with modules that provide
        the statistical and computational skills needed to make effective use of
        the latest business analytics tools. Business Analytics requires a
        combination of management insight, strong quantitative and analytical
        skills, and an understanding of the technology required to handle data
        at scale. The innovative programme prepares people for leadership roles
      </div>
    </div>
  </div>
);

export default Home;
