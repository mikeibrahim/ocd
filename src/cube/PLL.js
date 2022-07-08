import PLL_ALGS from "./data/pll-algs";

class PLL {
  constructor(cube) {
    Object.assign(this, { cube });
  }

  isSolved() {
    for (let i = 0; i < 4; i++) {
      for (let k = 0; k < 3; k++) {
        if (this.cube.colors.front[k] !== this.cube.colors.front[4]) return false;
      }
      this.cube.do("Y");
    }
    return true;
  }

  eq(perm) {
    const faces = ["front", "right", "back", "left"];
    const sides = perm.split(' ');
    const map = {};
    for (let i = 0; i < 4; i++) {
      for (let k = 0; k < 3; k++) {
        if (!map[sides[i][k]]) map[sides[i][k]] = this.cube.colors[faces[i]][k];
        else if (map[sides[i][k]] !== this.cube.colors[faces[i]][k]) return false;
      }
    }
    return true;
  }

  solve() {
    for (const pllAlg of PLL_ALGS) {
      const { perm, alg } = pllAlg;
      let done = false;
      for (let i = 0; i < 4; i++) {
        if (this.eq(perm)) {
          this.cube.do(alg);
          done = true;
        }
        this.cube.do("Y");
      }
      if (done) break;
    }
    while (this.cube.colors.front[4] !== this.cube.colors.front[0]) this.cube.do("U");
  }

  sol() {
    this.solve();
    return this.isSolved();
  }
}

export default PLL;