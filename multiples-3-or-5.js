//  returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0
function solution(number){
  if(number <= 0) return 0
  let sum = 0;
  let crrtNumber = 0;
  while(crrtNumber < number) {
    if(crrtNumber % 3 === 0 || crrtNumber % 5 === 0) sum += crrtNumber
    crrtNumber++
  }
  return sum
}
