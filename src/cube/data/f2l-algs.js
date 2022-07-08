const F2L_ALGS = [
  {
    "name": "corner: up front, edge: up front low",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "front", "pos": 1 }, { "face": "up", "pos": 7 }],
    "moves": "Y U (L' U L) U' (L' U' L) Y'"
  },
  {
    "name": "corner: up front, edge: up front high",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "up", "pos": 7 }, { "face": "front", "pos": 1 }],
    "moves": "Y' (R' U R) U2 Y (R U R')"
  },
  {
    "name": "corner: up front, edge: up back low",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "back", "pos": 1 }, { "face": "up", "pos": 1 }],
    "moves": "U' (R U' R' U) Y' (R' U' R) Y"
  },
  {
    "name": "corner: up front, edge: up back high",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "up", "pos": 1 }, { "face": "back", "pos": 1 }],
    "moves": "(U' R U R') U2 (R U' R')"
  },
  {
    "name": "corner: up front, edge: up right low",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "right", "pos": 1 }, { "face": "up", "pos": 5 }],
    "moves": "U' (R U2 R' U) Y' (R' U' R) Y"
  },
  {
    "name": "corner: up front, edge: up right high",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "up", "pos": 5 }, { "face": "right", "pos": 1 }],
    "moves": "U R U' R'"
  },
  {
    "name": "corner: up front, edge: up left low",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "left", "pos": 1 }, { "face": "up", "pos": 3 }],
    "moves": "F' U' F"
  },
  {
    "name": "corner: up front, edge: up left high",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "up", "pos": 3 }, { "face": "left", "pos": 1 }],
    "moves": "U' (R U2 R') U2 (R U' R')"
  },
  {
    "name": "corner: up front, edge: mid front right",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "front", "pos": 5 }, { "face": "right", "pos": 3 }],
    "moves": "U' R U' R' U2 R U' R'"
  },
  {
    "name": "corner: up front, edge: mid right left",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "right", "pos": 3 }, { "face": "front", "pos": 5 }],
    "moves": "U2 (R U R') (F R' F' R)"
  },
  {
    "name": "corner: up front, edge: mid right right",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "right", "pos": 5 }, { "face": "back", "pos": 3 }],
    "moves": "R' U2 R F' U' F"
  },
  {
    "name": "corner: up front, edge: mid back left",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "back", "pos": 3 }, { "face": "right", "pos": 5 }],
    "moves": "Y U (R U R') (L' U L) Y'",
  },
  {
    "name": "corner: up front, edge: mid back right",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "back", "pos": 5 }, { "face": "left", "pos": 3 }],
    "moves": "Y2 U (R U' R') (L U' L') Y2"
  },
  {
    "name": "corner: up front, edge: mid left left",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "left", "pos": 3 }, { "face": "back", "pos": 5 }],
    "moves": "L F' U' F L'"
  },
  {
    "name": "corner: up front, edge: mid left right",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "left", "pos": 5 }, { "face": "front", "pos": 3 }],
    "moves": "L' (F' U' F) L"
  },
  {
    "name": "corner: up front, edge: mid front left",
    "corner": [{ "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }],
    "edge": [{ "face": "front", "pos": 3 }, { "face": "left", "pos": 5 }],
    "moves": "F U F2 U' F"
  },
  {
    "name": "corner: up up, edge: up front low",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "front", "pos": 1 }, { "face": "up", "pos": 7 }],
    "moves": "Y (L' U2 L) U (L' U' L) Y'"
  },
  {
    "name": "corner: up up, edge: up front high",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "up", "pos": 7 }, { "face": "front", "pos": 1 }],
    "moves": "U (F R' F' R) U (R U R')"
  },
  {
    "name": "corner: up up, edge: up back low",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "back", "pos": 1 }, { "face": "up", "pos": 1 }],
    "moves": "F' L' U2 L F"
  },
  {
    "name": "corner: up up, edge: up back high",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "up", "pos": 1 }, { "face": "back", "pos": 1 }],
    "moves": "U (R U2 R') U (R U' R')"
  },
  {
    "name": "corner: up up, edge: up right low",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "right", "pos": 1 }, { "face": "up", "pos": 5 }],
    "moves": "F (U R U' R') F' (R U' R')"
  },
  {
    "name": "corner: up up, edge: up right high",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "up", "pos": 5 }, { "face": "right", "pos": 1 }],
    "moves": "R U2 R' U' R U R'"
  },
  {
    "name": "corner: up up, edge: up left low",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "left", "pos": 1 }, { "face": "up", "pos": 3 }],
    "moves": "Y U' (L' U2 L) U' (L' U L) Y'"
  },
  {
    "name": "corner: up up, edge: up left high",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "up", "pos": 3 }, { "face": "left", "pos": 1 }],
    "moves": "Y F R U2 R' F' Y'"
  },
  {
    "name": "corner: up up, edge: mid front right",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "front", "pos": 5 }, { "face": "right", "pos": 3 }],
    "moves": "(U R U' R') (U R U' R') (U R U' R')"
  },
  {
    "name": "corner: up up, edge: mid right left",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "right", "pos": 3 }, { "face": "front", "pos": 5 }],
    "moves": "(R U' R') (F' U2 F)"
  },
  {
    "name": "corner: up up, edge: mid right right",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "right", "pos": 5 }, { "face": "back", "pos": 3 }],
    "moves": "Y R' F R2 U' R' U2 F' Y'"
  },
  {
    "name": "corner: up up, edge: mid back left",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "back", "pos": 3 }, { "face": "right", "pos": 5 }],
    "moves": "U' R' U R2 U' R'"
  },
  {
    "name": "corner: up up, edge: mid back right",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "back", "pos": 5 }, { "face": "left", "pos": 3 }],
    "moves": "R2 u R2' u' R2"
  },
  {
    "name": "corner: up up, edge: mid left left",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "left", "pos": 3 }, { "face": "back", "pos": 5 }],
    "moves": "Y2 U2 L F' U F L' Y2"
  },
  {
    "name": "corner: up up, edge: mid left right",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "left", "pos": 5 }, { "face": "front", "pos": 3 }],
    "moves": "L F' L2' U L U2' F"
  },
  {
    "name": "corner: up up, edge: mid front left",
    "corner": [{ "face": "up", "pos": 8 }, { "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }],
    "edge": [{ "face": "front", "pos": 3 }, { "face": "left", "pos": 5 }],
    "moves": "Y U L U' L2' U L Y'"
  },
  {
    "name": "corner: up right, edge: up front low",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "front", "pos": 1 }, { "face": "up", "pos": 7 }],
    "moves": "F R' F' R"
  },
  {
    "name": "corner: up right, edge: up front high",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "up", "pos": 7 }, { "face": "front", "pos": 1 }],
    "moves": "R' U2 R2 U R2' U R"
  },
  {
    "name": "corner: up right, edge: up back low",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "back", "pos": 1 }, { "face": "up", "pos": 1 }],
    "moves": "r' U2 R2 U R2' U r"
  },
  {
    "name": "corner: up right, edge: up back high",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "up", "pos": 1 }, { "face": "back", "pos": 1 }],
    "moves": "R U R'"
  },
  {
    "name": "corner: up right, edge: up right low",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "right", "pos": 1 }, { "face": "up", "pos": 5 }],
    "moves": "(R U' R') Y U2 (L' U' L) Y'"
  },
  {
    "name": "corner: up right, edge: up right high",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "up", "pos": 5 }, { "face": "right", "pos": 1 }],
    "moves": "U' (R U' R') U (R U R')"
  },
  {
    "name": "corner: up right, edge: up left low",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "left", "pos": 1 }, { "face": "up", "pos": 3 }],
    "moves": "U' r U' R' U R U r'"
  },
  {
    "name": "corner: up right, edge: up left high",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "up", "pos": 3 }, { "face": "left", "pos": 1 }],
    "moves": "U' (R U R') U (R U R')"
  },
  {
    "name": "corner: up right, edge: mid front right",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "front", "pos": 5 }, { "face": "right", "pos": 3 }],
    "moves": "U (R U R') U2 (R U R')"
  },
  {
    "name": "corner: up right, edge: mid right left",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "right", "pos": 3 }, { "face": "front", "pos": 5 }],
    "moves": "U (F' U' F) U' (R U R')"
  },
  {
    "name": "corner: up right, edge: mid right right",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "right", "pos": 5 }, { "face": "back", "pos": 3 }],
    "moves": "F D R D' F'"
  },
  {
    "name": "corner: up right, edge: mid back left",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "back", "pos": 3 }, { "face": "right", "pos": 5 }],
    "moves": "R' U' R2 U R'"
  },
  {
    "name": "corner: up right, edge: mid back right",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "back", "pos": 5 }, { "face": "left", "pos": 3 }],
    "moves": "Y2 U' (R U R') (L U L') Y2"
  },
  {
    "name": "corner: up right, edge: mid left left",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "left", "pos": 3 }, { "face": "back", "pos": 5 }],
    "moves": "Y U' (R' U' R U) Y' R U R'"
  },
  {
    "name": "corner: up right, edge: mid left right",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "left", "pos": 5 }, { "face": "front", "pos": 3 }],
    "moves": "(F U2 F') (R U R')"
  },
  {
    "name": "corner: up right, edge: mid front left",
    "corner": [{ "face": "right", "pos": 0 }, { "face": "front", "pos": 2 }, { "face": "up", "pos": 8 }],
    "edge": [{ "face": "front", "pos": 3 }, { "face": "left", "pos": 5 }],
    "moves": "U' (L' U' L) (R U' R')"
  },
  {
    "name": "corner: down front, edge: up front low",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "front", "pos": 1 }, { "face": "up", "pos": 7 }],
    "moves": "Y (L' U' L) U (L' U' L) Y'"
  },
  {
    "name": "corner: down front, edge: up front high",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "up", "pos": 7 }, { "face": "front", "pos": 1 }],
    "moves": "U' (R U' R') U (R U' R')"
  },
  {
    "name": "corner: down front, edge: up back low",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "back", "pos": 1 }, { "face": "up", "pos": 1 }],
    "moves": "Y U2 (L' U' L) U (L' U' L) Y'"
  },
  {
    "name": "corner: down front, edge: up back high",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "up", "pos": 1 }, { "face": "back", "pos": 1 }],
    "moves": "U (R U' R') U (R U' R')"
  },
  {
    "name": "corner: down front, edge: up right low",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "right", "pos": 1 }, { "face": "up", "pos": 5 }],
    "moves": "Y U (L' U' L) U (L' U' L) Y'"
  },
  {
    "name": "corner: down front, edge: up right high",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "up", "pos": 5 }, { "face": "right", "pos": 1 }],
    "moves": "(R U' R') U (R U' R')"
  },
  {
    "name": "corner: down front, edge: up left low",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "left", "pos": 1 }, { "face": "up", "pos": 3 }],
    "moves": "Y U' (L' U' L) U (L' U' L) Y'"
  },
  {
    "name": "corner: down front, edge: up left high",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "up", "pos": 3 }, { "face": "left", "pos": 1 }],
    "moves": "U2 (R U' R') U (R U' R')"
  },
  {
    "name": "corner: down front, edge: mid front right",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "front", "pos": 5 }, { "face": "right", "pos": 3 }],
    "moves": "(R U' R') U' (R U R' U2 R U' R')"
  },
  {
    "name": "corner: down front, edge: mid right left",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "right", "pos": 3 }, { "face": "front", "pos": 5 }],
    "moves": "(F' L' U2 L F) (R U R')"
  },
  {
    "name": "corner: down front, edge: mid right right",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "right", "pos": 5 }, { "face": "back", "pos": 3 }],
    "moves": "(R' U R) Y (L' U' L U) (L' U' L) Y'"
  },
  {
    "name": "corner: down front, edge: mid back left",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "back", "pos": 3 }, { "face": "right", "pos": 5 }],
    "moves": "R U2 R' U R2 F R2 F'"
  },
  {
    "name": "corner: down front, edge: mid back right",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "back", "pos": 5 }, { "face": "left", "pos": 3 }],
    "moves": "L U2 L' R U' R' U R U' R'"
  },
  {
    "name": "corner: down front, edge: mid left left",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "left", "pos": 3 }, { "face": "back", "pos": 5 }],
    "moves": "B' U B R U' R' U R U' R'"
  },
  {
    "name": "corner: down front, edge: mid left right",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "left", "pos": 5 }, { "face": "front", "pos": 3 }],
    "moves": "(R' F R U' F') U (R U' R')"
  },
  {
    "name": "corner: down front, edge: mid front left",
    "corner": [{ "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }],
    "edge": [{ "face": "front", "pos": 3 }, { "face": "left", "pos": 5 }],
    "moves": "L' U2 L R U' R' U R U' R'"
  },
  {
    "name": "corner: down right, edge: up front low",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "front", "pos": 1 }, { "face": "up", "pos": 7 }],
    "moves": "F' U F2 R' F' R"
  },
  {
    "name": "corner: down right, edge: up front high",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "up", "pos": 7 }, { "face": "front", "pos": 1 }],
    "moves": "U' (R U R') U' (R U R')"
  },
  {
    "name": "corner: down right, edge: up back low",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "back", "pos": 1 }, { "face": "up", "pos": 1 }],
    "moves": "U2 F' U F2 R' F' R"
  },
  {
    "name": "corner: down right, edge: up back high",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "up", "pos": 1 }, { "face": "back", "pos": 1 }],
    "moves": "U (R U R') U' (R U R')"
  },
  {
    "name": "corner: down right, edge: up right low",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "right", "pos": 1 }, { "face": "up", "pos": 5 }],
    "moves": "U F' U F2 R' F' R"
  },
  {
    "name": "corner: down right, edge: up right high",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "up", "pos": 5 }, { "face": "right", "pos": 1 }],
    "moves": "(R U R') U' (R U R')"
  },
  {
    "name": "corner: down right, edge: up left low",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "left", "pos": 1 }, { "face": "up", "pos": 3 }],
    "moves": "U' F' U F2 R' F' R"
  },
  {
    "name": "corner: down right, edge: up left high",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "up", "pos": 3 }, { "face": "left", "pos": 1 }],
    "moves": "U2 (R U R') U' (R U R')"
  },
  {
    "name": "corner: down right, edge: mid front right",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "front", "pos": 5 }, { "face": "right", "pos": 3 }],
    "moves": "(R U' R') U (R U2 R' U R U' R')"
  },
  {
    "name": "corner: down right, edge: mid right left",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "right", "pos": 3 }, { "face": "front", "pos": 5 }],
    "moves": "(R U' R') (F' L' U2 L F)"
  },
  {
    "name": "corner: down right, edge: mid right right",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "right", "pos": 5 }, { "face": "back", "pos": 3 }],
    "moves": "Y L' U L2 u L u' L' Y'"
  },
  {
    "name": "corner: down right, edge: mid back left",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "back", "pos": 3 }, { "face": "right", "pos": 5 }],
    "moves": "B U2 B' F' U F2 R' F' R"
  },
  {
    "name": "corner: down right, edge: mid back right",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "back", "pos": 5 }, { "face": "left", "pos": 3 }],
    "moves": "B' U2 B F' U F2 R' F' R"
  },
  {
    "name": "corner: down right, edge: mid left left",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "left", "pos": 3 }, { "face": "back", "pos": 5 }],
    "moves": "L U' L' F' U F2 R' F' R"
  },
  {
    "name": "corner: down right, edge: mid left right",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "left", "pos": 5 }, { "face": "front", "pos": 3 }],
    "moves": "L' U' L F' U F2 R' F' R"
  },
  {
    "name": "corner: down right, edge: mid front left",
    "corner": [{ "face": "right", "pos": 6 }, { "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }],
    "edge": [{ "face": "front", "pos": 3 }, { "face": "left", "pos": 5 }],
    "moves": "F U' F' U F' U F2 R' F' R"
  },
  {
    "name": "corner: down down, edge: up front low",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "front", "pos": 1 }, { "face": "up", "pos": 7 }],
    "moves": "U R U' R' U' F' U F"
  },
  {
    "name": "corner: down down, edge: up front high",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "up", "pos": 7 }, { "face": "front", "pos": 1 }],
    "moves": "Y U2 L' U L U Y' R U' R'"
  },
  {
    "name": "corner: down down, edge: up back low",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "back", "pos": 1 }, { "face": "up", "pos": 1 }],
    "moves": "U' R U' R' U' F' U F"
  },
  {
    "name": "corner: down down, edge: up back high",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "up", "pos": 1 }, { "face": "back", "pos": 1 }],
    "moves": "Y L' U L U Y' R U' R'"
  },
  {
    "name": "corner: down down, edge: up right low",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "right", "pos": 1 }, { "face": "up", "pos": 5 }],
    "moves": "U2 R U' R' U' F' U F"
  },
  {
    "name": "corner: down down, edge: up right high",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "up", "pos": 5 }, { "face": "right", "pos": 1 }],
    "moves": "Y U' L' U L U Y' R U' R'"
  },
  {
    "name": "corner: down down, edge: up left low",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "left", "pos": 1 }, { "face": "up", "pos": 3 }],
    "moves": "R U' R' U' F' U F"
  },
  {
    "name": "corner: down down, edge: up left high",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "up", "pos": 3 }, { "face": "left", "pos": 1 }],
    "moves": "Y U L' U L U Y' R U' R'"
  },
  {
    "name": "corner: down down, edge: mid front right",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "front", "pos": 5 }, { "face": "right", "pos": 3 }],
    "moves": ""
  },
  {
    "name": "corner: down down, edge: mid right left",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "right", "pos": 3 }, { "face": "front", "pos": 5 }],
    "moves": "R2' U2' F R2 F' U2' R' U R'"
  },
  {
    "name": "corner: down down, edge: mid right right",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "right", "pos": 5 }, { "face": "back", "pos": 3 }],
    "moves": "f' R' U R f"
  },
  {
    "name": "corner: down down, edge: mid back left",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "back", "pos": 3 }, { "face": "right", "pos": 5 }],
    "moves": "Y F' R' F2 R F Y'"
  },
  {
    "name": "corner: down down, edge: mid back right",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "back", "pos": 5 }, { "face": "left", "pos": 3 }],
    "moves": "L2' u L2 u' L2'"
  },
  {
    "name": "corner: down down, edge: mid left left",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "left", "pos": 3 }, { "face": "back", "pos": 5 }],
    "moves": "(L u L') U' (L u' L')"
  },
  {
    "name": "corner: down down, edge: mid left right",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "left", "pos": 5 }, { "face": "front", "pos": 3 }],
    "moves": "L u L' u' L'"
  },
  {
    "name": "corner: down down, edge: mid front left",
    "corner": [{ "face": "down", "pos": 2 }, { "face": "front", "pos": 8 }, { "face": "right", "pos": 6 }],
    "edge": [{ "face": "front", "pos": 3 }, { "face": "left", "pos": 5 }],
    "moves": "F L F2' L' F'"
  }
];

export default F2L_ALGS;