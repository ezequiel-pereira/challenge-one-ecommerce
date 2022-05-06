import { handleFiles } from "./handleFile.js";
import { validateInputs } from "./validate.js";
import { productService } from "./service/product.js";

const product = {};

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

validateInputs(addProductInputs, productSubmit);
validateInputs(contactInputs, submitButton);

productSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  addProductInputs.forEach((input) => {
    product[input.name] = input.value;
  });
  productService.create(product).then((response) => {
    console.log(response);
  }).catch(error => console.log(error));
});
