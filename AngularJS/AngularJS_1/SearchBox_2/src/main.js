var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function () {
  var Avengers = {};
  Avengers.cast = 
	  [
			{name:'Tommy Anderson', city:'New York'}, 
			{name:'Andreas Fruth', city:'Munchen'}, 
			{name:'Ralph Russo', city:'Barcelona'}, 
			{name:'Stephanie Anais', city:'Paris'}, 
			{name:'George Nedea', city:'Bucharest'},
			{name:'George Avram', city:'Bucharest'}
	  ];
  return Avengers;
  
});

function AvengersCtrl($scope, Avengers) 
{
		$scope.avengers = Avengers;
}