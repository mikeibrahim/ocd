const PLL_ALGS = [
  {
    "name": "Aa",
    "alg": "X L2 D2 L' U' L D2 L' U L' X'",
    "perm": "obb rro bgr gog",
    "group": "Adjacent Corner Swap"
  },
  {
    "name": "Ab",
    "alg": "X' L2 D2 L U L' D2 L U' L X",
    "perm": "rbg orr ggo bob",
    "group": "Adjacent Corner Swap"
  },
  {
    "name": "F",
    "alg": "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
    "perm": "bgr grb rbg ooo",
    "group": "Adjacent Corner Swap"
  },
  {
    "name": "Ga",
    "alg": "R2 U R' U R' U' R U' R2 U' D R' U R D'",
    "perm": "brr gob rbg ogo",
    "group": "Adjacent Corner Swap"
  },
  {
    "name": "Gb",
    "alg": "R' U' R U D' R2 U R' U R U' R U' R2 D",
    "perm": "bgr gbb rog oro",
    "group": "Adjacent Corner Swap"
  },
  {
    "name": "Gc",
    "alg": "R2 U' R U' R U R' U R2 U D' R U' R' D",
    "perm": "bgr gob rrg obo",
    "group": "Adjacent Corner Swap"
  },
  {
    "name": "Gd",
    "alg": "R U R' U' D R2 U' R U' R' U R' U R2 D'",
    "perm": "bor ggb rbg oro",
    "group": "Adjacent Corner Swap"
  },
  {
    "name": "Ja",
    "alg": "X R2 F R F' R U2 r' U r U2 X'",
    "perm": "bbr ggb rrg ooo",
    "group": "Adjacent Corner Swap"
  },
  {
    "name": "Jb",
    "alg": "R U R' F' R U R' U' R' F R2 U' R'",
    "perm": "obb roo brr ggg",
    "group": "Adjacent Corner Swap"
  },
  {
    "name": "Ra",
    "alg": "R U' R' U' R U R D R' U' R D' R' U2 R'",
    "perm": "oob rbo bgr grg",
    "group": "Adjacent Corner Swap"
  },
  {
    "name": "Rb",
    "alg": "R2 F R U R U' R' F' R U2 R' U2 R",
    "perm": "rbg ogr goo brb",
    "group": "Adjacent Corner Swap"
  },
  {
    "name": "T",
    "alg": "R U R' U' R' F R2 U' R' U' R U R' F'",
    "perm": "bbr gob rgg oro",
    "group": "Adjacent Corner Swap"
  },
  {
    "name": "E",
    "alg": "X' L' U L D' L' U' L D L' U' L D' L' U L D X",
    "perm": "obr grb rgo bog",
    "group": "Diagonal Corner Swap"
  },
  {
    "name": "Na",
    "alg": "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
    "perm": "gbb roo bgg orr",
    "group": "Diagonal Corner Swap"
  },
  {
    "name": "Nb",
    "alg": "R' U R U' R' F' U' F R U R' F R' F' R U' R",
    "perm": "bbg oor ggb rro",
    "group": "Diagonal Corner Swap"
  },
  {
    "name": "V",
    "alg": "R' U R' U' Y R' F' R2 U' R' U R' F R F",
    "perm": "bbg ogr grb roo",
    "group": "Diagonal Corner Swap"
  },
  {
    "name": "Y",
    "alg": "F R U' R' U' R U R' F' R U R' U' R' F R F'",
    "perm": "bbg orr gob rgo",
    "group": "Diagonal Corner Swap"
  },
  {
    "name": "H",
    "alg": "M2 U M2 U2 M2 U M2",
    "perm": "bgb ror gbg oro",
    "group": "Edges Only"
  },
  {
    "name": "Ua",
    "alg": "M2 U M U2 M' U M2",
    "perm": "brb ror ggg obo",
    "group": "Edges Only"
  },
  {
    "name": "Ub",
    "alg": "M2 U' M U2 M' U' M2",
    "perm": "bob rbr ggg oro",
    "group": "Edges Only"
  },
  {
    "name": "Z",
    "alg": "M' U M2 U M2 U M' U2 M2",
    "perm": "ogo brb rbr gog",
    "group": "Edges Only"
  }
];

export default PLL_ALGS;