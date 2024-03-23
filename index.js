/** @format */

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector(".btn");
let emailError = document.querySelector(".input-distn-email");
let passwordError = document.querySelector(".error-password-content");

let loginInfo = {
  email: "hhuseyn@gmail.com",
  password: "h1234567",
};

let emailValidation = (emailInput) => {
  emailError.classList.remove("error-content");
  emailError.classList.remove("successfully-content");
  email.classList.remove("error-border");
  email.classList.remove("successfully-border");
  emailError.innerHTML = "";
  if (emailInput.value !== loginInfo.email) {
    email.classList.add("error-border");
    emailError.classList.add("error-content");
    emailError.innerHTML = "Email length can't be less 5 simvol";
    return;
  }
  email.classList.add("successfully-border");
  emailError.classList.add("successfully-content");
  emailError.innerHTML = "Email successfully";
  return;
};

let passwordValidation = (passwordInput) => {
  passwordError.innerHTML = "";
  passwordError.classList.remove("error-content");
  password.classList.remove("error-border");
  password.classList.remove("successfully-border");
  passwordError.classList.remove("successfully-content");
  if (passwordInput.value !== loginInfo.password) {
    passwordError.classList.add("error-content");
    password.classList.add("error-border");
    passwordError.innerHTML = "Wrong password";
    return;
  }
  passwordError.innerHTML = "Password successfully";
  password.classList.add("successfully-border");
  passwordError.classList.add("successfully-content");
};

button.addEventListener("click", () => {
  emailValidation(email);
  passwordValidation(password);
});
