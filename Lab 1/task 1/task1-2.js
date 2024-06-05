var sum = 0;
var choice;
do {
  choice = prompt("Enter your choice");

  sum += parseInt(choice) == NaN ? 0 : parseInt(choice);
  console.log("sum :>> ", sum);
} while (sum < 100 && choice != 0);
