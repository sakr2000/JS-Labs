var numberArray = [];
var arrayLenght = parseInt(prompt("Enter the length of the array :"));
for (i = 0; i < arrayLenght; i++) {
  var number = parseInt(prompt("Enter number-" + (i + 1)));
  numberArray.push(number);
}

// Original Array
document.writeln(
  `<h2 style="color: #9e0808;">Array before sorting : <span style="color: #000;">${numberArray.join(
    ","
  )}</span></h2>`
);

// Ascending sorting
numberArray.sort(function (a, b) {
  return a - b;
});
document.writeln(
  `<h2 style="color: #9e0808;">Array after ascending sorting : <span style="color: #000;">${numberArray.join(
    ","
  )}</span></h2>`
);

// Descending sorting
numberArray.sort(function (a, b) {
  return b - a;
});

document.writeln(
  `<h2 style="color: #9e0808;">Array after descending sorting : <span style="color: #000;">${numberArray.join(
    ","
  )}</span></h2>`
);
