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
const selectHeader = document.querySelector("ul")
for (let i=0; i <= images.length -1; i++) {
  let imagesList = document.createElement('li');
  document.body.appendChild(imagesList);
  let image = document.createElement("img");
  image.src = images[i].url;
  image.alt = images[i].alt;
 image.setAttribute('height', '250');
 image.setAttribute('width', '400');
 imagesList.insertAdjacentHTML("afterbegin", `${image.alt}`)
  document.body.appendChild(image);
 
};
