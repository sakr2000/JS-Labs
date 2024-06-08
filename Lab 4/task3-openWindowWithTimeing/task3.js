var btn = document.getElementById("btn");
var paragraph = document.getElementById("paragraph");

var OpenedWindow = null;

if (btn) {
  btn.addEventListener("click", function () {
    OpenedWindow = window.open(
      "floatingWindow.html",
      "_blank",
      "width=500,height=500,left=100,top=100"
    );
  });
}

var text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus magni
      vero nulla impedit non possimus, expedita in! Quaerat distinctio velit,
      maiores deserunt officia fugiat dolorum minima hic a possimus ad
      asperiores aperiam.`;
if (paragraph) {
  var i = 0;
  var interval = setInterval(function () {
    if (i < text.length) {
      paragraph.innerHTML += text[i];
      i++;
    } else {
      window.close();
      clearInterval(interval);
    }
  }, 100);
}
