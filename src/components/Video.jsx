import React from 'react';
import Button from './Button';
import Text from './Text';
import VideoStream from './VideoStream';

export default function Video(props) {

  let capture = () => {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    const video = document.getElementById('video');
    context.drawImage(video, 0, 0, 60, 60);
    const img = context.getImageData(0, 0, 60, 60);
    props.updateSide(img);
    canvas = null;
    context = null;
  }

  React.useEffect(() => {
    const button = document.getElementById("capture-button")
    const parent = document.getElementsByClassName("button-panel")[1];
    parent.insertBefore(button, parent.childNodes[1]);
  }, [])


  return (
    <>
      <VideoStream />
      <Button id="capture-button" className={"button " + props.className} onClick={capture}>
        <Text className="light-color med-sm hide-mobile">Capture</Text>
        <Text className="light-color lg hide-desktop">*</Text>
      </Button>
    </>
  )
}