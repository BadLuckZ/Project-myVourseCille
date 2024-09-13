// Utility Function
function showSuccess(error_input, input) {
  error_input.innerHTML = "";
  input.classList.remove("error");
  input.classList.add("Success");
}

function showError(error_input, input, msg) {
  error_input.innerHTML = msg;
  input.classList.add("error");
  input.classList.remove("Success");
}

// Register Form
const register_form = document.getElementById("myVourseCille-registration");
const register_email = document.getElementById("register-email");
const register_username = document.getElementById("register-username");
const register_password = document.getElementById("register-password");
const register_checkpassword = document.getElementById(
  "register-checkpassword"
);
const register_error = document.getElementById("register-error-message");

register_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = register_email.value;
  const username = register_username.value;
  const password = register_password.value;
  const checkpassword = register_checkpassword.value;
  if (emailPattern.test(email)) {
    showSuccess(register_error, register_email);
  } else {
    showError(register_error, register_email, "Invalid Email");
  }
});
