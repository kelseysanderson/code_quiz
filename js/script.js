var score = 0
var timeRemaining = 60;
var currentQuestion = 0;
var totalQuestions = 0;
var timeInterval = null;
//body
var body = document.querySelector("body");
//header
var timerEl = document.getElementById("timer");
var highScoreLink = document.getElementById("high-score-link");
//title page
var startBtn = document.getElementById("start");
var mainEl = document.getElementById("main");
var titleText = document.getElementById("titleText");
//quizPage
var quizPage = document.getElementById("quiz");
var mainList = document.getElementById("list");
//finalPage
var listOne = document.getElementById("listOne");
var listTwo = document.getElementById("listTwo");
var listThree = document.getElementById("listThree");
var listFour = document.getElementById("listFour");
//form variables for finalPage
var form = document.createElement("form");
var label = document.createElement("label");
var form = document.createElement("form");
var label = document.createElement("label");
var submit = document.createElement("button");
//highScorePage
var highScorePage = document.getElementById("high-scores");
//quiz question element
var questionElement = document.getElementById("question");
//answer element
var answers = document.getElementById("answers");
//individual answer buttons
var a = document.getElementById("answer_a_btn");
var b = document.getElementById("answer_b_btn");
var c = document.getElementById("answer_c_btn");
var d = document.getElementById("answer_d_btn");
//user high score empty object
var userHighScore = {
    init:"" ,
    scr:"" ,
}
var userScores = document.getElementById("user-scores")
//storage
var userInfo = localStorage.getItem("high-scores")
//if nothing is typed in box, it is empty
if (userInfo == null){
    userInfo = [];
}else{
    userInfo = JSON.parse(userInfo);
}
//question object array
var questions = [
    {
    question:"1. What is not a data type in JavaScript?",
    correct: "Tags",
    a: "Tags",
    b: "Arrays",
    c: "Numbers",
    d: "Boolean",
    },
    {
    question:"2. In which element ('<>') in the HTML do we put JavaScript?",
    correct: "script",
    a: "style",
    b: "div",
    c: "script",
    d: "javascript",
    },
    {
    question:"3. What variable declaration is correct?",
    correct: "var x = 0",
    a: "variable(x) = 0",
    b: "var x = 0",
    c: "x = 0",
    d: "var'x' = 0",
    },
    {
    question:"4. Which operator represents equal in value and type?",
    correct: "===",
    a: "!=",
    b: "&&",
    c: "==",
    d: "===",
    },
    {
    question:"5. What is the correct way to call a function?",
    correct: "callFunction()",
    a: "callFunction()",
    b: "(callFunction)",
    c: "call Function:",
    d: "call(function)",
    },
    {
    question:"6. How is a comment added in JavaScript?",
    correct: "//",
    a: "&lt!-- --!&gt",
    b: "//",
    c: "**",
    d: "--",
    },
    {
    question:"7. What operator is used to determine the data type of a variable?",
    correct: "typeof",
    a: "datatype",
    b: "showtype",
    c: "displaytype",
    d: "typeof",
    },
    {
    question:"8. What math function would round (x) down?",
    correct: "Math.floor(x)",
    a: "Math.floor(x)",
    b: "Math.down(x)",
    c: "math.floor(x)",
    d: "Math.ceil(x)",
    },
    {
    question:"9. Which is an example of the beginning of a for loop?",
    correct: "for(i = 0; i < 10; i++)",
    a: "for(i = 0; i < 10; i++)",
    b: "for(i==0)",
    c: "for(i ++; i > 7)",
    d: "for(i = 0),(i < 10),(i++)",
    },
    {
    question:"10. What scope would a variable declared outside of any function have?",
    correct: "global",
    a: "local",
    b: "wide",
    c: "global",
    d: "narrow",
    },
]

function pressButton(){
    quizPage.style.visibility = "hidden";
    startBtn.addEventListener("click", function(){
        startTimer(); 
        startQuestions();
    });
}

function startTimer(){
     timeInterval = setInterval(function(){
        if (timeRemaining >= 0){
            timerEl.textContent = timeRemaining + " second(s) remain";
            timeRemaining--;         
        }else if (timeRemaining <= 0){
            finalPage();
            clearInterval(timeInterval);           
        }
    }, 1000);
}

function startQuestions(){
    mainEl.replaceWith(quizPage);
    quizPage.style.visibility = "visible";
    var answersArray = [a, b, c, d];  
    for (var i=0; i < answersArray.length; i++){
        answersArray[i].addEventListener("click", function(){                   
        if (this.innerHTML == questions[currentQuestion].correct && currentQuestion == 9){
            score++;
            finalPage();
            }else if (this.innerHTML != questions[currentQuestion].correct && currentQuestion == 9){
                finalPage();
            }else if (this.innerHTML == questions[currentQuestion].correct){
                score++;
                currentQuestion = currentQuestion + 1;
                populate();
            } else if( this.innerHTML !== questions[currentQuestion].correct){
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
    clearInterval(timeInterval);
    quizPage.replaceWith(mainEl);

    //replace title page text with results
    titleText.textContent = "Results";
    listOne.textContent = "Your score: " + score;
    mainList.setAttribute("style", "padding:25px;");
    
    //add form
    listTwo.replaceWith(form);
    
    //create label and input elements for form
    label = document.createElement("label");
    input = document.createElement("input");
    submit = document.createElement("submit");
    tryAgain = document.createElement("button");
    
    //append label input and button to form
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submit);
    form.appendChild(tryAgain);

    //set attributes and add text content for form, label, input and submit
    form.setAttribute("type", "text-input;");
    label.setAttribute("for", "initials");
    label.textContent = "Enter Your Initials:  ";
    input.setAttribute("type", "text");
    input.setAttribute("id","initials");
    submit.setAttribute("id", "submitBtn");
    submit.setAttribute("action","");
    submit.textContent = "Submit";
    tryAgain.setAttribute("id","try-again");
    tryAgain.textContent = "Try Again";

    //removes list items from the main page
    listThree.remove();
    listFour.remove();
    startBtn.remove();
    header = document.getElementById("header");
    tryAgain.addEventListener("click", function(){
    pressButton();
    });
    //click on submit button, store user info
    submit.addEventListener("click", function(event){
        var initials = document.getElementById("initials");
        userHighScore = {
            init: initials.value,
            scr: score,
            }
        userInfo.push(userHighScore)
        localStorage.setItem("high-scores", JSON.stringify(userInfo));
        highScores();
    });      
}

//get stored data and display on high score page
function highScores(){
    quizPage.replaceWith(highScorePage);
    mainEl.replaceWith(highScorePage);
    timerEl.remove();
    highScoreLink.remove();
    header= document.getElementById("header");
    header.innerHTML += "<h1> Highscores </h1>";
    var clearScores = document.getElementById("clear-scores");
    clearData= document.createElement("button");
    clearScores.appendChild(clearData);
    clearData.textContent = "Clear Data and Try Again";

    for (let i = 0; i < userInfo.length; i++) {
        var init = userInfo[i].init;
        var scr = userInfo[i].scr;
        userScores.innerHTML += "<li id = user-list>" + init + ": " + scr + "</li>"
    }
    clearData.addEventListener("click", function(){
        window.localStorage.removeItem("high-scores");
        location.reload(highScores);
        return false;
    });
}


 //go to highScore page if high score link is clicked.
 highScoreLink.addEventListener("click", function(){
    highScores();
    });

//start quiz
pressButton();


