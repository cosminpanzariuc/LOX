var player = true;
var currentPlayer;
var howManyClicks = 0;
//var winnerArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

$(document).ready(init);

function init() {
    for (var i = 1; i <= 9; i++) {
        $("#btn" + i).bind("click", clickBtn);
    }
    $("#btnReset").bind("click", doReset);
}

function clickBtn(e) {
    var currentElement = e.currentTarget;
    var currentElementID = currentElement.id;
    var currentElementIndex = currentElementID.substr(currentElementID.length - 1, 1);

    if (player) {
        currentPlayer = document.getElementById("btn" + currentElementIndex).value = "X"
        player = false;
    } else {
        currentPlayer = document.getElementById("btn" + currentElementIndex).value = "0"
        player = true;
    }

    document.getElementById("btn" + currentElementIndex).disabled = true;
    document.getElementById("btn" + currentElementIndex).style.cursor = "auto";
    howManyClicks++;
    winner();
}

function winner() {
    if (document.getElementById("btn1").value == "X" &&
        document.getElementById("btn2").value == "X" &&
        document.getElementById("btn3").value == "X" ||
        document.getElementById("btn4").value == "X" &&
        document.getElementById("btn5").value == "X" &&
        document.getElementById("btn6").value == "X" ||
        document.getElementById("btn7").value == "X" &&
        document.getElementById("btn8").value == "X" &&
        document.getElementById("btn9").value == "X" ||
        document.getElementById("btn1").value == "X" &&
        document.getElementById("btn4").value == "X" &&
        document.getElementById("btn7").value == "X" ||
        document.getElementById("btn2").value == "X" &&
        document.getElementById("btn5").value == "X" &&
        document.getElementById("btn8").value == "X" ||
        document.getElementById("btn3").value == "X" &&
        document.getElementById("btn6").value == "X" &&
        document.getElementById("btn9").value == "X" ||
        document.getElementById("btn1").value == "X" &&
        document.getElementById("btn5").value == "X" &&
        document.getElementById("btn9").value == "X" ||
        document.getElementById("btn3").value == "X" &&
        document.getElementById("btn5").value == "X" &&
        document.getElementById("btn7").value == "X"
    ) {
        alert("The winner is X");
        for (var i = 1; i <= 9; i++) {
            document.getElementById("btn" + i).disabled = true;
            document.getElementById("btn" + i).style.cursor = "auto"
            $("#btn" + i).unbind("click");
        }
    } else if (document.getElementById("btn1").value == "0" &&
        document.getElementById("btn2").value == "0" &&
        document.getElementById("btn3").value == "0" ||
        document.getElementById("btn4").value == "0" &&
        document.getElementById("btn5").value == "0" &&
        document.getElementById("btn6").value == "0" ||
        document.getElementById("btn7").value == "0" &&
        document.getElementById("btn8").value == "0" &&
        document.getElementById("btn9").value == "0" ||
        document.getElementById("btn1").value == "0" &&
        document.getElementById("btn4").value == "0" &&
        document.getElementById("btn7").value == "0" ||
        document.getElementById("btn2").value == "0" &&
        document.getElementById("btn5").value == "0" &&
        document.getElementById("btn8").value == "0" ||
        document.getElementById("btn3").value == "0" &&
        document.getElementById("btn6").value == "0" &&
        document.getElementById("btn9").value == "0" ||
        document.getElementById("btn1").value == "0" &&
        document.getElementById("btn5").value == "0" &&
        document.getElementById("btn9").value == "0" ||
        document.getElementById("btn3").value == "0" &&
        document.getElementById("btn5").value == "0" &&
        document.getElementById("btn7").value == "0"
    ) {
        alert("The winner is 0");
        for (var i = 1; i <= 9; i++) {
            document.getElementById("btn" + i).disabled = true;
            document.getElementById("btn" + i).style.cursor = "auto"
            $("#btn" + i).unbind("click");
        }

    } else {
        if (howManyClicks == 9)
            alert("The result is a tie!");

    }
}


function doReset() {
    $("#btnReset").unbind("click");
    for (var i = 1; i <= 9; i++) {
        document.getElementById("btn" + i).value = " ";
        document.getElementById("btn" + i).disabled = false;
        document.getElementById("btn" + i).style.cursor = "pointer"
        $("#btn" + i).unbind("click");
    }
    player = true;
    howManyClicks = 0;
    init();
}