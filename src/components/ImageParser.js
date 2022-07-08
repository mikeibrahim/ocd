export default function ImageParser(img) {
  if (!img) return null
  const combinedChannelsImg = combineChannels(img)
  const reducedQualityImg = reduceQuality(combinedChannelsImg, 60)
  return reducedQualityImg
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

// return a new image with a length of targetDim * targetDim
function reduceQuality(combinedChannelsImg, targetDim) {
  const reducedQualityImg = {
    width: targetDim,
    height: targetDim,
    data: []
  }

  const xStep = Math.floor(combinedChannelsImg.width / targetDim)
  const yStep = Math.floor(combinedChannelsImg.height / targetDim)

  for (let y = 0; y < targetDim; y++) {
    for (let x = 0; x < targetDim; x++) {
      const xIndex = x * xStep
      const yIndex = y * yStep
      const pixel = combinedChannelsImg.data[yIndex * combinedChannelsImg.width + xIndex]
      reducedQualityImg.data.push(pixel)
    }
  }
  return reducedQualityImg
}