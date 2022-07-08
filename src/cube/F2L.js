import F2L_ALGS from "./data/f2l-algs";

class F2L {
  constructor(cube) {
    Object.assign(this, { cube });
    this.dc = this.cube.colors.down[4];
  }

  isSolved() {
    for (let i = 0; i < 9; i++) {
      if (this.cube.colors.down[i] !== this.dc) return false;
    }
    for (let i = 0; i < 4; i++) {
      for (const p of [3, 5, 6, 8]) {
        if (this.cube.colors.front[p] !== this.cube.colors.front[4]) return false;
      }
      this.cube.do("Y");
    }
    return true;
  }

  arrEq(a, b) {
    for (const x of a) if (!b.includes(x)) return false;
    return true;
  }

  arrEqEx(a, b) {
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
    return true;
  }

  solve() {
    for (let i = 0; i < 4; i++) {
      const fc = this.cube.colors.front[4];
      const rc = this.cube.colors.right[4];
      for (let k = 0; k < 4; k++) {
        if (this.arrEq(
          [fc, rc, this.dc],
          [this.cube.colors.front[8], this.cube.colors.right[6], this.cube.colors.down[2]]
        ) && k !== 0) this.cube.do("R U R'");
        this.cube.do("Y");
      }

      for (let i = 0; i < 4; i++) {
        if (this.arrEq(
          [fc, rc, this.dc],
          [this.cube.colors.front[2], this.cube.colors.right[0], this.cube.colors.up[8]]
        )) break;
        this.cube.do("U");
      }

      for (const alg of F2L_ALGS) {
        const { corner, edge, moves } = alg;
        if (
          this.arrEqEx(corner.map(f => this.cube.colors[f.face][f.pos]), [this.dc, fc, rc]) &&
          this.arrEqEx(edge.map(f => this.cube.colors[f.face][f.pos]), [fc, rc])
        ) {
          this.cube.do(moves);
          break;
        }
      }

      this.cube.do("Y");
    }
  }

  sol() {
    this.solve();
    return this.isSolved();
  }
}

export default F2L;