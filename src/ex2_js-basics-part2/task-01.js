/* eslint linebreak-style: ["error", "windows"] */

function getTypeOfNumberOrString(argument) {
  if (
    !Number.isNaN(argument)
    && (typeof argument === 'number' || typeof argument === 'string')
  ) {
    return typeof argument;
  }
  return undefined;
}

module.exports = getTypeOfNumberOrString;
