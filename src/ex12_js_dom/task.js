/* eslint-disable no-var */
/* eslint-disable no-plusplus */

const array = [
  'assets/1.jpg',
  'assets/2.jpg',
  'assets/3.jpg',
  'assets/4.jpg',
  'assets/5.jpg',
];
const sliderItem = document.getElementById('slider-item');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');
let currentItem = +sliderItem.getAttribute('data-current-item');

sliderItem.innerHTML = '<img src=\'assets/1.jpg\'/>';

nextButton.addEventListener('click', () => {
  currentItem++;
  if (currentItem >= array.length) {
    currentItem = 0;
  }

  sliderItem.setAttribute('data-current-item', currentItem);
  sliderItem.innerHTML = `<img  src='${array[currentItem]}'/>`;
});

backButton.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = array.length - 1;
  }

  sliderItem.setAttribute('data-current-item', currentItem);
  sliderItem.innerHTML = `<img src='${array[currentItem]}'/>`;
});
