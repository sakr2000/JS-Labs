// //  function to get the sum unlimited
// function getSum() {
//   var sum = 0;
//   for (i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// // function to reverse the arguments with 2 ways
// function reverseArguments() {
//   var arr = [];
//   for (i = arguments.length - 1; i >= 0; i--) {
//     arr.push(arguments[i]);
//   }
//   return arr;
// }

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
