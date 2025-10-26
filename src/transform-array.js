const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let res = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      res.splice(i, 2);
    }

    if (arr[i] === "--discard-prev") {
      res.splice(i - 1, 2);
    }

    if (arr[i] === "--double-next") {
      res.splice(i, 2, (i + 1) ** 2);
    }

    if (arr[i] === "--double-prev") {
      console.log(i);
      res.splice(i - 1, 2, i ** 2);
    }
  }

  return res;
}

module.exports = {
  transform,
};
