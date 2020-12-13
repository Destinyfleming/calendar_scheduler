var timeBlocks = $(".container");
var btn = document.querySelectorAll("button");

// getting the date and time and adding that to the html text
var todaysDate = moment().format("MMM Do YY"); 
$(".currentDay").text(todaysDate);  

//make arrays to reference diffent hours of the day 
var dayHour = ["8 AM","9 AM","10 AM","11 AM","12 AM","1 PM","2 PM","3 PM","4 PM","5 PM"];
var hourID = ["8","9","10","11","12","13","14","15","16","17"];

//create rows and coloms dynamicly to manipulate
for (var i = 0; i < dayHour.length; i++){
    var newTimeBlock = $("<div class='row time-block'>").attr("id", hourID[i]);
    var newCol = $("<div class='hour col-1'>")
    timeBlocks.append(newTimeBlock);
    newCol.text(dayHour[i]);
    newTimeBlock.append(newCol);

    var textCol = $("<textarea class='col-10'>");
    textCol.text();
    newTimeBlock.append(textCol);

    var newBtn = $("<button type='button' class='saveBtn col-1 far fa-save'>");
    newBtn.text();
    newTimeBlock.append(newBtn);
}

//save what the user entered into local storage
function getLocal(){
    ("textarea")[dayHour].value = localStorage.getItem("event");
}

var localId =[0,1,2,3,4,5,6,7,8,9]
$("button").on("click", function(event) {
    event.preventDefault();
    var textArea1 = $("textarea")[dayHour].value;

    localStorage.setItem("event", textArea1);
});

//make a function to change the colors based on past, present, future
function hourColorFunction() {
    var hourNow = moment().hours();
    $(".time-block").each(function() {
        var scheduleHour = parseInt($(this).attr("id").split(" ")[0]);

        if (scheduleHour < hourNow) {
            $(this).addClass("past");
        } else if (scheduleHour === hourNow) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
}

hourColorFunction();
