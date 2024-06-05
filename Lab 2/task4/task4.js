function calculateArea(radius) {
  const area = Math.PI * radius * radius;
  return area;
}

function calculateSquareRoot(number) {
  const squareRoot = Math.sqrt(number);
  return squareRoot;
}

function calculateCos(angle) {
  return Math.cos((angle * Math.PI) / 180);
}

var choice = prompt(
  "select : \n[1] to calculate the area of a circle \n[2] to calculate the square root of a number \n[3] to calculate the cosine of an angle"
);

switch (choice) {
  case "1":
    var radius = prompt("Enter the radius of the circle");
    var area = calculateArea(parseInt(radius));
    document.writeln(
      `<h2 style="color: #9e0808;">The area of the circle of radius ${radius} : <span style="color: #000;">${area}</span></h2>`
    );
    break;
  case "2":
    var number = prompt("Enter the number");
    var squareRoot = calculateSquareRoot(parseInt(number));
    document.writeln(
      `<h2 style="color: #9e0808;">The square root of ${number} : <span style="color: #000;">${squareRoot}</span></h2>`
    );
    break;
  case "3":
    var angle = parseInt(prompt("Enter the angle in degrees"));
    var cos = calculateCos(angle);
    document.writeln(
      `<h2 style="color: #9e0808;">The cosine of the ${angle} : <span style="color: #000;">${Math.round(
        cos
      )}</span></h2>`
    );
    break;
  default:
    document.write("Invalid choice");
}
