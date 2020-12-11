
// getting the date and time and adding that to the html text
var todaysDate = moment().format("MMM Do YY"); 
$(".currentDay").text(todaysDate);  

//save what the user entered into local storage
//var userEvent = $("#user-input").val().trim();
//localStorage.setItem("event", JSON.stringify(userEvent));
//console.log(localStorage.getItem("event"));

//getting the hour for future use
var currentHour= moment().format("H");
console.log(currentHour)

// event listener for the save buttons
$(".saveBtn").click(function(event) {
    event.preventDefault();
    alert("btn click");
});

//create rows and coloms dynamicly to manipulate
var dayHour = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17" ]
var hoursDiv = document.getElementById("time-block");
dayHour.forEach(function(hour) {

    // For each drink in the array, we create a new paragraph to hold that text.
    // A new paragraph will be created with each iteration of the loop.
    var newHourP = document.createElement("p");

    // We then assign the the text of this paragraph to be the text in the array item.
    newHourP.textContent = hour;

    // We then add the paragraph to the our main div on the page ("#drink-options")
    hoursDiv.appendChild(newHourP);
  });



//make a function to change the colors based on past, present, future
function currentTimeblock() {
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);
        if (blockHour < currentHour) {
            $(this).addClass("future");
        } else if (blockHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    });
}

currentTimeblock();
