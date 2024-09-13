const password_minimum = 8;

function showSuccess(error_input, input) {
  error_input.innerHTML = "";
  error_input.style.display = "none";
  input.classList.remove("error");
  input.classList.add("success");
}

function showError(error_input, input, msg) {
  error_input.innerHTML = msg;
  error_input.style.display = "block";
  input.classList.add("error");
  input.classList.remove("success");
}

function showNormal(error_input, input) {
  input.value = "";
  error_input.innerHTML = "";
  error_input.style.display = "none";
  input.classList.remove("error");
  input.classList.remove("success");
}
