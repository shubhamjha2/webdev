import React, { useState } from "react";

function Bgchanger() {
  const [col, setColour] = useState("red");
  const collourchange = (colou) => {
    setColour(colou);
  };
  return (
    <div className="h-full w-full flex ">
      <div
        className="h-full w-full duration-500 block"
        style={{ backgroundColor: col }}
      >
        <div className="h-full w-full flex justify-center items-center flex-row">
          <button
            className="h-70 w-40 p-1"
            style={{ backgroundColor: "green" }} onClick={(e) => collourchange(e.target.innerText.toLowerCase())}
          >
            green
          </button>
          <button className="h-70 w-40 p-1" style={{ backgroundColor: "blue" }} onClick={(e) => collourchange(e.target.innerText.toLowerCase())}>
            blue
          </button>
          <button className="h-70 w-40 p-1" style={{ backgroundColor: "pink" }} onClick={(e) => collourchange(e.target.innerText.toLowerCase())}>
            pink
          </button>
          <button
            className="h-70 w-40 p-1"
            style={{ backgroundColor: "yellow" }} onClick={(e) => collourchange(e.target.innerText.toLowerCase())}
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bgchanger;
