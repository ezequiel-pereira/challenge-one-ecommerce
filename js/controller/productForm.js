//import { handleFiles } from "./handleFile.js";
import { validateInputs } from "../validate.js";
import { productService } from "../service/product.js";

const product = {};

const url = new URL(window.location);
const id = url.searchParams.get("id");

if (id) {
  getProductData(id);
  product.id = id;
}

const addProductInputs = document.querySelectorAll("[product-form-input]");
const productSubmit = document.getElementById("product-submit");
const contactInputs = document.querySelectorAll("[contact-form-input]");
const submitButton = document.getElementById("contact-submit");
const dropZone = document.getElementById("drop-zone");
const addImgInput = document.getElementById("add-img-input");
const addImgButton = document.getElementById("add-img-button");

dropZone.addEventListener("dragover", dragOverHandler, false);
dropZone.addEventListener("drop", dropHandler, false);

function dropHandler(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}

function dragOverHandler(e) {
  e.preventDefault();
}

addImgButton.addEventListener(
  "click",
  function (e) {
    if (addImgInput) {
      addImgInput.click();
    }
    e.preventDefault();
  },
  false
);

function handleInput(e) {
  if (e.target.files) {
    handleFiles(e.target.files);
  } else {
    console.log("no files :(");
  }
}

addImgInput.addEventListener("change", handleInput, false);

function handleFiles(files) {
  const file = files[0];
  const preview = document.getElementById("preview");
  preview.style.display = "block";
  const img = document.getElementById("preview-img");

  const reader = new FileReader();
  reader.onload = (function (aImg) {
    return function (e) {
      aImg.src = e.target.result;
      product.img = e.target.result;
    };
  })(img);
  reader.readAsDataURL(file);
}

function getProductData(productId) {
  const id = productId;
  const img = document.getElementById("preview-img");
  const name = document.getElementById("product-name");
  const price = document.getElementById("product-price");
  const description = document.getElementById("description");

  productService.readById(id).then((product) => {
    img.src = product.img;
    img.parentElement.style.display = "block";
    name.value = product.name;
    price.value = product.price;
    description.value = product.description;
  });
}

validateInputs(addProductInputs, productSubmit);
validateInputs(contactInputs, submitButton);

productSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  product.img = document.getElementById("preview-img").src;
  product.name = document.getElementById("product-name").value;
  product.price = document.getElementById("product-price").value;
  product.description = document.getElementById("description").value;
  
  if (product.id) {
    productService
      .update(product)
      .then(() => {
        window.location.href = "/product-list.html";
      })
      .catch((error) => console.log(error));
  } else {
    productService
      .create(product)
      .then(() => {
        window.location.href = "/product-list.html";
      })
      .catch((error) => console.log(error));
  }
});
