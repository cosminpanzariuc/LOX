var myInput;
var myButton

$(document).ready(function () {
    myInput = document.getElementById("myInput");
    myButton = document.getElementById("myButton")
    myResult = document.getElementById("result");
    myButton.onclick = reverseFct;
});

function reverseFct(){
    myInput = myInput.value;
    var reversed = 0;
    while(myInput > 0)
    {
        var rest = myInput % 10;
        reversed = reversed*10 + rest;
        myInput = parseInt(myInput/10)
    }
        myResult.innerHTML += reversed;
}