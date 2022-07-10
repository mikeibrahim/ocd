import React from "react";

export default function FaceEditor(props) {
  const currentFaceData = props.currentFaceData;
  const setFaceData = props.setFaceData;

  console.log("currentFaceData", currentFaceData);
  const colors = ['r', 'o', 'y', 'g', 'b', 'l', 'w'];
  const colorsFull = ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'white'];
  const colorToColorFull = (color) => {
    return colorsFull[colors.indexOf(color)];
  }

  return (
    <div id="face-editor">
      {currentFaceData.map((color, index) => {
        return (
          <div key={index} className="face-square" style={{
            backgroundColor: colorToColorFull(color)
          }}></div>
        )
      })}
    </div>
  );
}