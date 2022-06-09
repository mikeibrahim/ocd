import React from 'react';
import Text from '../components/Text.jsx';
import Panel from '../components/Panel.jsx';
import Button from '../components/Button.jsx';

export default function Home() {
  const digitizeCube = () => {
    window.location.href = '/digitize';
  }

  return (
    <div className="home">
      <Text className="title primary">Obsessive <br /> Cubing <br /> Disorder</Text>

      <Panel className="panel">
        <div className="panel-info">
          <Text className="secondary dark" >What is this?</Text>
          <Text className="description">Through the use of computer vision and machine learning, this web-app makes it possible for everyone to solve a rubiks cube, regardless of prior knowledge of cubing algorithms (or lack thereof)</Text>
        </div>

        <Text className="main primary">Never get stuck, <br /> ease your ocd...</Text>

        <div className="panel-info">
          <Text className="secondary dark">Why?</Text>
          <Text className="description">The pain of not being able to solve a Rubik's cube affects roughly 180 million people worldwide <br></br>
            It might not be the most intense issue facing humanity in the modern age, but it certainly is both extremely widespread and very annoying</Text>
        </div>
      </Panel>

      <Button className="primary-bg" onClick={digitizeCube}>
        <Text id="start" className="light main">Digitize cube</Text>
        <Text id="arrow" className="light main">→</Text>
      </Button>
    </div>
  );
}