var tagHeader = document.getElementById("tagsCount");
var nameHeader = document.getElementById("nameCount");
var classHeader = document.getElementById("classCount");
var idHeader = document.getElementById("idCount");

function countTags(tag) {
  var tags = document.getElementsByTagName(tag);
  tagHeader.innerHTML = tag;
  tagHeader.nextElementSibling.innerHTML = tags.length;
}

function countClasses(className) {
  var classes = document.getElementsByClassName(className);
  classHeader.innerHTML = className;
  classHeader.nextElementSibling.innerHTML = classes.length;
}

function countID(idName) {
  var id = document.getElementById(idName);
  idHeader.innerHTML = idName;
  idHeader.nextElementSibling.innerHTML = id == null ? "False" : "True";
}

function countName(name) {
  var names = document.getElementsByName(name);
  nameHeader.innerHTML = name;
  nameHeader.nextElementSibling.innerHTML = names.length;
}

function countAll() {
  var tag = document.getElementById("TagValue").value;
  var classValue = document.getElementById("ClassValue").value;
  var idValue = document.getElementById("IDValue").value;
  var nameValue = document.getElementById("NameValue").value;

  countTags(tag);
  countClasses(classValue);
  countID(idValue);
  countName(nameValue);
}
