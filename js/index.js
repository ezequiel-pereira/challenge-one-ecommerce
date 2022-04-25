import { validateInputs } from "./validate.js";

const contactInputs = document.querySelectorAll("[contact-form-input]");
const submitButton = document.getElementById("contact-submit");

validateInputs(contactInputs, submitButton);
