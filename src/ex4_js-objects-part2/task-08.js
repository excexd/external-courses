function firstLetterToLowerCase(string) {
  if (!string) return string;
  return string[0].toLowerCase() + string.slice(1);
}

function toCamelCase(string) {
  const tempString = string.split(' ').map((word) => {
    if (!word) return word;
    return word[0].toUpperCase() + word.toLowerCase().slice(1);
  }).join('');
  return firstLetterToLowerCase(tempString);
}

module.exports = toCamelCase;
