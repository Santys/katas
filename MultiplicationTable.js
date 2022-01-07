// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]


multiplicationTable = function(size) {
  const NxN = []
  for (let horizontal = 0; horizontal < size; horizontal++) {
    const multiplicationTable = []
    for (let vertical = 0; vertical < size; vertical++) {
        multiplicationTable.push((vertical + 1)*(horizontal + 1))
    }
    NxN.push(multiplicationTable)
  }
  return NxN
}
