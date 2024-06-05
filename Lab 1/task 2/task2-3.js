var checkName = (name) => {
  return name.match(/^[a-zA-Z]+$/) ? true : false;
};

checkPhone = (phone) => {
  return phone.match(/^[0-9]{8}$/) ? true : false;
};

checkMobile = (mobile) => {
  return mobile.match(/^010|011|012[0-9]{8}$/) ? true : false;
};
var checkEmail = (email) => {
  return email.match(/^[a-zA-Z]{3}@[0-9]{3}\.com$/) ? true : false;
};

var Name = prompt("Enter your name");
while (!checkName(Name)) {
  Name = prompt("Enter a valid name with letters only");
}
var phone = prompt("Enter your phone number");
while (!checkPhone(phone)) {
  phone = prompt("Enter a valid phone number of 8 digits");
}
var mobile = prompt("Enter your mobile number");
while (!checkMobile(mobile)) {
  mobile = prompt("Enter a valid mobile number of 11 digits");
}
var email = prompt("Enter your email");
while (!checkEmail(email)) {
  email = prompt("Enter a valid email like: abc@123.com");
}

var favoriteColor = prompt("Enter your favorite color");
var date = new Date();
const options = {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
};
const formattedDate = date.toLocaleDateString("en-US", options);

var displayMassage = `
<h3 style="color:${favoriteColor} ;">Welcome dear user : <span style="color:#000;">${Name}</span> </h3>
<h3 style="color:${favoriteColor} ;">your telephone number is  : <span style="color:#000;">${phone}</span> </h3>
<h3 style="color:${favoriteColor} ;">your mobile number is : <span style="color:#000;">${mobile}</span> </h3>
<h3 style="color:${favoriteColor} ;">your email address is : <span style="color:#000;">${email}</span> </h3>



<h3 style="color:${favoriteColor} ;margin-top:30px;">Today's date is : <span style="color:#000;">${formattedDate}</span> </h3>`;

document.write(displayMassage);
