//placing ids in variables to be called upon
var startEl = document.getElementById("start");
var timerEl = document.getElementById("timer");

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

//starts quiz and timer when start button is pressed
startEl.addEventListener("click", function(){
  
    document.querySelector("main").innerText= "Hello World!"
    
    countdown();
  })

  
  