/* eslint-disable no-plusplus */
/* eslint linebreak-style: ["error", "windows"] */

function checkPrime(number) {
  if (number <= 1000) {
    if ((number === 0) || (number === 1)) {
      return 'Не причисляется ни к простым, ни к составным числам';
    }
    let temp;
    let isPrime = true;
    for (let i = 2; i <= number / 2; i++) {
      temp = number % i;
      if (temp === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return `Число ${number} - простое число`;
    }
    return `Число ${number} - составное число`;
  }
  return 'Данные неверны';
}

module.exports = checkPrime;
