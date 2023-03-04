import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  ButtonGroup,
  Button,
} from "@mui/material";
import dynamic from "next/dynamic";
import BaseCard from "../baseCard/BaseCard";
import { useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SelectLine = ({ select, setSelect }) => {
  const [hover, setHover] = useState(-1);

  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button
        onClick={() => setSelect(0)}
        onMouseOver={() => setHover(0)}
        onMouseOut={() => setHover(-1)}
        style={{ width: 100 }}
        color="primary"
        size="medium"
        variant={hover == 0 || select == 0 ? "contained" : ""}
      >
        Temperature
      </Button>
      <Button
        onClick={() => setSelect(1)}
        onMouseOver={() => setHover(1)}
        onMouseOut={() => setHover(-1)}
        style={{ width: 100 }}
        color="secondary"
        size="medium"
        variant={hover == 1 || select == 1 ? "contained" : ""}
      >
        Vibration
      </Button>
      <Button
        onClick={() => setSelect(2)}
        onMouseOver={() => setHover(2)}
        onMouseOut={() => setHover(-1)}
        style={{ width: 100 }}
        color="error"
        size="medium"
        variant={hover == 2 || select == 2 ? "contained" : ""}
      >
        Dégradation
      </Button>
    </ButtonGroup>
  );
};
const SalesOverview = () => {
  const [select, setSelect] = useState(0);
  const color = [["#03c9d7"], ["#fb9678"], ["#e46a76"]];
  var hoursList = [];

  for (var i = 0; i < 10; i++) {
    var d = new Date(); // get current date and time
    d.setHours(d.getHours() - i); // subtract i hours
    hoursList.push(
      d.getHours() >= 12
        ? `${d.getHours() % 12 != 0 ? d.getHours() % 12 : 12} PM`
        : `${d.getHours() % 12 != 0 ? d.getHours() % 12 : 12} AM`
    ); // add hoursList[0]  to array
  }
  const optionssalesoverview = {
    chart: {
      id: "basic-bar",

      stacked: true,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: true,
      borderColor: "transparent",
      strokeDashArray: 3,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
        borderRadius: 5,
      },
    },
    colors: color[select], //["#fb9678", "#03c9d7"],
    xaxis: {
      type: "category",
      categories: [...hoursList.reverse()],
    },
    series: [
      {
        name: "Performant",
        data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350],
      },
      {
        name: "adéquat",
        data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215],
      },
      {
        name: "défaillant",
        data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215],
      },
    ],
  };

  const seriessalesoverview = [
    {
      name: "Temperature",
      data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350],
    },
    {
      name: "Vibration",
      data: [180, 250, 125, 185, 350, 210, 180, 150, 125, 215],
    },
    {
      name: "Dégradation",
      data: [80, 60, 90, 105, 90, 19, 20, 11, 30, 29],
    },
  ];

  return (
    <>
      <BaseCard>
        <SelectLine select={select} setSelect={setSelect} />
        <Chart
          options={optionssalesoverview}
          series={[seriessalesoverview[select]]}
          type="area"
          height="295px"
        />
      </BaseCard>
    </>
  );
};

export default SalesOverview;
