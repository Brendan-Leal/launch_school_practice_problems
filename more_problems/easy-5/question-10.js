function average(array) {
  let sum = array.reduce((accumulator, currElem) => accumulator + currElem);

  return Math.floor(sum / array.length);
}
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
