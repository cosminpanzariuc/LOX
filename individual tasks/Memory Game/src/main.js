var cardsArray = [];
var memoryValuesArr = []; 
var memoryIdArr = []; 
var flippedNr; //this will help to count flipped cards (useful for identify when the game is over)


$(document).ready(resetCurrentBoard);

function resetCurrentBoard() { //dynamically generates a new board
    cardsArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    var outputCards = "";
    flippedNr = 0;
    shuffleArr(cardsArray);
    duplicateValues();

    for (var i = 0; i < cardsArray.length; i++) {
        outputCards += '<div class = "back-card back-card-photo" id = "card_' + i + '" onclick = "flipCard(this,\'' + cardsArray[i] + '\')"></div>';
    }

    document.getElementById("board").innerHTML = outputCards;
    $("#reset-btn").off("click");
    setTimeout(function () {$("#instruction").css("display", "block")}, 300);
    $("#feedback").css("display", "none");
}


function flipCard(card, value) { //populate arrays with values / id's
    if (card.innerHTML == "" && memoryValuesArr.length < 2) { 
        memoryValuesArr.push(value); 
        memoryIdArr.push(card.id); 
        card.innerHTML = " ";
        $(card).addClass("flip-forward");
        
        setTimeout(function(){
            $(card).addClass("back_card_" + value);
        },300);

        if (memoryValuesArr.length == 2) { //check for a perfect match between the only 2 items in the memoryValuesArr array
            if (memoryValuesArr[0] == memoryValuesArr[1]) { //this will run JUST for a PERFECT MATCH
                memoryValuesArr = [];
                memoryIdArr = [];
                flippedNr += 2;
                if (flippedNr == cardsArray.length) { //game over
                    $(".back-card").css("cursor", "auto");
                    $("#instruction").css("display", "none");
                    setTimeout(function() {$("#feedback").css("display", "block");}, 340);
                    $("#reset-btn").on("click", resetCurrentBoard);
                }
            } else { //run this if it's not a perfect match
                setTimeout(function () {
                    var wrongCard1 = document.getElementById(memoryIdArr[0]);
                    var wrongCard2 = document.getElementById(memoryIdArr[1]);
                    
                    $(wrongCard1).removeClass("flip-forward").addClass("flip-backward");
                    $(wrongCard2).removeClass("flip-forward").addClass("flip-backward");
                    
                    var elem1 = memoryValuesArr[0];
                    var elem2 = memoryValuesArr[1];
 
                    setTimeout(function () {
                        $(wrongCard1).removeClass("flip-backward").removeClass("back_card_" + elem1)
                        $(wrongCard2).removeClass("flip-backward").removeClass("back_card_" + elem2);
                        wrongCard1.innerHTML = "";
                        wrongCard2.innerHTML = "";
                    }, 340);

                    memoryValuesArr = [];
                    memoryIdArr = [];
                }, 700);
            }
        }
    }
}


function shuffleArr(myArray) { 
    var currentIndex = myArray.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = myArray[currentIndex];
        myArray[currentIndex] = myArray[randomIndex];
        myArray[randomIndex] = temporaryValue;
    }
    return myArray.concat(myArray);
}

function duplicateValues() {
    var tempArray = [];
    for (var i = 0; i < cardsArray.length; i++) {
        tempArray.push(cardsArray[i]);
    }
    cardsArray = cardsArray.concat(cardsArray);
}




