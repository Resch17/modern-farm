export const Catalog = (foodArray) => {
  const htmlContainer = document.querySelector(".container");

  for (const item of foodArray) {
    htmlContainer.innerHTML += `<section class="plant"><p>${item.type}</p></section>`;
  }
};