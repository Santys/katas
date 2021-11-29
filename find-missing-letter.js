/*
  #Find the missing letter

  Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

  You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
  The array will always contain letters in only one case.
*/


function findMissingLetter(array){
  let findMissing = array[0].charCodeAt()
  let missed = ""
  array.forEach(letter => {
    if((letter.charCodeAt() % findMissing) > 1) missed = String.fromCharCode(findMissing+1)
    findMissing = letter.charCodeAt()
  })
  return missed;
}
