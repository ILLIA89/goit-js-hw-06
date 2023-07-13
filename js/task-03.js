const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//Отримуємо посилання на ul елемент з класом gallery:

const gallery = document.querySelector('ul.gallery');

// Створюємо розмітку галереї перебираючим методом map який перетворить масив images
// на масив listGallery використовуючи шаблонні рядки і методом join() -
//  об'єднуємо елементи масиву у рядок

const listGallery = images.map(image => `<li><img src="${image.url}" alt="${image.alt}"></li>`).join("");

// далі додаємо створені елементи в HTML розмітку

gallery.insertAdjacentHTML("beforeend", listGallery);