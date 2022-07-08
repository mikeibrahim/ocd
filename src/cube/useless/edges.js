class Edges {
  constructor(cube) {
    Object.assign(this, { cube });
    this.uc = this.cube.colors.up[4];
  }

  isSolved() {
    let ans = 0;
    for (let i = 0; i < 4; i++) {
      ans += (
        this.cube.colors.front[3] === this.cube.colors.front[4] &&
        this.cube.colors.front[4] === this.cube.colors.front[5]
      );
      this.cube.do("Y");
    }
    return ans === 4;
  }

  solve() {
    let safety1 = 0;
    while (!this.isSolved() && ++safety1 < 100) {
      let safety2 = 0;
      while (++safety2 < 100 && !((
        this.cube.colors.front[5] === this.cube.colors.front[4] &&
        this.cube.colors.right[3] === this.cube.colors.right[4]
      ) || [
        this.cube.colors.front[5],
        this.cube.colors.right[3]
      ].includes(this.uc))) this.cube.do("R U' R' F R' F' R");
      for (let i = 0; i < 4; i++) {
        if (
          this.cube.colors.front[1] === this.cube.colors.front[4] &&
          this.cube.colors.up[7] !== this.uc
        ) {
          if (this.cube.colors.up[7] === this.cube.colors.right[4]) {
            this.cube.do("U R U' R' U' F' U F");
          } else {
            this.cube.do("U' L' U L U F U' F'");
          }
          break;
        }
        this.cube.do("U");
      }
      this.cube.do('Y');
    }
  }
}

export default Edges;