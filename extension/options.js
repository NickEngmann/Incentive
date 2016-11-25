// Saves options to chrome.storage
var storage = {}
  if (localStorage && localStorage.getItem('list')) {
     storage = JSON.parse(localStorage.getItem('list'));
     var bD= document.getElementById('birthDay');
     var bM= document.getElementById('birthMonth');
     var bY= document.getElementById('birthYear');
     var gD= document.getElementById('goalDay');
     var gM= document.getElementById('goalMonth');
     var gY= document.getElementById('goalYear');
     var gT= document.getElementById('goalText');
      bD.value = storage.bDay;
      bM.value = storage.bMonth + 1;
      bY.value = storage.bYear;
      gD.value = storage.gDay;
      gM.value = storage.gMonth + 1;
      gY.value = storage.gYear;
      gT.value = storage.gText;
}

function save_options() {
  // var color = document.getElementById('topic').value;
  // goalText = document.getElementById('topic').value;
  // console.log(goalText);
  var localbirthDay = document.getElementById('birthDay').value;
  var localbirthMonth = document.getElementById('birthMonth').value;
  var localbirthYear = document.getElementById('birthYear').value;
  var localgoalDay = document.getElementById('goalDay').value;
  var localgoalMonth = document.getElementById('goalMonth').value;
  var localgoalYear = document.getElementById('goalYear').value;
  var localgoalText = document.getElementById('goalText').value;

  storage = {
    "bDay": localbirthDay,
    "bMonth": localbirthMonth - 1,
    "bYear": localbirthYear,
    "gText": localgoalText,
    "gDay": localgoalDay,
    "gMonth": localgoalMonth - 1,
    "gYear": localgoalYear
  };
  localStorage.setItem('list', JSON.stringify(storage));
  console.log(storage);
  // chrome.storage.sync.set({
  //   "0": "June 23rd 1993"
  // // });
  // var likesColor = document.getElementById('like').checked;
  // chrome.storage.sync.set({
  //   favoriteColor: color,
  //   likesColor: likesColor
  // }, function() {
  //   // Update status to let user know options were saved.
  //   var status = document.getElementById('status');
  //   status.textContent = 'Options saved.';
  //   setTimeout(function() {
  //     status.textContent = '';
  //   }, 750);
  // });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
// function restore_options() {
//   Use default value color = 'red' and likesColor = true.
//   chrome.storage.sync.get({
//     favoriteColor: 'red',
//     likesColor: true
//   }, function(items) {
//     document.getElementById('topic').value = items.favoriteColor;
//     document.getElementById('like').checked = items.likesColor;
//   });
// }
// document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

// Saves options to chrome.storage
// function save_options() {
//   var color = document.getElementById('topic').value;
//   goalText = document.getElementById('topic').value;
//   console.log(goalText);
//   var likesColor = document.getElementById('like').checked;
//   chrome.storage.sync.set({
//     favoriteColor: color,
//     likesColor: likesColor
//   }, function() {
//     // Update status to let user know options were saved.
//     var status = document.getElementById('status');
//     status.textContent = 'Options saved.';
//     setTimeout(function() {
//       status.textContent = '';
//     }, 750);
//   });
// }

// // Restores select box and checkbox state using the preferences
// // stored in chrome.storage.
// function restore_options() {
//   // Use default value color = 'red' and likesColor = true.
//   chrome.storage.sync.get({
//     favoriteColor: 'red',
//     likesColor: true
//   }, function(items) {
//     document.getElementById('topic').value = items.favoriteColor;
//     document.getElementById('like').checked = items.likesColor;
//   });
// }
// document.addEventListener('DOMContentLoaded', restore_options);
// document.getElementById('save').addEventListener('click',
//     save_options);