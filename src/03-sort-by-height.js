/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr;
  const arrayOfIndexes = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === -1) {
      arrayOfIndexes.push(i);
    }
  }
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === -1) count += 1;
  }
  array.splice(0, count);
  for (let i = 0; i < arrayOfIndexes.length; i++) {
    array.splice(arrayOfIndexes[i], 0, -1);
  }
  return array;
}

module.exports = sortByHeight;
