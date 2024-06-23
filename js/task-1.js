const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Кількість категорій: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('ul > li');
  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryElements.length}`);
});
