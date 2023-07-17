

const itemsEl = document.querySelectorAll('li.item');

let categoryNumbers = 0;

itemsEl.forEach(function (itemEL) {
    categoryNumbers++
});

console.log(`Number of categories: ${categoryNumbers}`);

const categoriesList = document.querySelector('ul#categories');
const categoryItems = Array.from(categoriesList.children);

categoryItems.forEach(function (item) {
    const category = item.firstElementChild.textContent;
    const amountElement = item.lastElementChild.children.length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${amountElement}`);

});