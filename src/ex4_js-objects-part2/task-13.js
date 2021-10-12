function randomInteger() {
  const min = 0;
  const max = 100;
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

module.exports = randomInteger;
