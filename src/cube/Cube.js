import { colorToHex } from './data/colors';

class Face {
  constructor(f, size, pos) {
    Object.assign(this, { f, size, pos });
  }

  draw(colors, p5) {
    const width = 0.01, offset = 0.49;
    const s = {
      front: [width, 1, 1],
      back: [width, 1, 1],
      up: [1, width, 1],
      down: [1, width, 1],
      right: [1, 1, width],
      left: [1, 1, width],
    };
    const t = {
      front: [-offset, 0, 0],
      back: [offset, 0, 0],
      up: [0, -offset, 0],
      down: [0, offset, 0],
      right: [0, 0, offset],
      left: [0, 0, -offset],
    };
    p5.push();
    // p5.noStroke();
    p5.fill(colorToHex[this.pos === 0 ? 'a' : colors[this.f][this.pos - 1]]);
    p5.translate(...t[this.f].map(x => x * this.size));
    p5.box(...s[this.f].map(x => x * this.size));
    p5.pop();
  }
}

class Cube {
  constructor(x, y, z, size, faces) {
    Object.assign(this, { x, y, z, size });
    this.faces = faces.map(f => new Face(f.face, size, f.pos));
    this.r = { x: 0, y: 0, z: 0 };
  }

  rotate(axis, angle) {
    this.r[axis] = angle;
  }

  draw(colors, p5) {
    p5.push();
    p5.rotateX(this.r.x); p5.rotateY(this.r.y); p5.rotateZ(this.r.z);
    p5.translate((this.x - 1) * this.size, (this.y - 1) * this.size, (this.z - 1) * this.size);
    for (const face of this.faces) face.draw(colors, p5);
    p5.pop();
  }
}

export default Cube;