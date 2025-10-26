// const { NotImplementedError } = require("../lib");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let emailArray = email.split("");
  let emailIndex = emailArray.lastIndexOf("@");

  let resultArray = emailArray.slice(emailIndex + 1).join("");

  return resultArray;
}

module.exports = {
  getEmailDomain,
};
