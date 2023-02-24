const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.map(ingredient => {
  const listItem = document.createElement("li"); 
  listItem.textContent = ingredient; 
  listItem.classList.add("item"); 
  ingredientsList.appendChild(listItem); 
});


// const listItem = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join(" ");
// ingredientsList.innerHTML = listItem;
  
