const URL = "https://json-server-alura.herokuapp.com/products";

const create = (product) => {
  product.id = uuid.v4();
  console.log(product);
  return fetch(URL, {
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
  return fetch(URL).then((response) => {
    return response.json();
  });
};

const deleteById = (id) => {
  return fetch(`${URL}/${id}`, {
    method: "DELETE"
  }).then((response) => {
    return response.json();
  });
}

export const productService = { create, read, deleteById };
