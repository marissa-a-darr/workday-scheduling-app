var timeDisplay = $("#currentDay");



function todayTime() {
  var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
  timeDisplay.text(currentTime);
}

var now = moment();

$('.nine').on('click', function() {
  var calenderEvent =$('.9am').val();
  localStorage.setItem("userText",calenderEvent)
})
$('.ten').on('click', function() {
  var calenderEvent =$('.10am').val();
  localStorage.setItem("userText",calenderEvent)
})
$('.eleven').on('click', function() {
  var calenderEvent =$('.11am').val();
  localStorage.setItem("userText",calenderEvent)
})
$('.twelve').on('click', function() {
  var calenderEvent =$('.12pm').val();
  localStorage.setItem("userText",calenderEvent)
})

$('.one').on('click', function() {
  var calenderEvent =$('.1pm').val();
  localStorage.setItem("userText",calenderEvent)
})

$('.two').on('click', function() {
  var calenderEvent =$('.2pm').val();
  localStorage.setItem("userText",calenderEvent)
})
$('.three').on('click', function() {
  var calenderEvent =$('.3pm').val();
  localStorage.setItem("userText",calenderEvent)
})
$('.four').on('click', function() {
  var calenderEvent =$('.4pm').val();
  localStorage.setItem("userText",calenderEvent)
})
$('.five').on('click', function() {
  var calenderEvent =$('.5pm').val();
  localStorage.setItem("userText",calenderEvent)
})











setInterval(todayTime, 1000);
