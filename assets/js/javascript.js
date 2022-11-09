//creates variable for currentDay html element
var timeDisplay = $("#currentDay");
//displays time and date with minutes to user
function todayTime() {
  var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
  timeDisplay.text(currentTime);
}
//creating variables for finding the current time's hour and the html element of which hour section it is
var now = moment().hour();
var timeSlot = $(".col-9");
//changes color of time blocks to past/present/future css elements depending on current time's hour
for (var i = 0; i < timeSlot.length; i++) {
  var eventTime = Number(timeSlot[i].id);

  if (eventTime > now) {
    $(timeSlot[i]).removeClass("past").addClass("future");
  }
  if (eventTime === now) {
    $(timeSlot[i]).removeClass("past").addClass("present");
  } 
}

//upon clicking the save button, the text input is saved to local storage
$(".nine").on("click", function () {
  var calenderEvent = $(".hour-1").val();
  localStorage.setItem("event-block-1", calenderEvent);
});
$(".ten").on("click", function () {
  var calenderEvent = $(".hour-2").val();
  localStorage.setItem("event-block-2", calenderEvent);
});
$(".eleven").on("click", function () {
  var calenderEvent = $(".hour-3").val();
  localStorage.setItem("event-block-3", calenderEvent);
});
$(".twelve").on("click", function () {
  var calenderEvent = $(".hour-4").val();
  localStorage.setItem("event-block-4", calenderEvent);
});

$(".one").on("click", function () {
  var calenderEvent = $(".hour-5").val();
  localStorage.setItem("event-block-5", calenderEvent);
});

$(".two").on("click", function () {
  var calenderEvent = $(".hour-6").val();
  localStorage.setItem("event-block-6", calenderEvent);
});
$(".three").on("click", function () {
  var calenderEvent = $(".hour-7").val();
  localStorage.setItem("event-block-7", calenderEvent);
});
$(".four").on("click", function () {
  var calenderEvent = $(".hour-8").val();
  localStorage.setItem("event-block-8", calenderEvent);
});
$(".five").on("click", function () {
  var calenderEvent = $(".hour-9").val();
  localStorage.setItem("event-block-9", calenderEvent);
});

//takes text from local storage and displays it to correct time blocks each time page is reloaded
for (var i = 1; i < 10; i++) {
  var savedEvent = localStorage.getItem("event-block-" + i);
  $(".hour-" + i).val(savedEvent);
  console.log(i);
}
//displays event saved banner on top of page when the save button is clicked

$(".saveBtn").on("click", function () {
  
  $('.save-confirmation').text('Event Saved!')
  $('.save-confirmation').css({
    'text-align': 'center',
    'background-color' : '#77dd77',
})
  //makes save banner disappear after 3 seconds
  setTimeout(function() { 
    $('.save-confirmation').text('')
}, 3000);

  
});
//updates current time every second
setInterval(todayTime, 1000);



