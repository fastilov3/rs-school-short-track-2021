/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  for (let i = 0; i < domains.length; i++) {
    arr = arr.concat(domains[i].split('.'))
  }
  console.log(arr);
}

module.exports = getDNSStats;
console.log(getDNSStats([
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
]));
