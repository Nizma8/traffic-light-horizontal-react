import React, { useEffect, useState } from "react";

function Trafiic() {
  const config = [
    { activeColor: "red", next: "green", duration: 4000 },
    { activeColor: "green", next: "yellow", duration: 3000 },
    { activeColor: "yellow", next: "red", duration: 500 },
  ];

  const [currentColour, setCurrentColour] = useState("green");
  const light = config.find((lig)=>lig.activeColor===currentColour)
  
  useEffect(()=>{
  const timerID =  setTimeout(()=>{
        setCurrentColour(light.next)
    },light.duration)

    return()=>{
        clearTimeout(timerID)
    }

  },[currentColour])
  return (
    <div
      className="d-flex flex-column border align-items-center ms-5 py-2 bg-black rounded"
      style={{ width: "150px" }}
    >
       <div
        className={` rounded-circle mb-2 ${currentColour==="green"?"bg-success":"bg-dark-subtle"}`}
        style={{ width: "100px", height: "100px" }}
      ></div>
      <div
        className={` rounded-circle mb-2 ${currentColour==="yellow"?"bg-warning":"bg-dark-subtle"}`}
        style={{ width: "100px", height: "100px" }}
      ></div>
     
      <div
        className={` rounded-circle mb-2  ${currentColour==="red"?"bg-danger":"bg-dark-subtle"} `}
        style={{ width: "100px", height: "100px" }}
      ></div>
    </div>
  );
}

export default Trafiic;
