function clearRegisterForm() {
  showNormal(register_email_error, register_email);
  showNormal(register_username_error, register_username);
  showNormal(register_password_error, register_password);
  showNormal(register_checkpassword_error, register_checkpassword);
}

// Register Form
const register_form = document.getElementById("myVourseCille-registration");
const register_email = document.getElementById("register-email");
const register_username = document.getElementById("register-username");
const register_password = document.getElementById("register-password");
const register_checkpassword = document.getElementById(
  "register-checkpassword"
);

const register_email_error = document.getElementById(
  "register-email-error-message"
);
const register_username_error = document.getElementById(
  "register-username-error-message"
);
const register_password_error = document.getElementById(
  "register-password-error-message"
);
const register_checkpassword_error = document.getElementById(
  "register-checkpassword-error-message"
);

register_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = register_email.value;
  let email_error = true;

  // Email Validation
  if (emailPattern.test(email)) {
    showSuccess(register_email_error, register_email);
    email_error = false;
  } else {
    showError(register_email_error, register_email, "Invalid Email");
    email_error = true;
  }

  const username = register_username.value;
  let username_error = false;

  // Username Validation
  if (username == "") {
    showError(register_username_error, register_username, "Invalid Username");
    username_error = true;
  } else {
    showSuccess(register_username_error, register_username);
    username_error = false;
  }

  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;
  const hasNumber = /\d/;
  const password = register_password.value;
  let password_error = true;

  // Password Validation
  if (!hasUppercase.test(password)) {
    showError(
      register_password_error,
      register_password,
      "Password must have at least 1 uppercase letter"
    );
    password_error = true;
  } else if (!hasLowercase.test(password)) {
    showError(
      register_password_error,
      register_password,
      "Password must have at least 1 lowercase letter"
    );
    password_error = true;
  } else if (!hasNumber.test(password)) {
    showError(
      register_password_error,
      register_password,
      "Password must have at least 1 number"
    );
    password_error = true;
  } else if (password.length < password_minimum) {
    showError(
      register_password_error,
      register_password,
      `Password must have at least ${password_minimum} characters`
    );
    password_error = true;
  } else {
    showSuccess(register_password_error, register_password);
    password_error = false;
  }

  const check_password = register_checkpassword.value;
  let check_password_error = true;

  // Confirm Password Validation
  if (check_password == "") {
    showError(
      register_checkpassword_error,
      register_checkpassword,
      "Invalid Password"
    );
    check_password_error = true;
  } else if (check_password != password) {
    showError(
      register_checkpassword_error,
      register_checkpassword,
      "Passwords do not match"
    );
    check_password_error = true;
  } else {
    showSuccess(register_checkpassword_error, register_checkpassword);
    check_password_error = false;
  }

  if (
    !email_error &&
    !username_error &&
    !password_error &&
    !check_password_error
  ) {
  }
});

// Go To Login Button
const goto_login_button = document.getElementById("goto-login-btn");
goto_login_button.addEventListener("click", () => {
  clearRegisterForm();
});
