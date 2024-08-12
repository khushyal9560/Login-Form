let btn = document.getElementById("btn");
let form = document.getElementById("form");

form = (e) => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  email.value = "";
  password.value = "";
};
btn.addEventListener("click", (e) => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  email = email.value;
  localStorage.setItem("email", email);
  password = password.value;
  localStorage.setItem("password", password);
});
