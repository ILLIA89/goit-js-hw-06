// 1. Спочатку отримую посилання на форму  login-form.
// 2. Потім за допомогою querySelector я отримую посилання на елементи 
// інпуту пошти і пароля а також на кнопку відправки форми 

// 3. Потім  додаю до форми слухача події 'submit' 
// 4. Далі створюю функцію обробника події handleSubmit (колбек функція)
// ----- Дії які відбуваються в функції handleSubmit:

// 1. Скасовую дію, перезавантаження сторінки, яка стоїть
//  по замовчуваню в браузері за допомогою element та
//  методу preventDefault().
// 2. Створюю константи і отримую значення еmail i пароля з полів інпуту за допомогою value
// а потім викликаючи trim() видаляю зайві пробіли.
//
// 3.за допомогою умовного оператора виконуємо валідацію форми
//  якщо хочаб одне поле порожнє викликаємо alert.
// 4. У випадку коли данні введені вірно створюється об'єкт formDataObject
//  в якому ключі це імена інпуту тобто mail або password а значення ключів
// це введені данні користувача
// 5.потім об'єкт formDataObject виводимо в консоль
// 6. далі за допомогою reset() очищаємо форму.

const form = document.querySelector('.login-form');
const emailForm = form.querySelector('input[name="email"]');
const passwordForm = form.querySelector('input[name="password"]');
const btnSubmit = form.querySelector('button[type="submit"]');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();

    const emailValue = emailForm.value.trim();
    const passwordValue = passwordForm.value.trim();

    if (emailForm === '' || passwordForm === '') {
        alert(`Пусті поля не допустимі`);
        return;
    }
    const formDataObject = {
        email: emailValue,
        password: passwordValue,
    }

    console.log(formDataObject);

    form.reset()

}
