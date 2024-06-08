var tagName = document.getElementById("tag");
var color = document.getElementById("color");
var text = document.getElementById("text");
var create = document.getElementById("create");

function createElement() {
  var newElement = document.createElement(tagName.value);
  newElement.style.color = color.value;
  newElement.innerHTML = text.value;

  document.getElementById("output").innerHTML = "";
  document.getElementById("output").appendChild(newElement);
}

create.addEventListener("click", createElement);
