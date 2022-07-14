import React from "react"
import Text from "../components/Text.jsx"
import Button from "../components/Button.jsx"
import Video from "../components/Video.jsx";
import FaceEditor from "../components/FaceEditor.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import ImageParser from "../components/ImageParser.js";
import Route from "../components/Route.js";
import trainedModel from '../ml/training';
import { Matrix } from '../ml/network';

export default function Digitize() {
  // Data
  const [currentSide, setCurrentSide] = React.useState(0); // 0 = front, 1 = left, 2 = back, 3 = right, 4 = top, 5 = bottom
  const [cubeData, setCubeData] = React.useState([[], [], [], [], [], []]);

  // Captures a side from the camera
  const updateSide = (img) => {
    const parsedImage = ImageParser(img); // Get image from camera
    let input = new Matrix(parsedImage.data.length, parsedImage.data[0].length);
    input.data = parsedImage.data;
    input = input.T();
    let output = trainedModel.predict(input); // Predict the face in the given image
    let { result, index } = output.maxDim("row");
    const sectionedImage = sectionImage(index);
    const averagedImage = averageData(sectionedImage);
    const parsedData = parseData(averagedImage);
    let faceData = []
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'white'];
    for (let i = 0; i < parsedData.length; i++) {
      faceData.push(colors[parsedData[i]]);
    }
    setFaceData(faceData);
    // setImg(null)
  }

  // Helper functions
  const sectionImage = (classifiedImage) => {
    let size = Math.sqrt(classifiedImage.data[0].length);
    classifiedImage = classifiedImage.reshape(size, size); // Turn into square
    let sliced = []; // List of the squares
    let squareSize = size / 3;
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++)
      sliced.push(classifiedImage.slice(i * squareSize, (i + 1) * squareSize, j * squareSize, (j + 1) * squareSize));
    return sliced;
  }
  const averageData = (sectionedImage) => {
    let averagedImage = [];
    for (let i = 0; i < sectionedImage.length; i++)
      averagedImage.push(sectionedImage[i].maxFrequency());
    return averagedImage;
  }
  const parseData = (averagedImage) => {
    let parsedData = new Matrix(3, 3);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++)
      parsedData.data[i][j] = averagedImage[i * 3 + j].data[0][0];
    return parsedData.reshape(1, 9).data[0];
  }
  const isPreviousButtonDisabled = () => currentSide === 0 ? "button-disabled" : "";
  const isNextButtonDisabled = () => currentSide === 5 || cubeData[currentSide].length == 0 ? "button-disabled" : "";
  const isSolveButtonDisabled = () => cubeData[currentSide].length == 0 ? "button-disabled" : "";
  const setFaceData = (faceData) => setCubeData([...cubeData.slice(0, currentSide), faceData, ...cubeData.slice(currentSide + 1)]);
  const getCurrentFaceData = () => cubeData[currentSide];
  const updateCurrentSide = (direction) => setCurrentSide(currentSide + direction);
  const getNumSides = () => cubeData.map(side => side.length != 0 ? 1 : 0).reduce((a, b) => a + b);

  // If there is an image to parse into face data, parse it
  // if (img) updateSide();

  return (
    <div className="digitize dark-color-bg">
      {/* Video */}
      <Video updateSide={updateSide} className="lg-btn primary-color-bg" />

      {/* Control Panel */}
      <div className="digitize-panel light-color-bg">
        {/* Top Controls */}
        <div className="button-panel">
          <Button className="dark-color-bg sm-btn" onClick={() => Route('/')}>
            <Text className="light-color sm hide-mobile">Back</Text>
            <Text className="light-color med hide-desktop">←</Text>
          </Button>
          <Text className="lg primary-color">Digitize your Cube</Text>
          <Button className="dark-color-bg sm-btn" onClick={() => Route('/help')}>
            <Text className="light-color sm hide-mobile">Help</Text>
            <Text className="light-color med hide-desktop">?</Text>
          </Button>
        </div>

        <FaceEditor setFaceData={setFaceData} currentFaceData={getCurrentFaceData()} />
        <ProgressBar currentSide={currentSide} numSides={getNumSides()} setCurrentSide={setCurrentSide} />

        {/* Bottom Controls */}
        <div className="button-panel">
          <Button className={"dark-color-bg med-btn " + isPreviousButtonDisabled()} onClick={() => updateCurrentSide(-1)}>
            <Text className="light-color med-sm hide-mobile">Previous</Text>
            <Text className="light-color lg hide-desktop">←</Text>
          </Button>
          {currentSide < 5 && <Button className={"dark-color-bg med-btn " + isNextButtonDisabled()} onClick={() => updateCurrentSide(1)}>
            <Text className="light-color med-sm hide-mobile">Next</Text>
            <Text className="light-color lg hide-desktop">→</Text>
          </Button>}
          {currentSide == 5 && <Button className={"primary-color-bg med-btn " + isSolveButtonDisabled()} onClick={() => Route('/solve')}>
            <Text className="light-color med-sm hide-mobile">Solve</Text>
            <Text className="light-color lg hide-desktop">✓</Text>
          </Button>}
        </div>
      </div>
    </div>
  );
}