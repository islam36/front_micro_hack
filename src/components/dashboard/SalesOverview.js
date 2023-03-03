import React from "react";
import { Card, CardContent, Typography, Box, ButtonGroup, Button } from "@mui/material";
import dynamic from "next/dynamic";
import BaseCard from "../baseCard/BaseCard";
import { useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const SelectLine = ({select, setSelect})=> {
  
  const [hover,setHover] = useState(-1)

  return(
    <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={()=>setSelect(0)} onMouseOver={()=>setHover(0)} onMouseOut={()=>setHover(-1)} style={{width : 100 }} color="primary" size="medium" variant={hover == 0 || select == 0 ? "contained" : ""}>
              Temperature
            </Button>
            <Button onClick={()=>setSelect(1)} onMouseOver={()=>setHover(1)} onMouseOut={()=>setHover(-1)} style={{width : 100}}  color="primary" size="medium" variant={hover == 1 || select == 1 ? "contained" : ""}>
              Vibration
            </Button>
            <Button onClick={()=>setSelect(2)} onMouseOver={()=>setHover(2)} onMouseOut={()=>setHover(-1)} style={{width : 100}} color="primary" size="medium" variant={hover == 2 || select == 2 ? "contained" : ""}>
              Dégradation
            </Button>
    </ButtonGroup>
  )
}
const SalesOverview = () => {
  const [select, setSelect] = useState(0)
  const color = [["#03c9d7"],["#fb9678"],["#e46a76"]]
   const optionssalesoverview ={
    chart: {
      id: "basic-bar",
 
        stacked: true
    }
    ,
    stroke: {
      curve: 'smooth',
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
        stops: [0, 90, 100]
      }
    },
        plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
        borderRadius: 5,
      },
    },
        colors: color[0], //["#fb9678", "#03c9d7"],
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
    },
       

  }



   const seriessalesoverview = [
    {
      name: "Bon états",
      data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
    },
    {
      name: "fonctionnal",
      data: [180, 250, 125, 185, 350, 210, 180, 150, 125, 215, 150, 90],
    },
    {
      name: "Mauvais états",
      data: [80, 60, 90, 105, 90, 19, 20, 11, 30, 29, 50, 37],
    },   
  ]

  return (
    <>
    <BaseCard >
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
