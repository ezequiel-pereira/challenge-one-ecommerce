import { validateInputs } from "./validate.js";

const addProductInputs = document.querySelectorAll('[product-form-input]');
const productSubmit = document.getElementById("product-submit");
const contactInputs = document.querySelectorAll("[contact-form-input]");
const submitButton = document.getElementById("contact-submit");

validateInputs(addProductInputs, productSubmit);

validateInputs(contactInputs, submitButton)