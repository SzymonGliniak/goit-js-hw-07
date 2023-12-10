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
const selectHeader = document.querySelector("ul");
const a = "<img src=";
const b = ">"

const html = images.map(image => `<li>${image.alt}: ${a + image.url + b}</li>`).join("");
selectHeader.insertAdjacentHTML("beforeend", html);
console.log(html);


//for (let i=0; i <= images.length -1; i++) {
  //let imagesList = document.createElement('li');
  //selectHeader.appendChild(imagesList);
  //let imageS = document.createElement("img");
  //imageS.src = images[i].url;
  //imageS.alt = images[i].alt;
 //imageS.setAttribute('height', '250');
 //imageS.setAttribute('width', '400');
 //imagesList.insertAdjacentHTML("afterbegin", `${image.alt}`)
  //selectList.appendChild(image);
  //const html = images.map(img => `<li>${images.alt}</li>`).join("");
//selectHeader.insertAdjacentHTML("beforeend", html);
 
//};