import OLL_ALGS from "./data/oll-algs";

class OLL {
  constructor(cube) {
    Object.assign(this, { cube });
    this.uc = this.cube.colors.up[4];
  }

  isSolved() {
    for (let i = 0; i < 9; i++) {
      if (this.cube.colors.up[i] !== this.uc) return false;
    }
    return true;
  }

  adjEq(adj) {
    const faces = ["front", "right", "back", "left"];
    const sides = adj.split(' ');
    for (let i = 0; i < 4; i++) {
      for (let k = 0; k < 3; k++) {
        if (sides[i][k] === '#' && this.cube.colors[faces[i]][k] !== this.uc) return false;
      }
    }
    return true;
  }

  faceEq(face) {
    face = face.replace(/\s/g, '');
    for (let i = 0; i < 9; i++) {
      if (face[i] === '#' && this.cube.colors.up[i] !== this.uc) return false;
    }
    return true;
  }

  solve() {
    for (const alg of OLL_ALGS) {
      const { pattern: { face, adj }, alg: moves } = alg;
      for (let i = 0; i < 4; i++) {
        if (this.adjEq(adj) && this.faceEq(face)) {
          this.cube.do(moves);
          return;
        }
        this.cube.do("Y");
      }
    }
  }

  sol() {
    this.solve();
    return this.isSolved();
  }
}

export default OLL;