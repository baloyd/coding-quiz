//placing ids in variables to be called upon
var startEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var aButton = document.getElementById("a")
var bButton = document.getElementById("b")
var cButton = document.getElementById("c")
var dButton = document.getElementById("d")


//question and answer bank
var questions = [{
question: "Which is a data type not used in Javascript?",
choiceA:"Array",
choiceB:"Boolean",
choiceC:"String",
choiceD:"Class",
correctAnswer: "d",


  question:"Which built-in method removes the last element from an array and returns that element?",
  choiceA:"push()",
  choiceB:"pop()",
  choiceC:"pull()",
  choiceD:"split()",
  correctAnswer: "b",

  question:"The condition in an if / else statement is enclosed within____.",
  choiceA:"quotes",
  choiceB:"curly brackets",
  choiceC:"paranetheses",
  choiceD:"square brackets",
  correctAnswer:"c",

  question:"What does DOM stand for?",
  choiceA:"Directory Ordinance Module",
  choiceB:"Distance Of Matter",
  choiceC:"Document Object Model",
  choiceD:"Directory Object Map",
  correctAnswer:"c",

  question:"Arrays in Javascript can be used to store____.",
  choiceA:"numbers and strings",
  choiceB:"other arrays",
  choiceC:"booleans",
  choiceD:"all of the above",
  correctAnswer:"d",

  question:"String values must be enclosed within _____ when being assigned to variables",
  choiceA:"quotes",
  choiceB:"curly brackets",
  choiceC:"commas",
  choiceD:"parentheses",
  correctAnswer:"a",

  question:"Which of the following is not a Javascript event?",
  choiceA:"stretch",
  choiceB:"click",
  choiceC:"hover",
  choiceD:"mouseover",
  correctAnswer:"a",
  

}

]

//setInterval function to create the counter 
function countdown() {
  var timeLeft = 75;

  var timeInterval = setInterval(function () {
    timeLeft--;
    if(timeLeft===0){
      clearInterval(timeInterval);
      alert("Game Over!");
    }
    timerEl.textContent ="Time: "+timeLeft;
    
  },1000)}

//starts quiz when start button is pressed
startEl.addEventListener("click", function(){
  
  //after button is pressed,changes main part of the page to the first question
    document.querySelector("#container").style.display = "none";
    document.querySelector("#quiz").style.display = "inline-block";
    
    


    //timer starts when button is pressed
    countdown();
  })

  
  