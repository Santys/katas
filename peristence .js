/*
  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
  which is the number of times you must multiply the digits in num until you reach a single digit.
*/


function persistence(num) {
  let persistence = 0
  if(num < 10) return persistence
  while (num >= 10){
    let result = 1;
    for(let i = 0; i < num.toString().length; i++){
       result *= num.toString()[i]
    }
    num = result
    persistence++
  }
  return persistence
}
