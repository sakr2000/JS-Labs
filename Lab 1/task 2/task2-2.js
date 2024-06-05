var inputString = prompt("Enter your string");
var caseSensitive = confirm("Is it case sensitive?");

// check if palindrome
var isPalindrome = true;

for (var i = 0; i < inputString.length / 2; i++) {
  if (caseSensitive) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  } else {
    if (
      inputString[i].toLowerCase() !==
      inputString[inputString.length - 1 - i].toLowerCase()
    ) {
      isPalindrome = false;
      break;
    }
  }
}

if (isPalindrome) {
  document.writeln(`<h1>${inputString} is a palindrome</h1>`);
} else {
  document.writeln(`<h1>${inputString} is not a palindrome</h1>`);
}
