var divNumberInput = document.getElementById("DivNumber");
var output = document.getElementById("output");
var valueInput = document.getElementById("Value");

divNumberInput.addEventListener("input", function (e) {
  var divNumber = e.target.value;
  var lamps = ``;
  for (var i = 0; i < divNumber; i++) {
    lamps += `<div class="lamp"></div>`;
  }

  output.innerHTML = `${lamps}`;
});

valueInput.addEventListener("input", function (e) {
  var value = e.target.value;
  var divs = document.querySelectorAll(".lamp");
  var status = document.querySelector(".status");
  if (value < 0 || value >= divs.length) {
    status.style.display = "none";
  } else {
    status.style.display = "block";
  }
  // reset previous colors
  divs.forEach(function (div) {
    div.classList.remove("red", "yellow", "green");
  });
  status.classList.remove("red", "yellow", "green");

  // add new colors
  if (value % 3 == 0) {
    divs[value].classList.add("red");
    status.classList.add("red");
    status.innerHTML = "Ready";
  } else if (value % 3 == 1) {
    divs[value].classList.add("yellow");
    status.classList.add("yellow");
    status.innerHTML = "Steady";
  } else if (value % 3 == 2) {
    divs[value].classList.add("green");
    status.classList.add("green");
    status.innerHTML = "Go";
  }
});
