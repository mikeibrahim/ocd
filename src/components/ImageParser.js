export default function ImageParser(img) {
  if (!img) return null
  console.log("img:", img);
  const combinedChannelsImg = combineChannels(img)
  console.log("combinedChannelsImg:", combinedChannelsImg);
  // const reducedQualityImg = reduceQuality(combinedChannelsImg, 10)
  // console.log("reducedQualityImg:", reducedQualityImg);
  return combinedChannelsImg
}

function combineChannels(img) {
  const combinedChannelsImg = {
    width: img.width,
    height: img.height,
    data: []
  }
  for (let i = 0; i < img.data.length; i += 4) {
    combinedChannelsImg.data.push([img.data[i], img.data[i + 1], img.data[i + 2]])
  }
  return combinedChannelsImg
}

// // return a new image with a length of targetDim * targetDim
// function reduceQuality(combinedChannelsImg, targetDim) {
//   const reducedQualityImg = {
//     width: targetDim,
//     height: targetDim,
//     data: []
//   }

//   const imgDim = combinedChannelsImg.width

//   for (let y = 0; y < targetDim; y++) {
//     for (let x = 0; x < targetDim; x++) {
//       let xMap = Math.floor(x * imgDim / targetDim)
//       let yMap = Math.floor(y * imgDim / targetDim)
//       let idx = yMap * imgDim + xMap
//       console.log("xMap:", xMap);
//       console.log("yMap:", yMap);
//       console.log("idx:", idx);
//       let pixel = combinedChannelsImg.data[idx]
//       console.log("pixel:", pixel);
//       reducedQualityImg.data.push(pixel)
//     }
//   }
//   return reducedQualityImg
// }