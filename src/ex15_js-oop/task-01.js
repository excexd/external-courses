/* eslint-disable func-names */
/* eslint-disable consistent-return */
function Sweet(firm, name, weight) {
  this.firm = firm;
  this.name = name;
  this.weight = weight;
}

function Candy(firm, name, weight, filling) {
  Sweet.call(this, firm, name, weight);
  this.filling = filling;
}

Candy.prototype = Object.create(Sweet.prototype);
Candy.prototype.constructor = Candy;

function ChocolateBar(firm, name, weight, filling, chocolateType) {
  Candy.call(this, firm, name, weight, filling);
  this.chocolateType = chocolateType;
}

ChocolateBar.prototype = Object.create(Candy.prototype);
ChocolateBar.prototype.constructor = ChocolateBar;

const snickers = new ChocolateBar('Mars', 'Snickers', 0.05, ['nougat', 'peanuts'], 'milk chocolate');
const nuts = new ChocolateBar('Nestle', 'Nuts', 0.05, ['nougat', 'caramel', 'hazelnut'], 'milk chocolate');
const bounty = new ChocolateBar('Mars', 'Bounty', 0.055, ['nougat', 'peanuts'], 'milk chocolate');
const picnic = new ChocolateBar('Mondelez International', 'Picnic', 0.052, ['peanuts', 'walnut'], 'milk chocolate');
const kitKatDark = new ChocolateBar('Nestle', 'KitKat Dark Chocolate', 0.17, ['waffle'], 'dark chocolate');
const skittlesFruits = new Candy('Mars', 'Skittles Fruits', 0.038, ['dragee']);
const fruittella = new Candy('Perfetti Van Melle', 'Fruittella', 0.041, ['fruit juice']);
const mentos = new Candy('Perfetti Van Melle', 'Mentos', 0.038, ['dragee']);
const newYearGift = [snickers, nuts, bounty, picnic,
  kitKatDark, skittlesFruits, fruittella, mentos];

Sweet.calcWeight = function (array) {
  let weight = 0;

  array.forEach((element) => {
    weight += element.weight;
  });

  return weight;
};

Sweet.compareSweets = function (parameter) {
  return (a, b) => (a[parameter] > b[parameter] ? 1 : -1);
};

Sweet.searchByName = function (array, searchName) {
  const searchResult = [];

  array.forEach((element) => {
    if (element.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1) {
      searchResult.push(element);
    }
  });

  return searchResult;
};

Sweet.getNamesOfElements = function (array) {
  const names = [];

  array.forEach((element) => {
    names.push(element.name);
  });

  return names;
};

console.log(`Собранный новогодний подарок: ${Sweet.getNamesOfElements(newYearGift)}`);
console.log(`Вес подарка: ${Sweet.calcWeight(newYearGift)}`);
console.log('Новогодний подарок, отсортированный по названию:');
const sortedArray = newYearGift.sort(Sweet.compareSweets('name'));

console.log(Sweet.getNamesOfElements(sortedArray));

const searchRequest = 'it';
const searchResult = Sweet.searchByName(newYearGift, searchRequest);

console.log(`Поиск подарков по запросу ${searchRequest}`);
console.log(Sweet.getNamesOfElements(searchResult));
