import React from 'react';
import Button from './Button';
import Text from './Text';



const constraints = {
  audio: false,
  video: {
    width: { max: 500 },
    height: { max: 500 },
    facingMode: 'environment' // or 'environment'
  }
}

export default function Video(props) {
  let video = React.createRef();
  let roi = React.createRef();
  let capture = () => {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    context.drawImage(video.current, 0, 0, constraints.video.width.max, constraints.video.height.max);
    const img = context.getImageData(0, 0, constraints.video.width.max, constraints.video.height.max)
    props.setImg(img);
    canvas = null;
    context = null;
  }

  const playVideo = () => video.current.play();


  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => { if (video.current && !video.current.srcObject) { video.current.srcObject = stream; } })

  React.useEffect(() => {
    const button = document.getElementById("capture-button")
    const parent = document.getElementsByClassName("button-panel")[1];
    parent.insertBefore(button, parent.childNodes[1]);
  }, [])


  return (
    <>
      <video id='video' ref={video} autoPlay playsInline muted onCanPlay={playVideo} >
        <div id="roi" ref={roi}></div>
      </video>
      <Button id="capture-button" className={"button " + props.className} onClick={capture}>
        <Text className="light-color med-sm hide-mobile">Capture</Text>
        <Text className="light-color lg hide-desktop">*</Text>
      </Button>
    </>
  )
}