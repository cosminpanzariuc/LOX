var app = angular.module("myApp", ['ngRoute']);
app.controller("AppController", function ($scope) {
    this.sayHi = function () {
        alert("Hello Worldaaa!");
    }
    this.buttonTitle = "I'm a button! :)"
        //return $scope.AppController = this;

    $scope.$watch("my.model", function (valoare) {
        if (valoare === "Hello")
            alert("Bravooo baaa!!!");
    })
});





app.config(function ($routeProvider) {
    $routeProvider
//        .when('/:message', {
//            templateUrl: "test.html",
//            controller: "TestCtrl"
//        })
        .when('/', {
            template: "<h1>This is my app!</h1>"
        })
        .when('/pizza', {
            template: "<h1 style='color:blue'>YUM!!!</h1>"
        })
        .when('/youtube', {
            redirectTo: "xxxxYOUTBExxxxxx"
        })
        .otherwise({
            templateUrl: "<h1 style='color:red'>This doesn't exist!</h1>"
        })
});

app.controller("TestCtrl", function ($scope /*,$routeParams */) {
    $scope.model = {
//        message: $routeParams.message
        message: "This is my app!"
    }  
});