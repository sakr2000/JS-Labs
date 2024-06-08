var url = "https://jsonplaceholder.typicode.com/users";
var btn = document.getElementById("btn");

if (btn) {
  btn.addEventListener("click", getUserData);
}

function getUserData() {
  var XML = new XMLHttpRequest();
  XML.open("GET", url);
  XML.send();
  XML.onreadystatechange = function () {
    if (XML.readyState == 4 && XML.status == 200) {
      var users = JSON.parse(XML.responseText);
      displayUsers(users);
    }
  };
}

function displayUsers(users) {
  var table = document.querySelector("table");
  users.forEach((user) => createRow(table, user));
}

function createRow(table, user) {
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();
  var cell4 = row.insertCell();
  var cell5 = row.insertCell();
  cell1.innerHTML = user.id;
  cell2.innerHTML = user.name;
  cell3.innerHTML = user.username;
  cell4.innerHTML = user.email;
  cell5.innerHTML = `<button onclick="deleteUser(event)">Delete</button>`;
}

function deleteUser(e) {
  e.target.parentNode.parentNode.remove();
}
