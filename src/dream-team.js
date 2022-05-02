const { NotImplementedError } = require('../extensions/index.js');

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
  let abbr = [];

  if((typeof(members) != 'object') || !!!members || !isNaN(members) || !((Object.keys(members))[0]<=1))
    return false;

  members.forEach(el => {
    if (!!!el || typeof(el) != 'string' || (el === null)) {
      return false;
    }
    else {
      el = el.replace(/\s/g, '');
      abbr.push(el[0].toUpperCase());
    }
  });

  return abbr.sort().join('');
}

module.exports = {
  createDreamTeam
};
