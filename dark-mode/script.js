const darkModeButton = document.querySelector("#dark_mode_button");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});

// const darkModeButton = document.querySelector("#dark_mode_button");

// // Hinzufügen eines Event Listeners zum Dark-Mode-Button
// darkModeButton.addEventListener("click", () => {
//   // Umkehren des Dark-Mode-Zustands
//   document.body.classList.toggle("dark_mode");
// });

/////////////////////////////////////////////
// const darkModeButton = document.querySelector("#dark_mode_button");

// darkModeButton.addEventListener("click", () => {
//   const bodyElement = document.querySelector("body");

//   const isDarkMode = bodyElement.classList.contains("dark_mode");

//   if (isDarkMode) {
//     bodyElement.classList.remove("dark_mode");
//   } else {
//     bodyElement.classList.add("dark_mode");
//   }
// });
