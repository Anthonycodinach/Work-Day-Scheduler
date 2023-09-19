// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dayjs = dayjs();
$(document).ready(function () {

var currentTime = dayjs.format("dddd, MMMM DD, YYYY");
$("#currentDay").text(currentTime);
var currentHour = dayjs.hour();
var saveNote = $(".saveBtn")

// Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
var timeBlock = $(".description");
timeBlock.each(function () {
  var timeBlockId = $(this).attr("id");

  if (currentHour > timeBlockId) {
    $(this.addClass("past"))
  }
  else if (currentHour === parseInt(timeBlockId)) {
    $(this).removeClass("past");
    $(this).addClass("present");
  }
  else {
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).removeClass("future")
  }
});
saveNote.on("click", function(){
  var id = $(this).attr("id")
  var dailyTask = $(this).siblings(".description").val()
  localStorage.setItem(id, dailyTask)
  renderTask()
});

// Function call
renderTask()
});

function renderTask() {
  for (var i = 9; i < 18; i++) {
var foundTask = localStorage.getItem(i)
$(`#${i}`).text(foundTask)
  }
};
