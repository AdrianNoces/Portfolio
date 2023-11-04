const exampleButton = document.getElementById("examplesButton");

const contentDiv = document.getElementById("contentDiv");

const homeButton = document.getElementById("homeButton");



homeButton.addEventListener("click", function () {
  contentDiv.innerHTML = `
  <p>changed</p>
  `
})