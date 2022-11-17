import React, { useEffect, useRef } from "react";
import "./Docs.css";
import pdf from "./docs src/Market Movements with Machine Learning.pdf";

export default function Docs() {
  return (
    <div className="page-content">
      <h1 className="title">This is the Docs Page</h1>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
        in efficitur arcu congue. Nam fermentum commodo egestas.
      </p>
      <div>
        <a href={pdf} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      </div>
    </div>
  );
}
