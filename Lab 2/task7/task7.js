var namesArray = ["Ahmed", "Mohamed", "Sayed", "Eman", "Qadir", "Mahmoud"];

// select 2 ranodm names
do {
  var name1 = namesArray[Math.floor(Math.random() * namesArray.length)];
  var name2 = namesArray[Math.floor(Math.random() * namesArray.length)];
} while (name1 === name2);

document.writeln(`<div class="result">${name1}</div>`);
document.writeln(`<div class="result">${name2}</div>`);
