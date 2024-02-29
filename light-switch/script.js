const button = document.querySelector("#toggleButton");
const body = document.body;
let isLightOn = true;

button.addEventListener("click", () => {
  isLightOn = !isLightOn;
  toggleLight();
});

function toggleLight() {
  if (isLightOn) {
    body.style.backgroundColor = "#FFFFFF";
    document.title = "Good Morning";
  } else {
    body.style.backgroundColor = "#000000";
    document.title = "Good Night";
  }
}
