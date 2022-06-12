import React from "react"
import Text from "../components/Text.jsx"
import Button from "../components/Button.jsx"
import Video from "../components/Video.jsx";

export default function Digitize() {
  // state variables
  const [imgData, setImgData] = React.useState(null);
  const [currentSide, setCurrentSide] = React.useState(0); // 0 = front, 1 = left, 2 = back, 3 = right, 4 = top, 5 = bottom

  // element conditionals
  const isPreviousButtonDisabled = currentSide === 0 ? "button-disabled" : "";
  const isNextButtonDisabled = currentSide === 5 ? "button-disabled" : "";

  return (
    <div className="digitize dark-color-bg">
      {/* video */}
      <Video setImgData={setImgData} className="lg-btn primary-color-bg" />

      {/* white panel of controls */}
      <div className="digitize-panel light-color-bg">
        {/* top panel of buttons */}
        <div className="button-panel">
          <Button className="dark-color-bg sm-btn" onClick={() => window.location.href = '/'}>
            <Text className="light-color sm hide-mobile">Back</Text>
            <Text className="light-color sm hide-desktop">←</Text>
          </Button>
          <Text className="lg primary-color">Digitize your Cube</Text>
          <Button className="dark-color-bg sm-btn" onClick={() => window.location.href = '/help'}>
            <Text className="light-color sm hide-mobile">Help</Text>
            <Text className="light-color sm hide-desktop">?</Text>
          </Button>
        </div>

        {/* cube */}
        <Text> cube placeholder </Text>

        {/* progress bar */}
        <Text> progress bar placeholder </Text>

        {/* bottm panel of buttons */}
        <div className="button-panel">
          <Button className={"dark-color-bg med-btn " + isPreviousButtonDisabled} onClick={() => console.log("previous")}>
            <Text className="light-color med-sm hide-mobile">Previous</Text>
            <Text className="light-color med-sm hide-desktop">←</Text>
          </Button>
          <Button className={"dark-color-bg med-btn " + isNextButtonDisabled} onClick={() => console.log("next")}>
            <Text className="light-color med-sm hide-mobile">Next</Text>
            <Text className="light-color med-sm hide-desktop">→</Text>
          </Button>
        </div>
      </div>
    </div>
  );
}