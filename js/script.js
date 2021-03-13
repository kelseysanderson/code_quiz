//start quiz function
    //button needs to start timer and quiz questions

var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("button");

var timeRemaining = 90;

    

function startQuiz(){
    startBtn.addEventListener("click", function(){
        startTimer();
    });

}

function startTimer(){

    var timeInterval = setInterval(function(){

        if (timeRemaining > 1){
            timerEl.textContent = timeRemaining + "second(s) remain";
            timeRemaining--;
        } else{
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}

//quiz question template
    //add html elements for questions and answers
