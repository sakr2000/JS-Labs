//  function to get the sum unlimited
function getSum() {
  var sum = 0;
  // check for no arguments
  if (arguments.length === 0) {
    throw new Error("No arguments passed");
  }
  //   check for string
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "string") {
      throw new Error("Strings are not allowed");
    }
  }

  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function reverseArguments() {
  var arr = [];
  for (i = arguments.length - 1; i >= 0; i--) {
    arr.push(arguments[i]);
  }
  return arr;
}

function reverseArray() {
  return Array.from(arguments).reverse();
}
