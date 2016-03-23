var btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9;
var arr = [];

$(document).ready(init);

function init() {

    $(".btn").attr("disabled", false).css("cursor", "pointer");

    btn1 = document.getElementById("btn1");
    btn2 = document.getElementById("btn2");
    btn3 = document.getElementById("btn3");
    btn4 = document.getElementById("btn4");
    btn5 = document.getElementById("btn5");
    btn6 = document.getElementById("btn6");
    btn7 = document.getElementById("btn7");
    btn8 = document.getElementById("btn8");
    btn9 = document.getElementById("btn9");

    $(".btn").bind("click", clickNumber);
    $("#btnRandom").bind("click", doReset);

    arr = [1, 2, 3, 4, 5, 6, 7, 8, " "];

    shuffleArray(arr);

    for (var k = 1; k <= arr.length; k++) {
        document.getElementById("btn" + k).value = arr[k - 1];
    }
}


function clickNumber(e) {
    var currentClick = e.currentTarget;
    var currentTargetID = currentClick.id;
    var currentIndex = currentTargetID.substr(currentTargetID.length - 1, 1);

    switch (currentTargetID) {

    case "btn1":
        switchAlgorithm(currentClick, btn2);
        switchAlgorithm(currentClick, btn4);
        break;

    case "btn2":
        switchAlgorithm(currentClick, btn1);
        switchAlgorithm(currentClick, btn3);
        switchAlgorithm(currentClick, btn5);
        break;

    case "btn3":
        switchAlgorithm(currentClick, btn2);
        switchAlgorithm(currentClick, btn6);
        break;

    case "btn4":
        switchAlgorithm(currentClick, btn1);
        switchAlgorithm(currentClick, btn7);
        switchAlgorithm(currentClick, btn5);
        break;

    case "btn5":
        switchAlgorithm(currentClick, btn2);
        switchAlgorithm(currentClick, btn4);
        switchAlgorithm(currentClick, btn6);
        switchAlgorithm(currentClick, btn8);
        break;

    case "btn6":
        switchAlgorithm(currentClick, btn3);
        switchAlgorithm(currentClick, btn5);
        switchAlgorithm(currentClick, btn9);
        break;

    case "btn7":
        switchAlgorithm(currentClick, btn4);
        switchAlgorithm(currentClick, btn8);
        break;

    case "btn8":
        switchAlgorithm(currentClick, btn7);
        switchAlgorithm(currentClick, btn5);
        switchAlgorithm(currentClick, btn9);
        break;

    case "btn9":
        switchAlgorithm(currentClick, btn6);
        switchAlgorithm(currentClick, btn8);
        break;

    }
    winnerFct();
}


function winnerFct() {
    if (btn1.value == 1 &&
        btn2.value == 2 &&
        btn3.value == 3 &&
        btn4.value == 4 &&
        btn5.value == 5 &&
        btn6.value == 6 &&
        btn7.value == 7 &&
        btn8.value == 8) {
            $(".btn").attr("disabled", true).css("cursor", "auto");
            alert("Well done! You are a WINNER!!!");
    }
}


function switchAlgorithm(b1, b2) {
    if (b2.value == " ") {
        b2.value = b1.value;
        b1.value = " ";
    }
}


function doReset() {
    $("#btnRandom").unbind("click");
    arr = [];
    init();
}


function shuffleArray(myArray) {
    var currentIndex = myArray.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = myArray[currentIndex];
        myArray[currentIndex] = myArray[randomIndex];
        myArray[randomIndex] = temporaryValue;
    }
    return myArray;
}