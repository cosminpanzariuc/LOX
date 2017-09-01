// //Creating custom Pseudo-Class Selector
//    $.extend($.expr[":"], {
//        isRed: function (elem) {
//            return $(elem).hasClass("red");
//        }
//    });
//
//    $("p:isRed").on("click", function() {
//        alert("The paragraph has red color!!!");
//    });

//----------------------------------------------------------------

////Error handling
//function divide() {
//    var numerator = Number(prompt("Enter numerator"));
//    var denominator = Number(prompt("Enter denominator"));
//
//    try {
//        if (denominator == 0) {
//            throw {
//                error: "Divide by zero error",
//                message: "Denominator cannot be zero"
//            };
//        } else {
//            alert("Result = " + (numerator / denominator));
//        }
//    } catch (e) {
//        document.write(e.error + "<br/>");
//        document.write(e.message + "<br/>");
//    }
//}
//divide();

//----------------------------------------------------------------

// /* Closures 1 */
// function greet(whattosay){
//    return function(name){
//        console.log(whattosay + " " + name);
//    }
// }
// var sayHi = greet("Hi");
// sayHi("Tony");

//----------------------------------------------------------------

// /* Closures 2 */
// var incrementClickCount = function(){
//    console.log("aici intra o singura data");
//    var clickCount = 0;
//    return function(){
//         return console.log(clickCount++);
//    }
// }();
// incrementClickCount();
// incrementClickCount();
// incrementClickCount();

//----------------------------------------------------------------

// /* Closures 3 */
// for(var i=1; i<=5; i++){
//    (function(){
//        var j=i;
//        setTimeout(function timer(){
//            console.log(j);
//        }, j*1000);
//    }());
// }

//----------------------------------------------------------------

// /* Closures 4 */
// for(var i=1; i<=5; i++){
//    (function(j){
//        setTimeout(function timer(){
//            console.log(j);
//        }, j*1000);
//    }(i));
// }

//----------------------------------------------------------------

// /* Closures 5 */
//  function buildFunctions() {
//      var arr = [];
//      for (var i = 0; i < 3; i++) {
//         arr.push(
//              function () {
//                  console.log(i);
//              });
//      }
//      return arr;
//  }
//
//  var fs = buildFunctions();
//  fs[0]();
//  fs[1]();
//  fs[2]();


// function buildFunctions() {
//    var arr = [];
//    for (var i = 0; i < 3; i++) {
//       arr.push(
//           (function (j) {
//              return function () {
//                 console.log(j);
//              }
//           }(i)));
//    }
//    return arr;
// }
//
// var fs = buildFunctions();
// fs[0]();
// fs[1]();
// fs[2]();


//----------------------------------------------------------------

// //Properties in JavaScript - Read Only properties, Restrictions
// var myObject = {};
// Object.defineProperty(myObject, "FAVOURITE_NUMBER", {
//    value: 42,
//    writable: true,
//    configurable: true
// });
//
// Object.preventExtensions(myObject);
// //Seal = preventExtensions + configurable=false (for all object's properties)
// //Freeze = Seal + writable=false (for all object's properties)

//----------------------------------------------------------------

//var anotherObject = {
//   get a() {
//       return this._a_;
//   },
//
//    set a(val){
//        this._a_ = val * 2;
//    }
//};
//
//anotherObject.a = 2;
//console.log(anotherObject.a );


//----------------------------------------------------------------

//function Employee(name, age) {
//    var _name = name;
//    var _age = age;
//
//    Object.defineProperty(this, "age", {
//        get: function () {
//            return _age;
//        },
//        set: function (value) {
//            if (value < 1 || value > 100) {
//                alert("Invalid age value!!!");
//            } else {
//                _age = value;
//            }
//        }
//    });
//
//    Object.defineProperty(this, "name", {
//        get: function () {
//            return _name;
//        }
//    });
//}
//
//var employee = new Employee("Cosmin", 29);
//employee.age = 105;
//employee.name = "Albert";
//console.log(employee.name + " " + employee.age);

//----------------------------------------------------------------

////Static Members
//function Circle(radius){
//    this.radius = radius;
//    Circle.PI = 3.141;
//
//    this.CalculateArea = function(){
//        return Circle.PI * this.radius * this.radius; 
//    }
//}
//
//var circle = new Circle(10);
//console.log("Circle area is: " + circle.CalculateArea()); 
//
//
//function Shape(shapeName){
//    this.shapeName = shapeName;
//    Shape.counter = ++Shape.counter || 1; //camp static
//
//    Shape.ShowCount = function(){//metoda statica
//        return "We have created " + Shape.counter + " shapes.";
//    }
//}
//
//var shape1 = new Shape("Circle");
//var shape2 = new Shape("Rectangle");
//var shape3 = new Shape("Triangle");
//var shape4 = new Shape("Square");
//console.log(Shape.ShowCount()); 

//----------------------------------------------------------------

////Abstract classes
//var Shape = function(){
//    throw new Error("Cannot create an instance of an abstract class!!");
//}
//Shape.prototype.draw = function(){
//    return "Drawing " + this.shapeName;
//}
//
//var Circle = function(shapeName){
//    this.shapeName = shapeName;
//}
//Circle.prototype = Object.create(Shape.prototype);
//
//var circle = new Circle("Circle");
//console.log(circle.draw());
//console.log(circle instanceof Circle);
//console.log(circle instanceof Shape);
//var test = new Shape();

//----------------------------------------------------------------

////Polymorphism
//var Shape = function(){ }
//Shape.prototype.draw = function(){
//    return "I am a generic shape!";
//}
//
//var Circle = function(){ }
//Circle.prototype = Object.create(Shape.prototype);
//Circle.prototype.draw = function(){
//    return "I am a Circle!";
//}
//
//var Square = function(){ }
//Square.prototype = Object.create(Shape.prototype);
//Square.prototype.draw = function(){
//    return "I am a Square!";
//}
//
//var Triangle = function(){ }
//Triangle.prototype = Object.create(Shape.prototype);
//
//var shapesArr = [new Shape(), new Circle(), new Square(), new Triangle()];
//shapesArr.forEach(function (shape){
//    console.log(shape.draw());
//});

//----------------------------------------------------------------

// //Explicit Mixins
// function mixin(sourceObj, targetObj) {
//    for (var key in sourceObj) {
//        if (!(key in targetObj)) {
//            targetObj[key] = sourceObj[key]
//        }
//    }
//    return targetObj;
// }
//
// var vehicle = {
//    engines: 1,
//    ignition: function () {
//        console.log("Turning on my engine!");
//    },
//    drive: function () {
//        this.ignition();
//        console.log("Steering and moving forward!");
//    }
// };
//
// var car = mixin(vehicle, {
//    wheels: 4,
//    drive: function () {
//        vehicle.drive.call(this);
//        console.log("Rolling on all " + this.wheels + " wheels!");
//    }
// });
//
// console.log(car.drive());

//----------------------------------------------------------------

// //Pseudoclassical inheritance
// var extendObj = function(childObj, parentObj) {
//    // childObj.prototype = parentObj.prototype; // Not OK
//    childObj.prototype = Object.create(parentObj.prototype); //- OK
//
//    // var tmpObj = function () {};
//    // tmpObj.prototype = parentObj.prototype;
//    // childObj.prototype = new tmpObj();
//    // childObj.prototype.constructor = childObj;
// };
//
// var Human = function() {};
// Human.prototype = {
//    name: '',
//    gender: '',
//    planetOfBirth: 'Earth',
//    sayGender: function () {
//        console.log(this.name + ' says my gender is ' + this.gender);
//    },
//    sayPlanet: function () {
//        console.log(this.name + ' was born on ' + this.planetOfBirth);
//    }
// };
//
// var Male = function (name) {
//    this.gender = 'Male';
//    this.name = name;
// };
// extendObj(Male, Human);
//
// var Female = function (name) {
//    this.gender = 'Female';
//    this.name = name;
// };
// extendObj(Female, Human);
//
// var david = new Male('David');
// var jane = new Female('Jane');
//
// david.sayGender(); // David says my gender is Male
// jane.sayGender(); // Jane says my gender is Female
//
// Male.prototype.planetOfBirth = 'Mars';
// david.sayPlanet(); // David was born on Mars
// jane.sayPlanet(); // Jane was born on Earth

//----------------------------------------------------------------

// //Inheritance
// var Employee = function(name){
//    this.name = name;
// };
// Employee.prototype.getName = function(){
//    return this.name;
// };
//
// var PermanentEmployee = function(salary){
//    this.salary = salary;
// };
//
// var employee = new Employee("Cosmin");
// PermanentEmployee.prototype = employee;
// // PermanentEmployee.prototype = Object.create(Employee.prototype);
//
// var pe = new PermanentEmployee(5000);
// console.log(pe.getName() + " " + pe.salary);
// console.log("pe instanceof Employee - ", pe instanceof Employee);
// console.log("pe instanceof PermanentEmployee - ", pe instanceof PermanentEmployee);
// console.log("employee hasOwnProperty name - ", employee.hasOwnProperty("name"));
// console.log("employee hasOwnProperty salary - ", employee.hasOwnProperty("salary"));
// console.log("pe hasOwnProperty name  - ", pe.hasOwnProperty("name"));
// console.log("pe hasOwnProperty salary - ", pe.hasOwnProperty("salary"));

//----------------------------------------------------------------

// //The Inheritance Pattern
// function Beverage(name, temperature){
//    this.name = name;
//    this.temperature = temperature;
// }
// Beverage.prototype.drink = function(){
//    console.log("I'm drinking " + this.temperature + " " + this.name);
// };
//
// function Cofee(type){
//     Beverage.call(this, "coFee", "HOOOOOOOOOT");
//     this.type = type;
// }
// Cofee.prototype = Object.create(Beverage.prototype);
// Cofee.prototype.sip = function(){
//    console.log("Sipping some awesome " + this.temperature + " " + this.type + " " + this.name);
// };
//
// var water = new Beverage("water", "COLD");
// water.drink();
// var cofee = new Cofee("bold dark roast");
// cofee.drink();
// cofee.sip();
// console.log(Cofee.prototype.isPrototypeOf(cofee));
// console.log(Object.getPrototypeOf(cofee) === Cofee.prototype);

//----------------------------------------------------------------

// //Mental Models Compared - OO Style
// function Foo(who){
//    this.me = who;
// }
// Foo.prototype.identify = function(){
//    return "I am " + this.me;
// };
//
// function Bar(who){
//    Foo.call(this, who);
// }
// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.speak = function(){
//    console.log("Hello, " + this.identify() + ".");
// };
//
// var b1 = new Bar("b1");
// var b2 = new Bar("b2");
// b1.speak();
// b2.speak();

// //Mental Models Compared - OLOO Style
// var Foo = {
//    init: function(who){
//        this.me = who;
//    },
//    identify: function(){
//        return "I am " + this.me;
//    }
// };
//
// var Bar = Object.create(Foo);
// Bar.speak = function(){
//    console.log("Hello, " + this.identify() + ".");
// };
//
// var b1 = Object.create(Bar);
// var b2 = Object.create(Bar);
// b1.init("b1");
// b2.init("b2");
// b1.speak();
// b2.speak();

//----------------------------------------------------------------

// //Mixins jQuery
// function Person(name) {
//    this.name = name;
// }
// function Dog(name) {
//    this.name = name;
// }
// var speaker = {
//    speak: function () {
//        return this.name + " is speaking!"
//    }
// };
// var mover = {
//    walk: function () {
//        return this.name + " is walking!"
//    },
//    run: function () {
//        return this.name + " is running!"
//    }
// };
// var math = {
//    multiply: function () {
//        return this.name + " is doing Math!"
//    }
// };
// $.extend(Person.prototype, speaker, mover, math);
// $.extend(Dog.prototype, speaker, mover);
// var john = new Person("John Doe");
// var fido = new Dog("Fido");

//----------------------------------------------------------------

////Module Pattern
// var dom = (function(){
//    var _counter = 0;
//    return{
//        generateId: function(){
//            return "customId" + _counter++;
//        },
//        create: function(tagName, id){
//            var el = document.createElement(tagName);
//            el.id = id || this.generateId();
//            return el;
//        }
//    }
// }());
//
// var dom = (function(){
//    var _counter = 0;
//    function generateId(){
//        return "customId" + _counter++;
//    }
//    function create(tagName, id){
//        var el = document.createElement(tagName);
//        el.id = id || generateId();
//        return el;
//    }
//    return{
//        generteId: generateId,
//        create: create
//    }
// }());

//----------------------------------------------------------------

// var Zoo = (function() {
//  var getBarkStyle = function(isHowler) {
//    return isHowler ? 'woooooow!': 'woof, woof!';
//  };
//
//  var Dog = function(name, breed) {
//    this.bark = function() {
//      return name + ': ' + getBarkStyle(breed === 'husky');
//    };
//  };
//
//  var Wolf = function(name) {
//    this.bark = function() {
//      return name + ': ' + getBarkStyle(true);
//    };
//  };
//
//  return {
//    Dog: Dog,
//    Wolf: Wolf
//  };
// })();
//
// var myDog = new Zoo.Dog('Sherlock', 'beagle');
// console.log(myDog.bark()); // Sherlock: woof, woof!
//
// var myWolf = new Zoo.Wolf('Werewolf');
// console.log(myWolf.bark()); // Werewolf: woooooow!

//----------------------------------------------------------------

//Singleton Pattern
//var Singleton = (function () {
//    var instance;
// 
//    function createInstance() {
//        var object = new Object("I am the instance");
//        return object;
//    }
// 
//    return {
//        getInstance: function () {
//            if (!instance) {
//                instance = createInstance();
//            }
//            return instance;
//        }
//    };
//})();
// 
//function run() {
// 
//    var instance1 = Singleton.getInstance();
//    var instance2 = Singleton.getInstance();
// 
//    alert("Same instance? " + (instance1 === instance2));  
//}
//run();

//----------------------------------------------------------------

////Factory Pattern
//function makeGladiator(name, attack, defense, hitPoints){
//    return{
//        name: name,
//        attack: attack,
//        defense: defense,
//        hitPoints: hitPoints,
//        sayName: function(){
//            console.log('Hello, my name is ' + this.name);
//        }
//    }
//}
//var jesse = makeGladiator("Jesse", 10, 12, 10);
//var john = makeGladiator("John", 12, 10, 12);
//
//function makeGladiator(name, attack, defense, hitPoints) {
//    var temp = {};
//    temp.name = name;
//    temp.attack = attack;
//    temp.defense = defense;
//    temp.hitPoints = hitPoints;
//    temp.sayName = function () {
//        console.log('Hello, my name is ' + this.name);
//    }
//    return temp;
//}
//var jesse = makeGladiator("Jesse", 10, 12, 10);
//var john = makeGladiator("John", 12, 10, 12);

//----------------------------------------------------------------

////Constructor Pattern / Dynamic Prototype (inner method)
//function Gladiator(name, attack, defense, hitPoints) {
//    this.name = name;
//    this.attack = attack;
//    this.defense = defense;
//    this.hitPoints = hitPoints;
//    if(typeof this.sayName !== "function"){
//        Gladiator.prototype.sayName = function () {
//            console.log('Hello, my name is ' + this.name);
//        }
//    }
//}
//var jesse = new Gladiator("Jesse", 10, 12, 10);
//var john = new Gladiator("John", 12, 10, 12);

//----------------------------------------------------------------

// //Call, Bind, Apply
// var person = {
//    firstname: 'John',
//    lastname: 'Doe',
//    getFullName: function() {
//        var fullname = this.firstname + ' ' + this.lastname;
//        return fullname;
//    }
// };
//
// var logName = function(lang1, lang2) {
//    console.log('Logged: ' + this.getFullName());
//    console.log('Arguments: ' + lang1 + ' ' + lang2);
//    console.log('-----------');
// };
//
// logName.call(person, 'en', 'fr');
// logName.apply(person, ['en', 'gr']);
// var logPersonName = logName.bind(person);
// logPersonName('en', 'ro');
//
//
//
// // function borrowing
// var person2 = {
//    firstname: 'Jane',
//    lastname: 'Doe'
// }
// console.log(person.getFullName.apply(person2));
//
//
//
// // function currying
// function multiply(a, b) {
//    return a * b;
// }
//
// var multipleByTwo = multiply.bind(this, 2);
// console.log(multipleByTwo(4));
//
// var multipleByThree = multiply.bind(this, 3);
// console.log(multipleByThree(4));

//----------------------------------------------------------------

// //Functional Programming
// var arr1 = [1, 2, 3];
// console.log(arr1);
// function mapForEach(arr, fn){
//    var newArr = [];
//    for(var i=0; i < arr.length; i++){
//        newArr.push(fn(arr[i]));
//    }
//    return newArr;
// }
//
// var arr2 = mapForEach(arr1, function(item){
//    return item * 2;
// });
// console.log(arr2);
//
// var arr3 = mapForEach(arr1, function(item){
//    return item > 2;
// });
// console.log(arr3);
//
// var checkLimit = function(limiter, item){
//    return item > limiter;
// }
// var arr4 = mapForEach(arr1, checkLimit.bind(this, 2)); //limiter=1
// console.log(arr4);
//
// var checkLimitSimplified = function(limiter){
//    return function(limiter, item){
//        return item > limiter;
//    }.bind(this, limiter);
// };
// var arr5 = mapForEach(arr1, checkLimitSimplified(2)); //limiter=1
// console.log(arr5);


//Function chaining
// var obj = function(){
//     this.i = 0;
//     this.add = function(i){
//         this.i += i;
//     };
//     this.substract = function(i){
//         this.i -= i;
//     };
//     this.print = function(){
//        console.log(this.i);
//     };
// };
// var x = new obj();
// x.add(3).substract(2).print();


// var obj = function(){
//     var i = 0;
//     var add = function(j){
//        i += j;
//         return this;
//     };
//     var substract = function(j){
//         i -= j;
//         return this;
//     };
//     var print = function(){
//         console.log(i);
//     };
//
//     return{add: add, substract: substract, print: print}
// };
// var x = obj();
// x.add(3).substract(2).print();