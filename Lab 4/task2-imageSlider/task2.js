var next = document.getElementById("next");
var prev = document.getElementById("prev");
var play = document.getElementById("play");
var stop = document.getElementById("stop");
var image = document.querySelector(".image img");
var i = Math.floor(Math.random() * 30);

image.src = `https://picsum.photos/id/${i}/600`;

function animateButton(button) {
  button.classList.add("clicked");
  setTimeout(() => {
    button.classList.remove("clicked");
  }, 300);
}

function changeImage() {
  image.classList.add("hidden");
  image.src = `https://picsum.photos/id/${i}/600`;
  setTimeout(() => {
    image.classList.remove("hidden");
    image.classList.add("visible");
  }, 300);

  setTimeout(() => {
    image.classList.remove("visible");
  }, 600);
}

next.addEventListener("click", function () {
  animateButton(next);
  i++;
  if (i > 300) {
    i = 0;
  }
  changeImage();
});

prev.addEventListener("click", function () {
  animateButton(prev);
  i--;
  if (i < 0) {
    i = 300;
  }
  image.classList.add("slideRight");
  image.src = `https://picsum.photos/id/${i}/600`;
  setTimeout(() => {
    image.classList.remove("slideRight");
    image.classList.add("slideLeft");
  }, 300);

  setTimeout(() => {
    image.classList.remove("slideLeft");
  }, 600);
});

var interval = null;
play.addEventListener("click", function () {
  animateButton(play);
  play.style.display = "none";
  stop.style.display = "inline-block";
  if (interval == null) {
    interval = setInterval(function () {
      i++;
      if (i > 300) {
        i = 0;
      }
      changeImage();
    }, 2000);
  }
});

stop.addEventListener("click", function () {
  animateButton(stop);
  play.style.display = "inline-block";
  stop.style.display = "none";
  clearInterval(interval);
  interval = null;
});
