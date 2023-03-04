import React from "react";
import { Card, CardContent, Typography, Box, ButtonGroup, Button } from "@mui/material";
import dynamic from "next/dynamic";
import BaseCard from "../baseCard/BaseCard";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const KeyBarOver = ({})=> {
  

  return(
    <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button  style={{width : 100 }} color="primary" size="small" variant={"contained" }>
            High
            </Button>
            <Button  style={{width : 100}}  color="error" size="small" variant={"contained" }>
            adequate
            </Button>
            <Button  style={{width : 100}} color="secondary" size="small" variant={"contained"}>
            Low
            </Button>
    </ButtonGroup>
  )
}

const BarOverview = () => {
  const optionssalesoverview = {
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
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
        borderRadius: 5,
      },
    },

    colors: ["#03c9d7","#fb9678","#e46a76"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    series: [
      {
        name: "High-performing",
        data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
      },
      {
        name: "adequately-performing",
        data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
      },
      {
        name: "Low-performing",
        data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
      },
    ],
    chart: {
      offsetX: -15,
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      show: true,
      min: 100,
      max: 400,
      tickAmount: 3,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
    },
  };
  const seriessalesoverview = [
    {
      name: "High-performing",
      data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
    },
    {
      name: "adequately-performing",
      data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
    },
    {
      name: "Low-performing",
      data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
    },
  ];
  return (
    <BaseCard title="The performance of machines">
      <Chart
        options={optionssalesoverview}
        series={seriessalesoverview}
        type="bar"
        height="295px"
      />
      <KeyBarOver/>
    </BaseCard>
  );
};

export default BarOverview;