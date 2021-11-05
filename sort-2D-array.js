function namesSorter (departmentsArray) {
  let arr = [].concat(...departmentsArray);
  arr.sort(function(a, b) {
      if (a.length > b.length) {
        return 1;
      } else if (a.length < b.length) {
        return -1;
      } else if (a.length == b.length) {
        return a.localeCompare(b)
      }
  })
  return arr;
}
