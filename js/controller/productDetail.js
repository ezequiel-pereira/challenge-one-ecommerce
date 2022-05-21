import { productService } from "../service/product.js";

let product = {};

const url = new URL(window.location);
const id = url.searchParams.get("id");

if (id) {
  product = await getProductData(id);
  renderProduct(product);
}

function renderProduct({ id, img, name, price, description }) {
  const productContent = document.querySelector(".product-content");
  const productHtml = `
  <img class="product-img" src="${img}" alt=${name}>
  <div class="product-details">
    <h2 class="product-title">${name}</h2>
    <p class="product-price">${price}</p>
    <p class="product-description">${description}</p>
    <p class="product-description">${id}</p>
  </div>`;
  productContent.innerHTML = productHtml;
}

function getProductData(id) {
  return productService.readById(id);
}
