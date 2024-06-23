const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', (event) => {
  const inputValue = event.target.value.trim();

  if (inputValue) {
    outputElement.textContent = inputValue;
  } else {
    outputElement.textContent = 'Anonymous';
  }
});
