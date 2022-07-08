const algs = [
  { face: "front", pos: 2, fFace: "up", fPos: 8, moves: "F' U' F" },
  { face: "up", pos: 8, fFace: "right", fPos: 0, moves: "R U U R' U' R U R'" },
  { face: "right", pos: 0, fFace: "front", fPos: 2, moves: "R U R'" },
];

class Corners {
  constructor(cube) {
    Object.assign(this, { cube });
    this.dc = this.cube.colors.down[4];
  }

  isSolved() {
    let ans = 0;
    for (let i = 0; i < 4; i++) {
      ans += (
        this.cube.colors.front[8] === this.cube.colors.front[4] &&
        this.cube.colors.right[6] === this.cube.colors.right[4] &&
        this.cube.colors.down[2] === this.cube.colors.down[4]
      );
      this.cube.do('Y');
    }
    return ans === 4;
  }

  eq(a, b) {
    for (const x of a) if (!b.includes(x)) return false;
    return true;
  }

  solve() {
    let safety = 0;
    while (!this.isSolved() && ++safety < 100) {
      let safety2 = 0;
      if (++safety2 < 100 && !(
        this.cube.colors.front[8] === this.cube.colors.front[4] &&
        this.cube.colors.right[6] === this.cube.colors.right[4] &&
        this.cube.colors.down[2] === this.cube.colors.down[4]
      ) && [
        this.cube.colors.front[8],
        this.cube.colors.right[6],
        this.cube.colors.down[2]
      ].includes(this.dc)) this.cube.do("R U R' U'");

      for (const alg of algs) {
        const { face, pos, fFace, fPos, moves } = alg;
        if (this.cube.colors[face][pos] === this.dc) {
          while (this.cube.colors[fFace][fPos] !== this.cube.colors.front[4]) this.cube.do("d");
          this.cube.do(moves);
        }
      }

      // if ([
      //   this.cube.colors.front[2],
      //   this.cube.colors.right[0],
      //   this.cube.colors.up[8]
      // ].includes(this.dc)) {
      //   safety2 = 0;
      //   while (++safety2 < 100 && !this.eq([
      //     this.cube.colors.front[2],
      //     this.cube.colors.right[0],
      //     this.cube.colors.up[8]
      //   ], [
      //     this.cube.colors.right[4],
      //     this.cube.colors.down[4],
      //     this.cube.colors.front[4]
      //   ])) this.cube.do("U' Y");
      //   safety2 = 0;
      //   while (++safety2 < 100 && !(
      //     this.cube.colors.front[4] === this.cube.colors.front[8] &&
      //     this.cube.colors.down[4] === this.cube.colors.down[2] &&
      //     this.cube.colors.right[4] === this.cube.colors.right[6]
      //   )) this.cube.do("R U R' U'");
      // }
      this.cube.do('Y');
    }
  }
}

export default Corners;