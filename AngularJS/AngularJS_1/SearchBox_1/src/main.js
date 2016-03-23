var demoApp = angular.module('myapp', []);
demoApp.controller("myctrl", function($scope)
{
    $scope.friends = [
                        {name:'Tommy Anderson', city:'New York'}, 
                        {name:'Andreas Fruth', city:'Munchen'}, 
                        {name:'Ralph Russo', city:'Barcelona'}, 
                        {name:'Stephanie Anais', city:'Paris'}, 
                        {name:'George Nedea', city:'Bucharest'},
                        {name:'George Avram', city:'Bucharest'}
                    ];
    
    
    $scope.addFriend = function()
    {
        $scope.friends.push({name: $scope.newFriend.name,city: $scope.newFriend.city});
        document.getElementById("fill_name").value = "";
        document.getElementById("fill_city").value = "";
    }   
});










