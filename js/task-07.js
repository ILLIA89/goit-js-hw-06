// 1. Спочатку  отримую посилання на елементи input#font-size-control
//  і span#text щоб мати можливість з ними взаємодіяти
// 2. Встановлюю слухача подій "input" на повзунок.
// 3. Коли повзунок починає рухатись обробник події викликається і
// за допомогою style.fontSize змінює розмір #text.

const fontSizeActive = document.getElementById('font-size-control');
const elementText = document.getElementById('text');
fontSizeActive.addEventListener('input', () => {
    const fontSize = fontSizeActive.value + 'px';
    elementText.style.fontSize = fontSize;
});