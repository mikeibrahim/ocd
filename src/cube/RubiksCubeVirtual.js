// import Cube from './Cube';
// import cubeFaceData from './data/cubeFaceData';
import { rotationData, turnData } from './data/rotationData';
import moveMaps from './data/moveMaps';

class RubiksCubeVirtual {
  constructor(colors) {
    this.cubes = [];
    this.colors = JSON.parse(JSON.stringify(colors));
    this.allMoves = [];
    // let i = 0;
    // for (let x = 0; x < 3; x++) {
    //   for (let y = 0; y < 3; y++) {
    //     for (let z = 0; z < 3; z++) {
    //       const faces = ["front", "back", "up", "down", "left", "right"];
    //       const cubeFaces = cubeFaceData[i].map((pos, ind) => ({ face: faces[ind], pos }));
    //       this.cubes.push(new Cube(x, y, z, 50 / 3, cubeFaces));
    //       i++;
    //     }
    //   }
    // }
  }

  remTurns(arr) {
    for (let i = 0; i < this.allMoves.length; i++) {
      if (!moveMaps[this.allMoves[i][0]]) continue;
      let moveMap = moveMaps[this.allMoves[i][0]];
      if (this.allMoves[i][1] === "'") {
        let reversed = {};
        for (let key in moveMap) reversed[moveMap[key]] = key;
        moveMap = reversed;
      }
      for (let k = i + 1; k < this.allMoves.length; k++) {
        arr[k] = (moveMap[arr[k]] ? moveMap[arr[k]] : arr[k]);
      }
      arr.splice(i, 1);
      i--;
    }
    return arr;
  }

  rem2(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] + "'" === arr[i + 1] || arr[i] === arr[i + 1] + "'") i++;
      else newArr.push(arr[i]);
    }
    return newArr;
  }

  rem3(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
        i += 2;
        newArr.push(arr[i][1] === "'" ? arr[i][0] : arr[i] + "'");
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  rem4(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2] && arr[i] === arr[i + 3]) i += 3;
      else newArr.push(arr[i]);
    }
    return newArr;
  }

  comb2(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) { i++; newArr.push(arr[i][0] + "2"); }
      else newArr.push(arr[i]);
    }
    return newArr;
  }

  reorder(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length;) {
      let miniArr = [], currAxis = rotationData[arr[i][0]].axis;
      while (i < arr.length && rotationData[arr[i][0]].axis === currAxis) {
        miniArr.push(arr[i]);
        i++;
      }
      miniArr.sort();
      newArr.push(...miniArr);
    }
    return newArr;
  }

  getMoves() {
    this.allMoves = this.rem4(this.allMoves);
    this.allMoves = this.rem3(this.allMoves);
    this.allMoves = this.rem2(this.allMoves);
    this.allMoves = this.remTurns(this.allMoves);

    this.allMoves = this.reorder(this.allMoves);
    this.allMoves = this.rem4(this.allMoves);
    this.allMoves = this.rem3(this.allMoves);
    this.allMoves = this.rem2(this.allMoves);

    this.allMoves = this.comb2(this.allMoves);

    return this.allMoves;
  }

  scramble(n) {
    const moves = [];
    for (let i = 0; i < n; i++) {
      const move = ["R", "L", "U", "D", "F", "B"][Math.floor(Math.random() * 6)];
      this.do(move, false);
      // this.do(move);
      moves.push(move);
    }
    return moves;
  }

  do(moves, log = true) {
    if (moves === "") return;
    const things = {
      "r": "L X",
      "r'": "L' X'",
      "u": "D Y",
      "u'": "D' Y'",
      "f": "B Z",
      "f'": "B' Z'",
      "d": "U Y'",
      "d'": "U' Y",
      "b": "F Z'",
      "b'": "F' Z",
      "l": "R X'",
      "l'": "R' X",
      "M": "r' R",
      "M'": "r R'",
      "E": "u' U",
      "E'": "u U'",
      "S": "f' F",
      "S'": "f F'",
    };
    moves = moves.replace(/[()]/g, '');
    for (let move of moves.split(' ')) {
      if (move[1] === "2") this.do(move = move[0] + (move[2] ? "'" : ""));
      if (things[move]) { this.do(things[move]); continue; }
      if (/[XYZ]/g.test(move)) this.turn(move, log);
      else this.rotate(move, log);
    }
  }

  turn(move, log = true) {
    if (log) this.allMoves.push(move);
    let clockwise = true;
    if (move.at(-1) === "'") {
      clockwise = false;
      move = move.slice(0, -1);
    }
    const { faces, adjFaces } = turnData[move];

    let newFace1 = [
      6, 3, 0,
      7, 4, 1,
      8, 5, 2,
    ], newFace2 = [
      2, 5, 8,
      1, 4, 7,
      0, 3, 6
    ];
    if (!clockwise) {
      const tmp = newFace1;
      newFace1 = newFace2;
      newFace2 = tmp;
    }
    newFace1 = newFace1.map(x => this.colors[faces[0]][x]);
    newFace2 = newFace2.map(x => this.colors[faces[1]][x]);
    this.colors[faces[0]] = newFace1;
    this.colors[faces[1]] = newFace2;

    let colorsCopy = JSON.parse(JSON.stringify(this.colors));
    for (let i = 0; i < 9; i++) {
      const moveAdj = (a, b) => {
        const { face: face1, perm: perm1 } = adjFaces[a];
        const { face: face2, perm: perm2 } = adjFaces[b];
        this.colors[face1][perm1[i] - 1] = colorsCopy[face2][perm2[i] - 1];
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

  rotate(move, log = true) {
    if (log) this.allMoves.push(move);
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

  // draw(p5) {
  //   for (const cube of this.cubes) cube.draw(this.colors, p5);
  //   // this.cube.draw(p5);
  // }
}

export default RubiksCubeVirtual;