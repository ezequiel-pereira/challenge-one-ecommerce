const getProducts = () => {
  return fetch("http://localhost:3000/products").then((response) => {
    return response.json();
  });
};

export { getProducts };
