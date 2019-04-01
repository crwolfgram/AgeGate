/*
  This code populates HTML select tags with years months and days.  The number of
  days updates based on the month and the year chosen.  Then, when a user clicks
  the submit button, it will check to see if the user is over or under 21.  If
  the user is 21 or older, they will be taken to a welcome page.  If they are
  under 21, then they will be taken to an access denied page.
  
  By: Conor Wolfgram
  Date: 12/12/2017
*/

//Running populate functions when the page loads
window.onload = function() {
  PopulateYear();
  PopulateMonth();
  PopulateDay();
}
 
function PopulateMonth() {
  //Month Loop
  var start = 1;
  var end = 12;
  var options = "";

  for(var month = start; month <= end; month++){
    options += "<option>" + month + "</option>";
  }
  
  //Filling out select tag
  document.getElementById("month").innerHTML = options;
}

function PopulateYear(){
  //Year Loop
  var end = 1900;
  var start = new Date().getFullYear();
  var options = "";

  for(var year = start; year >= end; year--){
    options += "<option>" + year + "</option>";
  }
  
  //Filling out select tag
  document.getElementById("year").innerHTML = options;
}

function PopulateDay(){
  //Initializing variables
  var start = 1;
  var end = 31;
  var options = "";

  for(var day = start; day <= end; day++){
    options += "<option>" + day + "</option>";
  }
  
  //Filling out select tag
  document.getElementById("day").innerHTML = options;
}

function ChangeDays() {
  //Initializing variables
  var start = 1;
  var end;
  var month = Number(document.getElementById("month").value);
  var year = Number(document.getElementById("year").value);
  var options = "";
  
  //Determining days in the month
  if(month === 2){
    if((year % 4 === 0 && (year % 100 != 0)) || (year % 400 === 0)) {
    end = 29;
    } else {
      end = 28;
    }
  }else if (month === 4 || month === 6 || month === 9 || month === 11) {
    end = 30;
  }else {
    end = 31;
  }

  for(var day = start; day <= end; day++){
    options += "<option>" + day + "</option>";
  }
  
  //Filling out select tag
  document.getElementById("day").innerHTML = options;
}

//Compares birthday to current day
function CheckBirthday(inputDate, inputYear, inputMonth) {
  //Initializing current date
  var currentDate = new Date().getDate();
  var currentYear = new Date().getFullYear();
  var currentMonth = new Date().getMonth();
  
  //setTimeout logic borrowed from https://stackoverflow.com/questions/17150171/page-redirect-after-x-seconds-wait-using-javascript
  if (currentYear - inputYear > 21) {
    document.getElementById("BirthdayOutput").innerHTML = "You entered: " + inputMonth  + "/" + inputDate + "/" + inputYear + ".<br> Welcome. <br> Please wait while you are redirected.";
    setTimeout(function () {window.location.href = "welcome.html";}, 5000);
  }else if (currentYear - inputYear === 21){
    if((currentMonth + 1) - inputMonth > 0) {
      document.getElementById("BirthdayOutput").innerHTML = "You entered: " + inputMonth  + "/" + inputDate + "/" + inputYear + ".<br> Welcome. <br> Please wait while you are redirected.";
      setTimeout(function () {window.location.href = "welcome.html";}, 5000);
    }else if ((currentMonth + 1) - inputMonth === 0) {
      if ((currentDate + 1) - inputDate > 0) {
        document.getElementById("BirthdayOutput").innerHTML = "You entered: " + inputMonth  + "/" + inputDate + "/" + inputYear + ".<br> Welcome. <br> Please wait while you are redirected.";
        setTimeout(function () {window.location.href = "welcome.html";}, 5000);
      }else {
        document.getElementById("BirthdayOutput").innerHTML = "You entered: " + inputMonth  + "/" + inputDate + "/" + inputYear + ".<br> Access Denied. <br> Please wait while you are redirected.";
        setTimeout(function () {window.location.href = "access_denied.html";}, 5000);
      }
    }
  }else {
    document.getElementById("BirthdayOutput").innerHTML = "You entered: " + inputMonth  + "/" + inputDate + "/" + inputYear + ".<br> Access Denied. <br> Please wait while you are redirected.";
    setTimeout(function () {window.location.href = "access_denied.html";}, 5000);
  }
}

//Runs when you hit submit
function main() {
  //Initializing variables with inputs
  var inputDate = Number(document.getElementById("day").value);
  var inputYear = Number(document.getElementById("year").value);
  var inputMonth = Number(document.getElementById("month").value);
  
  CheckBirthday(inputDate, inputYear, inputMonth);
}



