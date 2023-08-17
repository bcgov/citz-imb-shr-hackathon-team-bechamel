import TwoCriteriaGraph from "./TwoCriteriaGraph";
import OneCriteriaGraph from "./OneCriteriaGraph";
import { useState, useEffect } from "react";
import AverageSalary from "../AverageSalary";

const GraphIndex = (props) => {
  const {graphData} = props;
  console.log(graphData)
  //Local state to manage submission error handling
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", height: "300px", padding: "2%"}}>
    <OneCriteriaGraph graphData={graphData}/>
    <TwoCriteriaGraph graphData={graphData}/>    
    </div>
  );
};

export default GraphIndex;

// One Graph for Speicifc serach criteria (two filters) (low avg high)
// All band withs (second filter critera) (low avg high)