const form = document.getElementById("registrationForm");

const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const username = document.getElementById("username");
const mobile = document.getElementById("mobile");
const email = document.getElementById("email");
const address = document.getElementById("address");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");

const genderError = document.getElementById("genderError");
const termsError = document.getElementById("termsError");

function showError(inputId, message) {
  const errorEl = document.getElementById(inputId + "Error");
  errorEl.textContent = message;
}
function clearError(inputId) {
  const errorEl = document.getElementById(inputId + "Error");
  errorEl.textContent = "";
}

function validateFirstName() {
  const value = firstName.value.trim();
  if (!value) return showError("fname", "First name is required.");
  if (!/^[A-Za-z]+$/.test(value))
    return showError("fname", "Only letters allowed.");
  clearError("fname");
  return true;
}

function validateLastName() {
  const value = lastName.value.trim();
  if (!value) return showError("lname", "Last name is required.");
  if (!/^[A-Za-z]+$/.test(value))
    return showError("lname", "Only letters allowed.");
  clearError("lname");
  return true;
}

function validateUsername() {
  const value = username.value.trim();
  if (!value) return showError("username", "Username is required.");
  if (!/^[a-zA-Z0-9]{5,15}$/.test(value)) {
    return showError(
      "username",
      "Username must be 5–15 characters, letters and numbers only."
    );
  }
  clearError("username");
  return true;
}

function validateMobile() {
  const value = mobile.value.trim();
  if (!value) return showError("mobile", "Mobile number is required.");
  if (!/^\d{10,14}$/.test(value))
    return showError("mobile", "Enter 10–14 digits only.");
  clearError("mobile");
  return true;
}

function validateEmail() {
  const value = email.value.trim();
  if (!value) return showError("email", "Email is required.");
  if (!/^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/i.test(value)) {
    return showError(
      "email",
      "Email must start with a lowercase letter and be valid (e.g., name@example.com)."
    );
  }

  clearError("email");
  return true;
}

function validateAddress() {
  const value = address.value.trim();
  if (!value) return showError("address", "Address is required.");
  if (value.length < 5) return showError("address", "Minimum 5 characters.");
  clearError("address");
  return true;
}

function validatePassword() {
  const value = password.value;
  if (!value) return showError("password", "Password is required.");
  if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(value)) {
    return showError("password", "At least 8 chars, 1 uppercase & 1 symbol.");
  }
  clearError("password");
  return true;
}

function validateConfirmPassword() {
  const value = confirmPassword.value;
  if (!value)
    return showError("confirmPassword", "Please confirm your password.");
  if (value !== password.value)
    return showError("confirmPassword", "Passwords do not match.");
  clearError("confirmPassword");
  return true;
}

function validateGender() {
  const selected = document.querySelector('input[name="gender"]:checked');
  if (!selected) {
    genderError.textContent = "Please select your gender.";
    return false;
  }
  genderError.textContent = "";
  return true;
}

function validateTerms() {
  if (!terms.checked) {
    termsError.textContent = "You must agree to the terms.";
    return false;
  }
  termsError.textContent = "";
  return true;
}

firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
username.addEventListener("input", validateUsername);
mobile.addEventListener("input", validateMobile);
email.addEventListener("input", validateEmail);
address.addEventListener("input", validateAddress);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid =
    validateFirstName() &&
    validateLastName() &&
    validateUsername() &&
    validateMobile() &&
    validateEmail() &&
    validateAddress() &&
    validatePassword() &&
    validateConfirmPassword() &&
    validateGender() &&
    validateTerms();

  if (isValid) {
    alert("Registration successful!");
  }
});
function togglePassword(fieldId, iconElement) {
  const input = document.getElementById(fieldId);

  if (input.type === "password") {
    input.type = "text";
    iconElement.textContent = "👁‍🗨";
  } else {
    input.type = "password";
    iconElement.textContent = "👁";
  }
}
