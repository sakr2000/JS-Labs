var Numebr = prompt("Enter the number");
//  fizz buzz logic
if (Numebr % 3 == 0) {
  if (Numebr % 5 == 0) {
    document.writeln('<div class="result">Fizz Buzz</div>');
  } else {
    document.writeln('<div class="result">Fizz</div>');
  }
} else if (Numebr % 5 == 0) {
  document.writeln('<div class="result">Buzz</div>');
} else {
  document.writeln('<div class="result">None</div>');
}
