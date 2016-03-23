var myApp = angular.module('myApp', []);

myApp.factory('Data', function () {
  return { message: "I'm data from a service" }
});

function FirstCtrl($scope, Data) {
  $scope.data = Data;
}

myApp.filter('reverse', function () {
  return function (text) {
    return text.split("").reverse().join("");
  }
});


function SecondCtrl($scope, Data) {
  $scope.data = Data;

  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  };
} 