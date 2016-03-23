var app = angular.module("superApp", []);

app.directive("superhero", function () {
    return {
        restrict: "E",
        scope: {},

        controller: function ($scope) {
            $scope.abilities = [],

            this.addStrength = function () {
                $scope.abilities.push("strength");
            }

            this.addSpeed = function () {
                $scope.abilities.push("speed");
            }

            this.addFlight = function () {
                $scope.abilities.push("flight");
            }
        },

        link: function (scope, element, attrs) {
            element.bind("mouseenter", function () {
                console.log(scope.abilities);
                element.addClass(attrs.intra);
            })
                element.bind("mouseleave", function(){
                element.removeClass(attrs.intra);
            })
        }
    }
})

app.directive("strength", function () {
    return {
        require: "superhero",
        link: function (scope, element, attrs, superheroCtrl) {
            superheroCtrl.addStrength();
        }
    }
})

app.directive("speed", function () {
    return {
        require: "superhero",
        link: function (scope, element, attrs, superheroCtrl) {
            superheroCtrl.addSpeed();
        }
    }
})

app.directive("flight", function () {
    return {
        require: "superhero",
        link: function (scope, element, attrs, superheroCtrl) {
            superheroCtrl.addFlight();
        }
    }
})


//----------------------------------------------------------------------------------------------



app.directive("country", function () {
    return {
        restrict: "E",
        controller: function () {
            this.makeAnnouncement = function (message) {
                console.log("Country says: " + message);
            };
        }
    };
});

app.directive("state", function () {
    return {
        restrict: "E",
        controller: function () {
            this.makeLaw = function (law) {
                console.log("State says: " + law);
            }
        }
    };
});


app.directive("city", function () {
    return {
        restrict: "E",
        require: ["^country", "^state"],
        link: function (scope, element, attrs, arrayCtrls) {
            arrayCtrls[0].makeAnnouncement("This city rocks!!!");
            arrayCtrls[1].makeLaw("This law rocks!!!");
        }
    };
});


