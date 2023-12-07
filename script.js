$(document).ready(function () {
    var currentdate = dayjs().format('MMMM D, YYYY');
    $("#currentDay").text(currentdate);

    var currentHour = dayjs().format('H');
    $("#currentHour").text(currentHour);

});

// click event listener for save button

$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});
// Get the saved info from local storage

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// Update the color of the time blocks based on the current time

function hourTracker() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
        } else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });
}
hourTracker();