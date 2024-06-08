var output = document.getElementById("output");
var divs = document.querySelectorAll(".lamp");
var TrafficStatus = document.querySelector(".status");

var counter = 0;
setInterval(function () {
  // reset previous colors
  divs.forEach(function (div) {
    div.classList.remove("red", "yellow", "green");
  });
  TrafficStatus.classList.remove("red", "yellow", "green");

  // add new colors
  TrafficStatus.style.display = "block";
  if (counter % 3 == 0) {
    divs[counter].classList.add("red");
    TrafficStatus.classList.add("red");
    TrafficStatus.innerHTML = "Ready";
  } else if (counter % 3 == 1) {
    divs[counter].classList.add("yellow");
    TrafficStatus.classList.add("yellow");
    TrafficStatus.innerHTML = "Steady";
  } else if (counter % 3 == 2) {
    divs[counter].classList.add("green");
    TrafficStatus.classList.add("green");
    TrafficStatus.innerHTML = "Go";
  }

  counter++;
  if (counter >= divs.length) {
    counter = 0;
  }
}, 1500);
