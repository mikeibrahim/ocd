import React from 'react';
import Button from './Button';
import Text from './Text';

const constraints = {
  audio: false,
  video: {
    aspectRatio: 1,
    width: { max: 600 },
    height: { max: 600 },
    facingMode: 'environment' // or 'environment'
  }
}

export default function Video(props) {
  let video = React.createRef();


  let capture = () => {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    console.log("video", video);
    console.log("video.current", video.current);
    context.drawImage(video.current, 0, 0, 60, 60);
    const img = context.getImageData(0, 0, 60, 60);
    console.log("img", img)
    // document.getElementById("helpCanvas").getContext("2d").putImageData(img, 0, 0);
    props.updateSide(img);
    canvas = null;
    context = null;
  }

  const playVideo = () => video.current.play();

  if (!navigator.mediaDevices) {
    console.log("Sorry, getUserMedia is not supported");
  } else {
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => { if (video.current && !video.current.srcObject) { video.current.srcObject = stream; } })
      .catch(error => console.log(error));
  }

  React.useEffect(() => {
    const button = document.getElementById("capture-button")
    const parent = document.getElementsByClassName("button-panel")[1];
    parent.insertBefore(button, parent.childNodes[1]);
  }, [])


  return (
    <>
      <video id='video' ref={video} autoPlay playsInline onCanPlay={playVideo} />
      {/* <canvas id="helpCanvas"></canvas> */}
      <Button id="capture-button" className={"button " + props.className} onClick={capture}>
        <Text className="light-color med-sm hide-mobile">Capture</Text>
        <Text className="light-color lg hide-desktop">*</Text>
      </Button>
    </>
  )
}