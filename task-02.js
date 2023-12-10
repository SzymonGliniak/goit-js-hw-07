const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//const aaa = ingredients.length;
for (let i=0; i<=ingredients.length -1; i++) {
let ingredientsList = document.createElement('li');
ingredientsList.textContent = ingredients[i];
ingredientsList.classList.add("item");
const selectHeader = document.querySelector("ul");
selectHeader.appendChild(ingredientsList);
}