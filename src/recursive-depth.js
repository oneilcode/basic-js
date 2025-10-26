// const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let arrayDepth = 1;

    for (let item of arr) {
      if (Array.isArray(item)) {
        arrayDepth = Math.max(arrayDepth, 1 + this.calculateDepth(item));
      }
    }
    return arrayDepth;
  }
}

const depthCalc = new DepthCalculator();

module.exports = {
  depthCalculator: new DepthCalculator(),
};
