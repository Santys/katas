//Round any given number to the closest 0.5 step

function solution(n){
  const decimals = n % 1
  if(decimals <= 0.25) {
    return Math.trunc(n)
  } else if(decimals >= 0.75){
    return Math.trunc(n) + 1
  } else {
    return Math.trunc(n) + 0.5
  }
}

function solution(n){
  return Math.round(n*2)/2
}
