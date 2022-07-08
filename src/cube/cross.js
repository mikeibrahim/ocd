const CROSS_ALGS = [
  {
    edge: [{ face: "up", pos: 7 }, { face: "front", pos: 1 }],
    moves: "F2",
  },
  {
    edge: [{ face: "front", pos: 1 }, { face: "up", pos: 7 }],
    moves: "F D R' D'",
  },
  {
    edge: [{ face: "right", pos: 3 }, { face: "front", pos: 5 }],
    moves: "F",
  },
  {
    edge: [{ face: "front", pos: 5 }, { face: "right", pos: 3 }],
    moves: "D R' D'",
  },
];

class Cross {
  constructor(cube) {
    Object.assign(this, { cube });
    this.dc = this.cube.colors.down[4];
  }

  isSolved() {
    for (let i = 0; i < 4; i++) {
      if (!(
        this.cube.colors.front[7] === this.cube.colors.front[4] &&
        this.cube.colors.down[1] === this.dc
      )) return false;
      this.cube.do('Y');
    }
    return true;
  }

  eq(a, b) {
    for (const x of a) if (!b.includes(x)) return false;
    return true;
  }

  ex(a, b) {
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
    return true;
  }

  solve() {
    for (let i = 0; i < 4; i++) {
      const fc = this.cube.colors.front[4];
      let brk = false;
      for (let k = 0; k < 4; k++) {
        if (this.eq(
          [this.cube.colors.front[7], this.cube.colors.down[1]],
          [this.dc, fc]
        )) this.cube.do("F'");

        for (const alg of CROSS_ALGS) {
          const { edge, moves } = alg;
          if (this.ex(edge.map(f => this.cube.colors[f.face][f.pos]), [this.dc, fc])) {
            for (let l = 0; l < k; l++) this.cube.do("D");
            this.cube.do(moves);
            for (let l = 0; l < k; l++) this.cube.do("D'");
            for (let l = 0; l < k; l++) this.cube.do("Y'");
            brk = true; break;
          }
        }

        if (brk) break;
        this.cube.do("Y");
      }
      this.cube.do("Y");
    }
  }

  sol() {
    this.solve();
    return this.isSolved();
    // return true;
  }
}

export default Cross;