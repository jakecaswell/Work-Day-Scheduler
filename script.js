// declare variables
var currentTime = moment().format("H");
console.log(currentTime);


// save button
$('.saveBtn').on('click', function() {
    $(".time-block").each(function() {
        var value = $(this).children('.description').val();
        var hour = $(this).attr('id');
     
      // save in localStorage
      localStorage.setItem(hour, value);
    })
  })

// load the items
$(document).ready(function() {
    // .each method so it loops through all the ids with .time-block class
    $(".time-block").each(function() {
        var hour = $(this).attr('id');
        // gets all the values with their respective hour key
        var savedTasks = localStorage.getItem(hour);
        // adds the text from localstorage onto any area that has the description class
        $(this).children('.description').text(savedTasks);
    })
})


// // // changes the color of the description depending on the time
function checkTime() {
    $('.time-block').each(function() {
        var time = $(this).attr('id');

         if (time < currentTime) {
             $(this).addClass("past");
        } else if (time === currentTime) {
             $(this).addClass("present");
         } else if (time > currentTime) {
             $(this).addClass("future");
         }
    })


 }

function loadDay() {
    var day = moment().format('MM/DD/YYYY')
    $('#currentDay').text(day);
};

loadDay();
checkTime();
