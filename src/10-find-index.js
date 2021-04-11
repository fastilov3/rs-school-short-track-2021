/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  function findMiddlePosition(max, min) {
    return Math.floor((max + min) / 2);
  }

  let min = 0;
  let max = array.length - 1;
  let middle = findMiddlePosition(max, min);

  while (min <= max) {
    middle = findMiddlePosition(max, min);
    if (array[middle] === value) return middle;
    if (array[middle] < value) min = middle + 1;
    if (array[middle] > value) max = middle - 1;
  }
  return -1;
}

module.exports = findIndex;
