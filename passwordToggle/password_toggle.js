const passwordInput = document.querySelector("#password");
const toggleButton = document.querySelector("#toggleButton");

toggleButton.addEventListener("click", togglePasswordVisibility);

function togglePasswordVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Show Password";
  }
}
