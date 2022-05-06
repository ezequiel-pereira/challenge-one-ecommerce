import { productService } from "../service/product.js";

const products = document.getElementById("products-list");

const renderProduct = (product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("item");
  const content = `
    <img class="item-img" src="${product.img}" alt="${product.description}">
    <h3 class="item-title">${product.name}</h3>
    <p class="item-price">${product.price}</p>
    <button class="item-button">Ver producto</button>`;
  productDiv.innerHTML = content;
  return productDiv;
};

productService.read()
  .then((data) => {
    data.forEach((element) => {
      const newProduct = renderProduct(element);
      products.appendChild(newProduct);
    });
  })
  .catch((e) => {
    console.log(e);
  });
