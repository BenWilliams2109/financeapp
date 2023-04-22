import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./OECD.css";

function OECD() {
  const [location, setLocation] = useState([]);
  const [skill, setSkill] = useState([]);
  const [information, setInformation] = useState([]);
  const [country, setCountry] = useState(0);
  const [raw, setRaw] = useState([
    { skill: "arts and humanities knowledge", value: 0 },
    { skill: "attitudes", value: 0 },
    { skill: "business processes", value: 0 },
    { skill: "cognitive skills", value: 0 },
    { skill: "communication skills", value: 0 },
    { skill: "digital skills", value: 0 },
    { skill: "law and public safety knowledge", value: 0 },
    { skill: "medicine knowledge", value: 0 },
    { skill: "physical skills", value: 0 },
    { skill: "production and technology knowledge", value: 0 },
    { skill: "resource management", value: 0 },
    { skill: "scientific knowledge", value: 0 },
    { skill: "social skills", value: 0 },
    { skill: "training and education", value: 0 },
  ]);

  useEffect(() => {
    getOECD();
  }, []);

  async function getOECD() {
    const response = await fetch(
      "https://stats.oecd.org/SDMX-JSON/data/S4J2022/AUS+AUT+BEL+CAN+CHL+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ITA+KOR+LVA+LTU+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+EU+OECD+NMEC+ARG+BRA+BGR+CYP+MYS+PER+ROU+ZAF+THA.01+01-1+01-2+01-3+02+02-1+02-2+02-3+02-4+03+03-1+03-2+03-3+04+04-1+04-2+04-3+04-4+05+05-1+05-2+05-3+05-4+05-5+06+06-1+06-2+06-3+06-4+06-5+06-6+07+07-1+07-2+08+08-1+08-2+09+09-1+09-2+09-3+10+10-1+10-2+10-3+10-4+10-5+10-6+10-7+10-8+10-9+11+11-1+11-2+11-3+11-4+11-5+12+12-1+12-2+12-3+12-4+12-5+13+13-1+13-2+13-3+13-4+14+14-1/all?"
    ).then(async (response) => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      const items = [
        [
          { skill: "arts and humanities knowledge", value: 0 },
          { skill: "attitudes", value: 0 },
          { skill: "business processes", value: 0 },
          { skill: "cognitive skills", value: 0 },
          { skill: "communication skills", value: 0 },
          { skill: "digital skills", value: 0 },
          { skill: "law and public safety knowledge", value: 0 },
          { skill: "medicine knowledge", value: 0 },
          { skill: "physical skills", value: 0 },
          { skill: "production and technology knowledge", value: 0 },
          { skill: "resource management", value: 0 },
          { skill: "scientific knowledge", value: 0 },
          { skill: "social skills", value: 0 },
          { skill: "training and education", value: 0 },
        ],
      ];

      for (
        let i = 0;
        i < data.structure.dimensions.observation[0].values.length;
        i++
      ) {
        let temp = [];

        for (
          let j = 0;
          j < data.structure.dimensions.observation[1].values.length;
          j++
        ) {
          if (
            data.structure.dimensions.observation[1].values[j].id.length == 2
          ) {
            const valueString = `${i}:${j}`;
            temp.push({
              skill: data.structure.dimensions.observation[1].values[j].name,
              value: data.dataSets[0].observations[valueString][0],
            });
          }
        }
        items.push(temp);
      }

      setRaw(items);
      console.log(raw);
      // console.log(raw);
      setLocation(data.structure.dimensions.observation[0].values);
      setSkill(data.structure.dimensions.observation[1].values);
    });
  }

  const handleChange = (event) => {
    setCountry(event.target.value + 1);
  };

  return (
    <div className="pageContent">
      <div className="ProjectPicker">
        <div className="PPLeft">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Country"
                onChange={handleChange}
              >
                {location.map((item, i) => {
                  // console.log(item, i);
                  return <MenuItem value={i}>{item.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="PPRight">Pick a country from the drop down</div>
      </div>
      <div className="projectContainer">
        <div className="mainChart">
          <BarChart
            width={800}
            height={500}
            data={raw[country]}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 200,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="skill"
              interval={0}
              angle={-70}
              textAnchor="end"
              tick={{ fontSize: 12 }}
            />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
      <div className="buttonBox">
        {/* <button onClick={getOECD}>Press Me</button> */}
      </div>
      <div className="buttonBox"></div>
    </div>
  );
}

export default OECD;
