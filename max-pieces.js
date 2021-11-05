// Given the number of pizza cuts, find the maximum amount of pieces of pizza that you can get (not necessarily of equal size)

function maxPizza(cut) {
  if(cut < 0) return -1
  return 1 + (cut + cut*cut)/2
}
