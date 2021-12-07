/* eslint-disable no-constant-condition */
/* eslint-disable no-extend-native */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

function Hangman(word) {
  this.registerError = function (letter) {
    this.wrongSymbols.push(letter);
    this.errorsCount--;
    if (this.errorsCount >= 0) {
      console.log(`wrong letter, errors left ${this.errorsCount} | ${this.wrongSymbols}`);
    } else {
      console.log('you lose');
    }
  };

  this.checkWin = function () {
    if (this.guessedString.indexOf('_') === -1) {
      console.log('you won!');
    }
  };

  this.addGuessedLetter = function (letter) {
    let letterPosition = 0;
    while (true) {
      const foundPosition = this.word.indexOf(letter, letterPosition);
      if (foundPosition === -1) { break; }
      this.guessedString = this.guessedString.replaceAt(foundPosition, letter);
      letterPosition = foundPosition + 1;
    }
    console.log(`${this.guessedString}`);
    this.checkWin();
  };

  this.guess = function (letter) {
    if (this.word.indexOf(letter) !== -1) {
      this.addGuessedLetter(letter);
    } else {
      this.registerError(letter);
    }
    return this;
  };

  this.getGuessedString = function () {
    console.log(this.guessedString);
    return this;
  };

  this.getErrorsLeft = function () {
    console.log(this.errorsCount);
    return this;
  };

  this.getWrongSymbols = function () {
    console.log(this.wrongSymbols);
    return this;
  };

  this.getStatus = function () {
    console.log(`${this.getGuessedString()} | ${this.getErrorsLeft()}`);
    return this;
  };

  this.startAgain = function (word) {
    this.word = word.toLowerCase();
    this.wrongSymbols = [];
    this.errorsCount = 6;
    this.guessedString = '_'.repeat(word.length);
    return this;
  };

  this.startAgain(word);
}

module.exports = new Hangman();
