// 1. Спочатку я отримую посилання на елемент
// validation-input
// 2. Потім додаю слухача подій blure на елемент validation-input
//  подія спрацьовує тоді коли елемент втрачає фокус
// 3. У функції події отримую довжину введеного значення
// та потрібну кількість символів з атрибута data-length.
// 4. Потім за допомогою методу classList.toggle() буде змінюватись
// класс з кольором на інпуті в залежності від виконання поставленої умови,
// таким чином ми доб"ємось поставленого результату. 

const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', () => {
    const inputLength = validationInput.value.length;
    const neededLength = Number(validationInput.dataset.length);
    validationInput.classList.toggle('valid', inputLength === neededLength);
    validationInput.classList.toggle('invalid', inputLength !== neededLength);
});

