const password_minimum = 8;

function showSuccess(error_input, input) {
  input.classList.remove("error");
  input.classList.add("success");
  error_input.innerHTML = "";
  error_input.style.display = "none";
}

function showError(error_input, input, msg) {
  input.classList.add("error");
  input.classList.remove("success");
  error_input.innerHTML = msg;
  error_input.style.display = "block";
}

function showNormal(error_input, input) {
  if (input != null) {
    input.value = "";
    input.classList.remove("error");
    input.classList.remove("success");
  }
  error_input.innerHTML = "";
  error_input.style.display = "none";
}
