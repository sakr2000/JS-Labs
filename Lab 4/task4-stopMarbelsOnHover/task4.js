var marbels = document.querySelectorAll(".marbel");
var i = 0;
var interval;
var startInterval = () => {
  interval = setInterval(function () {
    // reset previous marbel
    if (i != 0) {
      marbels[i - 1].src = "images/marble1.jpg";
    } else {
      marbels[marbels.length - 1].src = "images/marble1.jpg";
    }

    // change current marbel
    marbels[i].src = "images/marble3.jpg";
    i++;
    if (i == marbels.length) {
      i = 0;
    }
  }, 800);
};

startInterval();

marbels.forEach(function (marbel) {
  // stop marbels
  marbel.addEventListener("mouseenter", function () {
    if (interval) {
      clearInterval(interval);
    }
  });

  // start marbels
  marbel.addEventListener("mouseleave", function () {
    startInterval();
  });
});
