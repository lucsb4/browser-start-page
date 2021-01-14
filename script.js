let now = new Date();
let day = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
let weekDay = now.getDay();
let hh = now.getHours();
let mm = now.getMinutes();
let ss = now.getSeconds(); 
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date_t = now.toLocaleTimeString('pt-br');

let currentMonth = Months[month];
let dayOfTheWeek = daysOfTheWeek[weekDay];

// Add 1"st", 2"nd", 3"rd" and 4"th"... endings to numbers
let th = "";
if(day.toString().slice(1,2) == "1")
  th = "st";
else if(day.toString().slice(1,2) == "2")
  th = "nd";
else if(day.toString().slice(1,2) == "3")
  th = "rd";
else
  th = "th";

let fullDate = `${dayOfTheWeek}, ${currentMonth} ${day}${th}, ${year}`;

// Good "time of the day" greeting
let timeOfTheDay = "Day";
if(date_t >= "06:00:00" && date_t < "12:00:00") 
  timeOfTheDay = "morning";
if(date_t >= "12:00:00" && date_t < "18:00:00") 
  timeOfTheDay = "afternoon"
if(date_t >= "18:00:00" || date_t < "06:00:00")
  timeOfTheDay = "night";
  
// Live clock
if(hh < 10) { hh = "0" + hh }
if(mm < 10) { mm = "0" + mm }
if(ss < 10) { ss = "0" + ss }
clock = `${hh}:${mm}:${ss}`

// Load to HTML
window.onload = function() {
  document.getElementById("timeOfTheDay").innerHTML = timeOfTheDay;
  document.getElementById("fullDate").innerHTML = fullDate;
  document.getElementById("clock").innerHTML = clock;
}

function changeName() {
  alert("To be implemented.");
}