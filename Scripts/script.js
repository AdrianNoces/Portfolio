const exampleButton = document.getElementById("examplesButton");

const contentDiv = document.getElementById("contentDiv");

const homeButton = document.getElementById("homeButton");

const homeButton2 = document.getElementById("homeButton2");

homeButton.addEventListener("click", function () {
  contentDiv.innerHTML = `
  <p>changed</p>
  `
});

homeButton2.addEventListener("click", function () {
  contentDiv.innerHTML = `
  <p>changed</p>
  `
});