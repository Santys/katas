// Given an array representing a series of floors you must reach by elevator, 
// return an integer representing the total distance travelled for visiting 
// each floor in the array in order.

function elevatorDistance(array) {
  let distance = 0;
  for (let index = 1; index < array.length; index++) {
      console.log(array[index - 1] - array[index])
      distance += Math.abs(array[index - 1] - array[index])
  }
  return distance
}
