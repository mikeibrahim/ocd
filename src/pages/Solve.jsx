import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import RubiksCube from '../cube/RubiksCube';
import Button from '../components/Button.jsx';
import Text from '../components/Text.jsx';
import Route from '../components/Route';

export default function Solve() {
  // Get cubeData
  const location = useLocation();
  const { cubeData } = location.state;
  let parsedCubeData = { front: cubeData[0], left: cubeData[1], back: cubeData[2], right: cubeData[3], up: cubeData[4], down: cubeData[5], };
  const colorsFull = ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'white'];
  const colors = ['r', 'o', 'y', 'g', 'b', 'l', 'w'];
  for (const side in parsedCubeData) {
    parsedCubeData[side] = parsedCubeData[side].map(square => colors[colorsFull.indexOf(square)]);
  }

  // Rubiks cube
  const [cube, setCube] = useState(new RubiksCube(parsedCubeData));
  const moves = cube.solve();
  console.log(moves.length)
  let [moveIndex, setMoveIndex] = useState(0);
  console.log(moveIndex)
  // const [automatic, setAutomatic] = useState(false);
  // console.log("automatic: ", automatic);

  const move = (dir) => {
    if (moveIndex + dir >= 0 && moveIndex + dir <= moves.length) {
      if (dir === 1) cube.next();
      else if (dir === -1) cube.prev();
      setMoveIndex(moveIndex + dir);
    }
  }

  const getMoves = () => {
    const transform = `translateX(calc(50% - 150px * ${moveIndex}))`
    const moveOpacity = (index) => {
      if (Math.abs(moveIndex - index) == 0) return "1"
      else if (Math.abs(moveIndex - index) == 1) return "0.5"
      else if (Math.abs(moveIndex - index) == 2) return "0.25"
      else return "0"
    }

    return (
      <div id="move-container" style={{
        transform: transform
      }}>
        {moves.map((move, index) => {
          return (
            <div key={index} className="move" style={{
              opacity: moveOpacity(index)
            }}>
              <Text className="dark-color med">{move}</Text>
            </div>
          )
        })}
      </div>
    )
  }

  // move(1) every second if automatic is true
  // const delay = (s) => {
  //   return new Promise(resolve => setTimeout(resolve, s * 1000));
  // }

  // async function automaticMove() {
  //   console.log("automaticMove");
  //   await delay(1);
  //   if (automatic) {
  //     moveIndex += 1;
  //   }
  //   automaticMove();
  // }
  // automaticMove();

  window.onkeydown = e => {
    if (e.key === 'ArrowRight') move(1);
    if (e.key === 'ArrowLeft') move(-1);
  };

  const previousButtonDisabled = moveIndex === 0 ? 'button-disabled' : '';
  const nextButtonDisabled = moveIndex === moves.length - 1 ? 'button-disabled' : '';

  // Render
  return (
    <div className='solve'>
      <div className="button-panel">
        <Button className="dark-color-bg sm-btn" onClick={() => Route('/digitize')}>
          <Text className="light-color sm hide-mobile">Back</Text>
          <Text className="light-color med hide-desktop">←</Text>
        </Button>
        <Text className="lg primary-color">Follow along to solve</Text>
        <Button className="dark-color-bg sm-btn" onClick={() => Route('/help')}>
          <Text className="light-color sm hide-mobile">Help</Text>
          <Text className="light-color med hide-desktop">?</Text>
        </Button>
      </div>

      {cube.getCanvas()}
      {getMoves()}
      <div id="button-container">
        <Button className={"dark-color-bg lg-btn " + previousButtonDisabled} onClick={() => move(-1)}>
          <Text className="light-color med-sm hide-mobile">Previous</Text>
          <Text className="light-color lg hide-desktop">←</Text>
        </Button>
        {/* <Button className={"primary-color-bg lg-btn " + nextButtonDisabled} onClick={() => setAutomatic(!automatic)}>
          <Text className="light-color sm hide-mobile">Automatic Progression</Text>
          <Text className="light-color lg hide-desktop">$</Text>
        </Button> */}
        <Button className={"dark-color-bg lg-btn " + nextButtonDisabled} onClick={() => move(1)}>
          <Text className="light-color med-sm hide-mobile">Next</Text>
          <Text className="light-color lg hide-desktop">→</Text>
        </Button>
      </div>
    </div>
  );
};