var whichOne = 0; //refers to which question is on the run - each possition from shuffledOrderArr
var correct = 0; 
var shuffledOrderArr = [];
var newPosition; //shuffled number for the index of the question
var questionList = [
    ["What is 5 x 5 ?", "20", "25", "18", "B"],
    ["What is 20 % 5 ?", "3", "18", "0", "C"],
    ["What is 18 / 9 ?", "2", "3", "4", "A"],
    ["What is 8 + 12 ?", "4", "21", "20", "C"],
    ["What is sqrt 121 ?", "9", "11", "12", "B"],
];

$(document).ready(function () {
    shuffleOrder();
    runQuizTest();
});

function shuffleOrder() {//after each refresh - question order will be shuffled
    while (shuffledOrderArr.length < questionList.length) {
        var randomIndex = Math.floor(Math.random() * questionList.length)
        var found = false;
        if (shuffledOrderArr.indexOf(randomIndex) > -1) {
            found = true;
        }
        if (!found) shuffledOrderArr[shuffledOrderArr.length] = randomIndex;
    } 
}

function runQuizTest() {
    newPosition = shuffledOrderArr[whichOne]; //this will target each position from the shuffled array
    var quiz = document.getElementById("quiz");
    var status = document.getElementById("quiz_status");
    if (whichOne >= questionList.length) { //the quiz runs as long as the questionList is available
        quiz.innerHTML = "<h2>You have " + correct + " of " + questionList.length + " correct answers.</h2>"
        status.innerHTML = "You have finished!";
        return false;
    } else { // set the status, the questions, the answers and a button for check answer
        status.innerHTML = "Question " + (whichOne + 1) + " of " + questionList.length;
        var currentQuestion = questionList[newPosition][0];
        var answerA = questionList[newPosition][1];
        var answerB = questionList[newPosition][2];
        var answerC = questionList[newPosition][3];
        quiz.innerHTML = "<h3>" + currentQuestion + "</h3>"
        quiz.innerHTML += "<input type='radio' name='choices' value='A'>" + answerA + "<br/>";
        quiz.innerHTML += "<input type='radio' name='choices' value='B'>" + answerB + "<br/>";
        quiz.innerHTML += "<input type='radio' name='choices' value='C'>" + answerC + "<br/><br/>";
        quiz.innerHTML += "<button onclick='checkAnswer()'>Submit</button>"
    }
}

function checkAnswer() { //check if user choice (input value) meets the correct answer from initial array  - questionList - and runs the next question
    var choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            var userChoice = choices[i].value;
        }
    }
    if (userChoice == questionList[newPosition][4]) {
        correct++;
    }
    whichOne++;
    runQuizTest();
}
