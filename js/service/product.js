const http = new XMLHttpRequest();

const getProducts = () => {
  const promise = new Promise((resolve, reject) => {
    http.open("GET", "http://localhost:3000/products");
    http.send();
    http.onload = () => {
      const response = JSON.parse(http.response);
      if (http.status >= 400) {
        reject(response);
      } else {
        resolve(response);
      }
    };
  });
  return promise;
};

getProducts()
  .then((data) => {
    data.forEach((element) => {
      console.log(element);
    });
  })
  .catch((e) => {
    console.log("shit");
  });
