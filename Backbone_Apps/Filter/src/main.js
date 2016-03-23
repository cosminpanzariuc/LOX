var items = new Items([
    {
        materie: "Matematica",
        profesor: "Radutac Eva",
        importanta: 8
    },
    {
        materie: "Limba Engleza",
        profesor: "Constantinescu Elena",
        importanta: 10
    },
    {
        materie: "Chimie",
        profesor: "Milotai Camelia",
        importanta: 7
    },
    {
        materie: "Cultura Civica",
        profesor: "Rusu Alin",
        importanta: 5
    },
    {
        materie: "Educatie fizica",
        profesor: "Doicu Emanuel",
        importanta: 9
    },
    {
        materie: "Contabilitate",
        profesor: "Coman Rodica",
        importanta: 8
    },
    {
        materie: "Limba Franceza",
        profesor: "Clementina Dragnea",
        importanta: 9
    },
    {
        materie: "Geografie",
        profesor: "Crivatu Cristina",
        importanta: 6
    },
    {
        materie: "Informatica",
        profesor: "Fartatescu Sorin",
        importanta: 10
    }
    ]);


var itemsView = new ItemsView({collection: items});
$("body").append(itemsView.render().$el);  

    





