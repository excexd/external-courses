function insertSubstringIntoString(string1, string2, placeNumber) {
  const words = string1.split(' ');
  words.splice(placeNumber + 1, 0, string2);
  return words.join(' ');
}

module.exports = insertSubstringIntoString;
