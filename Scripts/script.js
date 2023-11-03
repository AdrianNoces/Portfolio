const exampleButton = document.getElementById("examplesButton");

const contentDiv = document.getElementById("contentDiv");

const homeButton = document.getElementById("homeButton");


exampleButton.addEventListener("click", function () {
  contentDiv.innerHTML = `
  <p>Underdevelopment</p>

  `
})

homeButton.addEventListener("click", function () {
  contentDiv.innerHTML = `
  <p>Underdevelopment</p>
  `
})