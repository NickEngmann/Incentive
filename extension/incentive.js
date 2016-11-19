function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  // var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var secondsinDaySpan = clock.querySelector('.secondsinDay');
  var ageSpan = clock.querySelector('.age');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    // console.log(t.hours);
    // console.log(t.minutes);
    // console.log(t.seconds);
    // daysSpan.innerHTML = t.days;
    var current = new Date();
    var age = (current - birthday)/31557600000;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    var secondsinDay = ((t.minutes)*60 + (t.hours)*60*60 + t.seconds);
    secondsinDaySpan.innerHTML = ('0000' + secondsinDay).slice(-5);
    ageSpan.innerHTML = age.toPrecision(12);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 100);
}

	var birthday = new Date("June 23, 1993 01:00:00");
 	var d = new Date();
 	var h = d.getHours();
 	var m = d.getMinutes();
 	var s = d.getSeconds();
// 	secondsInDay = (24*60*60) - (h*60*60) - (m*60) - s;
	
	var deadline = new Date(Date.parse(new Date()) + 1 * (24 * 60 * 60 - (60*m + s) - (h*60*60)) * 1000);
	initializeClock('clockdiv', deadline);
