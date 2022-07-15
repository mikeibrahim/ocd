import React from 'react';
import Text from '../components/Text.jsx';
import Panel from '../components/Panel.jsx';
import Button from '../components/Button.jsx';
import Route from "../components/Route.js";

export default function Home() {
  return (
    <div className="home dark-color-bg">
      <Text className="title primary-color">Obsessive <br /> Cubing <br /> Disorder</Text>

      <Panel className="panel">
        <div className="panel-info">
          <Text className="med dark-color" >What is this?</Text>
          <Text className="sm">Through the use of computer vision and machine learning, this web-app makes it possible for everyone to solve a rubiks cube, regardless of prior knowledge of cubing algorithms (or lack thereof).</Text>
        </div>

        <Text className="lg primary-color">Never get stuck, <br /> ease your OCD...</Text>

        <div className="panel-info">
          <Text className="med dark-color">Why?</Text>
          <Text className="sm">The pain of not being able to solve a Rubik's cube affects roughly 180 million people worldwide.
            It might not be the most intense issue facing humanity in the modern age, but it certainly is both extremely widespread and very annoying.</Text>
        </div>
      </Panel>

      <Button className="primary-color-bg" onClick={() => Route('/digitize')}>
        <Text className="light-color lg hide-mobile">Digitize Cube</Text>
        <Text className="light-color lg hide-desktop">→</Text>
      </Button>
    </div>
  );
}