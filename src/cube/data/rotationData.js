export const rotationData = {
  F: {
    axis: "x",
    off: -1,
    face: "front",
    adjRotate: [
      { adjFace: "up", nums: [7, 8, 9] },
      { adjFace: "left", nums: [9, 6, 3] },
      { adjFace: "down", nums: [3, 2, 1] },
      { adjFace: "right", nums: [1, 4, 7] },
    ],
    cubeRotate: {
      before: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      after: [7, 4, 1, 8, 5, 2, 9, 6, 3],
    },
  },
  B: {
    axis: "x",
    off: 1,
    face: "back",
    adjRotate: [
      { adjFace: "up", nums: [1, 2, 3] },
      { adjFace: "right", nums: [3, 6, 9] },
      { adjFace: "down", nums: [9, 8, 7] },
      { adjFace: "left", nums: [7, 4, 1] },
    ],
    cubeRotate: {
      before: [19, 20, 21, 22, 23, 24, 25, 26, 27],
      after: [21, 24, 27, 20, 23, 26, 19, 22, 25]
    }
  },
  U: {
    axis: "y",
    off: -1,
    face: "up",
    adjRotate: [
      { adjFace: "front", nums: [1, 2, 3] },
      { adjFace: "right", nums: [1, 2, 3] },
      { adjFace: "back", nums: [1, 2, 3] },
      { adjFace: "left", nums: [1, 2, 3] },
    ],
    cubeRotate: {
      before: [1, 2, 3, 10, 11, 12, 19, 20, 21],
      after: [3, 12, 21, 2, 11, 20, 1, 10, 19]
    }
  },
  D: {
    axis: "y",
    off: 1,
    face: "down",
    adjRotate: [
      { adjFace: "front", nums: [7, 8, 9] },
      { adjFace: "left", nums: [7, 8, 9] },
      { adjFace: "back", nums: [7, 8, 9] },
      { adjFace: "right", nums: [7, 8, 9] },
    ],
    cubeRotate: {
      before: [7, 8, 9, 16, 17, 18, 25, 26, 27],
      after: [25, 16, 7, 26, 17, 8, 27, 18, 9]
    }
  },
  L: {
    axis: "z",
    off: -1,
    face: "left",
    adjRotate: [
      { adjFace: "front", nums: [1, 4, 7] },
      { adjFace: "up", nums: [1, 4, 7] },
      { adjFace: "back", nums: [9, 6, 3] },
      { adjFace: "down", nums: [1, 4, 7] },
    ],
    cubeRotate: {
      before: [1, 4, 7, 10, 13, 16, 19, 22, 25],
      after: [19, 10, 1, 22, 13, 4, 25, 16, 7]
    }
  },
  R: {
    axis: "z",
    off: 1,
    face: "right",
    adjRotate: [
      { adjFace: "front", nums: [3, 6, 9] },
      { adjFace: "down", nums: [3, 6, 9] },
      { adjFace: "back", nums: [7, 4, 1] },
      { adjFace: "up", nums: [3, 6, 9] },
    ],
    cubeRotate: {
      before: [3, 6, 9, 12, 15, 18, 21, 24, 27],
      after: [9, 18, 27, 6, 15, 24, 3, 12, 21]
    }
  },
};

const normal = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9
];
const reverse = [
  9, 8, 7,
  6, 5, 4,
  3, 2, 1
];
const righttoleft = [
  3, 6, 9,
  2, 5, 8,
  1, 4, 7
];
const lefttoright = [
  7, 4, 1,
  8, 5, 2,
  9, 6, 3
];
export const turnData = {
  X: {
    faces: ["right", "left"],
    adjFaces: [
      { face: "front", perm: normal },
      { face: "down", perm: normal },
      { face: "back", perm: reverse },
      { face: "up", perm: normal },
    ]
  },
  Y: {
    faces: ["up", "down"],
    adjFaces: [
      { face: "front", perm: normal },
      { face: "right", perm: normal },
      { face: "back", perm: normal },
      { face: "left", perm: normal },
    ]
  },
  Z: {
    faces: ["front", "back"],
    adjFaces: [
      { face: "up", perm: normal },
      { face: "left", perm: lefttoright },
      { face: "down", perm: reverse },
      { face: "right", perm: righttoleft },
    ]
  },
}