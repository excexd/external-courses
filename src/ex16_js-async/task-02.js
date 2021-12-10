/* eslint-disable func-names */
function debounce(callback) {
  let timeout;

  return function (argument) {
    clearTimeout(timeout);
    timeout = setTimeout(callback, 1000, argument);
  };
}

function onInput(event) {
  const inputWrapper = event.target.parentNode;
  const oldRepeater = inputWrapper.querySelector('.input-repeater');

  if (oldRepeater) {
    inputWrapper.removeChild(oldRepeater);
  }

  const inputValue = event.target.value;
  const repeater = document.createElement('span');

  repeater.classList.add('input-repeater');
  repeater.innerText = inputValue;
  inputWrapper.appendChild(repeater);
}

const debouncedOnInput = debounce(onInput);

document.querySelector('.debounced').addEventListener('input', debouncedOnInput);
document.querySelector('.regular').addEventListener('input', onInput);
