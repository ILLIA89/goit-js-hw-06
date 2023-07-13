const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsElUl = document.querySelector('ul#ingredients');
// const listItems = ingredients.map((ingredient) => {

//   const elementList = document.createElement('li');
//   elementList.textContent = ingredient;
//   elementList.classList.add('item');
//   return elementList;
  
// });

// ingredientsElUl.append(...listItems);



// Вибираємо список ul за його id
const ul = document.querySelector("#ingredients"); 
// Створюємо розмітку зі списком інгредієнтів
const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join("");
// Вставляємо розмітку у список ul
ul.insertAdjacentHTML("beforeend", markup); 
