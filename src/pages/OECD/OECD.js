import React, { useState, useEffect } from "react";
import "./OECD.css";

const OECD = () => {
  const [raw, setRaw] = useState([]);
  const [location, setLocation] = useState();
  const [skill, setSkill] = useState();
  const [information, setInformation] = useState();

  useEffect(() => {
    fetch(
      "https://stats.oecd.org/SDMX-JSON/data/S4J2022/AUS+AUT+BEL+CAN+CHL+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ITA+KOR+LVA+LTU+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+EU+OECD+NMEC+ARG+BRA+BGR+CYP+MYS+PER+ROU+ZAF+THA.01+01-1+01-2+01-3+02+02-1+02-2+02-3+02-4+03+03-1+03-2+03-3+04+04-1+04-2+04-3+04-4+05+05-1+05-2+05-3+05-4+05-5+06+06-1+06-2+06-3+06-4+06-5+06-6+07+07-1+07-2+08+08-1+08-2+09+09-1+09-2+09-3+10+10-1+10-2+10-3+10-4+10-5+10-6+10-7+10-8+10-9+11+11-1+11-2+11-3+11-4+11-5+12+12-1+12-2+12-3+12-4+12-5+13+13-1+13-2+13-3+13-4+14+14-1/all?"
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setRaw(data);
        setInformation(data.dataSets[0].observations);
        setLocation(data.structure.dimensions.observation[0].values);
        setSkill(data.structure.dimensions.observation[1].values);
        console.log(location);
      })
      .catch((err) => {
        //console.log(err.message);
      });
  }, []);

  return (
    <div className="PageContent">
      <div className="ProjectPicker">
        <div className="PPLeft">PPLEFT</div>
        <div className="PPRight">PPRIGHT</div>
      </div>
      <div className="ProjectContainer">CONTAINER</div>
    </div>
  );
};

export default OECD;
