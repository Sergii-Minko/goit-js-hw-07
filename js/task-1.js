const categories = document.querySelectorAll('li.item');

function numberOfCategories() {
  const categoryCount = categories.length;
  console.log(`Number of categories: ${categoryCount}`);
}
numberOfCategories();

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
