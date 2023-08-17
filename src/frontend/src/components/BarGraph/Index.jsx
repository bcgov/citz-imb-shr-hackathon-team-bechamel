import TwoCriteriaGraph from "./TwoCriteriaGraph";
import OneCriteriaGraph from "./OneCriteriaGraph";
import { useState, useEffect } from "react";

const GraphIndex = (props) => {
  const {graphData} = props;
  //Local state to manage submission error handling
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", height: "300px", padding: "2%"}}>
    <OneCriteriaGraph graphData={graphData}/>
    <TwoCriteriaGraph graphData={graphData}/>    
    </div>
  );
};

export default GraphIndex;

// One Graph for Speicifc serach criteria (low avg high)
// All band withs (second filter critera)