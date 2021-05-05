// image cat #1
const nameDivCat = document.getElementById("name-cat");
const imageCat = document.getElementById("image-cat");
const inputImage = document.getElementById("input-image");
//creando el nodo h1
let nameCat = document.createElement("h1");
let text = document.createTextNode("Richard Cat");
nameCat.appendChild(text);
let contClick = 0;

//image cat #2
const nameDivCat2 = document.getElementById("name-cat-2");
const imageCat2 = document.getElementById("image-cat-2");
const inputImage2 = document.getElementById("input-image-2");
//creando el nodo h2
let nameCat2 = document.createElement("h1");
let text2 = document.createTextNode("Sofia Cat 2");
nameCat2.appendChild(text2);
let contClick2 = 0;

//value por default input
inputImage.setAttribute("value", contClick);
inputImage2.setAttribute("value", contClick2);

document.addEventListener("DOMContentLoaded", () => {
  nameDivCat.appendChild(nameCat);
  nameDivCat2.appendChild(nameCat2);
});

imageCat.addEventListener("click", () => {
  inputImage.setAttribute("value", ++contClick);
});

imageCat2.addEventListener("click", () => {
  inputImage2.setAttribute("value", ++contClick2);
});
