var whatTimeIsIt = function(angle) {
  let hour = 0;
  let minutes = Math.floor((angle % 30) * 2);
  angle < 30 ? hour = 12 : hour = Math.floor(angle/30);
  hour.toString().length === 1 ? hour = "0" + hour.toString() : hour = hour.toString();  
  minutes.toString().length === 1 ? minutes = "0" + minutes.toString() : minutes = minutes.toString(); 
  return `${hour}:${minutes}`;
}
