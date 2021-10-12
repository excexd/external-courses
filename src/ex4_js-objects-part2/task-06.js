function capitalize(string) {
  const tempString = string.split(' ').map((word) => {
    if (!word) return word;
    return word[0].toUpperCase() + word.slice(1);
  });
  return tempString.join(' ');
}

module.exports = capitalize;
