const categories = document.querySelector('#categories')
const categoriesItems = categories.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

for (let elem of categoriesItems) {
    console.log(`Category: ${elem.firstElementChild.textContent}`)
    console.log(`Category: ${elem.lastElementChild.children.length}`)
}