const menuItemsByTagName = document.querySelectorAll(".item");
console.log("Number of categories: " + menuItemsByTagName.length);
const selectHeader = document.querySelectorAll("h2");
for (let i=0; i<=selectHeader.length - 1; i++) {
    console.log("Categories: " + selectHeader[i].innerHTML)
    const selectHeaderHTML = menuItemsByTagName[i].querySelectorAll("ul");
    const selectListHTML = selectHeaderHTML[0].querySelectorAll('li');
    const listLength = selectListHTML.length;
    console.log("Elements: " + listLength)
}

