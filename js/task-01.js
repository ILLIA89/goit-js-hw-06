

const itemsEl = document.querySelectorAll('li.item');

let categoryNumbers = 0;

itemsEl.forEach(function (itemEL) {
    categoryNumbers++
});

console.log(`Number of categories: ${categoryNumbers}`);

const categoriesList = document.querySelector('ul#categories');
const categoryItems = document.querySelectorAll('li.item');

categoryItems.forEach(function (item) {
    const category = item.querySelector('h2').textContent;
    const amountElement = item.querySelectorAll('li').length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${amountElement}`);

});
