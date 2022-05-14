const API_URL = "https://json-server-alura.herokuapp.com/products/";

const create = (product) => {
  product.id = uuid.v4();

  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((response) => {
    return response.json();
  });
};

const read = () => {
  return fetch(API_URL).then((response) => {
    return response.json();
  });
};

const readById = (id) => {
  return fetch(`${API_URL}${id}`, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};

const update = (product) => {
  return fetch(API_URL+product.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((response) => {
    return response.json();
  });
};

const deleteById = (id) => {
  return fetch(`${API_URL}${id}`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
};

export const productService = { create, read, readById, update, deleteById };
