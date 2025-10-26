// const { NotImplementedError } = require("../lib");

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
  let newPositiveArray = arr.filter((el) => el !== -1).sort();

  let resultArray = arr.map((el, index) => {
    if (el === -1) {
      return -1;
    } else {
      let number = newPositiveArray[0];
      newPositiveArray.shift();
      return number;
    }
  });

  return resultArray;
}

module.exports = {
  sortByHeight,
};
