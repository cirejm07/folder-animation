document.addEventListener("DOMContentLoaded", function () {
  n = new Date();
  y = n.getFullYear();
  document.querySelector("#date").innerHTML = y;

  const fetchImages = () => {
    const images = ["1", "2", "3"];

    images.forEach((image) => {
      // Get the card parent element
      const card = document.querySelector("#card");
      // Create a card item and add a class to the card
      const cardItem = document.createElement("div");
      cardItem.classList.add("card-item");
      //Create an image element, set an attribute and get images in each loop
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", `./assets/${image}.jpg`);
      // append the cardItem to card
      card.appendChild(cardItem);
      // append the imgElement to cardItem
      cardItem.appendChild(imgElement);
    });
  };

  const initApp = () => {
    fetchImages();
  };

  initApp();
});
