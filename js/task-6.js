function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controls = document.querySelector('#controls');
const inputElement = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = parseInt(inputElement.value, 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  createBoxes(amount);
  inputElement.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  const initialSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = initialSize + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.textContent = `${size}x${size}`;
    boxes.push(box);
  }

  boxesContainer.innerHTML = '';
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
