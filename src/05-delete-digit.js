/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newArray = [];
  const array = n.toString().split('').map((el) => +el);
  for (let i = 0; i < array.length; i++) {
    let str = '';
    for (let j = 0; j < array.length; j++) {
      if (j !== i) str += array[j];
    }
    newArray.push(str);
  }
  return Math.max(...newArray.map((el) => +el));
}

module.exports = deleteDigit;
