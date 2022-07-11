import React from "react";
import Text from "../components/Text.jsx";

export default function ProgressBar(props) {
  const currentSide = props.currentSide;
  const numSides = props.numSides;
  const fullSideNames = ["Front", "Left", "Back", "Right", "Top", "Bottom"];
  const sideNames = ["F", "L", "B", "R", "T", "B"];
  const progressBarWidth = numSides / 6 * 100 + 10 + "%"

  return (
    <div id="progress-bar">
      {/* Fill */}
      <div id="progress-bar-bg" style={{
        width: progressBarWidth
      }}></div>

      {/* Circles */}
      <div id="progress-circles">
        {sideNames.map((side, index) => {
          const green = "#57CC99";
          const black = "#262B37";
          const white = "#FAFAFA";
          const text = index == currentSide ? fullSideNames[index] : side;
          const click = () => {
            if (index <= numSides) {
              props.setCurrentSide(index);
            }
          }

          return (
            <div key={index} className="progress-circle" onClick={click} style={{
              color: index >= numSides ? black : white,
              borderColor: index == currentSide ? green : black,
              backgroundColor: index >= numSides ? white : green,
              fontWeight: index == currentSide ? "400" : "200",
              fontSize: "1.6vw",
              width: index == currentSide ? "6vw" : "4vw",
              cursor: index > numSides ? "default" : "pointer"
            }}>
              {text}
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}