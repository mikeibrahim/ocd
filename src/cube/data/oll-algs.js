const OLL_ALGS = [
  {
    "id": "29",
    "pattern": {
      face: ".## ##. ..#",
      adj: "##. .#. ..# ..."
    },
    "alg": "R U R' U' R U' R' F' U' F R U R'"
  },
  {
    "id": "30",
    "pattern": {
      face: ".#. ##. #.#",
      adj: ".#. .## ... #.."
    },
    "alg": "F R' F R2 U' R' U' R U R' F2"
  },
  {
    "id": "41",
    "pattern": {
      face: ".#. ##. #.#",
      adj: ".#. .#. #.# ..."
    }, "alg": "R U R' U R U2 R' F R U R' U' F'"
  },
  {
    "id": "42",
    "pattern": {
      face: "#.# ##. .#.",
      adj: "#.# .#. .#. ..."
    }, "alg": "R' U' R U' R' U2 R F R U R' U' F'"
  },
  {
    "id": "39",
    "pattern": {
      face: "..# ### #..",
      adj: ".#. #.. .## ..."
    }, "alg": "L F' L' U' L U F U' L'"
  },
  {
    "id": "40",
    "pattern": {
      face: "#.. ### ..#",
      adj: ".#. ... ##. ..#"
    }, "alg": "R' F R U R' U' F' U R"
  },
  {
    "id": "34",
    "pattern": {
      face: "... ### #.#",
      adj: ".#. ..# .#. #.."
    }, "alg": "R U R2 U' R' F R U R U' F'"
  },
  {
    "id": "46",
    "pattern": {
      face: "##. .#. ##.",
      adj: "... ### ... .#."
    }, "alg": "R' U' R' F R F' U R"
  },
  {
    "id": "28",
    "pattern": {
      face: "### ##. #.#",
      adj: ".#. .#. ... ..."
    }, "alg": "r U R' U' r' R U R U' R'"
  },
  {
    "id": "57",
    "pattern": {
      face: "#.# ### #.#",
      adj: ".#. ... .#. ..."
    }, "alg": "R U R' U' M' U R U' r'"
  },
  {
    "id": "21",
    "pattern": {
      face: ".#. ### .#.",
      adj: "#.# ... #.# ..."
    }, "alg": "R U2 R' U' R U R' U' R U' R'"
  },
  {
    "id": "22",
    "pattern": {
      face: ".#. ### .#.",
      adj: "..# ... #.. #.#"
    }, "alg": "R U2 R2 U' R2 U' R2 U2 R"
  },
  {
    "id": "23",
    "pattern": {
      face: ".#. ### ###",
      adj: "... ... #.# ..."
    }, "alg": "R2 D' R U2 R' D R U2 R"
  },
  {
    "id": "24",
    "pattern": {
      face: ".## ### .##",
      adj: "#.. ... ..# ..."
    }, "alg": "r U R' U' r' F R F'"
  },
  {
    "id": "25",
    "pattern": {
      face: ".## ### ##.",
      adj: "..# ... ... #.."
    }, "alg": "F' r U R' U' r' F R"
  },
  {
    "id": "26",
    "pattern": {
      face: ".## ### .#.",
      adj: "#.. #.. ... #.."
    }, "alg": "R U2 R' U' R U' R'"
  },
  {
    "id": "27",
    "pattern": {
      face: ".#. ### ##.",
      adj: "..# ..# ..# ..."
    }, "alg": "R U R' U R U2 R'"
  },
  {
    "id": "1",
    "pattern": {
      face: "... .#. ...",
      adj: ".#. ### .#. ###"
    }, "alg": "R U2 R2 F R F' U2 R' F R F'"
  },
  {
    "id": "2",
    "pattern": {
      face: "... .#. ...",
      adj: ".#. ##. ### .##"
    }, "alg": "r U r' U2 r U2 R' U2 R U' r'"
  },
  {
    "id": "3",
    "pattern": {
      face: "... .#. #..",
      adj: ".## .## .## .#."
    }, "alg": "r' R2 U R' U r U2 r' U M'"
  },
  {
    "id": "4",
    "pattern": {
      face: "... .#. ..#",
      adj: "##. .#. ##. ##."
    }, "alg": "M U' r U2 r' U' R U' R' M'"
  },
  {
    "id": "17",
    "pattern": {
      face: "#.. .#. ..#",
      adj: "##. .## .#. .#."
    }, "alg": "F R' F' R2 r' U R U' R' U' M'"
  },
  {
    "id": "18",
    "pattern": {
      face: "#.# .#. ...",
      adj: "### .#. .#. .#."
    }, "alg": "r U R' U R U2 r2 U' R U' R' U2 r"
  },
  {
    "id": "19",
    "pattern": {
      face: "#.# .#. ...",
      adj: ".#. ##. .#. .##"
    }, "alg": "r' R U R U R' U' M' R' F R F'"
  },
  {
    "id": "20",
    "pattern": {
      face: "#.# .#. #.#",
      adj: ".#. .#. .#. .#."
    }, "alg": "r U R' U' M2 U R U' R' U' M'"
  },
  {
    "id": "9",
    "pattern": {
      face: ".#. ##. ..#",
      adj: "##. .#. #.. #.."
    }, "alg": "R U R' U' R' F R2 U R' U' F'"
  },
  {
    "id": "10",
    "pattern": {
      face: "..# ##. .#.",
      adj: "..# .#. .## ..#"
    }, "alg": "R U R' U R' F R F' R U2 R'"
  },
  {
    "id": "35",
    "pattern": {
      face: "#.. .## .##",
      adj: "#.. ..# .#. .#."
    }, "alg": "R U2 R2 F R F' R U2 R'"
  },
  {
    "id": "37",
    "pattern": {
      face: "##. ##. ..#",
      adj: "##. .## ... ..."
    }, "alg": "F R' F' R U R U' R'"
  },
  {
    "id": "51",
    "pattern": {
      face: "... ### ...",
      adj: "##. #.# .## ..."
    }, "alg": "F U R U' R' U R U' R' F'"
  },
  {
    "id": "52",
    "pattern": {
      face: ".#. .#. .#.",
      adj: "#.. ### ..# .#."
    }, "alg": "R U R' U R U' B U' B' R'"
  },
  {
    "id": "55",
    "pattern": {
      face: "... ### ...",
      adj: "### ... ### ..."
    }, "alg": "R' F R U R U' R2 F' R2 U' R' U R U R'"
  },
  {
    "id": "56",
    "pattern": {
      face: "... ### ...",
      adj: ".#. #.# .#. #.#"
    }, "alg": "r' U' r U' R' U R U' R' U R r' U r"
  },
  {
    "id": "13",
    "pattern": {
      face: "... ### #..",
      adj: ".## ..# .## ..."
    }, "alg": "F U R U' R2 F' R U R U' R'"
  },
  {
    "id": "14",
    "pattern": {
      face: "... ### ..#",
      adj: "##. ... ##. #.."
    }, "alg": "R' F R U R' F' R F U' F'"
  },
  {
    "id": "15",
    "pattern": {
      face: "#.. ### ...",
      adj: ".## ..# .#. ..#"
    }, "alg": "l' U' l L' U' L U l' U l"
  },
  {
    "id": "16",
    "pattern": {
      face: "..# ### ...",
      adj: "##. #.. .#. #.."
    }, "alg": "r U r' R U R' U' r U' r'"
  },
  {
    "id": "31",
    "pattern": {
      face: ".## .## ..#",
      adj: "##. ... ..# .#."
    }, "alg": "R' U' F U R U' R' F' R"
  },
  {
    "id": "32",
    "pattern": {
      face: "##. ##. #..",
      adj: ".## .#. #.. ..."
    }, "alg": "L U F' U' L' U L F L'"
  },
  {
    "id": "43",
    "pattern": {
      face: ".## .## ..#",
      adj: ".#. ... ... ###"
    }, "alg": "F' U' L' U L F"
  },
  {
    "id": "44",
    "pattern": {
      face: "##. ##. #..",
      adj: ".#. ### ... ..."
    }, "alg": "F U R U' R' F'"
  },
  {
    "id": "47",
    "pattern": {
      face: ".#. .## ...",
      adj: "##. #.# ..# .#."
    }, "alg": "R' U' R' F R F' R' F R F' U R"
  },
  {
    "id": "48",
    "pattern": {
      face: ".#. ##. ...",
      adj: ".## .#. #.. #.#"
    }, "alg": "F R U R' U' R U R' U' F'"
  },
  {
    "id": "49",
    "pattern": {
      face: ".#. .## ...",
      adj: ".## ... #.. ###"
    }, "alg": "r U' r2 U r2 U r2 U' r"
  },
  {
    "id": "50",
    "pattern": {
      face: "... .## .#.",
      adj: "..# ... ##. ###"
    }, "alg": "r' U r2 U' r2 U' r2 U r'"
  },
  {
    "id": "53",
    "pattern": {
      face: ".#. .## ...",
      adj: "### ... #.# .#."
    }, "alg": "l' U2 L U L' U' L U L' U l"
  },
  {
    "id": "54",
    "pattern": {
      face: ".#. ##. ...",
      adj: "### .#. #.# ..."
    }, "alg": "r U2 R' U' R U R' U' R U' r'"
  },
  {
    "id": "7",
    "pattern": {
      face: ".#. ##. #..",
      adj: ".## .## ..# ..."
    }, "alg": "r U R' U R U2 r'"
  },
  {
    "id": "8",
    "pattern": {
      face: ".#. .## ..#",
      adj: "##. ... #.. ##."
    }, "alg": "l' U' L U' L' U2 l"
  },
  {
    "id": "11",
    "pattern": {
      face: ".## ##. ...",
      adj: ".## .#. ..# ..#"
    }, "alg": "r U R' U R' F R F' R U2 r'"
  },
  {
    "id": "12",
    "pattern": {
      face: "##. .## ...",
      adj: "##. #.. #.. .#."
    }, "alg": "M' R' U' R U' R' U2 R U' R r'"
  },
  {
    "id": "5",
    "pattern": {
      face: "##. ##. ...",
      adj: ".## .## ... ..#"
    }, "alg": "l' U2 L U L' U l"
  },
  {
    "id": "6",
    "pattern": {
      face: ".## .## ...",
      adj: "##. #.. ... ##."
    }, "alg": "r U2 R' U' R U' r'"
  },
  {
    "id": "33",
    "pattern": {
      face: "..# ### ..#",
      adj: "##. ... .## ..."
    }, "alg": "R U R' U' R' F R F'"
  },
  {
    "id": "45",
    "pattern": {
      face: "..# ### ..#",
      adj: ".#. ... .#. #.#"
    }, "alg": "F R U R' U' F'"
  },
  {
    "id": "36",
    "pattern": {
      face: "##. .## ..#",
      adj: ".#. ... #.. .##"
    }, "alg": "L' U' L U' L' U L U L F' L' F"
  },
  {
    "id": "38",
    "pattern": {
      face: ".## ##. #..",
      adj: ".#. ##. ..# ..."
    }, "alg": "R U R' U R U' R' U' R' F R F'"
  }
];

export default OLL_ALGS;