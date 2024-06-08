var formDiv = document.getElementById("form");
var userName = formDiv.querySelector("#name");
var userAge = formDiv.querySelector("#age");
var userGender = document.getElementsByName("gender");
var userFavColor = formDiv.querySelector("#favColor");
var submitBtn = document.getElementById("submit-btn");
var output = document.getElementById("output");
date = new Date();
expireData = date.setDate(date.getDate() + 2);

function setCookie(key, value, expireData) {
  document.cookie = key + "=" + value + ";expires=" + expireData;
}

function getCookie(key) {
  var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
  return keyValue ? keyValue[2] : null;
}

function deleteCookie(cookie) {
  document.cookie = cookie + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function allCookieList() {
  return document.cookie.split(";");
}

function hasCookie(cookie) {
  return document.cookie.indexOf(cookie) != -1;
}

function checkUser() {
  if (!getCookie("user")) {
    return false;
  } else {
    return true;
  }
}

if (!checkUser()) {
  output.style.display = "none";

  formDiv.style.display = "flex";

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    var user = {
      name: userName.value,
      age: userAge.value,
      gender: userGender[0].checked ? "male" : "female",
      favColor: userFavColor.value,
      counter: 0,
    };

    setCookie("user", JSON.stringify(user), expireData);

    window.location = "task1.html";
  });
} else {
  formDiv.style.display = "none";
  output.style.display = "flex";
  var user = JSON.parse(getCookie("user"));
  if (user.gender == "male") {
    output.querySelector("img").src = "images/1.jpg";
  } else {
    output.querySelector("img").src = "images/2.jpg";
  }
  output.querySelector("#name-output").innerHTML = user.name;
  output.querySelector("#name-output").style.color = user.favColor;
  output.querySelector("#visit-output").innerHTML = ++user.counter;
  output.querySelector("#visit-output").style.color = user.favColor;

  setCookie("user", JSON.stringify(user), expireData);

  var user = JSON.parse(getCookie("user"));
}
