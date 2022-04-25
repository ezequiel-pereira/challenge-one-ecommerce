export function validateInputs(inputs, submit) {
  inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
      validate(input.target, submit, inputs);
    });
  });
}

function validate(input, submit, inputs) {
  const inputName = input.name;

  checkAllValuesValid(inputs, submit);

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-invalid");
    input.parentElement.querySelector(".input-error-message").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-invalid");
    input.parentElement.querySelector(".input-error-message").innerHTML =
      getErrorMessage(inputName, input);
  }
}

function checkAllValuesValid(inputs, submit) {
  let validInputs = 0;
  inputs.forEach((input) => {
    if (input.validity.valid) {
      validInputs++;
    }

    if (validInputs === inputs.length) {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  });
}

function getErrorMessage(inputName, input) {
  let message = "";
  validityStates.forEach((error) => {
    if (input.validity[error]) {
      message = erroMessages[inputName][error];
    }
  });
  return message;
}

const validityStates = [
  "patternMismatch",
  "tooLong",
  "tooShort",
  "typeMismatch",
  "valueMissing",
];

const erroMessages = {
  name: {
    patternMismatch: "El nombre debe tener almenos 2 caracteres alfabéticos",
    tooShort: "El nombre debe tener al menos 2 caracteres",
    valueMissing: "El nombre no puede estar vacío",
  },
  email: {
    typeMismatch: "Ingrese un email válido",
    valueMissing: "El email no puede estar vacío",
  },
  subject: {
    patternMismatch: "El asunto no puede estar vacío",
    tooShort: "El asunto debe tener al menos 2 caracteres",
    valueMissing: "El asunto no puede estar vacío",
  },
  message: {
    tooShort: "El mensaje debe tener al menos 2 caracteres",
    valueMissing: "El mensaje no puede estar vacío",
  },
  password: {
    patternMismatch: "La contraseña debe tener almenos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula",
    tooShort: "La contraseña debe tener al menos 6 caracteres",
    valueMissing: "La contraseña no puede estar vacía",
  },
  productName: {
    patternMismatch: "El nombre del producto debe tener almenos 2 caracteres alfabéticos",
    tooShort: "El nombre debe tener al menos 2 caracteres",
    valueMissing: "El nombre delproducto no puede estar vacío",
  },
  price: {
    patternMismatch: "Ingrese solo números",
    tooShort: "El nombre debe tener al menos 2 caracteres",
    valueMissing: "El precio no puede estar vacío",
  },
  description: {
    patternMismatch: "El nombre debe tener almenos 2 caracteres alfabéticos",
    tooShort: "El nombre debe tener al menos 2 caracteres",
    valueMissing: "La descripción no puede estar vacía",
  },
};
