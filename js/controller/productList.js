import { productService } from "../service/product.js";

const url = new URL(window.location);
const keyword = url.searchParams.get("keyword");
const productsList = document.getElementById("products-list");

let products = await productService.read();

if (keyword) {
  products = search(keyword);
  renderProducts();
} else {
  renderProducts();
}

function renderProducts() {
  products.forEach((element) => {
    const newProduct = buildProductHtml(element);
    productsList.appendChild(newProduct);
  });
}

function buildProductHtml({ img, name, price, id }) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("item");
  const content = `
    <div class="admin">
      <button class="button" id="${id}" delete-button>
        <span class="icon delete-button"></span>
      </button>
      <button class="button" id="${id}" edit-button>
        <span class="icon edit-button"></span>
      </button>
    </div>
    <img class="item-img" src="${img}" alt="${name}">
    <h3 class="item-title">${name}</h3>
    <p class="item-price">${price}</p>
    <button class="item-button" id="${id}">Ver producto</button>`;

  productDiv.innerHTML = content;

  const deleteButton = productDiv.querySelector("[delete-button]");

  deleteButton.addEventListener("click", () => {
    const id = deleteButton.id;
    productService
      .deleteById(id)
      .then(() => {
        location.reload();
      })
      .catch((error) => consolerror.log(error));
  });

  const editButton = productDiv.querySelector("[edit-button]");

  editButton.addEventListener("click", () => {
    const id = editButton.id;
    window.location.href = `/product-form.html?id=${id}`;
  });

  return productDiv;
};

function search(keyword) {
  const result = [];

  products.forEach(product => {
    const name = product.name.toLowerCase();
    const description = product.description.toLowerCase();
    if (name.includes(keyword) || description.includes(keyword)) {
      result.push(product);
    }
  });
  return result;
}
