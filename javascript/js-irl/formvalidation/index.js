const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

const zipCode = document.getElementById("zipcode");
const zipCodeError = document.querySelector("#zipcode + span.error");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

const confirmPassword = document.getElementById("password-confirm");
const confirmPasswordError = document.querySelector(
  "#password-confirm + span.error"
);

email.addEventListener("input", () =>
  validateField(email, emailError, "email")
);
country.addEventListener("input", () =>
  validateField(country, countryError, "country")
);
zipCode.addEventListener("input", () =>
  validateField(zipCode, zipCodeError, "zipcode")
);
password.addEventListener("input", () =>
  validateField(password, passwordError, "password")
);
confirmPassword.addEventListener("input", () =>
  validateField(confirmPassword, confirmPasswordError, "confirm-password")
);

function isCapitalized(input) {
  return /^[A-Z]/.test(input);
}

function isValidZipCodeFormat(input) {
  return /^\d{2}-\d{3}$/.test(input);
}

function hasCapitalAndNumber(input) {
  return /[A-Z]/.test(input) && /\d/.test(input);
}

function arePasswordsMatching(password, confirmPassword) {
  return password === confirmPassword;
}

form.addEventListener("submit", (event) => {
  let isValid = true;

  if (!validateField(email, emailError, "email")) {
    isValid = false;
  }

  if (!validateField(country, countryError, "country")) {
    isValid = false;
  }

  if (!validateField(zipCode, zipCodeError, "zipcode")) {
    isValid = false;
  }

  if (!validateField(password, passwordError, "password")) {
    isValid = false;
  }

  if (
    !validateField(confirmPassword, confirmPasswordError, "confirm-password")
  ) {
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});

function validateField(input, errorElement, typeOfField) {
  var isValid = true;
  if (input.validity.valueMissing) {
    errorElement.textContent = "This field is required.";
    isValid = false;
  } else if (typeOfField === "email" && input.validity.typeMismatch) {
    errorElement.textContent = "Entered value needs to be an email address.";
    isValid = false;
  } else if (typeOfField === "country" && !isCapitalized(input.value)) {
    errorElement.textContent =
      "Country name should start with a capital letter.";
    isValid = false;
  } else if (typeOfField === "zipcode" && !isValidZipCodeFormat(input.value)) {
    errorElement.textContent = "Zip code should be in the format xx-xxx.";
    isValid = false;
  } else if (typeOfField === "password" && !hasCapitalAndNumber(input.value)) {
    errorElement.textContent =
      "Password should contain a capital letter and a number.";
    isValid = false;
  } else if (
    typeOfField === "confirm-password" &&
    !arePasswordsMatching(password.value, confirmPassword.value)
  ) {
    errorElement.textContent = "Passwords do not match.";
    isValid = false;
  }

  if (!isValid) {
    errorElement.className = "error active";
    return false;
  } else {
    if (input.validity.valid) {
      clearError(errorElement);
      return true;
    }
  }
}

function clearError(errorElement) {
  errorElement.textContent = "";
  errorElement.className = "error";
}
