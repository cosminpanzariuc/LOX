var myApp = angular.module("myApp", []);

angular.module('myApp').config(['$controllerProvider', function ($controllerProvider) {
    $controllerProvider.allowGlobals();
   }]);

myApp.factory("Elevi", function () {
    var Elevi = {};
    Elevi.lista = [
        {
            nume: "Popescu",
            prenume: "Ion"
        },
        {
            nume: "Marinescu",
            prenume: "Tiberiu"
        },
        {
            nume: "Patriche",
            prenume: "Andreea"
        },
        {
            nume: "Palaghe",
            prenume: "Larisa"
        },
        {
            nume: "Fruth",
            prenume: "Andreas"
        },
        {
            nume: "Mihailovici",
            prenume: "Ciprian"
        },
        {
            nume: "Rosca",
            prenume: "Pandele"
        },
        {
            nume: "Dumitrescu",
            prenume: "Anisoara"
        },
        {
            nume: "Postolache",
            prenume: "Ana-Maria"
        },
        {
            nume: "Fartatescu",
            prenume: "Sorin"
        }
    ];
    return Elevi;
})

function EleviCtrl($scope, Elevi) {
    $scope.elevi = Elevi;
    $scope.adaugaElev = function () {
        Elevi.lista.push({
            nume: $scope.elev_nou.nume,
            prenume: $scope.elev_nou.prenume
        });
        document.getElementById("fillNume").value = "";
        document.getElementById("fillPrenume").value = "";
    }
}


myApp.directive("intra", function () {
    return function (scope, param, attrs) {
        param.bind("mouseenter", function () {
            param.addClass(attrs.intra);
        })
    }
})

myApp.directive("iese", function () {
    return function (scope, param, attrs) {
        param.bind("mouseleave", function () {
            param.removeClass(attrs.intra);
        })
    }
})