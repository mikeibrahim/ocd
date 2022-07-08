import { MulticlassClassifier } from "./network.js";
import weight from "./weight.json";
import bias from "./bias.json";
import { Matrix } from '../ml/network';

// Data only needed for training
// let data = [
//   // Red
//   { "color": [255, 0, 0], "choice": "red" },
//   { "color": [186, 0, 0], "choice": "red" },
//   { "color": [122, 0, 0], "choice": "red" },
//   { "color": [255, 56, 56], "choice": "red" },
//   { "color": [176, 40, 40], "choice": "red" },
//   { "color": [120, 29, 29], "choice": "red" },
//   { "color": [252, 114, 114], "choice": "red" },
//   { "color": [171, 80, 80], "choice": "red" },
//   { "color": [120, 55, 55], "choice": "red" },
//   // Orange
//   { "color": [255, 115, 0], "choice": "orange" },
//   { "color": [173, 78, 0], "choice": "orange" },
//   { "color": [120, 54, 0], "choice": "orange" },
//   { "color": [255, 148, 61], "choice": "orange" },
//   { "color": [173, 101, 42], "choice": "orange" },
//   { "color": [102, 60, 26], "choice": "orange" },
//   { "color": [255, 177, 115], "choice": "orange" },
//   { "color": [161, 112, 74], "choice": "orange" },
//   { "color": [110, 76, 50], "choice": "orange" },
//   // Yellow
//   { "color": [255, 255, 0], "choice": "yellow" },
//   { "color": [171, 171, 0], "choice": "yellow" },
//   { "color": [120, 120, 0], "choice": "yellow" },
//   { "color": [255, 255, 64], "choice": "yellow" },
//   { "color": [176, 176, 44], "choice": "yellow" },
//   { "color": [120, 120, 30], "choice": "yellow" },
//   { "color": [255, 255, 130], "choice": "yellow" },
//   { "color": [168, 168, 84], "choice": "yellow" },
//   { "color": [99, 99, 49], "choice": "yellow" },
//   // Green
//   { "color": [0, 255, 4], "choice": "green" },
//   { "color": [0, 186, 3], "choice": "green" },
//   { "color": [0, 120, 2], "choice": "green" },
//   { "color": [71, 255, 74], "choice": "green" },
//   { "color": [50, 173, 52], "choice": "green" },
//   { "color": [37, 120, 38], "choice": "green" },
//   { "color": [140, 255, 142], "choice": "green" },
//   { "color": [94, 168, 96], "choice": "green" },
//   { "color": [60, 105, 61], "choice": "green" },
//   // Blue
//   { "color": [0, 174, 255], "choice": "blue" },
//   { "color": [0, 127, 186], "choice": "blue" },
//   { "color": [0, 87, 128], "choice": "blue" },
//   { "color": [61, 193, 255], "choice": "blue" },
//   { "color": [41, 135, 179], "choice": "blue" },
//   { "color": [29, 93, 122], "choice": "blue" },
//   { "color": [133, 217, 255], "choice": "blue" },
//   { "color": [95, 156, 184], "choice": "blue" },
//   { "color": [69, 113, 133], "choice": "blue" },
//   // Blue
//   { "color": [0, 0, 255], "choice": "blue" },
//   { "color": [0, 0, 176], "choice": "blue" },
//   { "color": [0, 0, 125], "choice": "blue" },
//   { "color": [66, 66, 255], "choice": "blue" },
//   { "color": [48, 48, 184], "choice": "blue" },
//   { "color": [31, 31, 120], "choice": "blue" },
//   { "color": [102, 120, 255], "choice": "blue" },
//   { "color": [72, 85, 181], "choice": "blue" },
//   { "color": [49, 58, 122], "choice": "blue" },
//   // Pink
//   { "color": [251, 0, 255], "choice": "red" },
//   { "color": [178, 0, 181], "choice": "red" },
//   { "color": [128, 0, 130], "choice": "red" },
//   { "color": [252, 61, 255], "choice": "red" },
//   { "color": [169, 43, 171], "choice": "red" },
//   { "color": [111, 28, 112], "choice": "red" },
//   { "color": [253, 117, 255], "choice": "red" },
//   { "color": [180, 85, 181], "choice": "red" },
//   { "color": [112, 54, 112], "choice": "red" },
//   // Black
//   { "color": [0, 0, 0], "choice": "black" },
//   { "color": [23, 23, 23], "choice": "black" },
//   { "color": [51, 51, 51], "choice": "black" },
//   { "color": [51, 41, 41], "choice": "black" },
//   { "color": [51, 48, 41], "choice": "black" },
//   { "color": [49, 51, 41], "choice": "black" },
//   { "color": [28, 36, 34], "choice": "black" },
//   { "color": [28, 28, 36], "choice": "black" },
//   { "color": [35, 28, 36], "choice": "black" },
//   // White
//   { "color": [255, 255, 255], "choice": "white" },
//   { "color": [209, 209, 209], "choice": "white" },
//   { "color": [156, 156, 156], "choice": "white" },
//   { "color": [161, 149, 149], "choice": "white" },
//   { "color": [159, 161, 149], "choice": "white" },
//   { "color": [149, 161, 154], "choice": "white" },
//   { "color": [149, 151, 161], "choice": "white" },
//   { "color": [161, 149, 160], "choice": "white" },
//   { "color": [197, 210, 217], "choice": "white" },
//   // CROWDSOURCED DATA
//   { "color": [55, 178, 92], "choice": "green" },
//   { "color": [145, 57, 5], "choice": "orange" },
//   { "color": [158, 65, 92], "choice": "red" },
//   { "color": [63, 9, 103], "choice": "blue" },
//   { "color": [191, 107, 83], "choice": "orange" },
//   { "color": [30, 170, 136], "choice": "blue" },
//   { "color": [233, 217, 94], "choice": "yellow" },
//   { "color": [242, 251, 3], "choice": "yellow" },
//   { "color": [12, 109, 14], "choice": "green" },
//   { "color": [57, 204, 19], "choice": "green" },
//   { "color": [98, 218, 45], "choice": "green" },
//   { "color": [215, 55, 180], "choice": "red" },
//   { "color": [75, 18, 175], "choice": "blue" },
//   { "color": [217, 142, 199], "choice": "white" },
//   { "color": [146, 27, 235], "choice": "blue" },
//   { "color": [142, 200, 223], "choice": "white" },
//   { "color": [84, 211, 16], "choice": "green" },
//   { "color": [32, 144, 87], "choice": "green" },
//   { "color": [213, 135, 196], "choice": "red" },
//   { "color": [137, 196, 141], "choice": "white" },
//   { "color": [220, 90, 31], "choice": "orange" },
//   { "color": [195, 173, 253], "choice": "white" },
//   { "color": [163, 7, 214], "choice": "red" },
//   { "color": [126, 2, 142], "choice": "blue" },
//   { "color": [81, 2, 233], "choice": "blue" },
//   { "color": [146, 136, 35], "choice": "yellow" },
//   { "color": [105, 193, 168], "choice": "white" },
//   { "color": [128, 5, 199], "choice": "blue" },
//   { "color": [122, 14, 79], "choice": "red" },
//   { "color": [228, 168, 71], "choice": "yellow" },
//   { "color": [140, 37, 219], "choice": "blue" },
//   { "color": [104, 30, 118], "choice": "blue" },
//   { "color": [138, 253, 202], "choice": "white" },
//   { "color": [51, 187, 61], "choice": "green" },
//   { "color": [220, 104, 224], "choice": "red" },
//   { "color": [148, 91, 104], "choice": "red" },
//   { "color": [192, 240, 89], "choice": "yellow" },
//   { "color": [149, 101, 106], "choice": "red" },
//   { "color": [8, 132, 33], "choice": "green" },
//   { "color": [213, 81, 103], "choice": "red" },
//   { "color": [37, 23, 242], "choice": "blue" },
//   { "color": [189, 79, 139], "choice": "red" },
//   { "color": [141, 145, 61], "choice": "yellow" },
//   { "color": [145, 202, 235], "choice": "white" },
//   { "color": [168, 117, 99], "choice": "red" },
//   { "color": [92, 33, 147], "choice": "blue" },
//   { "color": [241, 235, 148], "choice": "white" },
//   { "color": [228, 148, 72], "choice": "orange" },
//   { "color": [48, 240, 147], "choice": "green" },
//   { "color": [184, 8, 3], "choice": "red" },
//   { "color": [6, 95, 163], "choice": "blue" },
//   { "color": [49, 15, 197], "choice": "blue" },
//   { "color": [245, 59, 160], "choice": "red" },
//   { "color": [4, 198, 88], "choice": "green" },
//   { "color": [190, 240, 61], "choice": "yellow" },
//   { "color": [125, 137, 229], "choice": "blue" },
//   { "color": [72, 113, 187], "choice": "blue" },
//   { "color": [200, 141, 30], "choice": "orange" },
//   // More Crowdsourced Data
//   { "color": [81, 127, 195], "choice": "blue" },
//   { "color": [164, 198, 45], "choice": "yellow" },
//   { "color": [70, 21, 182], "choice": "blue" },
//   { "color": [8, 173, 113], "choice": "green" },
//   { "color": [227, 31, 174], "choice": "red" },
//   { "color": [249, 241, 148], "choice": "white" },
//   { "color": [68, 78, 187], "choice": "blue" },
//   { "color": [199, 53, 176], "choice": "red" },
//   { "color": [109, 52, 43], "choice": "red" },
//   { "color": [103, 213, 161], "choice": "green" },
//   { "color": [173, 246, 177], "choice": "green" },
//   { "color": [16, 67, 124], "choice": "blue" },
//   { "color": [155, 235, 49], "choice": "green" },
//   { "color": [147, 28, 74], "choice": "red" },
//   { "color": [251, 64, 164], "choice": "red" },
//   { "color": [44, 75, 175], "choice": "blue" },
//   { "color": [83, 210, 248], "choice": "blue" },
//   { "color": [96, 199, 35], "choice": "green" },
//   { "color": [69, 225, 55], "choice": "green" },
//   { "color": [94, 66, 61], "choice": "black" },
//   { "color": [212, 125, 15], "choice": "orange" },
//   { "color": [91, 47, 64], "choice": "black" },
//   { "color": [82, 13, 28], "choice": "red" },
//   { "color": [236, 102, 230], "choice": "red" },
//   { "color": [183, 195, 107], "choice": "green" },
//   { "color": [19, 94, 95], "choice": "blue" },
//   { "color": [1, 253, 118], "choice": "green" },
//   { "color": [54, 244, 58], "choice": "green" },
//   { "color": [42, 196, 197], "choice": "blue" },
//   { "color": [240, 49, 178], "choice": "red" },
//   { "color": [37, 248, 190], "choice": "green" },
//   { "color": [237, 220, 0], "choice": "yellow" },
//   { "color": [85, 205, 244], "choice": "blue" },
//   { "color": [13, 111, 149], "choice": "blue" },
//   { "color": [91, 73, 109], "choice": "blue" },
//   { "color": [192, 2, 16], "choice": "red" },
//   { "color": [61, 104, 9], "choice": "green" },
//   { "color": [29, 198, 242], "choice": "blue" },
//   { "color": [187, 32, 151], "choice": "red" },
//   { "color": [35, 37, 164], "choice": "blue" },
//   { "color": [74, 84, 147], "choice": "blue" },
//   { "color": [247, 68, 146], "choice": "red" },
//   { "color": [233, 188, 188], "choice": "white" },
//   { "color": [22, 191, 188], "choice": "blue" },
//   { "color": [248, 255, 181], "choice": "white" },
//   { "color": [106, 87, 214], "choice": "blue" },
//   { "color": [250, 174, 179], "choice": "orange" },
//   { "color": [25, 101, 45], "choice": "green" },
//   { "color": [176, 66, 131], "choice": "red" },
//   { "color": [175, 228, 66], "choice": "green" },
//   { "color": [159, 122, 31], "choice": "yellow" },
//   { "color": [5, 9, 212], "choice": "blue" },
//   { "color": [11, 184, 147], "choice": "green" },
//   { "color": [55, 99, 252], "choice": "blue" },
//   { "color": [149, 219, 160], "choice": "white" },
//   { "color": [252, 162, 75], "choice": "orange" },
//   { "color": [6, 165, 100], "choice": "green" },
//   { "color": [220, 169, 72], "choice": "yellow" },
//   { "color": [13, 95, 250], "choice": "blue" },
//   { "color": [150, 213, 231], "choice": "white" },
//   // More data
//   { "color": [34, 83, 137], "choice": "blue" },
//   { "color": [200, 160, 93], "choice": "yellow" },
//   { "color": [198, 198, 250], "choice": "white" },
//   { "color": [178, 151, 139], "choice": "orange" },
//   { "color": [102, 129, 220], "choice": "blue" },
//   { "color": [50, 75, 170], "choice": "blue" },
//   { "color": [146, 107, 58], "choice": "orange" },
//   { "color": [222, 61, 119], "choice": "red" },
//   { "color": [48, 186, 20], "choice": "green" },
//   { "color": [170, 103, 72], "choice": "red" },
//   { "color": [57, 51, 216], "choice": "blue" },
//   { "color": [80, 162, 46], "choice": "green" },
//   { "color": [99, 146, 180], "choice": "blue" },
//   { "color": [15, 99, 16], "choice": "green" },
//   { "color": [185, 204, 57], "choice": "green" },
//   { "color": [90, 93, 35], "choice": "green" },
//   { "color": [135, 159, 165], "choice": "blue" },
//   { "color": [57, 103, 9], "choice": "green" },
//   { "color": [228, 20, 223], "choice": "red" },
//   { "color": [132, 133, 202], "choice": "blue" },
//   { "color": [77, 59, 200], "choice": "blue" },
//   { "color": [202, 49, 65], "choice": "red" },
//   { "color": [149, 240, 70], "choice": "green" },
//   { "color": [151, 158, 238], "choice": "blue" }
// ];

// let X_trn = new Matrix(null, null, null,
//   data.map(d => d.color)
// );
// X_trn = X_trn.T();

// /*
// Red: 0
// Orange: 1
// Yellow: 2
// Green: 3
// Blue: 4
// Black: 5
// White: 6
// */

// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'white'];
// const colorToIndex = (color) => { return colors.indexOf(color); };

// let y_trn = new Matrix(null, null, null,
//   [data.map(d => [colorToIndex(d.choice)])]
// );
// y_trn = y_trn.oneHot();


// Setting classifier
let numClasses = 7;
let structure = [3, 30, 30, numClasses]
let trainedModel = new MulticlassClassifier(null, null, structure);

// // Testing
trainedModel.loadParams(weight, bias);

export default trainedModel;

// // Training
// let epochs = 5000;
// let alpha = 0.01;
// trainedModel.train(X_trn, y_trn, epochs, alpha);
// console.log(trainedModel.getWeightJSON());
// console.log(trainedModel.getBiasJSON());