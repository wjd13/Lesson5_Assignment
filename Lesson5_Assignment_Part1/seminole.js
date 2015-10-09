//    Program Name:  Seminole Trojans 

//    Program topics:  Variables, Functions, Arrays, Loops

//    Author: Wyatt Dell

//    Date:   10/9/15

//    Filename: seminole.js


// global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                  "Thursday","Friday", "Saturday"];

// global variables
var opponents = ["Lightning", "Combines", "Combines", 
    "Combines", "Lightning", "Lightning", "Lightning", 
    "Lightning", "Barn Raisers", "Barn Raisers", 
    "Barn Raisers", "Sodbusters", "Sodbusters", "Sodbusters",
    "Sodbusters", "(off)", "River Riders", "River Riders", 
    "River Riders", "Big Dippers", "Big Dippers", 
    "Big Dippers", "(off)", "Sodbusters", "Sodbusters",
    "Sodbusters", "Combines", "Combines", "Combines", 
    "(off)", "(off)"];

// global variables
var gameLocation = 
   ["away", "away", "away", "away", "home", "home", "home",
    "home", "home", "home", "home", "away", "away", "away",
    "away", "", "away", "away", "away", "away", "away",
    "away", "", "home", "home", "home", "home", "home",
    "home", "", ""];

// function to place daysOfWeek values in header row cells 
function addColumnHeaders() {

var i = 0;
  while (i < 7) {
    document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
    i++;

}//end of while loop 
}//end of addColumnHeaders function

// function to place day of month value in first p element 
// within each table data cell that has an id 
function addCalendarDates() {

var i = 1;
var paragraphs = "";
  
  do {
    var tableCell = document.getElementById("08-" + i);
    paragraphs = tableCell.getElementsByTagName("p");
    paragraphs[0].innerHTML = i;
    i++;
} while (i < 32);//end of do/while loop

}//end of addCalendarDates function

//This function will place opponents and gameLocation values in the calendar
// second p element within each table data cell that has an id
function addGameInfo() {

var paragraphs = "";
   for (var i = 0; i < 31; i++) {
      var date = i+1;
      var tableCell = document.getElementById("08-" + date);
      paragraphs = tableCell.getElementsByTagName("p");
      paragraphs[1].innerHTML += opponents[i];
     if (gameLocation[i] === "away"){
       
       paragraphs[1].innerHTML = "@ ";
       paragraphs[1].innerHTML += opponents[i];
       } //end of if
     else if (gameLocation[i] === "home") {
             paragraphs[1].innerHTML = "vs ";
             paragraphs[1].innerHTML += opponents[i];
      }//end of else if
     
   }//end of the for loop

}//end of function

//This statement will add the column headers to the page immediately when the page loads in the browser
window.addEventListener("load", setUpPage(), false);

// function to load the calendar content in the calendar when the page loads
function setUpPage() {
   addColumnHeaders();
   addCalendarDates();
   addGameInfo();
}//end of setUpPage function