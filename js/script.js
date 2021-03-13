//start quiz function
    //button needs to start timer and quiz questions

var score = 0
var timeRemaining = 60;

var body = document.querySelector("body");

//timer
var timerEl = document.getElementById("timer");

//title page
var mainEl = document.getElementById("main");

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

var questions = [{
    question:"who?",
    correct: "me",
    a: "me",
    b: "you",
    c: "them",
    d: "her",
}]

var currentQuestion = 0;

function pressButton(){
    quizPage.style.visibility = "hidden"

    startBtn.addEventListener("click", function(){
        startTimer(); 
        swapContent();
    });
}

function startTimer(){
    var timeInterval = setInterval(function(){
        if (timeRemaining > 1){
            timerEl.textContent = timeRemaining + " second(s) remain";
            timeRemaining--;         
        } else{
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}

function swapContent(){

    mainEl.replaceWith(quizPage);

    quizPage.style.visibility = "visible";

    populate();

}

function populate(){
    //replace 0 with current quest var
    questionElement.innerHTML = questions[currentQuestion].question;
    a.innerHTML = questions[currentQuestion].a;
    b.innerHTML = questions[currentQuestion].b;
    c.innerHTML = questions[currentQuestion].c;
    d.innerHTML = questions[currentQuestion].d;
    
    a.addEventListener("click", function(){
        //compare the button text of clicked button to correct answer
        if (a.innerHTML == questions[0].correct){
            score++;
            console.log(score);
        } else {
            console.log("hi")
        }
    })

    b.addEventListener("click", function(){
        //compare the button text of clicked button to correct answer
        if (b.innerHTML == questions[0].correct){
            score++;
            console.log(score);
        } else {
            timeRemaining -= 10;
        }

        
    })

    c.addEventListener("click", function(){
        //compare the button text of clicked button to correct answer
        if (c.innerHTML == questions[0].correct){
            score++;
            console.log(score);
        } else {
            timeRemaining -= 10;
        }

        
    })

    d.addEventListener("click", function(){
        //compare the button text of clicked button to correct answer
        if (d.innerHTML == questions[0].correct){
            score++;
            console.log(score);
        } else {
            timeRemaining -= 10;
        }

        
    })



    // a.innerHTML = questionOne[2].A;

}

pressButton();


