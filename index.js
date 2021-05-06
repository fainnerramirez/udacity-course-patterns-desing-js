const containerCards = document.getElementById("container-cards");
let sw = false;
const arrayCats = {
  Cat1: {
    id: 0,
    name: "Sophi Cat",
    img:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },

  Cat2: {
    id: 1,
    name: "Raul Cat",
    img:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },

  Cat3: {
    id: 2,
    name: "Esteban Cat",
    img:
      "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },

  Cat4: {
    id: 3,
    name: "Fernanda Cat",
    img:
      "https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },

  Cat5: {
    id: 4,
    name: "Lucas Cat",
    img:
      "https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
};

//console.log(arrayCats.Cat1.img);

// Functions app

const createImgCat = (UrlImgCat) => {
  let divImgCat = document.createElement("div");
  let imgCat = document.createElement("img");
  imgCat.setAttribute("src", UrlImgCat);
  imgCat.setAttribute("id", "img-cat");
  divImgCat.appendChild(imgCat);

  return divImgCat;
};

const createNameCat = (nameCat) => {
  let tagNameCat = document.createElement("h1");
  let textNameCat = document.createTextNode(nameCat);
  tagNameCat.appendChild(textNameCat);
  return tagNameCat;
};

const createInputCat = () => {
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", "0");
  input.setAttribute("disabled", "");
  input.setAttribute("id", "input-cat");
  input.style.textAlign = "center";
  return input;
};

const createDivImage = (urlImage, nameCat) => {
  //create containers
  let divContainerCard = document.createElement("div");
  let divImgCat = document.createElement("div");
  let divNameCat = document.createElement("div");
  let divInputCat = document.createElement("div");

  divContainerCard.classList.add("container-card");
  divImgCat.classList.add("img-container");
  divNameCat.classList.add("name-container");
  divInputCat.classList.add("input-container");
  divInputCat.setAttribute("id", "input-cat");
  divInputCat.style.textAlign = "center";

  divImgCat.appendChild(createImgCat(urlImage));
  divNameCat.appendChild(createNameCat(nameCat));
  divInputCat.appendChild(createInputCat());

  divContainerCard.appendChild(divImgCat);
  divContainerCard.appendChild(divNameCat);
  divContainerCard.appendChild(divInputCat);

  sw = true;

  return divContainerCard;
};

const createDivContainer = (urlImage, nameCat) => {
  let containerImage = document.createElement("div");
  containerImage.appendChild(createDivImage(urlImage, nameCat));
  return containerImage;
};

function main() {
  document.addEventListener("DOMContentLoaded", () => {
    const btnCat1 = document.getElementById("cat1");
    const btnCat2 = document.getElementById("cat2");
    const btnCat3 = document.getElementById("cat3");
    const btnCat4 = document.getElementById("cat4");
    const btnCat5 = document.getElementById("cat5");

    let textDefault = document.createElement("h2");
    let nodeText = document.createTextNode("Select a cat and have fun!");
    textDefault.append(nodeText);

    sw = true;

    if (sw) {
      containerCards.append(
        createDivContainer(arrayCats.Cat1.img, arrayCats.Cat1.name)
      );
    } else {
      containerCards.innerHTML = "";
      containerCards.append(textDefault);
    }
  });
}

main();
