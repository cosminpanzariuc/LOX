var app = angular.module("behaviorApp", []);

app.directive("enter", function () {
    return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            console.log("I'm inside of div!");
            /* element.addClass("customClass"); */
            element.addClass(attrs.enter);
        })
    }
})


app.directive("leave", function () {
            return function (scope, element, attrs) {
                element.bind("mouseout", function () {
                        console.log("I'm
                            outside of div!");
                            /* element.removeClass("customClass"); */
                            element.removeClass(attrs.enter);
                        })
                }
            })

        app.directive("click", function () {
            return function (scope, element) {
                element.bind("mousedown", function () {
                    console.log("I have been clicked!!!")
                })
            }
        })