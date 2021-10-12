/* eslint-disable no-plusplus */
function logSymbolCount(string) {
  const obj = {};
  let key;
  for (let i = 0; i < string.length; i++) {
    key = string[i];
    if (obj[key]) {
      obj[key]++;
    } else {
      obj[key] = 1;
    }
  }
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i], obj[keys[i]]);
  }
}

module.exports = logSymbolCount;
