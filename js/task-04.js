//спочатку отримую посилання на елементи,
// такі як #value для відображення поточного значення лічильника та
// та до кнопок збільшення і зменшення значення лічильника.

const counterPosition = document.querySelector('#value');
const increaseBtn = document.querySelector('[data-action="increment"]');
const reductionBtn = document.querySelector('[data-action="decrement"]');

// створюю та ініціалізую змінну counterValue
let counterValue = 0;

// додаю слухача подій і активую лічильник

increaseBtn.addEventListener('click', () => {
    counterValue += 1;
    counterPosition.textContent = counterValue;
});

reductionBtn.addEventListener('click', () => {
    counterValue -= 1;
    counterPosition.textContent = counterValue;
});