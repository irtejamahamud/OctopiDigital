const form = document.getElementById("registrationForm");

const fields = {
  fname: {
    element: document.getElementById("fname"),
    error: document.getElementById("fnameError"),
    validate: (value) => {
      if (!value.trim()) return "First name is required.";
      if (!/^[A-Za-z]+$/.test(value))
        return "First name must contain only letters (A–Z or a–z).";
      return "";
    },
  },
  lname: {
    element: document.getElementById("lname"),
    error: document.getElementById("lnameError"),
    validate: (value) => {
      if (!value.trim()) return "Last name is required.";
      if (!/^[A-Za-z]+$/.test(value))
        return "Last name must contain only letters (A–Z or a–z).";
      return "";
    },
  },
  username: {
    element: document.getElementById("username"),
    error: document.getElementById("usernameError"),
    validate: (value) => {
      if (!value.trim()) return "Username is required.";
      if (!/^[a-zA-Z0-9]{5,15}$/.test(value))
        return "Username must be 5–15 characters long and alphanumeric only.";
      return "";
    },
  },
  mobile: {
    element: document.getElementById("mobile"),
    error: document.getElementById("mobileError"),
    validate: (value) => {
      if (!value.trim()) return "Mobile number is required.";
      if (!/^\d{10,14}$/.test(value))
        return "Enter a valid mobile number (10–14 digits).";
      return "";
    },
  },
  email: {
    element: document.getElementById("email"),
    error: document.getElementById("emailError"),
    validate: (value) => {
      if (!value.trim()) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Enter a valid email address (e.g., user@example.com).";
      return "";
    },
  },
  address: {
    element: document.getElementById("address"),
    error: document.getElementById("addressError"),
    validate: (value) => {
      if (!value.trim()) return "Address is required.";
      if (value.length < 5)
        return "Address must be at least 5 characters long.";
      return "";
    },
  },
  password: {
    element: document.getElementById("password"),
    error: document.getElementById("passwordError"),
    validate: (value) => {
      if (!value) return "Password is required.";
      if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(value)) {
        return "Password must be at least 8 characters, contain 1 uppercase letter and 1 special character.";
      }
      return "";
    },
  },
  confirmPassword: {
    element: document.getElementById("confirmPassword"),
    error: document.getElementById("confirmPasswordError"),
    validate: (value) => {
      if (!value) return "Please confirm your password.";
      if (value !== fields.password.element.value)
        return "Passwords do not match.";
      return "";
    },
  },
};

function validateField(field) {
  const value = field.element.value;
  const message = field.validate(value);
  if (message) {
    field.error.textContent = message;
    return false;
  } else {
    field.error.textContent = "";
    return true;
  }
}

Object.values(fields).forEach((field) => {
  field.element.addEventListener("input", () => validateField(field));
});

function validateGender() {
  const genderError = document.getElementById("genderError");
  const selected = document.querySelector('input[name="gender"]:checked');
  if (!selected) {
    genderError.textContent = "Please select your gender.";
    return false;
  } else {
    genderError.textContent = "";
    return true;
  }
}

function validateTerms() {
  const terms = document.getElementById("terms");
  const termsError = document.getElementById("termsError");
  if (!terms.checked) {
    termsError.textContent = "You must agree to the terms and privacy policy.";
    return false;
  } else {
    termsError.textContent = "";
    return true;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  Object.values(fields).forEach((field) => {
    if (!validateField(field)) isValid = false;
  });

  if (!validateGender()) isValid = false;
  if (!validateTerms()) isValid = false;

  if (isValid) {
    alert("Registration successful!");
  }
});
