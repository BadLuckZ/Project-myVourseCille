const password_minimum = 8;
const milli_time_popup_show = 3000;
const popup_top = 20;
const additional_top = 80;

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
