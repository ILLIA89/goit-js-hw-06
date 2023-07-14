//  Спочатку отримуємо доступ до "name-input" і  "name-output":

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Потім  додаю слухача події 'input' до nameInput
// У функції я оновлюю nameOutput через textContent. 
// Далі значення в інпуті присвоюється
//  властивості textContent спану nameOutput.
// Якщо значення інпуту буде пустим тоді в спані буде Anonymous.
nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value || 'Anonymous';
});
