var inputString = prompt("Enter your string");
var counter = 0;
for (var char of inputString) {
  if (char === "e") counter++;
}

document.write(`<h1>The number of 'e' in ${inputString} is:  ${counter}<h1>`);
