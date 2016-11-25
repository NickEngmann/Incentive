var goalDate = 23;
var goalMonth = 6;
var goalYear = 2023;


// var birthdayDate = 23;
// var birthdayMonth = 6;
// var birthdayYear = 1993;
var storage = {};
var stor = true;

if (localStorage && localStorage.getItem('list')) {
 storage = JSON.parse(localStorage.getItem('list'));
  }
  else {
  storage = {
      "bDay" : 23,
      "bMonth" : 6,
      "bYear" : 1993,
      "gDay" : 23,
      "gMonth" : 6,
      "gYear": 2023,
      "gText": "Click The Logo In Top Right Corner To Set A Goal"
    }
    stor = false;
  }
  var birthday = new Date();
  birthday.setYear(storage.bYear);
  birthday.setMonth(storage.bMonth);
  birthday.setDate(storage.bDay);
  var goalText = storage.gText;

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var years = 0;
  if (days > 365){
    years = Math.floor(days/365);
    days = days%365;
  }
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
    'years' : years
  };
}

function initializeClock(id, endtime, goaltime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var secondsinDaySpan = clock.querySelector('.secondsinDay');
  var ageSpan = clock.querySelector('.age');
  var yearsSpan = clock.querySelector('.years');
  var goalSpan = clock.querySelector('.goals');

  function updateClock() {
if (localStorage && localStorage.getItem('list')) {
 storage = JSON.parse(localStorage.getItem('list'));
  }
  else {
  storage = {
      "bDay" : 23,
      "bMonth" : 6,
      "bYear" : 1993,
      "gDay" : 23,
      "gMonth" : 6,
      "gYear": 2023,
      "gText": "Click The Logo In Top Right Corner To Set A Goal"
    }
  }
    goal.setYear(storage.gYear);
    goal.setMonth(storage.gMonth);
    goal.setDate(storage.gDay);
    birthday.setYear(storage.bYear);
    birthday.setMonth(storage.bMonth);
    birthday.setDate(storage.bDay);

    var t = getTimeRemaining(endtime);
    var l = getTimeRemaining(goal);
    var current = new Date();
    var age = (current - birthday)/31557600000;
    yearsSpan.innerHTML = l.years;
    daysSpan.innerHTML = l.days;
    goalSpan.innerHTML = storage.gText;
    hoursSpan.innerHTML = ('0' + l.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + l.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + l.seconds).slice(-2);
    var secondsinDay = ((t.minutes)*60 + (t.hours)*60*60 + t.seconds);
    secondsinDaySpan.innerHTML = ('0000' + secondsinDay).slice(-5);
    ageSpan.innerHTML = age.toPrecision(12);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }

    storage = JSON.parse(localStorage.getItem('list'));

  }

  updateClock();
  var timeinterval = setInterval(updateClock, 100);
}

 	var d = new Date();
 	var h = d.getHours();
 	var m = d.getMinutes();
 	var s = d.getSeconds();
	var deadline = new Date(Date.parse(new Date()) + 1 * (24 * 60 * 60 - (60*m + s) - (h*60*60)) * 1000);
	var goal = new Date();  

  initializeClock('clockdiv', deadline);
