const toggle = document.getElementById("description-toggle");
const long_elements = document.getElementsByClassName("long");
const short_elements = document.getElementsByClassName("short");

toggle.addEventListener("click", () => {
  if (toggle.innerText == "Expand") {
    toggle.innerText = "TLDR";
  }
  else {
    toggle.innerText = "Expand";
  }

  for (let element of long_elements) {
    element.classList.toggle("hidden");
  }

  for (let element of short_elements) {
    element.classList.toggle("hidden");
  }
})