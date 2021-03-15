//start quiz function
    //button needs to start timer and quiz questions

var score = 0
var timeRemaining = 60;

var body = document.querySelector("body");

//timer
var timerEl = document.getElementById("timer");

//title page
var mainEl = document.getElementById("main");
var titleText = document.getElementById("titleText");
var mainList = document.getElementById("list");

//start button
var startBtn = document.getElementById("start");

//quizpage
var quizPage = document.getElementById("quiz")


//question
var questionElement = document.getElementById("question");

//answers
var a = document.getElementById("answer_a_btn")
var b = document.getElementById("answer_b_btn")
var c = document.getElementById("answer_c_btn")
var d = document.getElementById("answer_d_btn")


var questions = [
    {
    question:"What is not a data type in JavaScript?",
    correct: "Tags",
    a: "Tags",
    b: "Arrays",
    c: "Numbers",
    d: "Boolean",
    },
    {
    question:"What?",
    correct: "fjkel",
    a: "hello",
    b: "fjkel",
    c: "Numbers",
    d: "Boolean",
    },
    {
    question:"Who?",
    correct: "you",
    a: "them",
    b: "me",
    c: "you",
    d: "her",
    },
    {
    question:"What?",
    correct: "fjkel",
    a: "Tags",
    b: "fjkel",
    c: "Numbers",
    d: "Boolean",
    },
    {
    question:"Who?",
    correct: "you",
    a: "them",
    b: "me",
    c: "you",
    d: "her",
    },
]




var currentQuestion = 0;
var totalQuestions = 4;
var stopTimer;

function pressButton(){
    quizPage.style.visibility = "hidden"

    startBtn.addEventListener("click", function(){
        startTimer(); 
        startQuestions();
    });
}

function startTimer(){
    var timeInterval = setInterval(function(){
        if (timeRemaining >= 0){
            timerEl.textContent = timeRemaining + " second(s) remain";
            timeRemaining--;         
        }else{
            timerEl.textContent = 'Time\'s Up!';
            clearInterval(timeInterval);
            finalPage();
        }
    }, 1000);
}

function startQuestions(){
    mainEl.replaceWith(quizPage);
    quizPage.style.visibility = "visible";
    var answersArray = [a, b, c, d];  
    for (var i=0; i < answersArray.length; i++){
        answersArray[i].addEventListener("click", function(){            
            if (this.innerHTML == questions[currentQuestion].correct && currentQuestion == 4){
                score ++;
                finalPage();
            }else if (this.innerHTML != questions[currentQuestion].correct && currentQuestion == 4){
                finalPage();
            }else if (this.innerHTML == questions[currentQuestion].correct){
                console.log("Correct answer");
                score++;
                currentQuestion = currentQuestion + 1;
                populate();
            } else if( this.innerHTML !== questions[currentQuestion].correct){
                console.log("Incorrect answer");
                timeRemaining -= 10;
                currentQuestion = currentQuestion + 1;
                populate();               
            } 
        }) 
    }
    populate();
}

function populate(){
   console.log(currentQuestion)
   questionElement.innerHTML = questions[currentQuestion].question;
    a.innerHTML = questions[currentQuestion].a;
    b.innerHTML = questions[currentQuestion].b;
    c.innerHTML = questions[currentQuestion].c;
    d.innerHTML = questions[currentQuestion].d;
    
}

function finalPage(){
    quizPage.replaceWith(mainEl);
    titleText.textContent = "Results";
    mainList.textContent = "Score: " + score
    mainList.setAttribute("style", "padding:30px;")
}

pressButton();


//high score sheet - try again
