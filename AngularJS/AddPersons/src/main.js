$(document).on("mousemove", readCoord);



function readCoord(e){
    resultX = document.getElementById("x_value");
    resultY = document.getElementById("y_value");
    resultX.innerHTML = "X coord is: " + e.clientX;
    resultY.innerHTML = "Y coord is: " + e.clientY;
}

var myApp = angular.module("myApp", ['ngRoute']);
myApp.controller("SimpleController", SimpleCtrl); //se foloseste pentru a permite globalele - similar ca functionalitate cu sintaxa:

//angular.module('myApp').config(['$controllerProvider', function ($controllerProvider) {
//    $controllerProvider.allowGlobals();
//   }]);


function SimpleCtrl($scope, $rootScope) { //atunci cand se utilizeaza "ng-controller as ..." (alias) - "$scope" se va transforma in "this" si se poate scrie ca functie simpla ci nu injectata (functie constructor) - iar in modul "view" se va utiliza aliasul precedat de "." si de numele modelului initial; 
/*$scope*/ this.lista = [
        {
            nume: "Popescu Ion",
            varsta: 47,
            oras: "Bucuresti"
        },
        {
            nume: "Toma Marius",
            varsta: 30,
            oras: "Suceava"
        }, {
            nume: "Palaghe Larisa",
            varsta: 24,
            oras: "Timisoara"
        },
        {
            nume: "Dumitrache Elena",
            varsta: 30,
            oras: "Galati"
        },
        {
            nume: "Ivan Andreea",
            varsta: 27,
            oras: "Targoviste"
        },
        {
            nume: "Pelin Andreea",
            varsta: 24,
            oras: "Baia Mare"
        },
        {
            nume: "Lung Sabina",
            varsta: 33,
            oras: "Bucuresti"
        },
        {
            nume: "Marcu Cornel",
            varsta: 30,
            oras: "Suceava"
        },
        {
            nume: "Tudor Andrei",
            varsta: 60,
            oras: "Suceava"
        },
        {
            nume: "Sterea Emanuel",
            varsta: 22,
            oras: "Galati"
        }
    ];

     /*$scope*/ this.strict = false; // proprietati ce sunt accesate din "view"
     /*$scope*/ this.userLimit = /*$scope*/ this.lista.length;
     /*$scope*/ this.sortProperty = "nume";
     /*$scope*/ this.reverseSort = false;
                this.selectedRow = false;
                   
     $rootScope.anotherGlobal = "This is global variable from the first controller";
     this.looseFocus = function () {
        $scope.$watch('ctrl.newEntry.nume', function (value) {
            if (value == "Cosmin"){
                defer.resolve("cainele");
            }   
        });
    };


//    $scope.addEntry = function () {
//        $scope.lista.push($scope.newEntry);
//        $scope.newEntry = "";
//        $scope.userLimit = /*$scope*/ this.lista.length;
//    };
}

SimpleCtrl.prototype.addEntry = function () { //pentru optimizare, se pot adauga metode la functia constructor
    this.lista.push(this.newEntry);
    this.userLimit++;
    alert("Ai adaugat utlizatorul " + this.newEntry.nume + " in varsta de " + this.newEntry.varsta + " ani" + " din " + this.newEntry.oras + ".");
    this.newEntry = "";
}

SimpleCtrl.prototype.removeElement = function(row){
     this.lista.splice(this.lista.indexOf(row), 1);
     this.userLimit--;
     alert("Ai sters contul utilizatorului " + row.nume + " in varsta de " + row.varsta + " ani" + " din " + row.oras + ".");
}



SimpleCtrl.prototype.sortByCriteria = function (prop) { //pentru optimizare, se pot adauga metode la functia constructor
    this.sortProperty = prop;
    this.reverseSort = !this.reverseSort;
}

SimpleCtrl.prototype.pasted = function(){
    alert("Rusineeeee!!!! Ai folosit copy-paste!!!");
}


myApp.directive("hover", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("mouseenter", function () {
                element.addClass(attrs.intra);
//                console.log(element.text());
            })
            element.bind("mouseleave", function () {
                element.removeClass(attrs.intra);
                element.removeClass(attrs.dontcopy);
            })
        }
    }
})


myApp.directive("click", ['$timeout', function ($timeout) { //injetare $timeout intr-o directiva
    return {
        restrict: "A",
        link: function (scope, element, attrs, selectedRow) {
            element.bind("click", function () {
                if (!selectedRow) {
                    selectedRow = true;
                    element.addClass(attrs.selected);
                    $timeout(function () {
                        console.log("Delay de 1 secunda");
                    }, 1000)

                } else {
                    selectedRow = false;
                    element.removeClass(attrs.selected);
                    element.removeClass(attrs.intra);
                }
            });
        }
    }
}]);



myApp.directive("stopcutcopy", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind('cut copy', function (event) {
                element.addClass(attrs.dontcopy);
                alert("Nu ai voie sa folosesti copy-paste!!!!");
                event.preventDefault();
                
            });
        }
    };
});








myApp.controller("RouteController", RouteCtrl)
     .config(['$routeProvider', function($routeProvider){
        $routeProvider.
        when('/', {
            template: '<h1>Welcome to my HOME PAGE!</h1>',
//            controller: 'RouteController'
            
        }).
        when('/firstPage', {
            templateUrl: 'firstPage.html'
        }).
        when('/secondPage', {
            templateUrl: 'secondPage.html'
        }).
        when('/thirdPage', {
            templateUrl: 'thirdPage.html',
        }).
        otherwise({
            redirectTo: '/',
        });
     }])

.run(function($rootScope){
    $rootScope.globalVar = "This is global variable from the second controller"
});

var defer;
function RouteCtrl($scope, $q){
    defer = $q.defer();
    defer.promise
        .then(function(pet){
            alert("Animalul meu preferat este " + pet);
        return "pisica"
    })  .then(function(pet){
            alert("Animalul meu preferat este " + pet);
        return "calul"
    })  .then(function(pet){
            alert("Animalul meu preferat este " + pet);
    })
}