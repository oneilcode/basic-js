const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const stringMembers = members
    .filter((member) => typeof member === "string")
    .map((member) => member[0])
    .sort()
    .join("");

  if (stringMembers.length === 0) {
    return false;
  }

  return stringMembers;
}

module.exports = {
  createDreamTeam,
};
