import { validateInputs } from "./validate.js";

const contactInputs = document.querySelectorAll("[contact-form-input]");
const submitButton = document.getElementById("contact-submit");

validateInputs(contactInputs, submitButton);

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");

searchButton.addEventListener("click", search);
searchBar.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  const keyword = searchInput.value.toLowerCase();
  window.location.href = `/product-list.html?keyword=${keyword}`;
}
