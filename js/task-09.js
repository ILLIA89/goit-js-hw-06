

// 1. Спочатку за допомогою querySelector отримую посилання до елементів 
// (".widget", ".color", ".change-color").
// 2. Потім додаю слухача події 'click' на кнопку 'button.change-color'
// 3. Далі в функції за допомогою const свторюю посилання на getRandomHexColor()
// 4. Потім  style.backgroundColor присвоюю функцію getRandomHexColor
// яка буде змінювати рандомно колір елемента body.
// 5. І в spanColor за допомогою textContent
//  виводжу назву кольору який генерується.

const divWidget = document.querySelector('.widget');
const spanColor = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');

buttonChangeColor.addEventListener('click',() => {
  const magicColor = getRandomHexColor();
  document.body.style.backgroundColor = magicColor;
  spanColor.textContent = magicColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




