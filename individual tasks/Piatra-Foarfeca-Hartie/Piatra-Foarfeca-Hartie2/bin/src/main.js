var humanChoice = prompt("Do you choose paper, scissors or rock ?");
var computerChoice = Math.random();

function startGame() {
    compare(humanChoice, computerChoice);
    var result = document.getElementById("result");

    var human = document.getElementById("human");
    human.innerHTML = human.innerHTML + " " + humanChoice;

    var computer = document.getElementById("computer");
    computer.innerHTML = computer.innerHTML + " " + computerChoice;
}


if (computerChoice <= 0.33)
    computerChoice = "paper"
else if (computerChoice <= 0.66)
    computerChoice = "scissors"
else computerChoice = "rock"


var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        result.innerHTML = "The result is a tie!"
    } else if (choice1 === "paper") {
        switch (choice2) {
        case "scissors":
            result.innerHTML = "Scissors wins";
            break;
        case "rock":
            result.innerHTML = "Paper wins";
            break;
        }
    } else if (choice1 === "scissors") {
        switch (choice2) {
        case "paper":
            result.innerHTML = "Scissors wins";
            break;
        case "rock":
            result.innerHTML = "Rock wins";
            break;
        }
    } else if (choice1 === "rock") {
        switch (choice2) {
        case "paper":
            result.innerHTML = "Paper wins";
            break;
        case "scissors":
            result.innerHTML = "Rock wins";
            break;
        }
    }
    else if (choice1 !== "paper" && choice1 !== "scissors" && choice1 !== "rock") {
        alert("Please choose between: paper, scissors, rock");
    }
}