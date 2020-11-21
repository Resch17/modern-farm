export const Catalog = (foodArray) => {
  const htmlContainer = document.querySelector(".container");

  foodArray.forEach(item => {
    htmlContainer.innerHTML += `<section class="plant ${item.type}"><img src="/./images/${item.type}.png"><p>${item.type}</p></section>`;
  })
};