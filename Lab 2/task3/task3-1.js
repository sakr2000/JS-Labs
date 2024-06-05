var numberArray = [];

for (i = 0; i < 3; i++) {
  var number = prompt("Enter number-" + (i + 1));
  numberArray.push(number);
}

var sum = 0;
var multiply = 1;
var divide = 1;

for (i = 0; i < 3; i++) {
  sum += parseInt(numberArray[i]);
  multiply *= parseInt(numberArray[i]);
  divide /= parseInt(numberArray[i]);
}

document.writeln(
  `<h2 style="color: #9e0808">The Sum of the 3 numbers are : <span style="color: #000">${sum}</span></h2>`
);
document.writeln(
  `<h2 style="color: #9e0808">The Multiplication of the 3 numbers are : <span style="color: #000">${multiply}</span></h2>`
);
document.writeln(
  `<h2 style="color: #9e0808">The Division of the 3 numbers are : <span style="color: #000">${divide}</span></h2>`
);
