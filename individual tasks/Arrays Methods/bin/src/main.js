var calculator = {
    calculate: function (x, y, fn) {
        return fn(x, y);
    }
};

var sum = function (x, y) {
    return x + y;
};

var diff = function(x, y){
    return x - y;
}

var sumResult = calculator.calculate(8, 3, sum);
var diffResult = calculator.calculate(8, 3, diff);
console.log("sumResult=" + sumResult, "diffResult=" + diffResult);


//ORIGINAL ARRAY
var fruit = ["apples", "oranges", "bananas", "grapes"];

//EVERY
function isString(value, index, array){
    return typeof value === "string";
}
console.log(fruit.every(isString)); //returns TRUE if all the array elements pass the test, and it returns FALSE in any other case


//SOME
function startWithG(value, index, array){
    return value[0] === "g"
}
console.log(fruit.some(startWithG)); //returns TRUE if at least one of the array elements pass the test, and it returns FALSE if none of the array elements pass the test


//FILTER
function startsWithAB(value, index, array){
    return value[0] === "a" || value[0] === "b"
   }
console.log(fruit.filter(startsWithAB)); //return a new array (without modifying the original one) with all the elements that pass the test


//FOREACH
function doSomething(value, index, array){
    alert(value);
}
fruit.forEach(doSomething);// it executes a function for each element of the array


//MAP
function iLike(value, index, array){
    return "i like " + value;
}
var result = fruit.map(iLike); //it executes a function for each element of the array AND retruns a new array with all the elements that had been modified - the new value;
console.log(result);