var form = document.querySelector(".input-form");
var tableBody = document.querySelector("#table tbody");
var submit = document.querySelector("#submit");
var NameInput = document.getElementById("Name");
var AgeInput = document.getElementById("Age");

var id = 1;

// validation

function showError(input, message) {
  input.value = "";
  var formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  var error = formField.querySelector(".error");
  error.textContent = message;
}

function showSuccess(input) {
  var formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  var error = formField.querySelector(".error");
  error.textContent = "";
}

function resetInputs() {
  NameInput.parentElement.classList.remove("error");
  NameInput.parentElement.classList.remove("success");
  AgeInput.parentElement.classList.remove("error");
  AgeInput.parentElement.classList.remove("success");
}
function validateName() {
  var name = NameInput.value;
  if (name == "") {
    showError(NameInput, "Name cannot be empty");
    return false;
  } else if (name.lenght < 3) {
    showError(NameInput, "Name must be at least 3 characters long");
    return false;
  }
  showSuccess(NameInput);
  return true;
}

function validateAge() {
  var age = AgeInput.value;
  if (age == "") {
    showError(AgeInput, "Age cannot be empty");
    return false;
  } else if (age < 18) {
    showError(AgeInput, "Age must be greater than 18");
    return false;
  }
  showSuccess(AgeInput);
  return true;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var NameValue = NameInput.value;
  var AgeValue = AgeInput.value;

  if (validateName() && validateAge()) {
    addRow(id, NameValue, AgeValue);
    id++;
    form.reset();
    resetInputs();
  }
});

function addRow(id, NameValue, AgeValue) {
  var newRow = tableBody.insertRow();
  newRow.setAttribute("id", id);
  var IDCell = newRow.insertCell();
  var NameCell = newRow.insertCell();
  var AgeCell = newRow.insertCell();
  var deleteCell = newRow.insertCell();
  IDCell.innerHTML = id;
  NameCell.innerHTML = NameValue;
  AgeCell.innerHTML = AgeValue;
  deleteCell.innerHTML = `<button onclick="deleteRow(event)">Delete</button>`;
}

function deleteRow(e) {
  e.target.parentNode.parentNode.remove();
}
