var rightQ = 0;
var wrongQ = 0;
var unansweredQ = 0;


var startBtn= $('startBtn');

$(document).ready(function(){
//Make a start button that activates the game

// //Make a timer that counts down from 2 minutes
var number = 120;


var intervalId;
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
function decrement() {
  number--;
  $("#time-left").text( number);
 
  if (number === 0) {
    stop();
  }
}
function stop() {
  clearInterval(intervalId);
}
run();
//Make a submit button
function subBtn() {
  $("myForm").submit();
}

subBtn();

//if the user gets it right, it adds a point to the points box. 
//If they get the answer worng or it times out, they lose a point
//show score once game ends
var rSpan = $("<span>").text(rightQ);
var wSpan = $("<span>").text(wrongQ);
var uSpan = $("<span>").text(unansweredQ);

var pright = $("<p>").text("Right Answers: ");
var pwrong = $("<p>").text("Wrong Answers: ");
var punanswered = $("<p>").text("Unanswered Questions: ");

pright.append(rSpan);
pwrong.append(wSpan);
punanswered.append(uSpan);

$("#answerArea").append(pright);
$("#answerArea").append(pwrong);
$("#answerArea").append(punanswered);

//case statement for correct or incorrect questions

//once game ends, display win screen
});