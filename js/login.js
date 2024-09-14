function clearLoginForm() {
  showNormal(login_email_error, login_email);
  showNormal(login_password_error, login_password);
  showNormal(login_match_emailpassword_error, null);
}

function showSuccessMatch() {
  showSuccess(login_match_emailpassword_error, login_email);
  showSuccess(login_match_emailpassword_error, login_password);
  clearLoginForm();
}

function showErrorNotMatch(err_msg) {
  showError(login_match_emailpassword_error, login_email, err_msg);
  showError(login_match_emailpassword_error, login_password, err_msg);
}

function getPasswordFromEmail(email) {
  const data = JSON.parse(localStorage.getItem("data"));
  for (let i = 0; i < data.length; i++) {
    if (data[i].email == email) {
      return data[i].password;
    }
  }
  return "-1";
}

// Login Form
const login_form = document.getElementById("myVourseCille-login");
const login_email = document.getElementById("login-email");
const login_password = document.getElementById("login-password");

const login_email_error = document.getElementById("login-email-error-message");
const login_password_error = document.getElementById(
  "login-password-error-message"
);
const login_match_emailpassword_error = document.getElementById(
  "login-match-emailpassword-error"
);

login_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = login_email.value;
  let email_error = true;

  // Email Validation
  if (emailPattern.test(email)) {
    showSuccess(login_email_error, login_email);
    email_error = false;
  } else {
    showError(login_email_error, login_email, "Invalid Email");
    email_error = true;
  }

  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;
  const hasNumber = /\d/;
  const password = login_password.value;
  let password_error = true;

  // Password Validation
  if (
    !hasUppercase.test(password) ||
    !hasLowercase.test(password) ||
    !hasNumber.test(password) ||
    password.length < password_minimum
  ) {
    showError(login_password_error, login_password, "Invalid Password");
    password_error = true;
  } else {
    showSuccess(login_password_error, login_password);
    password_error = false;
  }

  if (!email_error && !password_error) {
    if (!("data" in localStorage)) {
      showErrorNotMatch("The email has not been registered");
    } else {
      const emails = localStorage.getItem("emails");
      if (!emails.includes(email)) {
        showErrorNotMatch("The email has not been registered");
      } else {
        if (getPasswordFromEmail(email) != password) {
          showErrorNotMatch("Wrong Password");
          console.log("error!");
        } else {
          showSuccessMatch();
          window.location.href = "home.html";
        }
      }
    }
  } else {
    showNormal(login_match_emailpassword_error, null);
  }
});

// Go To Register Button
const goto_register_button = document.getElementById("goto-register-btn");
goto_register_button.addEventListener("click", () => {
  clearLoginForm();
});
