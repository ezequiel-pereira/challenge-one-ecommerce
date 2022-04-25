import { validateInputs } from "./validate.js";

const loginInputs = document.querySelectorAll("[login-form-input]");
const loginSubmit = document.getElementById("login-submit");
const contactInputs = document.querySelectorAll("[contact-form-input]");
const submitButton = document.getElementById("contact-submit");

validateInputs(loginInputs, loginSubmit);

validateInputs(contactInputs, submitButton);
