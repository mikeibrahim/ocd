import cubeFaceData from "./data/cubeFaceData";
import { rotationData } from "./data/rotationData";
import Cube from "./Cube";

class RubiksCubeVisual {
  constructor(size, colors) {
    Object.assign(this, { size });
    this.cubes = [];
    this.colors = JSON.parse(JSON.stringify(colors));
    this.currColors = JSON.parse(JSON.stringify(this.colors));
    this.rotations = [];
    let i = 0;
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        for (let z = 0; z < 3; z++) {
          const faces = ["front", "back", "up", "down", "left", "right"];
          const cubeFaces = cubeFaceData[i].map((pos, ind) => ({ face: faces[ind], pos }));
          this.cubes.push(new Cube(x, y, z, size / 3, cubeFaces));
          i++;
        }
      }
    }
  }

  turn(move) {
    if (move.at(-1) === "2") this.turn(move = move.slice(0, -1));

    let clockwise = true;
    if (move.at(-1) === "'") {
      clockwise = false;
      move = move.slice(0, -1);
    }
    const { face, adjRotate } = rotationData[move];

    let newFace = (clockwise ? [
      6, 3, 0,
      7, 4, 1,
      8, 5, 2,
    ] : [
      2, 5, 8,
      1, 4, 7,
      0, 3, 6
    ]);
    newFace = newFace.map(x => this.colors[face][x]);
    this.colors[face] = newFace;

    let colorsCopy = JSON.parse(JSON.stringify(this.colors));
    for (let i = 0; i < 3; i++) {
      const moveAdj = (a, b) => {
        const { adjFace: adjFace1, nums: nums1 } = adjRotate[a];
        const { adjFace: adjFace2, nums: nums2 } = adjRotate[b];
        this.colors[adjFace1][nums1[i] - 1] = colorsCopy[adjFace2][nums2[i] - 1];
      };
      if (clockwise) {
        for (let k = 0; k < 3; k++) moveAdj(k, k + 1);
        moveAdj(3, 0);
      } else {
        moveAdj(0, 3);
        for (let k = 1; k < 4; k++) moveAdj(k, k - 1);
      }
    }


  }

  rotate(axis, pos, angle, res, rej) {
    this.rotations.push({
      axis, pos,
      curr: 0, goalAngle: angle,
      colors: JSON.parse(JSON.stringify(this.colors)),
      res, rej
    });
  }

  do(move) {
    return new Promise((res, rej) => {
      this.turn(move);
      const { axis, off } = rotationData[move[0]];
      let pos = off + 1, angle = off * Math.PI / 2;
      if (move.at(-1) === "2") angle *= 2;
      else if (move.at(-1) === "'") angle *= -1;
      this.rotate(axis, pos, angle, res, rej);
    });
  }

  draw(p5) {
    if (this.rotations.length) {
      this.rotations[0].curr += 0.05;
      const { axis, pos, curr, goalAngle, res } = this.rotations[0];
      for (const cube of this.cubes) {
        if (cube[axis] !== pos) continue;
        if (curr >= 1) cube.rotate(axis, 0);
        else cube.rotate(axis, curr * goalAngle);
      }
      if (curr >= 1) {
        this.currColors = this.rotations[0].colors;
        this.rotations.shift();
        res();
      }
    }

    for (const cube of this.cubes) cube.draw(this.currColors, p5);
  }
}

export default RubiksCubeVisual;