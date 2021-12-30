// Not fancy

function rgb(r, g, b){
  const inputRGB = [r, g, b]
  
  const rgbToHex = []
  
  const rgb = inputRGB.map(color => {
    if(color > 255) {
      return 255
    } else if(color < 0) {
      return 0
    } else {
      return color
    }
  })
  
  rgb.forEach(color => {
    const integer = Math.floor(color/16)
    const decimal = ((color/16) % 1) * 16
    rgbToHex.push(integer , decimal)
  })
  
  const hex = rgbToHex.map(color => {
    if (color < 10) {
      return "" + color
    } else if (color === 10) {
      return "A"
    } else if (color === 11) {
      return "B"
    } else if (color === 12) {
      return "C"
    } else if (color === 13) {
      return "D"
    } else if (color === 14) {
      return "E"
    } else if (color === 15) {
      return "F"
    }
  })
  
  return hex.join("")
  
}
