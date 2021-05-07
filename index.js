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
      "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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

// Functions app

const createImgCat = (UrlImgCat) => {
  let divImgCat = document.createElement("div");
  let imgCat = document.createElement("img");

  imgCat.setAttribute("src", UrlImgCat);
  imgCat.setAttribute("id", "img-cat");

  divImgCat.classList.add("img-container");

  divImgCat.appendChild(imgCat);

  return divImgCat;
};

const createNameCat = (nameCat) => {
  let divNameCat = document.createElement("div");
  let tagNameCat = document.createElement("h1");
  let textNameCat = document.createTextNode(nameCat);

  divNameCat.classList.add("name-container");

  tagNameCat.appendChild(textNameCat);
  divNameCat.appendChild(tagNameCat);

  return divNameCat;
};

const createInputCat = () => {
  let divInputCat = document.createElement("div");
  let input = document.createElement("input");

  input.setAttribute("type", "text");
  input.setAttribute("value", 0);
  input.setAttribute("disabled", "");
  input.setAttribute("id", "input-cat");
  input.classList.add("input-cat");

  input.style.textAlign = "center";
  divInputCat.style.textAlign = "center";
  divInputCat.appendChild(input);

  return divInputCat;
};

const createDivImage = (urlImage, nameCat) => {
  //create containers
  let divContainerCard = document.createElement("div");

  divContainerCard.classList.add("container-card");

  divContainerCard.appendChild(createImgCat(urlImage));
  divContainerCard.appendChild(createNameCat(nameCat));
  divContainerCard.appendChild(createInputCat());

  return divContainerCard;
};

const createDivContainer = (urlImage, nameCat) => {
  let container = document.createElement("section");
  sw = true;
  container.appendChild(createDivImage(urlImage, nameCat));
  return container;
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

    containerCards.innerHTML = "";
    containerCards.append(textDefault);

    let cont1 = 0,
      cont2 = 0,
      cont3 = 0,
      cont4 = 0,
      cont5 = 0;

    btnCat1.addEventListener("click", () => {
      sw = true;
      containerCards.innerHTML = "";
      containerCards.append(createDivContainer(arrayCats.Cat1.img, "Sophi"));

      let image = document.getElementById("img-cat");
      let input = document.getElementById("input-cat");

      image.addEventListener("click", () => {
        localStorage.setItem("valueCat1", cont1++);
        let value = localStorage.getItem("valueCat1");

        input.value = value;
      });
    });

    btnCat2.addEventListener("click", () => {
      sw = true;
      containerCards.innerHTML = "";
      containerCards.append(createDivContainer(arrayCats.Cat2.img, "Raul"));
      let image = document.getElementById("img-cat");
      let input = document.getElementById("input-cat");

      image.addEventListener("click", () => {
        input.value = cont++;
      });
    });

    btnCat3.addEventListener("click", () => {
      let cont = 0;
      sw = true;
      containerCards.innerHTML = "";
      containerCards.append(createDivContainer(arrayCats.Cat3.img, "Esteban"));
      let image = document.getElementById("img-cat");
      let input = document.getElementById("input-cat");

      image.addEventListener("click", () => {
        input.value = cont++;
      });
    });

    btnCat4.addEventListener("click", () => {
      let cont = 0;
      sw = true;
      containerCards.innerHTML = "";
      containerCards.append(createDivContainer(arrayCats.Cat4.img, "Fernanda"));
      let image = document.getElementById("img-cat");
      let input = document.getElementById("input-cat");

      image.addEventListener("click", () => {
        input.value = cont++;
      });
    });

    btnCat5.addEventListener("click", () => {
      let cont = 0;
      sw = true;
      containerCards.innerHTML = "";
      containerCards.append(createDivContainer(arrayCats.Cat5.img, "Lucas"));
      let image = document.getElementById("img-cat");
      let input = document.getElementById("input-cat");

      image.addEventListener("click", () => {
        input.value = cont++;
      });
    });
  });
}

main();
