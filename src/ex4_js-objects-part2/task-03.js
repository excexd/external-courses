function deleteFirstAndLastSpace(string) {
  let newString = string;

  if (string.indexOf(' ') !== -1) {
    const firstSpace = string.indexOf(' ');
    const lastSpace = string.lastIndexOf(' ');

    newString = string.slice(0, firstSpace)
      + string.slice(firstSpace + 1, lastSpace)
      + string.slice(lastSpace + 1, string.length);
  }

  return newString;
}

module.exports = deleteFirstAndLastSpace;
