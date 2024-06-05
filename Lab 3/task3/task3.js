/**
 * 1- Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers.

Ex: input : [1,2,3,4,5]
Expected Output : 2,4

========================
2- Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Ex: input: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox '
 * 
 * 
 * 
 * */

var getArrayFromString = function (arrayString) {
  return arrayString.trim().split(",");
};

function secondLowestAndGreatest(arr) {
  let uniqueArray = Array.from(new Set(arr));
  uniqueArray.sort((a, b) => a - b);

  if (uniqueArray.length < 2) {
    throw new Error("Array must contain at least two unique elements");
  }
  return [uniqueArray[1], uniqueArray[uniqueArray.length - 2]];
}

var handleArray = function (arrayString) {
  var array = getArrayFromString(arrayString);
  var result = secondLowestAndGreatest(array);

  document.getElementById("lowest").innerHTML = result[0];
  document.getElementById("greatest").innerHTML = result[1];
};

handleString = function (string) {
  var stringElement = document.getElementById("converted");
  stringElement.innerHTML = string;
};
