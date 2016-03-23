var myApp = angular.module("myApp", []);

function FirstCtrl($scope) { //var myApp = angular.module("myApp", []).controller("FirstCtrl", function($scope){...} - if doesn't allow globals
    $scope.another = {
        text: "Say Hello!",
    };
    $scope.$watch("my.text", function (value) {
        if(value === "Hello") {
          alert("Bravooo baaa!!!");
        }
      });
}


//--------------------------------------------------------------------

myApp.factory("Sharing", function () {
    return {
        info: "I'm data from a service"
    }
});

function SecondCtrl($scope, Sharing) {
    $scope.sharing = Sharing;
}

function ThirdCtrl($scope, Sharing) {
    $scope.sharing = Sharing;
    $scope.reversedMessage = function (param) {
        return param.split("").reverse().join("");
    }
}


angular.module('myApp').config(['$controllerProvider', function($controllerProvider) {
      $controllerProvider.allowGlobals();
   }]);