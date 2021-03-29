//placing ids in variables to be called upon
var startEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var msgDiv = document.querySelector("#msg");
var questionEl = document.getElementById("questions");
var aButton = document.getElementById("a")
var bButton = document.getElementById("b")
var cButton = document.getElementById("c")
var dButton = document.getElementById("d")
var finalScore = document.getElementById("finalScore")
var inputInitials = document.getElementById("inputInitials")
var subButton = document.getElementById("submit");
var userInitials = document.getElementById("userInitials");
var userScore = document.getElementById("userScore");

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
if (questionBank < finalQuestionBank){
  var currentQuestion = questions[questionBank];
  questionEl.innerHTML = "<h1>"+currentQuestion.question+"</h1>"
  aButton.innerHTML = "<button>"+currentQuestion.choiceA+"</button"
  bButton.innerHTML = "<button>"+currentQuestion.choiceB+"</button"
  cButton.innerHTML = "<button>"+currentQuestion.choiceC+"</button"
  dButton.innerHTML = "<button>"+currentQuestion.choiceD+"</button"
}};

//displays message when user answers
function displayMessage(type, message) {
  document.getElementById("msg").style.display = "block";
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}


//setInterval function to create the counter 
function countdown() {
  

  var timeInterval = setInterval(function () {
    timeLeft--;
    if(timeLeft===0 || questionBank ===finalQuestionBank){
      clearInterval(timeInterval);
      gameOver ();
      
      
    }
    timerEl.textContent ="Time: "+timeLeft;
    
  },1000)}

 

//starts quiz when start button is pressed
startEl.addEventListener("click", function(){
  
  //after button is pressed,changes main part of the page to the first question
    document.querySelector("#container").style.display = "none";
    document.querySelector("#scorePage").style.display = "none";
    document.querySelector("#quiz").style.display = "inline-block";
    generateQuestion();
    
    //timer starts when button is pressed
    countdown();
  })
//stops message from being displayed 
  function stopAnswer (){ document.getElementById("msg").style.display="none"}

  // This function checks the response to each answer 
function checkAnswer(answer){
  correct = questions[questionBank].correctAnswer;

  if (answer === correct && questionBank !== finalQuestionBank){
      score++;
      displayMessage("success","Correct!");
      setTimeout (stopAnswer,1000);
      questionBank++;
      generateQuestion();
      
  }else if (answer !== correct && questionBank !== finalQuestionBank){
      displayMessage("error","Wrong!");
      setTimeout (stopAnswer,1000);
      questionBank++;
      timeLeft -=10;
      generateQuestion();
      
      
  } 
  }
//this function shows the highscore page retrieved from local storage.
function showHighscore(){
  document.querySelector("#gameOver").style.display = "none";
  document.querySelector("#scorePage").style.display = "inline-flex";

  localStorage.getItem("userInitials");
  localStorage.getItem("userScore");
  userInitials.textContent = inputInitials.value
  userScore.textContent = score
}

//this allows the user to see the high score page when the view highscore link is clicked.
document.querySelector("#scoreStorage").addEventListener("click", function () {
  document.querySelector("#container").style.display = "none";
  showHighscore();
})

document.querySelector("#goBack").addEventListener("click",function(){
  document.querySelector("#container").style.display = "inline-block";
  document.querySelector("#scorePage").style.display = "none";
})


  //this function blocks the quiz screen and displays the gameover screen, displays the users final score and allows for input.
  function gameOver(){
  document.querySelector("#quiz").style.display = "none";
  document.querySelector("#gameOver").style.display = "block";
  finalScore.textContent = "Your final score is "+score;

  subButton.addEventListener("click", function() {
    
    if (inputInitials.value === "") {
      displayMessage("error", "initials cannot be blank");
      
  }else {
    displayMessage("success", "Highscore inputted successfully");
    
    localStorage.setItem("userInitials", inputInitials);
    localStorage.setItem("userScore", score);
     showHighscore();
  }});
}

  
