
// getting the date and time and adding that to the html text
var todaysDate = moment().format("MMM Do YY"); 
$('.currentDay').text(todaysDate);  

var userEvent = $("#user-input").val().trim();
// event listener for the save buttons
$(".saveBtn").click(function() {
// save user input into local storage
localStorage.setItem("event", userEvent)
alert(localStorage.getItem("event"));
    alert( "btn click" );
});
