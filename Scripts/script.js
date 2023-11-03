const exampleButton = document.getElementById("examplesButton");

const contentDiv = document.getElementById("contentDiv");

const homeButton = document.getElementById("homeButton");


exampleButton.addEventListener("click", function () {
  contentDiv.innerHTML = `
  <li><a href="./Amazon/index.html">amazon</a></li>
  <li><a href="">none</a></li>
  <li><a href="">none</a></li>
  <li><a href="">none</a></li

  `
})

homeButton.addEventListener("click", function () {
  contentDiv.innerHTML = `
  <p>Underdevelopment</p>
  `
})