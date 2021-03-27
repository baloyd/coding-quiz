//placing ids in variables to be called upon
var startEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var msgDiv = document.querySelector("#msg");
var questionEl = document.getElementById("questions");
var aButton = document.getElementById("a")
var bButton = document.getElementById("b")
var cButton = document.getElementById("c")
var dButton = document.getElementById("d")


//question and answer object
var questions = [{
question: "Which is a data type not used in Javascript?",
choiceA:"Array",
choiceB:"Boolean",
choiceC:"String",
choiceD:"Class",
correctAnswer: 'd'},

 {
  question:"Which built-in method removes the last element from an array and returns that element?",
  choiceA:"push()",
  choiceB:"pop()",
  choiceC:"pull()",
  choiceD:"split()",
  correctAnswer: 'b'},
 {
  question:"The condition in an if / else statement is enclosed within____.",
  choiceA:"quotes",
  choiceB:"curly brackets",
  choiceC:"paranetheses",
  choiceD:"square brackets",
  correctAnswer:'c'},
 {
  question:"What does DOM stand for?",
  choiceA:"Directory Ordinance Module",
  choiceB:"Distance Of Matter",
  choiceC:"Document Object Model",
  choiceD:"Directory Object Map",
  correctAnswer:'c'},
 {
  question:"Arrays in Javascript can be used to store____.",
  choiceA:"numbers ",
  choiceB:"strings",
  choiceC:"booleans",
  choiceD:"all of the above",
  correctAnswer:'d'},
 {
  question:"String values must be enclosed within _____ when being assigned to variables",
  choiceA:"quotes",
  choiceB:"curly brackets",
  choiceC:"commas",
  choiceD:"parentheses",
  correctAnswer:'a'},
 {
  question:"Which of the following is not a Javascript event?",
  choiceA:"stretch",
  choiceB:"click",
  choiceC:"hover",
  choiceD:"mouseover",
  correctAnswer:'a'},
  

]
//global variables
var questionBank = 0
var finalQuestionBank = questions.length;
var correct;
var score = 0
var timeLeft = 75;

//This function will cycle through the question object to produce the questions and answers 
function generateQuestion(){

  var currentQuestion = questions[questionBank];
  questionEl.innerHTML = "<h1>"+currentQuestion.question+"</h1>"
  aButton.innerHTML = "<button>"+currentQuestion.choiceA+"</button"
  bButton.innerHTML = "<button>"+currentQuestion.choiceB+"</button"
  cButton.innerHTML = "<button>"+currentQuestion.choiceC+"</button"
  dButton.innerHTML = "<button>"+currentQuestion.choiceD+"</button"
};

//displays message when user answers
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}




//setInterval function to create the counter 
function countdown() {
  

  var timeInterval = setInterval(function () {
    timeLeft--;
    if(timeLeft===0 || questionBank ===finalQuestionBank){
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
    generateQuestion();
    
    //timer starts when button is pressed
    countdown();
  })


  // This function checks the response to each answer 
function checkAnswer(answer){
  correct = questions[questionBank].correctAnswer;

  if (answer === correct && questionBank !== finalQuestionBank){
      score++;
      document.getElementById("msg").style.display= "flex";
      displayMessage("success","That Is Correct!");
      questionBank++;
      generateQuestion();
      
  }else if (answer !== correct && questionBank !== finalQuestionBank){
    document.getElementById("msg").style.display= "flex";
    displayMessage("error","That Is Incorrect.");
    
      questionBank++;
      timeLeft -=10;
      generateQuestion();
      
  }
}

 



  