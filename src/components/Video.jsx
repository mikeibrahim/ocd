import React from 'react';
import Button from './Button';
import Text from './Text';



const constraints = {
  audio: false,
  video: {
    width: { max: 150 },
    height: { max: 150 },
    facingMode: 'environment' // or 'environment'
  }
}

export default function Video(props) {
  let video = React.createRef();
  let capture = () => {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    context.drawImage(video.current, 0, 0, constraints.video.width.max, constraints.video.height.max);
    const data = context.getImageData(0, 0, constraints.video.width.max, constraints.video.height.max)
    props.setImgData(data);
    canvas = null;
    context = null;
  }

  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      if (video.current && !video.current.srcObject) { video.current.srcObject = stream; }
    })
    .catch(err => {
      console.log(err);
    });


  React.useEffect(() => {
    const button = document.getElementById("capture-button")
    const parent = document.getElementsByClassName("button-panel")[1];
    parent.insertBefore(button, parent.childNodes[1]);
  }, [])

  const playVideo = () => {
    video.current.play();
  }


  return (
    <>
      <video id='video' ref={video} autoPlay playsInline muted onCanPlay={playVideo} />
      <Button id="capture-button" className={"button " + props.className} onClick={capture}>
        <Text className="light-color med-sm hide-mobile">Capture</Text>
        <Text className="light-color lg hide-desktop">*</Text>
      </Button>
    </>
  )
}