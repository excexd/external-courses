function deleteFirstAndLastSpace(string) {
  let newString = string;
  if (string.indexOf(' ') !== -1) {
    newString = string.slice(0, string.indexOf(' ')) + string.slice(string.indexOf(' ') + 1, string.lastIndexOf(' ')) + string.slice(string.lastIndexOf(' ') + 1, string.length);
  }
  return newString;
}

module.exports = deleteFirstAndLastSpace;
