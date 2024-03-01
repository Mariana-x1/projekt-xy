const button = document.querySelector("#toggleButton");
const body = document.body;
let isLightOn = true;

button.addEventListener("click", () => {
  isLightOn = !isLightOn;
  toggleLight();
});

function toggleLight() {
  if (isLightOn) {
    // body.style.backgroundColor = "#FFFFFF";
    body.classList.remove("light-off");
    body.classList.add("light-on");
    document.title = "Good Morning";
  } else {
    // body.style.backgroundColor = "#000000";
    body.classList.remove("light-on");
    body.classList.add("light-off");
    document.title = "Good Night";
  }
}
