/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const newS1 = s1.split('');
  const newS2 = s2.split('');
  const obj1 = {};
  const obj2 = {};
  const arr = [];
  for (let i = 0; i < newS1.length; i++) {
    if (!obj1[newS1[i]]) obj1[newS1[i]] = 0;
    obj1[newS1[i]] += 1;
  }
  for (let i = 0; i < newS2.length; i++) {
    if (!obj2[newS2[i]]) obj2[newS2[i]] = 0;
    obj2[newS2[i]] += 1;
  }
  const entries1 = Object.keys(obj1);
  const entries2 = Object.keys(obj2);
  for (let i = 0; i < entries1.length; i++) {
    if (entries2.includes(entries1[i])) arr.push(Math.min(obj1[entries1[i]], obj2[entries1[i]]));
  }
  return arr.reduce((acc, el) => acc + el, 0);
}

module.exports = getCommonCharacterCount;
