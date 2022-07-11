import React from "react";

export default function FaceEditor(props) {
  const currentFaceData = props.currentFaceData;
  const setFaceData = props.setFaceData;

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'white']

  const cycleFaceSquare = (index, color) => {
    let nextColor = colors[(colors.indexOf(color) + 1) % colors.length];
    let newFaceData = [...currentFaceData.slice(0, index), nextColor, ...currentFaceData.slice(index + 1)];
    setFaceData(newFaceData);
  }

  return (
    <div id="face-editor">
      {currentFaceData.map((color, index) => {
        return (
          <div key={index} className="face-square"
            style={{
              backgroundColor: color
            }}
            onClick={() => {
              cycleFaceSquare(index, color)
            }}
          ></div>
        )
      })}
    </div>
  )
}