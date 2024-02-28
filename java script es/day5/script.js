
var textParagraph = document.getElementById("p");
function changeTextAndColor() {
  textParagraph.textContent = "GOA is the best";
  textParagraph.style.color = "blue";
}


var changeButton = document.getElementById("btn");
changeButton.addEventListener("click", changeTextAndColor);